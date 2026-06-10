import { NextResponse } from "next/server";

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
    console.log("RESEND_API_KEY niet ingesteld, bevestigingsmail wordt overgeslagen");
    return;
  }
  if (!lead.email) return;

  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepompai.vercel.app>";

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h1 style="color: #0d1f16;">Bedankt voor je aanvraag, ${lead.voornaam ?? ""}!</h1>
      <p>We hebben je aanvraag voor een vrijblijvend warmtepompadvies in goede orde ontvangen.</p>
      <p><strong>Jouw gegevens:</strong></p>
      <ul>
        <li>Woningtype: ${lead.woningtype ?? "-"}</li>
        <li>Oppervlakte: ${lead.oppervlakte ?? "-"}</li>
        <li>Huidig systeem: ${lead.huidigSysteem ?? "-"}</li>
        <li>Postcode: ${lead.postcode ?? "-"}</li>
      </ul>
      <p>We koppelen je aan een installateur bij jou in de buurt. Je ontvangt binnen 24 uur een bericht.</p>
      <p>Met vriendelijke groet,<br />Het team van Warmtepomp.ai</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: lead.email,
        subject: "Bevestiging: jouw warmtepompadvies",
        html,
      }),
    });

    if (!res.ok) {
      console.error("Versturen van bevestigingsmail mislukt:", await res.text());
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
