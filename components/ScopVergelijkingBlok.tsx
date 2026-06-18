import Link from "next/link";
import { ArrowRight, BoltIcon, FlameIcon, GroundIcon, SnowflakeIcon } from "./icons";

const categorieen = [
  { range: "Lager dan 3,5", oordeel: "Ondergemiddeld" },
  { range: "3,5 – 4,2", oordeel: "Gemiddeld (meeste lucht-water pompen)" },
  { range: "4,2 – 5,0", oordeel: "Goed" },
  { range: "Hoger dan 5,0", oordeel: "Uitstekend (beste bodem-water pompen)" },
];

const perType = [
  { type: "Lucht-lucht warmtepomp", icon: BoltIcon, scop: "2,5 – 3,5" },
  { type: "Lucht-water warmtepomp", icon: SnowflakeIcon, scop: "3,0 – 4,5" },
  { type: "Hybride warmtepomp", icon: FlameIcon, scop: "3,5 – 4,5 (op warmtepompdeel)" },
  { type: "Bodem-water warmtepomp", icon: GroundIcon, scop: "4,0 – 6,0" },
];

export function ScopVergelijkingBlok({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-green/15 bg-white p-6 sm:p-7 ${className}`}>
      <h2 className="font-display text-lg font-bold text-dark sm:text-xl">
        Wat is SCOP en waarom maakt het uit?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        SCOP staat voor <span className="font-semibold text-dark">Seasonal Coefficient of
        Performance</span>: hoeveel kWh warmte een warmtepomp gemiddeld over het hele jaar maakt
        per kWh stroom. Een SCOP van 4,0 betekent dus dat de pomp uit 1 kWh stroom zo&apos;n 4 kWh
        warmte haalt. Hoe hoger de SCOP, hoe efficiënter — en hoe lager je stroomrekening.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-green/15">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-dark text-white">
              <th className="px-4 py-3 font-display text-sm font-bold sm:px-5">SCOP-waarde</th>
              <th className="px-4 py-3 font-display text-sm font-bold sm:px-5">Beoordeling</th>
            </tr>
          </thead>
          <tbody>
            {categorieen.map((c, i) => (
              <tr key={c.range} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                <td className="px-4 py-3 font-bold text-dark sm:px-5">{c.range}</td>
                <td className="px-4 py-3 text-muted sm:px-5">{c.oordeel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted-light">Bron: RVO (SCOP-categorieën, 2026).</p>

      <div className="mt-5 rounded-xl border border-green/15 bg-action/5 p-4 sm:p-5">
        <p className="text-sm font-bold text-dark">Rekenvoorbeeld: wat scheelt een hogere SCOP?</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Stel: je woning heeft <span className="font-semibold text-dark">10.000 kWh warmte</span>{" "}
          per jaar nodig, bij een stroomtarief van{" "}
          <span className="font-semibold text-dark">€0,25/kWh</span>.
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
            <span>
              <span className="font-semibold text-dark">SCOP 4,0</span> → 2.500 kWh stroom →{" "}
              <span className="font-semibold text-dark">€625 per jaar</span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
            <span>
              <span className="font-semibold text-dark">SCOP 5,0</span> → 2.000 kWh stroom →{" "}
              <span className="font-semibold text-dark">€500 per jaar</span>
            </span>
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Een SCOP die 1 punt hoger ligt scheelt hier dus zo&apos;n{" "}
          <span className="font-bold text-dark">€125 per jaar</span> — elk jaar opnieuw.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-dark">SCOP-bereik per type warmtepomp</p>
        <div className="mt-3 space-y-3">
          {perType.map((r) => (
            <div
              key={r.type}
              className="flex items-center gap-4 rounded-xl border border-green/15 p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                <r.icon className="h-5 w-5" />
              </div>
              <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display text-base font-bold text-dark">{r.type}</h3>
                <span className="text-sm font-bold text-green">SCOP {r.scop}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-light">
        Let op: de SCOP is gemeten onder standaard testomstandigheden. Je werkelijke verbruik hangt
        af van je woning, isolatie, stooktemperatuur en gebruik — zie de SCOP dus als
        vergelijkingsmaatstaf tussen toestellen, niet als een gegarandeerde besparing.
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
