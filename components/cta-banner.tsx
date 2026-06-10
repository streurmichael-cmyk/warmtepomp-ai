import Link from "next/link";
import { ArrowRight } from "./icons";

export function CtaBanner() {
  return (
    <section className="bg-green py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Klaar om te besparen op je energierekening?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
          Start gratis de keuzehulp en ontdek welke warmtepomp het beste bij jou past.
        </p>
        <Link
          href="/vergelijk"
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-green shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
        >
          Start nu — het is gratis
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
