import { ConversationIcon, HomeIcon, NetworkIcon } from "./icons";

const steps = [
  {
    number: "1",
    icon: HomeIcon,
    title: "Vertel over je woning",
    body: "Bouwjaar, isolatie, verwarmingsoppervlak — we stellen de juiste vragen.",
  },
  {
    number: "2",
    icon: ConversationIcon,
    title: "Ontvang je advies",
    body: "Op basis van jouw situatie tonen we de beste opties met voor- en nadelen.",
  },
  {
    number: "3",
    icon: NetworkIcon,
    title: "Ga aan de slag",
    body: "Plan een gratis adviesgesprek met een gecertificeerde installateur bij jou in de buurt.",
  },
];

export function HowItWorks() {
  return (
    <section id="hoe-werkt" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
            In drie stappen
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Zo werkt de keuzehulp
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
            Binnen vijf minuten weet jij welke warmtepomp het beste bij jou past.
          </p>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-3">
          <div
            className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-green to-turquoise opacity-25 md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green to-turquoise text-white shadow-[0_4px_16px_rgba(34,181,114,0.35)]">
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
