import Image from "next/image";
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
    text: "Heel helder stappenplan en het advies over welk type warmtepomp het beste paste was goed onderbouwd. Fijn dat ze me aan meerdere installateurs konden koppelen.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-green" : "text-green/15"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Photo + aggregate score */}
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(13,31,22,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              alt="Tevreden gezin thuis"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
              Wat klanten zeggen
            </p>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="font-display text-5xl font-bold text-dark">4.8</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-green" />
                  ))}
                </div>
                <span className="text-sm text-muted">op basis van 312 beoordelingen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-green/10 bg-light-bg p-7"
            >
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-green/10 pt-5">
                <div>
                  <p className="text-sm font-bold text-dark">{r.name}</p>
                  <p className="text-xs text-muted">{r.location}</p>
                </div>
                <span className="text-xs text-muted/70">{r.date}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          Beoordelingen zijn geverifieerd via e-mail na gebruik van de keuzehulp.
        </p>
      </div>
    </section>
  );
}
