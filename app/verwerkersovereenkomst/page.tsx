import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Verwerkersovereenkomst | warmtepomp.ai",
  description:
    "Hoe warmtepomp.ai afspraken vastlegt met partijen die persoonsgegevens namens mij verwerken, zoals mijn e-maildienst en gecertificeerde installateurs.",
  path: "/verwerkersovereenkomst",
});

const sections = [
  {
    heading: "Wat is een verwerkersovereenkomst",
    paragraphs: [
      "Warmtepomp.ai is volgens de Algemene Verordening Gegevensbescherming (AVG) de verwerkingsverantwoordelijke voor de persoonsgegevens die je via mijn website met mij deelt. Voor diensten die namens mij gegevens verwerken — zoals het versturen van e-mails — sluit ik een verwerkersovereenkomst af. Daarin leg ik vast hoe die partij met jouw gegevens mag omgaan.",
    ],
  },
  {
    heading: "Met wie heb ik een verwerkersovereenkomst",
    paragraphs: [
      "Resend: mijn e-maildienst, die namens mij de bevestigings- en notificatiemails verstuurt die horen bij jouw aanvraag. Resend verwerkt hierbij je naam en e-mailadres, uitsluitend om deze e-mails te kunnen afleveren.",
      "Mijn hostingpartij (Vercel) en databaseleverancier: zij slaan de gegevens op die nodig zijn om mijn website te laten draaien, waaronder de versleutelde aanvraaggegevens.",
    ],
  },
  {
    heading: "Wat staat er in deze afspraken",
    paragraphs: [
      "Doel en duur: de verwerker mag gegevens uitsluitend gebruiken voor het doel dat ik heb afgesproken (zoals het versturen van een e-mail), en niet langer dan nodig is voor dat doel.",
      "Vertrouwelijkheid en beveiliging: de verwerker treft passende technische en organisatorische maatregelen om gegevens te beschermen tegen verlies of onrechtmatige toegang. Bij mij gebeurt dit onder andere door naam, e-mailadres en telefoonnummer versleuteld op te slaan (AES-256).",
      "Sub-verwerkers: als de verwerker zelf weer andere partijen inschakelt, gebeurt dit alleen met mijn toestemming en onder dezelfde voorwaarden.",
      "Meewerken aan jouw rechten: de verwerker werkt mee als jij gebruikmaakt van je AVG-rechten, zoals inzage, correctie of verwijdering van je gegevens.",
      "Datalekken: bij een (mogelijk) datalek meldt de verwerker dit direct aan mij, zodat ik kan voldoen aan mijn wettelijke meldplicht.",
      "Na afloop: zodra de overeenkomst eindigt of de gegevens niet langer nodig zijn, worden ze verwijderd of aan mij geretourneerd.",
    ],
  },
  {
    heading: "Gecertificeerde installateurs",
    paragraphs: [
      "Wanneer je aangeeft in contact te willen komen met een installateur, deel ik jouw gegevens met gecertificeerde installateurs uit mijn netwerk. Zij gebruiken deze gegevens om contact met je op te nemen voor een offerte en worden voor die verwerking zelf verwerkingsverantwoordelijke. Met elke installateur in mijn netwerk maak ik afspraken over een zorgvuldige en AVG-conforme omgang met jouw gegevens.",
    ],
  },
  {
    heading: "Meer weten",
    paragraphs: [
      "Lees ook mijn privacyverklaring voor een overzicht van welke gegevens ik verzamel, hoe lang ik ze bewaar en welke rechten je hebt. Heb je vragen over deze verwerkersovereenkomst? Mail mij op info@warmtepomp.ai.",
    ],
  },
];

export default function VerwerkersovereenkomstPage() {
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
              Verwerkersovereenkomst
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Een overzicht van de afspraken die ik maak met partijen die namens mij
              persoonsgegevens verwerken.
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
