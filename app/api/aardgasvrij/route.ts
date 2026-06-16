import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isDbConfigured } from "@/lib/db";
import { saveAardgasvrijSignup } from "@/lib/aardgasvrij-repository";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTCODE_REGEX = /^\d{4}[A-Z]{2}$/;

// Toegestane herkomsten. "aardgasvrij" is de reguliere aanmelding; de exit-bronnen komen
// uit de keuzehulp (collectieve verwarming) en zijn info/exit-contacten, geen offerte-leads.
const TOEGESTANE_BRONNEN = ["aardgasvrij", "exit-stadsverwarming", "exit-blokverwarming"];

async function sendNotificationEmail(naam: string, email: string, postcode: string, bron: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY niet ingesteld, notificatiemail wordt overgeslagen");
    return;
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepomp.ai>";

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: "info@warmtepomp.ai",
      subject: `🔥 Nieuwe aanmelding (${bron}): ${naam} - ${postcode}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
          <ul>
            <li><strong>Naam:</strong> ${naam}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Postcode:</strong> ${postcode}</li>
            <li><strong>Bron:</strong> ${bron}</li>
          </ul>
        </div>
      `,
    });

    if (error) {
      console.error("Versturen van aardgasvrij-notificatiemail mislukt:", error);
    } else {
      console.log(`Aardgasvrij-notificatiemail verstuurd (id: ${data?.id})`);
    }
  } catch (err) {
    console.error("Versturen van aardgasvrij-notificatiemail mislukt:", err);
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const { naam, email, postcode, bron } = body as Record<string, unknown>;
  const veiligeBron =
    typeof bron === "string" && TOEGESTANE_BRONNEN.includes(bron) ? bron : "aardgasvrij";

  if (typeof naam !== "string" || naam.trim().length === 0) {
    return NextResponse.json({ error: "Vul je naam in" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in" }, { status: 400 });
  }
  const cleanPostcode = typeof postcode === "string" ? postcode.replace(/\s/g, "").toUpperCase() : "";
  if (!POSTCODE_REGEX.test(cleanPostcode)) {
    return NextResponse.json({ error: "Vul een geldige postcode in, bijv. 1234AB" }, { status: 400 });
  }

  if (!isDbConfigured()) {
    console.warn("POSTGRES_URL niet ingesteld, aardgasvrij-aanmelding kan niet worden opgeslagen");
    return NextResponse.json(
      { error: "Aanmelden is momenteel niet beschikbaar, probeer het later opnieuw" },
      { status: 503 }
    );
  }

  await saveAardgasvrijSignup({ naam: naam.trim(), email, postcode: cleanPostcode, bron: veiligeBron });
  await sendNotificationEmail(naam.trim(), email, cleanPostcode, veiligeBron);

  return NextResponse.json({ success: true });
}
