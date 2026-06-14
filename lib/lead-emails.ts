import { Resend } from "resend";

export type NotificationLead = {
  voornaam: string;
  email: string;
  telefoon: string | null;
  woningtype: string | null;
  postcode: string | null;
  huisnummer?: string | null;
};

/**
 * Stuurt de interne notificatiemail naar info@ voor een lead. Wordt pas
 * aangeroepen nadat de aanvrager zijn e-mailadres heeft bevestigd (double
 * opt-in), zodat het team alleen geverifieerde leads opvolgt. Of de aanvrager
 * gekoppeld wil worden aan een installateur leiden we af uit de aanwezigheid
 * van een telefoonnummer.
 */
export async function sendLeadNotification(lead: NotificationLead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY niet ingesteld, notificatiemail wordt overgeslagen");
    return;
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "Warmtepomp.ai <noreply@warmtepomp.ai>";
  const wantsInstallateur = Boolean(lead.telefoon);
  const postcodeVeld = `${lead.postcode ?? "-"}${lead.huisnummer ? ` ${lead.huisnummer}` : ""}`;

  const subject = wantsInstallateur
    ? `🔥 Bevestigde lead: ${lead.voornaam} - ${lead.woningtype ?? "Onbekend"} - ${lead.postcode ?? "-"}`
    : `📧 Bevestigde indicatie-aanvraag: ${lead.voornaam} - ${lead.postcode ?? "-"}`;

  const html = wantsInstallateur
    ? `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p style="font-weight: bold; color: #0e7a4f;">✅ E-mailadres bevestigd door de aanvrager.</p>
      <ul>
        <li><strong>Naam:</strong> ${lead.voornaam}</li>
        <li><strong>Telefoon:</strong> ${lead.telefoon ?? "-"}</li>
        <li><strong>Email:</strong> ${lead.email}</li>
        <li><strong>Woningtype:</strong> ${lead.woningtype ?? "-"}</li>
        <li><strong>Postcode:</strong> ${postcodeVeld}</li>
      </ul>
      <p style="margin-top: 24px; font-weight: bold;">Nieuwe offerte-aanvraag — volg op zodra je een installateur hebt.</p>
    </div>
  `
    : `
    <div style="font-family: sans-serif; color: #1a1a1a; line-height: 1.6;">
      <p style="font-weight: bold; color: #0e7a4f;">✅ E-mailadres bevestigd door de aanvrager.</p>
      <ul>
        <li><strong>Naam:</strong> ${lead.voornaam}</li>
        <li><strong>Email:</strong> ${lead.email}</li>
        <li><strong>Woningtype:</strong> ${lead.woningtype ?? "-"}</li>
        <li><strong>Postcode:</strong> ${postcodeVeld}</li>
      </ul>
      <p style="margin-top: 24px; font-weight: bold;">Gebruiker wil alleen de indicatie per mail, geen installateur-koppeling.</p>
    </div>
  `;

  const to = "info@warmtepomp.ai";
  console.log(`Notificatiemail (bevestigd) versturen naar ${to}...`);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({ from, to, subject, html });
    if (error) {
      console.error("Versturen van notificatiemail mislukt:", error);
    } else {
      console.log(`Notificatiemail verstuurd naar ${to} (id: ${data?.id})`);
    }
  } catch (err) {
    console.error("Versturen van notificatiemail mislukt:", err);
  }
}
