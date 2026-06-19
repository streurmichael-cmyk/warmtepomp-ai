import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { RelatedLinks } from "@/components/related-links";
import { TrustBar } from "@/components/trust-bar";
import { SavingsCalculator } from "@/components/savings-calculator";
import { ArrowRight, NetworkIcon, SubsidyIcon } from "@/components/icons";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wat kost een warmtepomp in 2026? | warmtepomp.ai",
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
  { type: "Hybride warmtepomp", bedrag: "Tot €2.300" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Wat kost een warmtepomp in 2026?",
              description:
                "Eerlijk overzicht van de kosten van een warmtepomp in 2026: aanschaf en installatie per type, ISDE-subsidie en je maandelijkse besparing berekenen.",
              path: "/kosten",
            }),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Kosten", path: "/kosten" }]} />
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full bg-turquoise/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Kosten
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Wat kost een warmtepomp écht?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Geen verborgen kosten, geen kleine lettertjes. Hier zie je precies wat je kunt
              verwachten — van aanschaf tot subsidie en maandelijkse besparing.
            </p>
            <SubsidyDisclaimer className="mx-auto mt-8 max-w-xl text-left" />
            <div className="mt-10 aspect-[16/9] max-h-[300px] overflow-hidden rounded-xl sm:max-h-none">
              <Image
                src="/images/stel-met-papieren.webp"
                alt="Stel dat thuis de energierekening en besparingen bekijkt"
                width={1200}
                height={675}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
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
                          <td className="px-5 py-3.5 text-green-ink sm:px-6">{item.bedrag}</td>
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
                Bekijk ook{" "}
                <Link href="/subsidie" className="font-bold text-action hover:underline">
                  mijn subsidiepagina
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Bereken het zelf
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat bespaar jij per maand?
              </h2>
            </div>

            <SavingsCalculator />
          </div>
        </section>

        <section id="kosten-per-maand" className="scroll-mt-24 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Per maand
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Warmtepomp kosten per maand
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Wat een warmtepomp je per maand kost, hangt vooral af van drie dingen: je
                stroomverbruik, de SCOP-waarde van de warmtepomp (hoe efficiënt hij warmte
                maakt) en het energietarief dat je betaalt. Hoe hoger de SCOP en hoe beter je
                woning is geïsoleerd, hoe lager je maandlasten.
              </p>
            </div>

            <div className="rounded-2xl border border-green/10 bg-light-bg p-8 sm:p-10">
              <h3 className="font-display text-lg font-bold text-dark">
                Rekenvoorbeeld
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Een redelijk geïsoleerde woning van circa 150 m² met een lucht-water warmtepomp
                met een SCOP van 4,0:
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-green/10 bg-white">
                <table className="w-full text-left text-sm">
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-5 py-3.5 font-bold text-dark sm:px-6">Stroomverbruik warmtepomp</td>
                      <td className="px-5 py-3.5 text-muted sm:px-6">± 3.500 kWh per jaar</td>
                    </tr>
                    <tr className="bg-light-bg">
                      <td className="px-5 py-3.5 font-bold text-dark sm:px-6">Energietarief</td>
                      <td className="px-5 py-3.5 text-muted sm:px-6">€0,25 per kWh</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-3.5 font-bold text-dark sm:px-6">Kosten per jaar</td>
                      <td className="px-5 py-3.5 text-muted sm:px-6">± €875</td>
                    </tr>
                    <tr className="bg-light-bg">
                      <td className="px-5 py-3.5 font-bold text-dark sm:px-6">Kosten per maand</td>
                      <td className="px-5 py-3.5 font-bold text-green-ink sm:px-6">± €73</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Ter vergelijking: een gemiddelde gasrekening voor verwarming en warm water ligt
                rond de <span className="font-bold text-dark">€150 – €180 per maand</span>. Een
                goed werkende warmtepomp in een geschikte woning is dus vaak fors voordeliger in
                gebruik.
              </p>
            </div>
            <p className="mt-4 text-xs text-muted">
              * Indicatief rekenvoorbeeld. Je werkelijke kosten hangen af van je woning,
              isolatie, stooktemperatuur en energiecontract.
            </p>
          </div>
        </section>

        <section id="bestaande-woning" className="scroll-mt-24 bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Bestaande woning
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Warmtepomp in bestaande woning
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Eerlijk verhaal: in een bestaande woning komt er vaak meer bij kijken dan alleen
                de warmtepomp zelf. Is je woning nog niet goed geïsoleerd, dan moet je rekening
                houden met extra kosten voor isolatie. Zonder die isolatie moet de warmtepomp op
                een hoge temperatuur stoken en lopen je maandlasten juist op.
              </p>
            </div>

            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <h3 className="font-display text-lg font-bold text-dark">Vuistregel isolatie</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-base leading-relaxed text-muted">
                    Voor een <span className="font-bold text-dark">hybride of lucht-water
                    warmtepomp</span> is minimaal energielabel C aan te raden.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-base leading-relaxed text-muted">
                    Voor een volledig <span className="font-bold text-dark">all-electric
                    warmtepomp</span> wil je richting energielabel A zitten.
                  </span>
                </li>
              </ul>
              <p className="mt-6 rounded-xl border border-green/10 bg-light-bg px-5 py-4 text-sm leading-relaxed text-muted">
                <span className="font-bold text-dark">Tip:</span> neem de meerkosten van isolatie
                altijd mee in je totaalberekening. Een warmtepomp die op papier goedkoop lijkt,
                kan in een slecht geïsoleerd huis alsnog tegenvallen. Reken het geheel door —
                isolatie én warmtepomp samen.
              </p>
            </div>
          </div>
        </section>

        <section id="onderhoudskosten" className="scroll-mt-24 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Onderhoud
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Onderhoudskosten warmtepomp
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Net als een cv-ketel heeft een warmtepomp periodiek onderhoud nodig. Reken op
                ongeveer <span className="font-bold text-dark">€150 – €300 per jaar</span> voor
                een jaarlijkse of tweejaarlijkse onderhoudsbeurt door een erkend installateur.
              </p>
            </div>

            <div className="rounded-2xl border border-green/10 bg-light-bg p-8 sm:p-10">
              <h3 className="font-display text-lg font-bold text-dark">
                Wat wordt er gecontroleerd?
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-base leading-relaxed text-muted">
                    Het koudemiddel en de werkdruk van het systeem.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-base leading-relaxed text-muted">
                    De filters, de buitenunit en de luchtstroom (reinigen waar nodig).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-base leading-relaxed text-muted">
                    De elektrische aansluitingen, de instellingen en de algehele werking.
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Ter vergelijking: ook het onderhoud van een cv-ketel kost gemiddeld
                <span className="font-bold text-dark"> €100 – €200 per jaar</span>. De
                onderhoudskosten van een warmtepomp zijn dus vergelijkbaar — geen verrassende
                extra post dus.
              </p>
            </div>
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
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-action hover:underline"
                  >
                    Meer informatie op warmtefonds.nl
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Tips
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Zo haal je het meeste uit je zonnepanelen
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Zonnepanelen verlagen de kosten van je warmtepomp maar beperkt — die verwarmt vooral in
                de winter, als je panelen weinig opwekken. Maar met deze twee gewoontes haal je er wél
                meer uit.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-green/10 bg-white p-7">
                <h3 className="font-display text-lg font-bold text-dark">
                  Gebruik grootverbruikers overdag
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Draai je wasmachine, droger en vaatwasser — en laad je elektrische auto — zoveel
                  mogelijk tussen 11:00 en 15:00 uur. Dan wekken je panelen het meest op en gebruik je je
                  eigen stroom direct, in plaats van &apos;m voor weinig terug te leveren. Werkt vooral
                  goed in de lente en zomer.
                </p>
              </div>
              <div className="rounded-2xl border border-green/10 bg-white p-7">
                <h3 className="font-display text-lg font-bold text-dark">
                  Overweeg een warmtepompboiler
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Een warmtepompboiler voor je warme water draait het hele jaar door, óók &apos;s zomers
                  als je panelen volop opwekken — dáár vullen zonnepanelen en warmtepomptechniek elkaar
                  wél aan. En hij is flink goedkoper in gebruik dan warm water maken met gas.
                </p>
              </div>
            </div>

            <p className="mt-6 rounded-xl border border-green/10 bg-white px-5 py-4 text-sm leading-relaxed text-muted">
              <span className="font-bold text-dark">Eerlijke kanttekening:</span> voor de ruimteverwarming
              geldt dit niet. Je warmtepomp verwarmt vooral in de winter, als je panelen weinig opleveren —
              reken daar dus niet op.
            </p>
          </div>
        </section>

        <RelatedLinks />

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereken jouw persoonlijke besparing
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Vul een paar gegevens over je woning in en ontvang een indicatie op maat, inclusief
              kosten, subsidie en besparing.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
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
