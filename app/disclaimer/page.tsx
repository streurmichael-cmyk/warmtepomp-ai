import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer | warmtepomp.ai",
  description:
    "Lees de disclaimer van warmtepomp.ai over de informatie op onze website, subsidiebedragen, prijsindicaties en onze rol als onafhankelijk platform.",
  path: "/disclaimer",
});

const sections = [
  {
    heading: "Indicatieve informatie",
    paragraphs: [
      "De informatie op warmtepomp.ai is met zorg samengesteld, maar is indicatief en onder voorbehoud. Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
    ],
  },
  {
    heading: "Subsidiebedragen",
    paragraphs: [
      "Genoemde subsidiebedragen, zoals de ISDE-subsidie, kunnen wijzigen. Voor de meest actuele en officiële bedragen en voorwaarden verwijzen we je naar rvo.nl.",
    ],
  },
  {
    heading: "Prijsindicaties",
    paragraphs: [
      "De prijzen die wij noemen zijn gemiddelden, gebaseerd op marktdata. Het zijn geen offertes en de uiteindelijke prijs kan per situatie verschillen.",
    ],
  },
  {
    heading: "Onafhankelijk platform",
    paragraphs: [
      "Warmtepomp.ai is een onafhankelijk platform en geen installateur. Wij voeren zelf geen installaties uit, maar helpen je verder richting gecertificeerde installateurs en bouwen aan een netwerk daarvan.",
    ],
  },
  {
    heading: "Hoe we verdienen",
    paragraphs: [
      "Warmtepomp.ai ontvangt een vergoeding van installateurs voor elke lead die wij doorverwijzen. Dit heeft geen invloed op de onafhankelijkheid van onze vergelijking en kost jou niets extra.",
    ],
  },
  {
    heading: "Aansprakelijkheid",
    paragraphs: [
      "Warmtepomp.ai is niet aansprakelijk voor beslissingen die je neemt op basis van de informatie op deze website. Voor een definitief advies en offerte raden we je aan contact op te nemen met een installateur.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Disclaimer
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Disclaimer
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Belangrijke informatie over het gebruik van warmtepomp.ai.
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
