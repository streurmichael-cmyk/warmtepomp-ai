import { sql, isDbConfigured } from "@/lib/db";

export type SubmissionRow = { slug: string; signature: string };

/**
 * Leest per blog-slug de signature van de laatste succesvolle IndexNow-indiening.
 * Geeft een lege map terug als er geen database geconfigureerd is (fail-soft);
 * de aanroeper beslist dan zelf om niets in te dienen.
 */
export async function getSubmittedSignatures(): Promise<Map<string, string>> {
  if (!isDbConfigured()) return new Map();
  const { rows } = await sql<SubmissionRow>`SELECT slug, signature FROM indexnow_submissions`;
  return new Map(rows.map((r) => [r.slug, r.signature]));
}

/**
 * Slaat (upsert) de signatures op van slugs die zojuist succesvol bij IndexNow
 * zijn ingediend. Doet niets zonder database of zonder invoer.
 */
export async function recordSubmissions(entries: SubmissionRow[]): Promise<void> {
  if (!isDbConfigured() || entries.length === 0) return;
  for (const { slug, signature } of entries) {
    await sql`
      INSERT INTO indexnow_submissions (slug, signature, submitted_at)
      VALUES (${slug}, ${signature}, now())
      ON CONFLICT (slug) DO UPDATE SET signature = EXCLUDED.signature, submitted_at = now()
    `;
  }
}
