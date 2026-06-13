import { sql, isDbConfigured } from "@/lib/db";
import { encrypt } from "@/lib/encryption";

type AardgasvrijSignup = {
  naam: string;
  email: string;
  postcode: string;
};

/**
 * Slaat een aanmelding voor collectieve aardgasvrij-acties versleuteld op.
 * Naam en e-mailadres worden met AES-256-GCM versleuteld. Als er geen
 * database is geconfigureerd, wordt de aanmelding geweigerd.
 */
export async function saveAardgasvrijSignup(signup: AardgasvrijSignup): Promise<void> {
  if (!isDbConfigured()) {
    throw new Error("Database niet geconfigureerd");
  }

  const nameEncrypted = encrypt(signup.naam);
  const emailEncrypted = encrypt(signup.email);

  await sql`
    insert into aardgasvrij_signups (
      name_encrypted,
      email_encrypted,
      postcode
    ) values (
      ${nameEncrypted},
      ${emailEncrypted},
      ${signup.postcode}
    )
  `;
}
