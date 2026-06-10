import { PostcodeInput } from "./postcode-input";
import { StarIcon } from "./icons";

const stats = [
  { value: "€3.500", label: "max subsidie 2025" },
  { value: "40+", label: "merken vergeleken" },
  { value: "100%", label: "onafhankelijk advies" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[min(92vh,900px)] items-center overflow-hidden bg-dark">
      {/* Ambient glow */}
      <div
        className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-green/30 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[440px] w-[440px] rounded-full bg-turquoise/25 blur-[90px]"
        aria-hidden="true"
      />

      {/* Subtle radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden="true"
      />

      {/* Fine grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8">
        <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-green/35 bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-turquoise">
          <span className="hero-badge-dot h-1.5 w-1.5 rounded-full bg-turquoise" aria-hidden="true" />
          AI-gestuurde keuzehulp · gratis & vrijblijvend
        </p>

        <h1 className="font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
          Vind de beste warmtepomp
          <br />
          voor{" "}
          <span className="bg-gradient-to-r from-green to-turquoise bg-clip-text text-transparent">
            jouw woning
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          Geen chatbots, geen verkooppraatjes. Eerlijk en persoonlijk advies op
          basis van jouw situatie — inclusief actuele subsidie-informatie.
        </p>

        {/* Postcode input */}
        <div className="mt-10">
          <PostcodeInput />
        </div>

        {/* Social proof bar */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 text-green" />
            ))}
          </div>
          <span className="text-sm text-white/55">
            <span className="font-semibold text-white">4.8/5</span> · 312 klanten gingen je voor
          </span>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold tabular-nums text-turquoise sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
