/** Minimale score (0–1) die we van reCAPTCHA Enterprise accepteren. Lager = waarschijnlijker een bot. */
const RECAPTCHA_THRESHOLD = 0.5;
/** De actie die de frontend meegeeft bij execute(); wordt gecontroleerd in de assessment. */
const EXPECTED_ACTION = "lead";

/**
 * Verifieert een reCAPTCHA Enterprise-token via de Assessment API van Google
 * Cloud (https://recaptchaenterprise.googleapis.com).
 *
 * Configuratie (alle drie nodig om de controle te activeren):
 * - NEXT_PUBLIC_RECAPTCHA_SITE_KEY — de Enterprise site key (ook client-side).
 * - RECAPTCHA_PROJECT_ID — het Google Cloud project-ID (niet de weergavenaam).
 * - RECAPTCHA_SECRET_KEY — hergebruikt als de Google Cloud API key.
 *
 * Beleid (reCAPTCHA is defense-in-depth naast de per-uur-limiet en e-mailverificatie):
 * - Niet volledig geconfigureerd → controle overslaan (return true).
 * - Geen of leeg token → 'fail closed' (return false): behandeld als mislukte
 *   verificatie, de aanvraag wordt geblokkeerd.
 * - Token aanwezig maar ongeldig of te lage score → blokkeren (return false).
 * - Netwerk-/API-fout (5xx, timeout) → 'fail open' (return true): een storing
 *   aan Google's kant mag echte leads nooit tegenhouden.
 */
export async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const apiKey = process.env.RECAPTCHA_SECRET_KEY;
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!apiKey || !projectId || !siteKey) {
    return true;
  }
  if (!token) {
    console.warn(
      "reCAPTCHA: geen of leeg token ontvangen terwijl Enterprise is geconfigureerd — " +
        "aanvraag geweigerd (fail-closed). Controleer of NEXT_PUBLIC_RECAPTCHA_SITE_KEY in de " +
        "build zit (redeploy na het zetten) als dit echte bezoekers betreft."
    );
    return false;
  }

  try {
    const res = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token,
            siteKey,
            expectedAction: EXPECTED_ACTION,
          },
        }),
        signal: AbortSignal.timeout(5000),
      }
    );

    if (!res.ok) {
      console.error(
        "reCAPTCHA Enterprise assessment gaf foutstatus:",
        res.status,
        await res.text().catch(() => "")
      );
      return true;
    }

    const data = (await res.json()) as {
      tokenProperties?: { valid?: boolean; action?: string; invalidReason?: string };
      riskAnalysis?: { score?: number };
    };

    const tokenProps = data.tokenProperties;
    if (!tokenProps?.valid) {
      // invalidReason helpt diagnosticeren, bv. UNKNOWN_INVALID_REASON,
      // EXPIRED, DUPE, of een hostname-/site key-mismatch.
      console.warn("reCAPTCHA Enterprise token ongeldig:", tokenProps?.invalidReason);
      return false;
    }

    const score = data.riskAnalysis?.score;
    if (typeof score === "number" && score < RECAPTCHA_THRESHOLD) {
      console.warn(`reCAPTCHA Enterprise score te laag: ${score}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("reCAPTCHA Enterprise verificatie mislukt door fout, aanvraag wordt toegestaan:", err);
    return true;
  }
}
