import Link from "next/link";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { CtaBanner } from "@/components/cta-banner";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { BoltIcon, CheckCircleIcon, ChevronDownIcon, FlameIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hybride Warmtepomp 2026 | Kosten, Subsidie & Advies",
  description:
    "Een hybride warmtepomp combineert je cv-ketel met een warmtepomp. Lees wanneer het slim is, wat het kost, de ISDE-subsidie en hybride vs all-electric.",
  path: "/hybride-warmtepomp",
});

const geschiktVoor = [
  "Matig of slecht geïsoleerde woningen waar all-electric (nog) niet rendabel is.",
  "Monumentale panden en woningen waar isoleren lastig of duur is.",
  "Woningen met hoge-temperatuur radiatoren in plaats van vloerverwarming.",
  "Wie gefaseerd wil verduurzamen en nog niet in volledige isolatie wil investeren.",
];

const kosten = [
  { post: "Aanschaf inclusief installatie", bedrag: "€3.500 – €7.000" },
  { post: "ISDE-subsidie", bedrag: "Van toepassing (bedrag wisselt per toestel)" },
];

const hybride = [
  "Lagere investering dan all-electric.",
  "Geschikt bij matige isolatie — geen volledige verbouwing nodig.",
  "Behoudt je gasaansluiting en cv-ketel voor de koudste dagen.",
  "Bespaart doorgaans 50–60% op je gasverbruik voor verwarming.",
];

const allElectric = [
  "Hogere investering, maar volledig van het gas af.",
  "Vereist een goed geïsoleerde woning (richting label A).",
  "Hoogste besparing op de lange termijn — geen gasrekening meer.",
  "Werkt het best met lage-temperatuur afgifte (vloerverwarming).",
];

const faqs = [
  {
    q: "Wat is een hybride warmtepomp?",
    a: "Een hybride warmtepomp combineert een kleine warmtepomp met je cv-ketel. De warmtepomp verwarmt het grootste deel van het jaar; de cv-ketel springt bij op de koudste dagen en voor warm water.",
  },
  {
    q: "Voor welke woningen is een hybride warmtepomp geschikt?",
    a: "Vooral voor matig of slecht geïsoleerde woningen, monumentale panden en woningen met hoge-temperatuur radiatoren. Ook handig als je gefaseerd wilt verduurzamen.",
  },
  {
    q: "Wat kost een hybride warmtepomp?",
    a: "Reken op €3.500 – €7.000 inclusief installatie. Met de ISDE-subsidie betaal je netto minder; het subsidiebedrag verschilt per toestel.",
  },
  {
    q: "Krijg ik subsidie op een hybride warmtepomp?",
    a: "Ja, de ISDE-subsidie is van toepassing op hybride warmtepompen. Het bedrag hangt af van het toestel; controleer de actuele bedragen bij RVO.",
  },
  {
    q: "Hoeveel bespaar ik met een hybride warmtepomp?",
    a: "Een hybride warmtepomp verlaagt je gasverbruik voor verwarming doorgaans met 50–60%. Je stroomverbruik stijgt iets; netto houd je vaak €20–40 per maand over, afhankelijk van isolatie, gebruik en tarieven.",
  },
];

export default function HybrideWarmtepompPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Hybride warmtepomp", path: "/hybride-warmtepomp" },
        ]}
      />
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Hybride warmtepomp
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Hybride warmtepomp: wanneer is het de slimste keuze?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Niet iedereen kan of wil meteen volledig van het gas af. Voor veel woningen is een
              hybride warmtepomp daarom een eerlijke tussenstap — hieronder leg ik uit wanneer het
              wél en niet de slimste keuze is.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Uitleg
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat is een hybride warmtepomp?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Een hybride warmtepomp combineert je bestaande (of een nieuwe) cv-ketel met een
                kleine warmtepomp. De warmtepomp neemt de verwarming over zolang het buiten niet te
                koud is — en dat is het grootste deel van het jaar.
              </p>
              <p>
                Op de koudste dagen en voor je warme water springt de cv-ketel bij. Zo bespaar je
                flink op gas, zonder dat je woning volledig hoeft te worden verbouwd of geïsoleerd.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Geschikt voor
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Voor welke woningen is het geschikt?
              </h2>
            </div>
            <ul className="space-y-3">
              {geschiktVoor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-green/10 bg-light-bg p-5 text-base leading-relaxed text-muted"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Kosten
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat kost een hybride warmtepomp?
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-green/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">Post</th>
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">Bedrag</th>
                  </tr>
                </thead>
                <tbody>
                  {kosten.map((item, i) => (
                    <tr key={item.post} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                      <td className="px-5 py-4 font-bold text-dark sm:px-6">{item.post}</td>
                      <td className="px-5 py-4 text-muted sm:px-6">{item.bedrag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SubsidyDisclaimer className="mt-4" />
            <p className="mt-4 text-xs text-muted">
              * Indicatieve bedragen, afhankelijk van toestel, woning en installateur. Meer weten?{" "}
              <Link href="/subsidie" className="font-bold text-action hover:underline">
                Bekijk de subsidiepagina
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Eerlijke vergelijking
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Hybride vs. all-electric
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-green/10 bg-light-bg p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <FlameIcon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-dark">Hybride warmtepomp</h3>
                <ul className="mt-4 space-y-2.5">
                  {hybride.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-green/10 bg-light-bg p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <BoltIcon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-dark">All-electric warmtepomp</h3>
                <ul className="mt-4 space-y-2.5">
                  {allElectric.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Per maand
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Kosten per maand: hybride vs. cv-ketel alleen
              </h2>
            </div>
            <div className="rounded-2xl border border-green/10 bg-white p-7">
              <p className="text-base leading-relaxed text-muted">
                Een hybride warmtepomp verlaagt je gasverbruik voor verwarming doorgaans met{" "}
                <span className="font-bold text-dark">50–60%</span>. Daar staat een iets hoger
                stroomverbruik tegenover.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                <span className="font-bold text-dark">Rekenvoorbeeld (indicatief):</span> een woning
                die met alleen een cv-ketel zo&apos;n €150 per maand aan gas voor verwarming kwijt is,
                houdt met een hybride warmtepomp netto vaak{" "}
                <span className="font-bold text-dark">€20–40 per maand</span> over. Het exacte bedrag
                hangt af van je isolatie, je gebruik en de actuele gas- en stroomtarieven.
              </p>
              <p className="mt-4 text-sm text-muted">
                Wil je een berekening op maat voor jouw woning?{" "}
                <Link href="/vergelijk" className="font-bold text-action hover:underline">
                  Start de gratis keuzehulp
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Veelgestelde vragen
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Vragen over de hybride warmtepomp
              </h2>
            </div>
            <dl className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-green/10 bg-light-bg open:border-green/40 open:shadow-[0_4px_24px_rgba(34,181,114,0.1)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="font-display text-base font-bold text-dark sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-green transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
            </dl>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
