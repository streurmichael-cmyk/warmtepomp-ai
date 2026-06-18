import Link from "next/link";
import { ArrowRight, FlameIcon, GroundIcon, SnowflakeIcon } from "./icons";

const levertijden = [
  {
    type: "Lucht-water warmtepomp",
    icon: SnowflakeIcon,
    duur: "4 – 8 weken",
    detail: "Levering van het apparaat 2–4 weken, daarna de installatie inplannen 2–4 weken.",
  },
  {
    type: "Hybride warmtepomp",
    icon: FlameIcon,
    duur: "3 – 6 weken",
    detail: "Meestal het snelst leverbaar en in te plannen, omdat je cv-ketel blijft hangen.",
  },
  {
    type: "Bodem-water warmtepomp",
    icon: GroundIcon,
    duur: "8 – 16 weken",
    detail: "Extra tijd vanwege de boorvergunning en het inplannen van een boorbedrijf.",
  },
];

const stappen = [
  "Offertes aanvragen en vergelijken (reken op 1–2 weken).",
  "Installateur kiezen en een installatiedatum plannen.",
  "Eventueel eerst isolatie regelen — dat haalt het meeste uit je warmtepomp.",
  "Installatie van de warmtepomp (gemiddeld 1–2 dagen).",
];

export function LevertijdenBlok({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-green/15 bg-white p-6 sm:p-7 ${className}`}>
      <h2 className="font-display text-lg font-bold text-dark sm:text-xl">
        Wanneer kan ik een warmtepomp laten installeren?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Een eerlijke verwachting van de planning voorkomt verrassingen. Hoe lang je wacht hangt
        vooral af van het type warmtepomp, het seizoen en hoe druk de installateurs in jouw regio
        het hebben.
      </p>

      <div className="mt-5 space-y-3">
        {levertijden.map((r) => (
          <div
            key={r.type}
            className="flex items-start gap-4 rounded-xl border border-green/15 p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
              <r.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-base font-bold text-dark">{r.type}</h3>
                <span className="text-sm font-bold text-green">{r.duur}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-green/15 bg-action/5 p-4 sm:p-5">
        <p className="text-sm font-bold text-dark">Houd rekening met het seizoen</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          De drukste periode is <span className="font-semibold text-dark">september–november</span>,
          als veel mensen vóór de winter willen overstappen — reken dan op langere wachttijden. De
          rustigste periode is <span className="font-semibold text-dark">januari–februari</span>; dan
          kun je vaak sneller terecht.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-dark">Zo ziet je planning er stap voor stap uit</p>
        <ol className="mt-3 space-y-3">
          {stappen.map((stap, i) => (
            <li key={stap} className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-muted">{stap}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-light">
        Let op: deze levertijden zijn indicatief en kunnen afwijken afhankelijk van je regio en de
        drukte bij de installateur.
      </p>

      <div className="mt-6">
        <Link
          href="/vergelijk"
          className="inline-flex items-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
        >
          Start de keuzehulp
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
