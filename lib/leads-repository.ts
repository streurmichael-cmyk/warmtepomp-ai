import { sql, isDbConfigured } from "@/lib/db";
import { encrypt } from "@/lib/encryption";
import type { AdviesResultaat } from "@/lib/advies";
import { FORWARDING_CONSENT_VERSION } from "@/lib/consent";

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
  /** True als de bezoeker expliciet toestemming gaf om met installateurs te delen. */
  consentForwarding?: boolean;
};

/**
 * Telt hoeveel leads er al voor dit huisadres (postcode + huisnummer) zijn
 * opgeslagen. Gebruikt voor dedup per adres in plaats van per IP, zodat
 * gedeelde of mobiele IP's geen echte leads blokkeren. Case-insensitief
 * (postcode/huisnummer-toevoeging). Zonder database geven we 0 terug.
 */
export async function countLeadsByAddress(postcode: string, huisnummer: string): Promise<number> {
  if (!isDbConfigured() || !postcode || !huisnummer) {
    return 0;
  }
  const result = await sql`
    select count(*)::int as n from leads
    where lower(postcode) = lower(${postcode}) and lower(huisnummer) = lower(${huisnummer})
  `;
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
  const consent = lead.consentForwarding ?? false;

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
      consent_forwarding,
      consent_at,
      consent_disclosure_version
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
      ${consent},
      ${consent ? new Date().toISOString() : null},
      ${consent ? FORWARDING_CONSENT_VERSION : null}
    )
  `;
}

/**
 * Verwijdert leads die de bewaartermijn uit de privacyverklaring hebben
 * overschreden: niet-gekoppelde leads ouder dan 3 maanden en gekoppelde
 * leads waarvan de koppeling met een installateur ouder is dan 1 jaar.
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
    returning id
  `;

  return { count: result.rowCount ?? 0, ids: result.rows.map((row) => row.id as string) };
}
