import Link from "next/link";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  QuestionIcon,
  ShieldIcon,
  SubsidyIcon,
} from "@/components/icons";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ISDE Subsidie warmtepomp 2026: tot €2.500 | warmtepomp.ai",
  description:
    "Alles over de ISDE-subsidie voor warmtepompen in 2026: hoogte van de bedragen per type, voorwaarden en hoe je de subsidie aanvraagt bij de RVO.",
  path: "/subsidie",
});

const voorwaarden = [
  "De warmtepomp wordt geplaatst in een bestaande woning of nieuwbouwwoning die voldoet aan de RVO-eisen.",
  "Installatie gebeurt door een erkend installatiebedrijf met de juiste certificering.",
  "De aanvraag wordt ingediend bij de RVO binnen de gestelde termijn na aanschaf.",
  "Subsidie is beschikbaar zolang het jaarlijkse subsidiebudget niet is uitgeput (op = op).",
];

const bedragen = [
  {
    icon: SubsidyIcon,
    title: "Lucht-water warmtepomp",
    amount: "Tot €2.500",
    description:
      "Het indicatieve maximumbedrag voor een lucht-water warmtepomp. De exacte hoogte hangt af van het vermogen van de installatie.",
    highlight: true,
    ctaHref: undefined as string | undefined,
    ctaLabel: undefined as string | undefined,
  },
  {
    icon: ShieldIcon,
    title: "Hybride warmtepomp",
    amount: "Wisselend bedrag",
    description:
      "Voor een hybride warmtepomp, die je cv-ketel aanvult, geldt mogelijk een lager subsidiebedrag dan voor een volledig elektrische warmtepomp.",
    highlight: false,
    ctaHref: undefined as string | undefined,
    ctaLabel: undefined as string | undefined,
  },
  {
    icon: QuestionIcon,
    title: "Overige types",
    amount: "Gratis berekening",
    description:
      "Voor bijvoorbeeld bodem- of water/water-warmtepompen gelden andere bedragen en voorwaarden, afhankelijk van het vermogen van de installatie. Vul de keuzehulp in en de tool berekent dit gratis en persoonlijk voor je.",
    highlight: false,
    ctaHref: "/vergelijk" as string | undefined,
    ctaLabel: "Vraag jouw berekening aan" as string | undefined,
  },
];

export default function SubsidiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "ISDE-subsidie warmtepomp 2026",
              description:
                "Alles over de ISDE-subsidie voor warmtepompen in 2026: hoogte van de bedragen per type, voorwaarden en hoe je de subsidie aanvraagt bij de RVO.",
              path: "/subsidie",
            }),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Subsidie", path: "/subsidie" }]} />
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Subsidie
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              ISDE-subsidie voor jouw warmtepomp
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Met de Investeringssubsidie Duurzame Energie en Klimaattransitie (ISDE) kun je
              mogelijk een flink deel van de aanschaf- en installatiekosten van je warmtepomp
              terugkrijgen.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Wat is de ISDE?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              De ISDE is een subsidieregeling van de Rijksoverheid die particulieren en
              bedrijven stimuleert om duurzame warmte-installaties aan te schaffen, zoals een
              warmtepomp. Als je voldoet aan de voorwaarden, kun je via de Rijksdienst voor
              Ondernemend Nederland (RVO) een tegemoetkoming aanvragen in de aanschaf- en
              installatiekosten.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Let op: de hoogte van de subsidie en de precieze voorwaarden kunnen jaarlijks
              wijzigen en zijn afhankelijk van onder andere het type warmtepomp, het vermogen
              en het beschikbare budget. De bedragen op deze pagina zijn indicatief.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Indicatie
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Hoeveel subsidie kun je ontvangen?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {bedragen.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                    item.highlight
                      ? "border-transparent bg-action text-white shadow-[0_16px_48px_rgba(34,181,114,0.25)]"
                      : "border-green/15 bg-light-bg hover:border-green/35"
                  }`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                      item.highlight ? "bg-white/20 text-white" : "bg-green/10 text-green"
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`font-display text-lg font-bold ${
                      item.highlight ? "text-white" : "text-dark"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 font-display text-2xl font-bold ${
                      item.highlight ? "text-white" : "text-green-ink"
                    }`}
                  >
                    {item.amount}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      item.highlight ? "text-white/85" : "text-muted"
                    }`}
                  >
                    {item.description}
                  </p>
                  {item.ctaHref && (
                    <Link
                      href={item.ctaHref}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-action hover:underline"
                    >
                      {item.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              ))}
            </div>

            <SubsidyDisclaimer className="mt-8" />

            <p className="mt-4 text-center text-xs text-muted">
              Benieuwd wat een warmtepomp je in totaal kost? Bekijk{" "}
              <Link href="/kosten" className="font-bold text-action hover:underline">
                mijn kostenoverzicht
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Voorwaarden voor subsidie
            </h2>
            <ul className="mt-6 space-y-4">
              {voorwaarden.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                  <span className="text-base leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benieuwd wat jij kunt besparen?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Beantwoord een paar vragen over je woning en ontvang direct een indicatie van je
              subsidie en de kosten van een warmtepomp.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Bereken jouw subsidie
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
