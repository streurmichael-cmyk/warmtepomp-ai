import Image from "next/image";
import { PostcodeInput } from "./postcode-input";

const stats = [
  { value: "€3.500", label: "max subsidie 2025" },
  { value: "Gratis", label: "installateurs vergelijken" },
  { value: "100%", label: "onafhankelijk advies" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient accent glows */}
      <div
        className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full bg-turquoise/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div className="text-center lg:text-left">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-green/25 bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-green">
            <span className="hero-badge-dot h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
            AI-gestuurde keuzehulp · gratis & vrijblijvend
          </p>

          <h1 className="font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-[3.6rem]">
            Vind de beste warmtepomp
            <br />
            voor{" "}
            <span className="bg-gradient-to-r from-green to-turquoise bg-clip-text text-transparent">
              jouw woning
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Geen chatbots, geen verkooppraatjes. Eerlijk en persoonlijk advies op
            basis van jouw situatie — inclusief actuele subsidie-informatie.
          </p>

          {/* Postcode input */}
          <div className="mt-10">
            <PostcodeInput />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(13,31,22,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200"
              alt="Moderne woning met een warmtepomp buitenunit"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-2xl bg-gradient-to-br from-green to-turquoise opacity-20 blur-2xl sm:block"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl border-t border-green/10 px-5 py-10 sm:px-8">
        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold tabular-nums text-green sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
