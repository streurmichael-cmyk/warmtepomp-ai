import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacyverklaring | warmtepomp.ai",
  description:
    "Lees hoe warmtepomp.ai omgaat met jouw persoonsgegevens: welke gegevens ik verzamel, waarvoor ik ze gebruik en welke rechten je hebt.",
  path: "/privacy",
});

type PrivacySection = {
  heading: string;
  paragraphs: ReactNode[];
};

const sections: PrivacySection[] = [
  {
    heading: "Wie is verantwoordelijk",
    paragraphs: [
      "warmtepomp.ai is een onafhankelijk platform van Michael Streur. Ik ben verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals beschreven in deze privacyverklaring.",
      "Heb je vragen over je gegevens? Mail mij op info@warmtepomp.ai.",
    ],
  },
  {
    heading: "Welke gegevens verzamel ik",
    paragraphs: [
      "Wanneer je het formulier op mijn website invult, vraag ik om de volgende gegevens: je naam, e-mailadres, telefoonnummer, postcode en woningtype.",
      "Ik verzamel alleen de gegevens die nodig zijn om je goed te kunnen helpen.",
    ],
  },
  {
    heading: "Waarvoor gebruik ik je gegevens",
    paragraphs: [
      "Ik gebruik jouw gegevens om je te koppelen aan gecertificeerde installateurs bij jou in de buurt en om je persoonlijke indicatie per e-mail te sturen.",
      "Ik gebruik je gegevens niet voor andere doeleinden dan hierboven beschreven, en ik stuur je geen ongevraagde reclame.",
    ],
  },
  {
    heading: "Hoe lang bewaar ik je gegevens",
    paragraphs: [
      "Ik bewaar je aanvraaggegevens (naam, e-mailadres, telefoonnummer, postcode en woninggegevens) maximaal 3 maanden.",
      "Ben je via mij gekoppeld aan een installateur, dan bewaar ik je gegevens tot maximaal 1 jaar na die koppeling, zodat ik kan nagaan of alles goed is verlopen.",
      "Na deze termijn worden je gegevens automatisch en permanent verwijderd.",
    ],
  },
  {
    heading: "Hoe beveilig ik je gegevens",
    paragraphs: [
      "Je naam, e-mailadres en telefoonnummer worden versleuteld opgeslagen in mijn database (AES-256), zodat deze ook bij ongeautoriseerde toegang niet leesbaar zijn.",
    ],
  },
  {
    heading: "Deel ik jouw gegevens",
    paragraphs: [
      "Ja. Om je te kunnen koppelen aan een geschikte installateur, deel ik jouw gegevens met gecertificeerde installateurs uit mijn netwerk, zodat zij contact met je kunnen opnemen voor een offerte.",
      "Daarnaast gebruikt mijn e-maildienst Resend je naam en e-mailadres om de indicatie- en notificatiemails te versturen die bij je aanvraag horen.",
      "Ik verkoop jouw gegevens nooit aan derden voor marketingdoeleinden.",
      <>
        Lees in mijn{" "}
        <Link href="/verwerkersovereenkomst" className="font-bold text-action hover:underline">
          verwerkersovereenkomst
        </Link>{" "}
        meer over de afspraken die ik met deze partijen maak.
      </>,
    ],
  },
  {
    heading: "Jouw rechten",
    paragraphs: [
      "Je hebt altijd het recht om in te zien welke gegevens ik van je heb, deze te laten corrigeren of te laten verwijderen.",
      "Wil je hier gebruik van maken? Stuur een e-mail naar info@warmtepomp.ai en ik help je zo snel mogelijk.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "warmtepomp.ai gebruikt functionele cookies die nodig zijn om de website goed te laten werken.",
      "Voor websitestatistieken gebruik ik Vercel Web Analytics. Dit is privacy-vriendelijk en cookieloos: het plaatst geen tracking-cookies en verzamelt geen persoonsgegevens waarmee je individueel te identificeren bent.",
      "Om spam en misbruik van mijn formulieren tegen te gaan, gebruik ik Google reCAPTCHA Enterprise. Deze dienst van Google plaatst cookies en verwerkt gegevens — zoals je IP-adres en je interactie met de pagina — om echte bezoekers van geautomatiseerde bots te onderscheiden. Op die verwerking zijn de voorwaarden en het privacybeleid van Google van toepassing.",
      "Ik gebruik geen advertentiecookies en verkoop je gegevens niet.",
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
              Hier lees je in begrijpelijke taal hoe ik omga met jouw persoonsgegevens.
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
