import Link from "next/link";
import { BuildingIcon, HomeIcon } from "./icons";

const woningtypes = [
  { label: "Tussenwoning", icon: HomeIcon, woningtype: "Tussenwoning" },
  { label: "Hoekwoning", icon: HomeIcon, woningtype: "Hoekwoning" },
  { label: "Twee-onder-een-kap", icon: HomeIcon, woningtype: "Twee-onder-een-kap" },
  { label: "Vrijstaande woning", icon: HomeIcon, woningtype: "Vrijstaand" },
  { label: "Appartement", icon: BuildingIcon, woningtype: "Appartement" },
];

export function WoningtypeCards() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {woningtypes.map((item) => (
        <Link
          key={item.label}
          href={`/vergelijk?woningtype=${encodeURIComponent(item.woningtype)}`}
          className="group flex min-h-[4.75rem] flex-col items-center justify-center gap-2 rounded-xl border border-green/15 bg-white px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-green hover:shadow-[0_12px_32px_rgba(34,181,114,0.1)]"
        >
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
            <item.icon className="h-4 w-4" />
          </span>
          <span className="font-display text-xs font-bold leading-tight text-dark">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
