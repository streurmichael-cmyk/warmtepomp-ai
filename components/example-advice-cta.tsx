import Link from "next/link";
import { ArrowRight, FlameIcon } from "./icons";

export function ExampleAdviceCta() {
  return (
    <section className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-action">
          <FlameIcon className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
          Zo ziet jouw indicatie eruit
        </h2>
        <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted">
          Benieuwd wat je krijgt? Bekijk een voorbeeldindicatie voor een tussenwoning van 95&nbsp;m².
        </p>
        <Link
          href="/voorbeeld-advies"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-action px-8 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
        >
          Bekijk voorbeeldindicatie
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
