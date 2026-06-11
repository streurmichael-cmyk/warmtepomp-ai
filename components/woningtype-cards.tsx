import Link from "next/link";
import { ArrowRight, BuildingIcon, HomeIcon } from "./icons";

const woningtypes = [
  {
    label: "Tussenwoning",
    icon: HomeIcon,
    woningtype: "Tussenwoning",
  },
  {
    label: "Hoekwoning / 2-onder-1-kap",
    icon: BuildingIcon,
    woningtype: "Hoekwoning",
  },
  {
    label: "Vrijstaande woning",
    icon: HomeIcon,
    woningtype: "Vrijstaand",
  },
];

export function WoningtypeCards() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {woningtypes.map((item) => (
        <Link
          key={item.label}
          href={`/vergelijk?woningtype=${encodeURIComponent(item.woningtype)}`}
          className="group flex items-center justify-between gap-3 rounded-xl border border-green/15 bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-[0_12px_32px_rgba(34,181,114,0.1)]"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green/10 text-green">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-bold text-dark">{item.label}</span>
          </span>
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-green opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}
