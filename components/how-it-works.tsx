import { CheckCircleIcon, ConversationIcon, HomeIcon, SubsidyIcon } from "./icons";

const steps = [
  {
    number: "1",
    icon: HomeIcon,
    title: "Jij vult een paar vragen in",
    body: "Postcode en huisnummer, en een paar korte vragen over je woning. Geen account, geen e-mailadres nodig om te beginnen.",
  },
  {
    number: "2",
    icon: SubsidyIcon,
    title: "Wij rekenen, niet wij verkopen",
    body: "We combineren jouw gegevens met actuele cijfers van Milieu Centraal, RVO en de Consumentenbond over isolatie, energieprijzen en subsidies.",
  },
  {
    number: "3",
    icon: ConversationIcon,
    title: "Je ziet direct je advies",
    body: "Welk type warmtepomp (of misschien geen warmtepomp) bij jouw huis past, met een inschatting van kosten, besparing en subsidie.",
  },
  {
    number: "4",
    icon: CheckCircleIcon,
    title: "Jij bepaalt of je verder gaat",
    body: "Vind je het advies nuttig? Dan kun je je laten koppelen aan installateurs. Wil je dat niet? Dan stopt het hier, zonder gevolgen.",
  },
];

export function HowItWorks() {
  return (
    <section id="hoe-werkt" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Transparant
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Hoe komt je advies tot stand?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
            Geen black box — dit is precies wat er gebeurt met jouw antwoorden.
          </p>
        </div>

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-action text-white shadow-[0_4px_16px_rgba(14,122,79,0.3)]">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
