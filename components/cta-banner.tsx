import Link from "next/link";
import { ArrowRight } from "./icons";

export function CtaBanner() {
  return (
    <section className="bg-action py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Benieuwd of het iets voor jou is?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/90">
          Het kost je 5 minuten — en niets, als je besluit niet verder te gaan.
        </p>
        <Link
          href="/vergelijk"
          className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-colors hover:bg-light-bg"
        >
          Start gratis check
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
