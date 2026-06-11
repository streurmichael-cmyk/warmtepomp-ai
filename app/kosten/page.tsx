import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { SavingsCalculator } from "@/components/savings-calculator";
import { ArrowRight, NetworkIcon, SubsidyIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wat kost een warmtepomp in 2026? Eerlijk overzicht | warmtepomp.ai",
  description:
    "Eerlijk overzicht van de kosten van een warmtepomp in 2026: aanschaf en installatie per type, ISDE-subsidie en je maandelijkse besparing berekenen.",
  path: "/kosten",
});

const kosten = [
  { type: "Lucht-water warmtepomp", bedrag: "€6.000 – €12.000" },
  { type: "Hybride warmtepomp", bedrag: "€3.500 – €7.000" },
  { type: "Bodem-water warmtepomp", bedrag: "€12.000 – €20.000" },
  { type: "Lucht-lucht warmtepomp", bedrag: "€2.000 – €5.000" },
];

const subsidieBedragen = [
  { type: "Lucht-water warmtepomp", bedrag: "Tot €2.500" },
  { type: "Hybride warmtepomp", bedrag: "Wisselend bedrag" },
  { type: "Bodem-water warmtepomp", bedrag: "Op aanvraag" },
  { type: "Lucht-lucht warmtepomp", bedrag: "Meestal niet" },
];

const aanvraagStappen = [
  "Schaf een warmtepomp aan en laat hem installeren door een erkend installateur.",
  "Verzamel de offerte, factuur en betaalbewijs.",
  "Dien je aanvraag binnen 12 maanden na installatie in via mijn.rvo.nl.",
];

export default function KostenPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full bg-turquoise/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
              Kosten
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Wat kost een warmtepomp écht?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Geen verborgen kosten, geen kleine lettertjes. Hier zie je precies wat je kunt
              verwachten — van aanschaf tot subsidie en maandelijkse besparing.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
                Aanschaf en installatie
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Kosten per type warmtepomp
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-green/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">Type</th>
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">
                      Inclusief installatie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kosten.map((item, i) => (
                    <tr key={item.type} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                      <td className="px-5 py-4 font-bold text-dark sm:px-6">{item.type}</td>
                      <td className="px-5 py-4 text-muted sm:px-6">{item.bedrag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">
              * Bedragen zijn indicatief en zijn afhankelijk van je woning, het vermogen van de
              warmtepomp en de installateur.
              <br />
              Bronnen: Milieu Centraal, Consumentenbond, RVO (2026).
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
                Subsidie
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                ISDE-subsidie uitgelegd
              </h2>
            </div>

            <div className="rounded-2xl border border-green/10 bg-light-bg p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <SubsidyIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark">Wat is ISDE?</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    De ISDE (Investeringssubsidie Duurzame Energie en Klimaattransitie) is een
                    subsidie van de overheid die een deel van de kosten van je warmtepomp
                    vergoedt.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-dark">
                  Hoeveel kun je krijgen?
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-green/10 bg-white">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {subsidieBedragen.map((item, i) => (
                        <tr
                          key={item.type}
                          className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}
                        >
                          <td className="px-5 py-3.5 font-bold text-dark sm:px-6">
                            {item.type}
                          </td>
                          <td className="px-5 py-3.5 text-green sm:px-6">{item.bedrag}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-dark">Hoe vraag je het aan?</h3>
                <ol className="mt-4 space-y-3">
                  {aanvraagStappen.map((stap, i) => (
                    <li key={stap} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">{stap}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="mt-8 text-xs text-muted">
                Bedragen zijn indicatief en onder voorbehoud van wijzigingen door RVO. Controleer
                actuele bedragen op{" "}
                <a
                  href="https://www.rvo.nl/subsidies-financiering/isde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-green hover:underline"
                >
                  rvo.nl/subsidies/isde
                </a>{" "}
                of bekijk{" "}
                <Link href="/subsidie" className="font-bold text-green hover:underline">
                  onze subsidiepagina
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
                Bereken het zelf
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat bespaar jij per maand?
              </h2>
            </div>

            <SavingsCalculator />
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/10 bg-light-bg p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <NetworkIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-dark">
                    Financiering via Warmtefonds
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Heb je niet meteen het volledige bedrag beschikbaar? Via het Nationaal
                    Warmtefonds kun je tegen een lage rente lenen voor je warmtepomp en andere
                    verduurzamingsmaatregelen — vaak zonder dat je vooraf hoeft te betalen.
                  </p>
                  <a
                    href="https://www.warmtefonds.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-green hover:underline"
                  >
                    Meer informatie op warmtefonds.nl
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereken jouw persoonlijke besparing
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Vul een paar gegevens over je woning in en ontvang een advies op maat, inclusief
              kosten, subsidie en besparing.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-green shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Bereken jouw persoonlijke besparing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
