import { NextResponse } from "next/server";
import { Resend } from "resend";
import { pingIndexNow } from "@/lib/indexnow";
import { berekenAdvies } from "@/lib/advies";
import { saveLead } from "@/lib/leads-repository";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

type LeadData = {
  woningtype?: string;
  oppervlakte?: string;
  bouwjaar?: string;
  energielabel?: string;
  isolatie?: string;
  huidigSysteem?: string;
  cvKetelLeeftijd?: string;
  overstapVoorkeur?: "volledig" | "hybride";
  gasverbruik?: number;
  heeftZonnepanelen?: string;
  aantalZonnepanelen?: number;
  jaarlijkseOpwekKwh?: number;
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

const POSTCODE_REGEX = /^\d{4}[A-Z]{2}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFOON_REGEX = /^[\d\s+()-]{9,}$/;

/** Server-side validatie van de verplichte velden. Geeft per leeg/ongeldig veld een melding. */
function valideerLead(lead: LeadData): Record<string, string> {
  const fouten: Record<string, string> = {};

  if (!lead.voornaam || !lead.voornaam.trim()) {
    fouten.voornaam = "Vul je voornaam in.";
  }
  if (!lead.email || !EMAIL_REGEX.test(lead.email.trim())) {
    fouten.email = "Vul een geldig e-mailadres in.";
  }
  if (!lead.postcode || !POSTCODE_REGEX.test(lead.postcode.replace(/\s/g, "").toUpperCase())) {
    fouten.postcode = "Vul een geldige postcode in.";
  }
  if (!lead.woningtype || !lead.woningtype.trim()) {
    fouten.woningtype = "Kies een woningtype.";
  }
  if (lead.wantsInstallateur && (!lead.telefoon || !TELEFOON_REGEX.test(lead.telefoon.trim()))) {
    fouten.telefoon = "Vul een geldig telefoonnummer in.";
  }

  return fouten;
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

function beschrijfZonnepanelen(lead: LeadData): string {
  if (lead.heeftZonnepanelen === "Ja") {
    if (lead.jaarlijkseOpwekKwh && lead.jaarlijkseOpwekKwh > 0) {
      return `ja, opbrengst ${lead.jaarlijkseOpwekKwh} kWh per jaar${
        lead.aantalZonnepanelen ? ` (${lead.aantalZonnepanelen} panelen)` : ""
      }`;
    }
    if (lead.aantalZonnepanelen) {
      return `${lead.aantalZonnepanelen} panelen`;
    }
  }
  return lead.heeftZonnepanelen ?? "onbekend";
}

function berekenZonnepanelenInfo(lead: LeadData): string {
  if (lead.heeftZonnepanelen === "Ja" && (lead.jaarlijkseOpwekKwh || lead.aantalZonnepanelen)) {
    const advies = berekenAdvies({
      woningtype: lead.woningtype ?? "",
      oppervlakte: lead.oppervlakte ?? "",
      bouwjaar: lead.bouwjaar ?? "",
      isolatie: lead.isolatie ?? "",
      huidigSysteem: lead.huidigSysteem ?? "",
      gasverbruik: lead.gasverbruik ?? 0,
      heeftZonnepanelen: lead.heeftZonnepanelen,
      aantalZonnepanelen: lead.aantalZonnepanelen,
      jaarlijkseOpwekKwh: lead.jaarlijkseOpwekKwh,
    });
    const zon = advies.zonnepanelen;
    if (!zon) return "";

    const opwekZin =
      lead.jaarlijkseOpwekKwh && lead.jaarlijkseOpwekKwh > 0
        ? `Met jouw zonnepanelen wek je ${zon.eigenOpwekKwh} kWh per jaar op`
        : `Met jouw ${lead.aantalZonnepanelen} zonnepanelen wek je ±${zon.eigenOpwekKwh} kWh per jaar op`;
    const terugverdienLabel =
      lead.jaarlijkseOpwekKwh && lead.jaarlijkseOpwekKwh > 0
        ? "met jouw zonnepanelen"
        : `met ${lead.aantalZonnepanelen} zonnepanelen`;

    return `
Berekende zonnepanelen-impact (gebruik deze cijfers exact, reken niet zelf opnieuw):
- Eigen stroomopwek: ${zon.eigenOpwekKwh} kWh per jaar
- Dekking van het stroomverbruik van de warmtepomp: ${zon.dekkingPercentage}%
- Extra besparing op de energierekening: €${zon.extraBesparingPerJaar} per jaar
- Terugverdientijd zonder zonnepanelen: ${advies.terugverdientijd}
- Terugverdientijd ${terugverdienLabel}: ${zon.terugverdientijdMetZon}

Verwerk dit in de indicatie met een zin in de vorm van:
"${opwekZin}. Daarmee dek je ±${zon.dekkingPercentage}% van het stroomverbruik van je warmtepomp. Dit bespaart je extra €${zon.extraBesparingPerJaar} per jaar."

Noem bij de terugverdientijd beide scenario's: "Terugverdientijd zonder zonnepanelen: ${advies.terugverdientijd}" en "Terugverdientijd ${terugverdienLabel}: ${zon.terugverdientijdMetZon}".`.trim();
  }

  if (lead.heeftZonnepanelen === "Nog niet, maar ik overweeg het") {
    const voorbeeld = berekenAdvies({
      woningtype: lead.woningtype ?? "",
      oppervlakte: lead.oppervlakte ?? "",
      bouwjaar: lead.bouwjaar ?? "",
      isolatie: lead.isolatie ?? "",
      huidigSysteem: lead.huidigSysteem ?? "",
      gasverbruik: lead.gasverbruik ?? 0,
      heeftZonnepanelen: "Ja",
      aantalZonnepanelen: 10,
    });
    const dekking = voorbeeld.zonnepanelen?.dekkingPercentage ?? 0;

    return `
Geef de volgende tip mee in de indicatie:
"Tip: Combineer je warmtepomp met zonnepanelen voor maximale besparing. Met 10 panelen dek je al ±${dekking}% van je stroomkosten."`.trim();
  }

  return "";
}

async function generateAdvies(lead: LeadData, subsidieInfo: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.warn("ANTHROPIC_API_KEY niet ingesteld, persoonlijke indicatie wordt overgeslagen");
    return null;
  }

  const zonnepanelenInfo = berekenZonnepanelenInfo(lead);

  const prompt = `Je bent de onafhankelijke warmtepomp-keuzehulp van warmtepomp.ai. Schrijf een persoonlijke, vriendelijke indicatie in het Nederlands voor onderstaande aanvrager, op basis van hun woninggegevens en de actuele ISDE-subsidie-informatie.

Gegevens van de aanvrager:
- Woningtype: ${lead.woningtype ?? "onbekend"}
- Oppervlakte: ${lead.oppervlakte ?? "onbekend"}
- Bouwjaar: ${lead.bouwjaar ?? "onbekend"}
- Energielabel: ${lead.energielabel ?? "onbekend"}
- Isolatieniveau: ${lead.isolatie ?? "onbekend"}
- Huidig verwarmingssysteem: ${lead.huidigSysteem ?? "onbekend"}${
    lead.cvKetelLeeftijd ? `\n- Leeftijd cv-ketel: ${lead.cvKetelLeeftijd}` : ""
  }${
    lead.overstapVoorkeur
      ? `\n- Voorkeur voor overstappen: ${
          lead.overstapVoorkeur === "volledig"
            ? "in één keer volledig elektrisch (van het gas af)"
            : "in stappen, eerst een hybride warmtepomp naast de cv-ketel"
        }`
      : ""
  }
- Geschat jaarlijks gasverbruik: ${lead.gasverbruik ? `${lead.gasverbruik} m³` : "onbekend"}
- Zonnepanelen: ${beschrijfZonnepanelen(lead)}
- Postcode: ${lead.postcode ?? "onbekend"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}
- Voorlopige indicatie uit de website-tool: ${lead.adviesType ?? "onbekend"}

Actuele ISDE-subsidie-informatie (afkomstig van rvo.nl):
${subsidieInfo}
${zonnepanelenInfo ? `\n${zonnepanelenInfo}\n` : ""}
Schrijf de indicatie als een stuk HTML (alleen de inhoud, geen <html>/<head>/<body> tags, gebruik <h2>, <p>, <ul>/<li> waar passend) met de volgende onderdelen:
1. Aanbevolen warmtepomp type voor deze situatie, met een korte onderbouwing
2. Geschatte kosten (aanschaf + installatie), als bandbreedte
3. Actuele ISDE-subsidie die van toepassing is
4. Geschatte maandelijkse besparing op de energierekening
5. Terugverdientijd (indicatie) — als er berekende zonnepanelen-cijfers zijn aangeleverd, noem dan beide scenario's (met en zonder zonnepanelen)

Belangrijke regels:
- Begin meteen met de inhoud van punt 1. Geen aanhef of begroeting (dus niet "Hallo", "Hoi [naam]", "Beste lezer" of iets dergelijks) en geen ondertekening of afsluitende groet aan het einde — dat staat al in de rest van de e-mail.
- Schrijf informeel en persoonlijk: gebruik altijd "je", "jij" en "jouw", nooit "u" of "uw". Geen corporate of stijve taal.
- Noem geen volgende stappen zoals zelf een installateur zoeken, het installateurregister, het STEK-keurmerk, de RVO-meldcodelijst, of het aanvragen van offertes — dat regelen wij voor de klant en staat al elders in de e-mail.
- Gebruik geen hyperlinks of verwijzingen naar andere websites.
- Schrijf in gewone, begrijpelijke taal, geen jargon. Wees eerlijk over dat het indicaties zijn. Houd het beknopt: maximaal 2-3 zinnen per onderdeel, behalve punt 5 als er twee terugverdientijd-scenario's genoemd moeten worden. Geef alleen de kale HTML terug, zonder markdown code block (geen \`\`\`).`;

  console.log("Anthropic API aanroepen voor persoonlijke indicatie...");

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
        ? `Persoonlijke indicatie ontvangen van Anthropic (${text.length} tekens)`
        : "Anthropic API gaf een lege indicatie terug"
    );

    return text || null;
  } catch (err) {
    console.error("Genereren van persoonlijke indicatie via Anthropic mislukt:", err);
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
          <h2 style="font-size: 18px; color: #0d1f16;">Jouw persoonlijke warmtepomp-indicatie</h2>
          ${advies}
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #5a7264; border-top: 1px solid #e5e5e5; padding-top: 12px;">
          Let op: subsidiebedragen kunnen wijzigen, deze indicatie is een schatting.
        </p>
      `
    : "";

  const wantsInstallateur = lead.wantsInstallateur ?? false;

  const subject = wantsInstallateur
    ? `Bedankt ${voornaam} — we gaan voor je aan de slag`
    : "Jouw warmtepomp-indicatie van warmtepomp.ai";

  const introTekst = wantsInstallateur
    ? "Hieronder vind je jouw warmtepomp-indicatie. We zoeken een passende installateur in jouw regio en nemen zo snel mogelijk contact op."
    : "Hieronder vind je jouw persoonlijke warmtepomp-indicatie. Geen verplichtingen, geen telefoontjes. Heb je vragen? Mail ons op info@warmtepomp.ai.";

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p>Hoi ${voornaam},</p>
      <p>${introTekst}</p>
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
      subject,
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

  const wantsInstallateur = lead.wantsInstallateur ?? false;
  const postcodeVeld = `${lead.postcode ?? "-"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}`;

  const subject = wantsInstallateur
    ? `🔥 Nieuwe lead: ${lead.voornaam ?? "Onbekend"} - ${lead.woningtype ?? "Onbekend"} - ${lead.postcode ?? "-"}`
    : `📧 Indicatie-aanvraag: ${lead.voornaam ?? "Onbekend"} - ${lead.postcode ?? "-"}`;

  const html = wantsInstallateur
    ? `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <ul>
        <li><strong>Naam:</strong> ${lead.voornaam ?? "-"}</li>
        <li><strong>Telefoon:</strong> ${lead.telefoon ?? "-"}</li>
        <li><strong>Email:</strong> ${lead.email ?? "-"}</li>
        <li><strong>Woningtype:</strong> ${lead.woningtype ?? "-"}</li>
        <li><strong>Oppervlakte:</strong> ${lead.oppervlakte ?? "-"}</li>
        <li><strong>Postcode:</strong> ${postcodeVeld}</li>
        <li><strong>Huidig systeem:</strong> ${lead.huidigSysteem ?? "-"}</li>
      </ul>
      <p style="margin-top: 24px; font-weight: bold;">Nieuwe offerte-aanvraag — volg op zodra je een installateur hebt.</p>
    </div>
  `
    : `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <ul>
        <li><strong>Naam:</strong> ${lead.voornaam ?? "-"}</li>
        <li><strong>Email:</strong> ${lead.email ?? "-"}</li>
        <li><strong>Woningtype:</strong> ${lead.woningtype ?? "-"}</li>
        <li><strong>Postcode:</strong> ${postcodeVeld}</li>
      </ul>
      <p style="margin-top: 24px; font-weight: bold;">Gebruiker wil alleen de indicatie per mail, geen installateur-koppeling.</p>
    </div>
  `;

  const to = "info@warmtepomp.ai";

  console.log(`Notificatiemail versturen naar ${to}...`);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
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
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    console.warn(`Rate limit overschreden voor ${ip}`);
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

  console.log("Nieuwe lead ontvangen:", data);

  if (!isLeadData(data)) {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const veldFouten = valideerLead(data);
  if (Object.keys(veldFouten).length > 0) {
    return NextResponse.json(
      {
        error: "Niet alle verplichte velden zijn correct ingevuld.",
        fields: veldFouten,
      },
      { status: 400 }
    );
  }

  {
    const subsidieInfo = await getRvoSubsidieInfo();
    const advies = await generateAdvies(data, subsidieInfo);
    const adviesResultaat = berekenAdvies({
      woningtype: data.woningtype ?? "",
      oppervlakte: data.oppervlakte ?? "",
      bouwjaar: data.bouwjaar ?? "",
      isolatie: data.isolatie ?? "",
      huidigSysteem: data.huidigSysteem ?? "",
      gasverbruik: data.gasverbruik ?? 0,
      heeftZonnepanelen: data.heeftZonnepanelen,
      aantalZonnepanelen: data.aantalZonnepanelen,
      jaarlijkseOpwekKwh: data.jaarlijkseOpwekKwh,
      overstapVoorkeur: data.overstapVoorkeur,
      cvKetelOuderDan15: data.cvKetelLeeftijd === "Ouder dan 15 jaar",
    });

    await Promise.all([
      sendConfirmationEmail(data, advies),
      sendNotificationEmail(data),
      pingIndexNow(),
      saveLead({ ...data, advies: adviesResultaat }),
    ]);
  }

  return NextResponse.json({ success: true });
}
