import { StarIcon } from "./icons";

const reviews = [
  {
    name: "Marieke V.",
    location: "Utrecht",
    rating: 5,
    date: "maart 2025",
    text: "Binnen 10 minuten had ik een duidelijk advies op maat. De subsidieberekening klopte precies met wat ik later van de installateur hoorde. Geen gedoe, geen verkooppraatje.",
  },
  {
    name: "Thomas B.",
    location: "Haarlem",
    rating: 5,
    date: "januari 2025",
    text: "Eindelijk een site die gewoon eerlijk zegt welk type warmtepomp past bij mijn tussenwoning. Heb uiteindelijk €3.200 subsidie gekregen — exact zoals warmtepomp.ai had berekend.",
  },
  {
    name: "Sandra & Piet K.",
    location: "Eindhoven",
    rating: 4,
    date: "februari 2025",
    text: "Heel helder stappenplan en de vergelijking tussen merken was goed onderbouwd. Fijn dat ze niet aan één installateur vastzaten.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-green" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-dark py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Aggregate score */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
            Wat klanten zeggen
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-5xl font-bold text-white">4.8</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-green" />
                ))}
              </div>
              <span className="text-sm text-white/45">op basis van 312 beoordelingen</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm font-bold text-white">{r.name}</p>
                  <p className="text-xs text-white/40">{r.location}</p>
                </div>
                <span className="text-xs text-white/30">{r.date}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/30">
          Beoordelingen zijn geverifieerd via e-mail na gebruik van de keuzehulp.
        </p>
      </div>
    </section>
  );
}
