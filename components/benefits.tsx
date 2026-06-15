import { ConversationIcon, ShieldIcon, SubsidyIcon } from "./icons";

const benefits = [
  {
    icon: SubsidyIcon,
    title: "Actuele subsidie",
    body: "De tool houdt de actuele ISDE-subsidieregeling voor je bij en berekent automatisch hoeveel jij kunt ontvangen in 2026. Zo mis je geen voordeel.",
    note: "Tot €3.500 voordeel",
  },
  {
    icon: ConversationIcon,
    title: "Geen verkooppraatjes",
    body: "Onze AI-keuzehulp stelt gerichte vragen over jouw woning en situatie. Geen generieke antwoorden of opdringerige verkoop, maar een aanbeveling die op jou is afgestemd.",
    note: "Persoonlijke indicatie",
  },
  {
    icon: ShieldIcon,
    title: "Eerlijke vergelijking",
    body: "Geen verborgen belangen of provisie-afspraken met fabrikanten. De tool analyseert jouw situatie en geeft een onafhankelijke indicatie van het beste type warmtepomp. Daarna helpen we je verder richting een gecertificeerde installateur, zodat je offertes kunt vergelijken.",
    note: "100% onafhankelijk",
  },
];

export function Benefits() {
  return (
    <section id="voordelen" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Waarom warmtepomp.ai
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Eerlijke vergelijking zonder haken en ogen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Wij zijn niet gebonden aan één merk of installateur. Jij krijgt de
            indicatie die écht bij jou past.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-green/15 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.12)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green to-turquoise opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-dark">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <span className="mt-5 inline-block w-fit self-start rounded-full bg-green/10 px-3 py-1 text-xs font-bold text-green">
                {item.note}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
