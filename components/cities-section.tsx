import Link from "next/link";
import { cities } from "@/lib/cities";
import { ArrowRight, MapPinIcon } from "./icons";

export function CitiesSection({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`${className} py-20 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl text-center sm:mx-auto">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Per stad
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Warmtepomp installateur zoeken per stad?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
            Bekijk gemiddelde kosten, ISDE-subsidie en gecertificeerde installateurs bij jou in
            de buurt.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/installateurs/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-green/10 bg-light-bg px-4 py-3.5 text-sm font-bold text-dark transition-all hover:-translate-y-0.5 hover:border-green/35 hover:shadow-[0_8px_24px_rgba(34,181,114,0.08)]"
            >
              <MapPinIcon className="h-4 w-4 flex-shrink-0 text-green" />
              <span className="flex-1">{city.name}</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-green" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
