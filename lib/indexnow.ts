import { SITE_URL } from "@/lib/seo";

/** Zet een pad ("/offerte") of volledige URL om naar een absolute URL op het www-domein. */
function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/**
 * Meldt één of meer pagina's bij IndexNow zodat zoekmachines op de hoogte zijn van
 * nieuwe of gewijzigde content. Zonder argument wordt alleen de homepage gemeld.
 * Vereist INDEXNOW_KEY; doet niets als die ontbreekt.
 *
 * @param paths Paden (bijv. "/offerte") of volledige URL's. Standaard: de homepage.
 */
export async function pingIndexNow(paths: string[] = [SITE_URL]): Promise<boolean> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return false;

  const urlList = paths.map(toAbsoluteUrl);
  if (urlList.length === 0) return false;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "www.warmtepomp.ai",
        key,
        keyLocation: `${SITE_URL}/${key}.txt`,
        urlList,
      }),
      signal: AbortSignal.timeout(5000),
    });

    return res.ok;
  } catch (err) {
    console.warn("IndexNow-aanroep mislukt:", err);
    return false;
  }
}
