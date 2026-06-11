import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadData = {
  woningtype?: string;
  oppervlakte?: string;
  bouwjaar?: string;
  isolatie?: string;
  huidigSysteem?: string;
  gasverbruik?: number;
  postcode?: string;
  huisnummer?: string;
  voornaam?: string;
  telefoon?: string;
  email?: string;
  adviesType?: string;
  wantsInstallateur?: boolean;
};

function isLeadData(value: unknown): value is LeadData {
  return typeof value === "object" && value !== null;
}

const RVO_FALLBACK_INFO = `
Indicatieve ISDE-subsidiebedragen (2026, onder voorbehoud van wijzigingen):
- Lucht-water warmtepomp: tot €2.500
- Hybride warmtepomp: wisselend bedrag, afhankelijk van vermogen, doorgaans lager dan een volledig elektrische warmtepomp
- Bodem-water (bodemgebonden) warmtepomp: hoger subsidiebedrag, afhankelijk van vermogen, vraag op aanvraag
- Lucht-lucht warmtepomp: doorgaans niet of beperkt subsidiabel via ISDE
`.trim();

async function getRvoSubsidieInfo(): Promise<string> {
  try {
    const res = await fetch(
      "https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren",
      { signal: AbortSignal.timeout(5000) }
    );

    if (!res.ok) {
      return RVO_FALLBACK_INFO;
    }

    const html = await res.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!text) {
      return RVO_FALLBACK_INFO;
    }

    return `${text.slice(0, 4000)}\n\nGebruik dit als aanvulling op de volgende indicatieve bedragen, en geef voorrang aan de meest specifieke en actuele informatie:\n${RVO_FALLBACK_INFO}`;
  } catch (err) {
    console.warn("Ophalen van RVO-subsidiegegevens mislukt, gebruik fallback:", err);
    return RVO_FALLBACK_INFO;
  }
}

async function generateAdvies(lead: LeadData, subsidieInfo: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.warn("ANTHROPIC_API_KEY niet ingesteld, persoonlijk advies wordt overgeslagen");
    return null;
  }

  const prompt = `Je bent een onafhankelijk warmtepomp-adviseur voor warmtepomp.ai. Schrijf een persoonlijk, vriendelijk advies in het Nederlands voor onderstaande aanvrager, op basis van hun woninggegevens en de actuele ISDE-subsidie-informatie.

Gegevens van de aanvrager:
- Woningtype: ${lead.woningtype ?? "onbekend"}
- Oppervlakte: ${lead.oppervlakte ?? "onbekend"}
- Bouwjaar: ${lead.bouwjaar ?? "onbekend"}
- Isolatieniveau: ${lead.isolatie ?? "onbekend"}
- Huidig verwarmingssysteem: ${lead.huidigSysteem ?? "onbekend"}
- Geschat jaarlijks gasverbruik: ${lead.gasverbruik ? `${lead.gasverbruik} m³` : "onbekend"}
- Postcode: ${lead.postcode ?? "onbekend"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}
- Voorlopig advies uit de website-tool: ${lead.adviesType ?? "onbekend"}

Actuele ISDE-subsidie-informatie (afkomstig van rvo.nl):
${subsidieInfo}

Schrijf het advies als een stuk HTML (alleen de inhoud, geen <html>/<head>/<body> tags, gebruik <h2>, <p>, <ul>/<li> waar passend) met de volgende onderdelen:
1. Aanbevolen warmtepomp type voor deze situatie, met een korte onderbouwing
2. Geschatte kosten (aanschaf + installatie), als bandbreedte
3. Actuele ISDE-subsidie die van toepassing is
4. Geschatte maandelijkse besparing op de energierekening
5. Terugverdientijd (indicatie)

Belangrijke regels:
- Begin meteen met de inhoud van punt 1. Geen aanhef of begroeting (dus niet "Hallo", "Hoi [naam]", "Beste lezer" of iets dergelijks) en geen ondertekening of afsluitende groet aan het einde — dat staat al in de rest van de e-mail.
- Schrijf informeel en persoonlijk: gebruik altijd "je", "jij" en "jouw", nooit "u" of "uw". Geen corporate of stijve taal.
- Noem geen volgende stappen zoals zelf een installateur zoeken, het installateurregister, het STEK-keurmerk, de RVO-meldcodelijst, of het aanvragen van offertes — dat regelen wij voor de klant en staat al elders in de e-mail.
- Gebruik geen hyperlinks of verwijzingen naar andere websites.
- Schrijf in gewone, begrijpelijke taal, geen jargon. Wees eerlijk over dat het indicaties zijn. Houd het beknopt: maximaal 2-3 zinnen per onderdeel. Geef alleen de kale HTML terug, zonder markdown code block (geen \`\`\`).`;

  console.log("Anthropic API aanroepen voor persoonlijk advies...");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 2048,
        messages: [{ role: "user", content: prompt }],
      }),
      signal: AbortSignal.timeout(60000),
    });

    if (!res.ok) {
      console.error("Anthropic API gaf een foutstatus terug:", res.status, await res.text());
      return null;
    }

    const data = await res.json();
    const content = data?.content;
    if (!Array.isArray(content)) {
      console.error("Anthropic API gaf onverwacht antwoord terug:", JSON.stringify(data));
      return null;
    }

    const text = content
      .filter((block: { type?: string; text?: string }) => block.type === "text")
      .map((block: { text?: string }) => block.text ?? "")
      .join("\n")
      .trim()
      .replace(/^```(?:html)?\n?/i, "")
      .replace(/\n?```$/, "")
      .trim();

    console.log(
      text
        ? `Persoonlijk advies ontvangen van Anthropic (${text.length} tekens)`
        : "Anthropic API gaf een leeg advies terug"
    );

    return text || null;
  } catch (err) {
    console.error("Genereren van persoonlijk advies via Anthropic mislukt:", err);
    return null;
  }
}

