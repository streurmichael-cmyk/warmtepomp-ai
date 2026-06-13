import { sql } from "@vercel/postgres";

export { sql };

/**
 * Of er een database-verbinding geconfigureerd is. Zolang de Vercel
 * Postgres/Neon-integratie niet is aangesloten, slaan we opslag in de
 * database over zodat het verzenden van leads via e-mail blijft werken.
 */
export function isDbConfigured(): boolean {
  return Boolean(process.env.POSTGRES_URL);
}
