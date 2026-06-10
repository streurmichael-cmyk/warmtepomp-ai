import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  QuestionIcon,
  ShieldIcon,
  SubsidyIcon,
} from "@/components/icons";

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
  },
  {
    icon: ShieldIcon,
    title: "Hybride warmtepomp",
    amount: "Wisselend bedrag",
    description:
      "Voor een hybride warmtepomp, die je cv-ketel aanvult, geldt mogelijk een lager subsidiebedrag dan voor een volledig elektrische warmtepomp.",
    highlight: false,
  },
  {
    icon: QuestionIcon,
    title: "Overige types",
    amount: "Op aanvraag",
    description:
      "Voor bijvoorbeeld bodem- of water/water-warmtepompen gelden mogelijk andere bedragen en voorwaarden. Wij rekenen dit graag voor je uit.",
    highlight: false,
  },
];

export default function SubsidiePage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
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
                      ? "border-transparent bg-gradient-to-br from-green to-turquoise text-white shadow-[0_16px_48px_rgba(34,181,114,0.25)]"
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
                      item.highlight ? "text-white" : "text-green"
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
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-muted">
              * Genoemde bedragen zijn indicatief, gebaseerd op de huidige ISDE-regeling, en
              vormen geen garantie. Vraag altijd een persoonlijke berekening en de actuele
              voorwaarden op via RVO.nl.
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

        <section className="bg-green py-20 text-center sm:py-24">
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
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-green shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
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