async function sendConfirmationEmail(lead: LeadData, advies: string | null) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY niet ingesteld, bevestigingsmail wordt overgeslagen");
    return;
  }
  if (!lead.email) return;

  const voornaam = lead.voornaam ?? "";
  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepomp.ai>";

  const adviesHtml = advies
    ? `
        <div style="margin: 24px 0;">
          <h2 style="font-size: 18px; color: #0d1f16;">Jouw persoonlijke warmtepompadvies</h2>
          ${advies}
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #5a7264; border-top: 1px solid #e5e5e5; padding-top: 12px;">
          Let op: subsidiebedragen kunnen wijzigen, dit advies is een indicatie.
        </p>
      `
    : "";

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p>Hoi ${voornaam},</p>
      <p>Bedankt voor je aanvraag! Hieronder vind je direct je persoonlijke warmtepompadvies.</p>
      <p><strong>Jouw gegevens:</strong></p>
      <ul>
        <li>Woningtype: ${lead.woningtype ?? "-"}</li>
        <li>Oppervlakte: ${lead.oppervlakte ?? "-"}</li>
        <li>Bouwjaar: ${lead.bouwjaar ?? "-"}</li>
        <li>Isolatieniveau: ${lead.isolatie ?? "-"}</li>
        <li>Huidig systeem: ${lead.huidigSysteem ?? "-"}</li>
        <li>Geschat gasverbruik: ${lead.gasverbruik ? `${lead.gasverbruik} m³ per jaar` : "-"}</li>
        <li>Postcode: ${lead.postcode ?? "-"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}</li>
      </ul>
      ${adviesHtml}
      <div style="margin: 24px 0;">
        <h2 style="font-size: 18px; color: #0d1f16;">Wat gebeurt er nu?</h2>
        <p>We zoeken voor jou de beste installateurs in jouw regio op. Je ontvangt binnen 24 uur een overzicht van geschikte installateurs bij jou in de buurt — dan kun jij zelf de beste keuze maken.</p>
      </div>
      <p>Groeten,<br>Michael<br><span style="color: #22b572; font-weight: bold;">warmtepomp.ai</span></p>
    </div>
  `;

  const to = lead.email;

  console.log(`Bevestigingsmail versturen naar ${to}...`);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Bedankt ${voornaam} — jouw warmtepomp advies is onderweg`,
      html,
    });

    if (error) {
      console.error("Versturen van bevestigingsmail mislukt:", error);
    } else {
      console.log(`Bevestigingsmail verstuurd naar ${to} (id: ${data?.id})`);
    }
  } catch (err) {
    console.error("Versturen van bevestigingsmail mislukt:", err);
  }
}

async function sendNotificationEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY niet ingesteld, notificatiemail wordt overgeslagen");
    return;
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepomp.ai>";

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <ul>
        <li><strong>Naam:</strong> ${lead.voornaam ?? "-"}</li>
        <li><strong>Telefoon:</strong> ${lead.telefoon ?? "-"}</li>
        <li><strong>Email:</strong> ${lead.email ?? "-"}</li>
        <li><strong>Woningtype:</strong> ${lead.woningtype ?? "-"}</li>
        <li><strong>Oppervlakte:</strong> ${lead.oppervlakte ?? "-"}</li>
        <li><strong>Postcode:</strong> ${lead.postcode ?? "-"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}</li>
        <li><strong>Huidig systeem:</strong> ${lead.huidigSysteem ?? "-"}</li>
      </ul>
      <p style="margin-top: 24px; font-weight: bold;">Reageer binnen 24 uur</p>
    </div>
  `;

  const to = "info@warmtepomp.ai";

  console.log(`Notificatiemail versturen naar ${to}...`);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `🔥 Nieuwe lead: ${lead.voornaam ?? "Onbekend"} - ${lead.woningtype ?? "Onbekend"} - ${lead.postcode ?? "-"}`,
      html,
    });

    if (error) {
      console.error("Versturen van notificatiemail mislukt:", error);
    } else {
      console.log(`Notificatiemail verstuurd naar ${to} (id: ${data?.id})`);
    }
  } catch (err) {
    console.error("Versturen van notificatiemail mislukt:", err);
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
    const subsidieInfo = await getRvoSubsidieInfo();
    const advies = await generateAdvies(data, subsidieInfo);

    await Promise.all([sendConfirmationEmail(data, advies), sendNotificationEmail(data)]);
  }

  return NextResponse.json({ success: true });
}
