import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacyverklaring | warmtepomp.ai",
  description:
    "Lees hoe warmtepomp.ai omgaat met jouw persoonsgegevens: welke gegevens we verzamelen, waarvoor we ze gebruiken en welke rechten je hebt.",
  path: "/privacy",
});

const sections = [
  {
    heading: "Wie is verantwoordelijk",
    paragraphs: [
      "Warmtepomp.ai is een onafhankelijk platform van Michael Streur. Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals beschreven in deze privacyverklaring.",
      "Heb je vragen over je gegevens? Mail ons op info@warmtepomp.ai.",
    ],
  },
  {
    heading: "Welke gegevens verzamelen we",
    paragraphs: [
      "Wanneer je het formulier op onze website invult, vragen we om de volgende gegevens: je naam, e-mailadres, telefoonnummer, postcode en woningtype.",
      "We verzamelen alleen de gegevens die nodig zijn om je goed te kunnen helpen.",
    ],
  },
  {
    heading: "Waarvoor gebruiken we je gegevens",
    paragraphs: [
      "We gebruiken jouw gegevens om je te koppelen aan gecertificeerde installateurs bij jou in de buurt en om je persoonlijke advies per e-mail te sturen.",
      "We gebruiken je gegevens niet voor andere doeleinden dan hierboven beschreven, en we sturen je geen ongevraagde reclame.",
    ],
  },
  {
    heading: "Hoe lang bewaren we je gegevens",
    paragraphs: [
      "We bewaren jouw gegevens niet langer dan nodig is, en in ieder geval niet langer dan 12 maanden na jouw laatste contact met ons.",
    ],
  },
  {
    heading: "Delen we jouw gegevens",
    paragraphs: [
      "Ja. Om je te kunnen koppelen aan een geschikte installateur, delen we jouw gegevens met gecertificeerde installateurs uit ons netwerk, zodat zij contact met je kunnen opnemen voor een offerte.",
      "We verkopen jouw gegevens nooit aan derden.",
    ],
  },
  {
    heading: "Jouw rechten",
    paragraphs: [
      "Je hebt altijd het recht om in te zien welke gegevens we van je hebben, deze te laten corrigeren of te laten verwijderen.",
      "Wil je hier gebruik van maken? Stuur een e-mail naar info@warmtepomp.ai en we helpen je zo snel mogelijk.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "Warmtepomp.ai gebruikt alleen functionele cookies die nodig zijn om de website goed te laten werken. We gebruiken geen tracking- of advertentiecookies.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Privacy
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Privacyverklaring
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Hier lees je in begrijpelijke taal hoe wij omgaan met jouw persoonsgegevens.
            </p>
            <p className="mt-2 text-sm text-muted">Laatst bijgewerkt: juni 2026</p>
          </div>
        </section>

        <section className="bg-light-bg py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10"
                >
                  <h2 className="font-display text-xl font-bold tracking-tight text-dark sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="text-base leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
