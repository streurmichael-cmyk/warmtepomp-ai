/** Minimale score (0–1) die we van reCAPTCHA v3 accepteren. Lager = waarschijnlijker een bot. */
const RECAPTCHA_THRESHOLD = 0.5;

/**
 * Verifieert een reCAPTCHA v3-token bij Google. Als RECAPTCHA_SECRET_KEY niet
 * is ingesteld, slaan we de controle over (return true) zodat echte gebruikers
 * niet geblokkeerd worden voordat de sleutels geconfigureerd zijn. Bij een
 * netwerkfout falen we 'open' (return true) zodat een storing bij Google geen
 * legitieme aanvragen blokkeert; alleen een expliciet negatieve uitslag of een
 * te lage score blokkeert de aanvraag.
 */
export async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return true;
  }
  if (!token) {
    return false;
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

    const data = (await res.json()) as { success?: boolean; score?: number };
    if (!data.success) {
      console.warn("reCAPTCHA-verificatie mislukt (success=false)");
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
