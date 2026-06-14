import { sql, isDbConfigured } from "@/lib/db";
import { encrypt, decrypt } from "@/lib/encryption";
import type { AdviesResultaat } from "@/lib/advies";

type LeadRecord = {
  voornaam?: string;
  email?: string;
  telefoon?: string;
  postcode?: string;
  huisnummer?: string;
  woningtype?: string;
  adviesType?: string;
  advies?: AdviesResultaat;
  ipHash?: string;
  verifyToken?: string;
};

/** Een geverifieerde lead, ontsleuteld, zoals teruggegeven door verifyLead. */
export type VerifiedLead = {
  voornaam: string;
  email: string;
  telefoon: string | null;
  postcode: string | null;
  huisnummer: string | null;
  woningtype: string | null;
};

/**
 * Telt hoeveel leads er al van dit IP-adres (gehasht) zijn opgeslagen.
 * Gebruikt om maximaal 2 aanvragen per IP toe te staan. Zonder database
 * geconfigureerd geven we 0 terug zodat de flow niet breekt.
 */
export async function countLeadsByIpHash(ipHash: string): Promise<number> {
  if (!isDbConfigured() || !ipHash) {
    return 0;
  }
  const result = await sql`select count(*)::int as n from leads where ip_hash = ${ipHash}`;
  return result.rows[0]?.n ?? 0;
}

/**
 * Slaat een lead versleuteld op in de database. Naam, e-mailadres en
 * telefoonnummer worden met AES-256-GCM versleuteld voordat ze worden
 * opgeslagen. Als er geen database is geconfigureerd, wordt dit
 * overgeslagen zodat het verzenden van leads via e-mail blijft werken.
 */
export async function saveLead(lead: LeadRecord): Promise<void> {
  if (!isDbConfigured()) {
    console.warn("POSTGRES_URL niet ingesteld, lead wordt niet opgeslagen in database");
    return;
  }

  const nameEncrypted = encrypt(lead.voornaam ?? "");
  const emailEncrypted = encrypt(lead.email ?? "");
  const phoneEncrypted = lead.telefoon ? encrypt(lead.telefoon) : null;

  await sql`
    insert into leads (
      name_encrypted,
      email_encrypted,
      phone_encrypted,
      postcode,
      huisnummer,
      woningtype,
      advies_type,
      advies,
      ip_hash,
      verify_token
    ) values (
      ${nameEncrypted},
      ${emailEncrypted},
      ${phoneEncrypted},
      ${lead.postcode ?? null},
      ${lead.huisnummer ?? null},
      ${lead.woningtype ?? null},
      ${lead.adviesType ?? null},
      ${lead.advies ? JSON.stringify(lead.advies) : null},
      ${lead.ipHash ?? null},
      ${lead.verifyToken ?? null}
    )
  `;
}

/**
 * Markeert de lead met dit verificatietoken als geverifieerd (double opt-in)
 * en geeft de ontsleutelde leadgegevens terug, zodat de notificatie naar
 * info@ pas na bevestiging verstuurd wordt. Geeft null als het token niet
 * bestaat of de lead al geverifieerd is.
 */
export async function verifyLead(token: string): Promise<VerifiedLead | null> {
  if (!isDbConfigured() || !token) {
    return null;
  }

  const result = await sql`
    update leads
    set verified = true, verify_token = null
    where verify_token = ${token} and verified = false
    returning name_encrypted, email_encrypted, phone_encrypted, postcode, huisnummer, woningtype
  `;

  const row = result.rows[0];
  if (!row) {
    return null;
  }

  return {
    voornaam: decrypt(row.name_encrypted as string),
    email: decrypt(row.email_encrypted as string),
    telefoon: row.phone_encrypted ? decrypt(row.phone_encrypted as string) : null,
    postcode: (row.postcode as string) ?? null,
    huisnummer: (row.huisnummer as string) ?? null,
    woningtype: (row.woningtype as string) ?? null,
  };
}

/**
 * Verwijdert leads die de bewaartermijn uit de privacyverklaring hebben
 * overschreden: niet-gekoppelde leads ouder dan 3 maanden, gekoppelde
 * leads waarvan de koppeling met een installateur ouder is dan 1 jaar, en
 * ongeverifieerde leads (double opt-in) die ouder zijn dan 24 uur.
 * Geeft het aantal verwijderde leads en hun id's terug, zodat dit gelogd
 * kan worden.
 */
export async function deleteExpiredLeads(): Promise<{ count: number; ids: string[] }> {
  if (!isDbConfigured()) {
    console.warn("POSTGRES_URL niet ingesteld, opschonen van leads wordt overgeslagen");
    return { count: 0, ids: [] };
  }

  const result = await sql`
    delete from leads
    where
      (matched_at is null and created_at < now() - interval '3 months')
      or (matched_at is not null and matched_at < now() - interval '1 year')
      or (verified = false and created_at < now() - interval '24 hours')
    returning id
  `;

  return { count: result.rowCount ?? 0, ids: result.rows.map((row) => row.id as string) };
}
