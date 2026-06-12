import { SITE_URL } from "@/lib/seo";

/**
 * Meldt de homepage bij IndexNow zodat zoekmachines op de hoogte zijn van nieuwe activiteit.
 * Vereist INDEXNOW_KEY; doet niets als die ontbreekt.
 */
export async function pingIndexNow(): Promise<boolean> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return false;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "www.warmtepomp.ai",
        key,
        urlList: [SITE_URL],
      }),
      signal: AbortSignal.timeout(5000),
    });

    return res.ok;
  } catch (err) {
    console.warn("IndexNow-aanroep mislukt:", err);
    return false;
  }
}
