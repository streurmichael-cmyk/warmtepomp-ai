import Link from "next/link";
import { ArrowRight, ConversationIcon, FlameIcon, StarIcon } from "./icons";

const links = [
  {
    href: "/offerte",
    icon: ConversationIcon,
    title: "Offerte aanvragen",
    desc: "Vergelijk vrijblijvend tot 3 installateurs",
  },
  {
    href: "/beste-warmtepomp",
    icon: StarIcon,
    title: "Beste warmtepomp 2026",
    desc: "Onafhankelijke top 5 vergelijking",
  },
  {
    href: "/hybride-warmtepomp",
    icon: FlameIcon,
    title: "Hybride warmtepomp",
    desc: "Wanneer is het de slimste keuze?",
  },
];

export function RelatedLinks({ className = "bg-white py-20 sm:py-24" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Verder lezen
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Meer over warmtepompen
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between gap-3 rounded-2xl border border-green/10 bg-light-bg p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
            >
              <span>
                <l.icon className="mb-3 h-6 w-6 text-green" />
                <span className="block font-display text-base font-bold text-dark">{l.title}</span>
                <span className="block text-sm text-muted">{l.desc}</span>
              </span>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
