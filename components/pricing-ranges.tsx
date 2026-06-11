import { ArrowRight, HomeIcon } from "./icons";
import Link from "next/link";

const ranges = [
  {
    type: "Tussenwoning",
    icon: HomeIcon,
    gross: "€7.000 – €9.500",
    afterSubsidy: "va. €3.500",
    ideal: "Hybride warmtepomp",
    note: "Meest gekozen",
    highlight: false,
  },
  {
    type: "Hoekwoning / 2-onder-1-kap",
    icon: HomeIcon,
    gross: "€8.500 – €11.000",
    afterSubsidy: "va. €5.000",
    ideal: "Lucht/water warmtepomp",
    note: "Populair",
    highlight: true,
  },
  {
    type: "Vrijstaande woning",
    icon: HomeIcon,
    gross: "€10.500 – €14.000",
    afterSubsidy: "va. €7.000",
    ideal: "Lucht/water of bodemwarmtepomp",
    note: "Meeste besparing",
    highlight: false,
  },
];

export function PricingRanges() {
  return (
    <section id="kosten" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
            Wat kost een warmtepomp?
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Eerlijke prijsindicatie per woningtype
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
            Inclusief installatie. Met de ISDE-subsidie betaal je aanzienlijk minder —
            wij berekenen jouw exacte voordeel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ranges.map((r) => (
            <div
              key={r.type}
              className={`relative rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                r.highlight
                  ? "border-transparent bg-gradient-to-br from-green to-turquoise shadow-[0_16px_48px_rgba(34,181,114,0.25)]"
                  : "border-green/15 bg-white hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
              }`}
            >
              {r.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-green">
                  {r.note}
                </span>
              )}

              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                  r.highlight ? "bg-white/20 text-white" : "bg-green/10 text-green"
                }`}
              >
                <r.icon className="h-6 w-6" />
              </div>

              <h3
                className={`font-display text-lg font-bold ${r.highlight ? "text-white" : "text-dark"}`}
              >
                {r.type}
              </h3>

              <div className="mt-5 space-y-2">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${r.highlight ? "text-white/70" : "text-muted/70"}`}>
                    Totaalprijs
                  </p>
                  <p className={`text-xl font-bold ${r.highlight ? "text-white" : "text-dark"}`}>
                    {r.gross}
                  </p>
                </div>
                <div className={`rounded-lg px-4 py-3 ${r.highlight ? "bg-white/15" : "bg-green/10"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${r.highlight ? "text-white/80" : "text-green/70"}`}>
                    Na ISDE-subsidie
                  </p>
                  <p className={`text-lg font-extrabold ${r.highlight ? "text-white" : "text-green"}`}>{r.afterSubsidy}</p>
                </div>
              </div>

              <p className={`mt-4 text-sm ${r.highlight ? "text-white/85" : "text-muted"}`}>
                Aanbevolen type:{" "}
                <span className={`font-semibold ${r.highlight ? "text-white" : "text-dark"}`}>
                  {r.ideal}
                </span>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Indicatieve prijzen incl. arbeidskosten, excl. BTW. De exacte prijs hangt af van jouw situatie.{" "}
          <Link href="/vergelijk" className="text-green underline underline-offset-2 hover:text-turquoise">
            Start de keuzehulp voor een persoonlijke berekening
          </Link>
          .
          <br />
          Bronnen: Milieu Centraal, Consumentenbond, RVO (2026). Subsidiebedragen zijn indicatief
          en onder voorbehoud van wijzigingen door RVO. Controleer actuele bedragen op
          rvo.nl/subsidies/isde.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/vergelijk"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-green to-turquoise px-8 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
          >
            Bereken mijn persoonlijke prijs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
