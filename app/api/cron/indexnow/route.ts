import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/blog-posts";
import { pingIndexNow } from "@/lib/indexnow";
import { isDbConfigured } from "@/lib/db";
import { getSubmittedSignatures, recordSubmissions } from "@/lib/indexnow-state";

/** De "signature" van een post: datum van laatste wijziging, anders publicatie. */
function signatureOf(post: { publishedAt: string; updatedAt?: string }): string {
  return post.updatedAt ?? post.publishedAt;
}

/**
 * Cron: dient blog-URL's die sinds de vorige succesvolle ping nieuw of gewijzigd
 * zijn bij IndexNow in. Idempotent via de tabel indexnow_submissions; faalt stil
 * zodat een mislukte ping of ontbrekende configuratie niets kapotmaakt.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Zonder key heeft indienen geen zin; zonder database kunnen we niet
  // dedupliceren en zouden we bij elke run opnieuw indienen — beide overslaan.
  if (!process.env.INDEXNOW_KEY) {
    console.warn("IndexNow-cron: INDEXNOW_KEY ontbreekt — overgeslagen.");
    return NextResponse.json({ skipped: "geen INDEXNOW_KEY" });
  }
  if (!isDbConfigured()) {
    console.warn("IndexNow-cron: geen database geconfigureerd — overgeslagen (kan niet dedupliceren).");
    return NextResponse.json({ skipped: "geen database" });
  }

  try {
    const posts = getPublishedPosts();
    const submitted = await getSubmittedSignatures();

    const changed = posts.filter((p) => submitted.get(p.slug) !== signatureOf(p));
    if (changed.length === 0) {
      return NextResponse.json({ submitted: 0, message: "niets nieuws of gewijzigd" });
    }

    const urls = changed.map((p) => `/blog/${p.slug}`);
    const ok = await pingIndexNow(urls);

    if (!ok) {
      // Niet wegschrijven: de volgende run probeert het automatisch opnieuw.
      console.warn(`IndexNow-cron: ping mislukt voor ${urls.length} URL(s) — wordt later opnieuw geprobeerd.`);
      return NextResponse.json({ submitted: 0, attempted: urls.length, ok: false });
    }

    await recordSubmissions(changed.map((p) => ({ slug: p.slug, signature: signatureOf(p) })));
    console.log(`IndexNow-cron: ${urls.length} URL(s) ingediend: ${urls.join(", ")}`);
    return NextResponse.json({ submitted: urls.length, urls });
  } catch (err) {
    // Mag de cron nooit laten crashen.
    console.error("IndexNow-cron: onverwachte fout (genegeerd):", err);
    return NextResponse.json({ submitted: 0, error: "interne fout (gelogd)" });
  }
}
