/** Minimale score (0–1) die we van reCAPTCHA v3 accepteren. Lager = waarschijnlijker een bot. */
const RECAPTCHA_THRESHOLD = 0.5;

/**
 * Verifieert een reCAPTCHA v3-token bij Google.
 *
 * Beleid (reCAPTCHA is hier defense-in-depth naast de IP-limiet en de
 * e-mailverificatie, dus we blokkeren echte gebruikers liever niet onterecht):
 * - RECAPTCHA_SECRET_KEY niet ingesteld → controle overslaan (return true).
 * - Geen token ontvangen → 'fail open' (return true) met waarschuwing. Een
 *   ontbrekend token komt in de praktijk vrijwel altijd door een client-/
 *   configuratieprobleem (site key niet in de build, script geblokkeerd,
 *   netwerk), niet door een bot. Onterecht alle aanvragen blokkeren is erger.
 * - Token aanwezig maar door Google afgekeurd (success=false) of te lage score
 *   → blokkeren (return false). Dit is reCAPTCHA die echt zijn werk doet.
 * - Netwerk-/serverfout bij Google → 'fail open' (return true).
 */
export async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return true;
  }
  if (!token) {
    console.warn(
      "reCAPTCHA: geen token ontvangen terwijl er een secret is ingesteld — " +
        "controleer of NEXT_PUBLIC_RECAPTCHA_SITE_KEY in de build zit (redeploy na het zetten). " +
        "Aanvraag wordt toegestaan."
    );
    return true;
  }

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error("reCAPTCHA-verificatie gaf foutstatus:", res.status);
      return true;
    }

    const data = (await res.json()) as {
      success?: boolean;
      score?: number;
      "error-codes"?: string[];
    };
    if (!data.success) {
      // error-codes helpt diagnosticeren: bv. 'hostname-mismatch' (domein niet
      // whitelisted), 'invalid-input-secret' (verkeerde secret), 'timeout-or-duplicate'.
      console.warn("reCAPTCHA-verificatie mislukt (success=false):", data["error-codes"]);
      return false;
    }
    if (typeof data.score === "number" && data.score < RECAPTCHA_THRESHOLD) {
      console.warn(`reCAPTCHA-score te laag: ${data.score}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("reCAPTCHA-verificatie mislukt door fout, aanvraag wordt toch toegestaan:", err);
    return true;
  }
}
