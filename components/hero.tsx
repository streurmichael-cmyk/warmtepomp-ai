import Image from "next/image";
import { AddressLookupForm } from "./address-lookup-form";

const stats = [
  { value: "5 min", label: "tijd om je advies te krijgen" },
  { value: "Gratis", label: "geen kosten, geen verplichtingen" },
  { value: "100%", label: "onafhankelijk advies" },
];

type HeroVariant = {
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  subline: string;
};

const heroVariants: HeroVariant[] = [
  {
    // Variant 1 — voor twijfelaars
    badge: "Gratis & onafhankelijk advies",
    headlinePrefix: "Is een warmtepomp slim voor ",
    headlineHighlight: "jouw woning?",
    subline: "Eerlijk antwoord in 5 minuten. Geen verkooppraatje, geen verplichting.",
  },
  {
    // Variant 2 — voor beslissers
    badge: "Gratis & onafhankelijk advies",
    headlinePrefix: "Bespaar tot ",
    headlineHighlight: "€1.200 per jaar",
    headlineSuffix: " op je energierekening",
    subline: "Ontdek welke warmtepomp bij jouw woning past en hoeveel subsidie je krijgt.",
  },
  {
    // Variant 3 — voor sceptici
    badge: "Gratis & onafhankelijk advies",
    headlinePrefix: "Warmtepomp: ",
    headlineHighlight: "geschikt voor jou of niet?",
    subline: "We zeggen het eerlijk. Soms is het antwoord nee. Maar dan weet je het zeker.",
  },
];

/** Welke variant live staat. Wissel dit getal (0, 1 of 2) om een andere hero-tekst te tonen. */
const ACTIVE_HERO_VARIANT = 0;

export function Hero() {
  const variant = heroVariants[ACTIVE_HERO_VARIANT];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div className="text-center lg:text-left">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-green/25 bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-action">
            <span className="hero-badge-dot h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
            {variant.badge}
          </p>

          <h1 className="font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-[3.6rem]">
            {variant.headlinePrefix}
            <span className="bg-gradient-to-r from-green to-turquoise bg-clip-text text-transparent">
              {variant.headlineHighlight}
            </span>
            {variant.headlineSuffix}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-dark lg:mx-0">
            {variant.subline}
          </p>

          <AddressLookupForm />

          <p className="mx-auto mt-4 max-w-xl text-sm text-muted lg:mx-0">
            ✓ Geen registratie vereist · ✓ 100% gratis · ✓ Resultaat binnen 5 minuten
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="aspect-[4/3] max-h-[300px] overflow-hidden rounded-xl shadow-[0_24px_64px_rgba(13,31,22,0.15)] sm:max-h-none">
            <Image
              src="/images/hero-warmtepomp.webp"
              alt="Warmtepomp buitenunit naast een rijtjeswoning"
              width={1600}
              height={893}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl border-t border-green/10 px-5 py-10 sm:px-8">
        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold tabular-nums text-action sm:text-3xl">
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
