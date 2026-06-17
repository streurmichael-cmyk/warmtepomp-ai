import { CheckCircleIcon } from "./icons";

// Lange transparantieversie over het verdienmodel. Tekst staat hier hardcoded;
// kan later naar Sanity verhuizen zodra de pagina's hun content uit Sanity halen.
const points = [
  "Je zit nergens aan vast. Je beslist zelf of en met wie je verdergaat.",
  "Mijn vergelijking is niet gekleurd door welk merk een installateur toevallig voert.",
  "Ik werk alleen samen met installateurs die aan mijn eisen voldoen — verdwijnt de kwaliteit, dan verdwijnt de samenwerking.",
];

export function RevenueTransparency({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-green/10 bg-white p-8 sm:p-10 ${className}`}>
      <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
        Hoe verdien ik geld?
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        <p>
          <strong className="text-dark">warmtepomp.ai is gratis voor jou.</strong> Je betaalt
          niets voor het advies, de vergelijking of het aanvragen van offertes — en de prijs die
          je van een installateur krijgt wordt er niet hoger door.
        </p>
        <p>
          Ik ontvang een vergoeding van installateurs wanneer ik je met hen in contact breng. Dat
          is mijn verdienmodel, en daar ben ik bewust open over. Het stelt me in staat om
          onafhankelijke informatie en een eerlijke vergelijking te blijven aanbieden.
        </p>
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-action">
        Wat dit voor jou betekent:
      </p>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-muted">
            <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
