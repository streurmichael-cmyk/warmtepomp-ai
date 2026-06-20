import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";

/** B2B-intake van installateurs die partner willen worden. Geen DB: gaat via e-mail naar info@. */
type Aanmelding = {
  bedrijfsnaam?: string;
  contactpersoon?: string;
  email?: string;
  telefoon?: string;
  werkgebied?: string;
  kvk?: string;
  fgassen?: string;
  installq?: string;
  toelichting?: string;
  recaptchaToken?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Voorkomt HTML-injectie in de notificatiemail. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Te veel aanvragen vanaf dit adres. Probeer het over een uur opnieuw." },
      { status: 429 }
    );
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }
  if (typeof data !== "object" || data === null) {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const a = data as Aanmelding;
  if (
    !a.bedrijfsnaam?.trim() ||
    !a.contactpersoon?.trim() ||
    !a.email ||
    !EMAIL_REGEX.test(a.email.trim()) ||
    !a.telefoon?.trim() ||
    !a.werkgebied?.trim()
  ) {
    return NextResponse.json(
      { error: "Vul bedrijfsnaam, contactpersoon, een geldig e-mailadres, telefoon en werkgebied in." },
      { status: 400 }
    );
  }

  // Zelfde gehardende aanpak als /api/leads: fail-closed bij ontbrekend/leeg token.
  const recaptchaOk = await verifyRecaptcha(a.recaptchaToken);
  if (!recaptchaOk) {
    console.warn("Installateur-aanmelding geweigerd door reCAPTCHA");
    return NextResponse.json(
      { error: "Ik kon niet verifiëren dat je geen robot bent. Probeer het opnieuw." },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Geen DB-fallback: zonder mail komt de aanmelding niet aan -> hard falen, geen stil verlies.
    console.error("RESEND_API_KEY niet ingesteld; installateur-aanmelding kon niet verstuurd worden");
    return NextResponse.json(
      { error: "Er ging iets mis bij het versturen. Probeer het later opnieuw." },
      { status: 500 }
    );
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "warmtepomp.ai <noreply@warmtepomp.ai>";
  const to = "info@warmtepomp.ai";
  const subject = `🔧 Nieuwe installateur-aanmelding: ${a.bedrijfsnaam.trim()}`;
  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p style="font-weight: bold; color: #0e7a4f;">Nieuwe aanmelding voor kennismaking (partner-installateur).</p>
      <ul>
        <li><strong>Bedrijfsnaam:</strong> ${escapeHtml(a.bedrijfsnaam.trim())}</li>
        <li><strong>Contactpersoon:</strong> ${escapeHtml(a.contactpersoon.trim())}</li>
        <li><strong>E-mail:</strong> ${escapeHtml(a.email.trim())}</li>
        <li><strong>Telefoon:</strong> ${escapeHtml(a.telefoon.trim())}</li>
        <li><strong>Werkgebied:</strong> ${escapeHtml(a.werkgebied.trim())}</li>
        <li><strong>KvK-nummer:</strong> ${a.kvk?.trim() ? escapeHtml(a.kvk.trim()) : "-"}</li>
        <li><strong>F-gassen-gecertificeerd:</strong> ${a.fgassen?.trim() ? escapeHtml(a.fgassen.trim()) : "-"}</li>
        <li><strong>InstallQ-erkenning:</strong> ${a.installq?.trim() ? escapeHtml(a.installq.trim()) : "-"}</li>
      </ul>
      <p><strong>Toelichting:</strong><br>${a.toelichting?.trim() ? escapeHtml(a.toelichting.trim()) : "-"}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: a.email.trim(),
    });
    if (error) {
      console.error("Versturen van installateur-aanmelding mislukt:", error);
      return NextResponse.json(
        { error: "Er ging iets mis bij het versturen. Probeer het later opnieuw." },
        { status: 500 }
      );
    }
    console.log(`Installateur-aanmelding verstuurd naar ${to} (id: ${sent?.id})`);
  } catch (err) {
    console.error("Versturen van installateur-aanmelding mislukt:", err);
    return NextResponse.json(
      { error: "Er ging iets mis bij het versturen. Probeer het later opnieuw." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
