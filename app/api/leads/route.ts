import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadData = {
  woningtype?: string;
  oppervlakte?: string;
  huidigSysteem?: string;
  postcode?: string;
  voornaam?: string;
  telefoon?: string;
  email?: string;
};

function isLeadData(value: unknown): value is LeadData {
  return typeof value === "object" && value !== null;
}

async function sendConfirmationEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY niet ingesteld, bevestigingsmail wordt overgeslagen");
    return;
  }
  if (!lead.email) return;

  const voornaam = lead.voornaam ?? "";
  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepomp.ai>";

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p>Hoi ${voornaam},</p>
      <p>Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op om je persoonlijke warmtepompadvies te bespreken.</p>
      <p><strong>Jouw gegevens:</strong></p>
      <ul>
        <li>Woningtype: ${lead.woningtype ?? "-"}</li>
        <li>Oppervlakte: ${lead.oppervlakte ?? "-"}</li>
        <li>Postcode: ${lead.postcode ?? "-"}</li>
      </ul>
      <p>Tot snel!</p>
      <p style="color: #22b572; font-weight: bold;">warmtepomp.ai</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: lead.email,
      subject: `Bedankt ${voornaam} — jouw warmtepomp advies is onderweg`,
      html,
    });

    if (error) {
      console.error("Versturen van bevestigingsmail mislukt:", error);
    }
  } catch (err) {
    console.error("Versturen van bevestigingsmail mislukt:", err);
  }
}

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  console.log("Nieuwe lead ontvangen:", data);

  if (isLeadData(data)) {
    await sendConfirmationEmail(data);
  }

  return NextResponse.json({ success: true });
}
