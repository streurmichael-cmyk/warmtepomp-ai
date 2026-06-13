import { CheckCircleIcon } from "./icons";

// Tijdelijke placeholders voor social-proof statistieken. Vul in met de echte
// cijfers en zet SHOW_STATS op true zodra die beschikbaar zijn.
const ADVIEZEN_DEZE_WEEK = 47;
const GEMIDDELDE_BEOORDELING = 4.8;
const SHOW_STATS = false;

const items = [
  ...(SHOW_STATS
    ? [
        `Al ${ADVIEZEN_DEZE_WEEK} adviezen gegeven deze week`,
        `Gemiddeld ${GEMIDDELDE_BEOORDELING} ★ tevredenheid`,
      ]
    : []),
  "100% onafhankelijk — geen commissie van merken",
  "Gratis indicatie, geen verplichtingen",
  "Je gegevens gaan nooit naar derden voor marketing",
];

export function TrustBar() {
  return (
    <div className="bg-action py-2.5 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1.5 px-5 text-xs font-semibold sm:px-8">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5">
            <CheckCircleIcon className="h-3.5 w-3.5 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
