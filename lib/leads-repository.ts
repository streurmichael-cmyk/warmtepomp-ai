import { sql, isDbConfigured } from "@/lib/db";
import { encrypt } from "@/lib/encryption";
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
};

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
      advies
    ) values (
      ${nameEncrypted},
      ${emailEncrypted},
      ${phoneEncrypted},
      ${lead.postcode ?? null},
      ${lead.huisnummer ?? null},
      ${lead.woningtype ?? null},
      ${lead.adviesType ?? null},
      ${lead.advies ? JSON.stringify(lead.advies) : null}
    )
  `;
}
