import Link from "next/link";
import { AddressLookupForm } from "@/components/address-lookup-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { CtaBanner } from "@/components/cta-banner";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  CloseIcon,
  ConversationIcon,
  ShieldIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Warmtepomp Offerte Aanvragen 2026 | Gratis & Vrijblijvend",
  description:
    "Vraag gratis en vrijblijvend warmtepomp-offertes aan en vergelijk 3 installateurs. Ik help je een goede offerte herkennen en de juiste keuze maken.",
  path: "/offerte",
});

const trustSignals = [
  { icon: CheckCircleIcon, label: "Gratis" },
  { icon: ConversationIcon, label: "Vrijblijvend" },
  { icon: ShieldIcon, label: "Gecertificeerde installateurs" },
];

const checklist = [
  "Het type en merk van de warmtepomp, met vermogen en SCOP-waarde.",
  "Een duidelijke totaalprijs inclusief installatie en btw.",
  "De verwachte ISDE-subsidie, apart benoemd.",
  "Wat wel en niet is inbegrepen (denk aan aanpassingen aan radiatoren of meterkast).",
  "De geschatte levertijd en de installatieduur.",
  "Garantievoorwaarden op zowel het toestel als de installatie.",
  "Of onderhoud is inbegrepen of apart wordt afgerekend.",
];

const tips = [
  {
    titel: "Vergelijk appels met appels",
    body: "Zorg dat alle drie de offertes uitgaan van hetzelfde type en vermogen. Anders vergelijk je prijzen die niet bij elkaar horen.",
  },
  {
    titel: "Kijk verder dan de prijs",
    body: "Let op de SCOP-waarde, de garantie en wat er is inbegrepen. De goedkoopste offerte is over 15 jaar niet altijd de voordeligste.",
  },
  {
    titel: "Controleer de aannames",
    body: "Ga na of de installateur is uitgegaan van jouw echte situatie — isolatie en afgiftesysteem. Onrealistische aannames leiden tot tegenvallers achteraf.",
  },
];

const fouten = [
  "Maar één offerte aanvragen en die meteen tekenen.",
  "Alleen op de laagste prijs letten, zonder naar SCOP, garantie en inbegrepen werk te kijken.",
  "De ISDE-subsidie niet apart laten benoemen, waardoor je het nettobedrag niet kunt vergelijken.",
  "Geen rekening houden met isolatie — een warmtepomp in een slecht geïsoleerd huis valt tegen.",
  "Niet vragen naar referenties of certificering van de installateur.",
];

const faqs = [
  {
    q: "Is het aanvragen van een warmtepomp-offerte gratis?",
    a: "Ja. Het invullen van mijn keuzehulp en het aanvragen van offertes is volledig gratis en vrijblijvend. Je zit nergens aan vast en bepaalt zelf of je verder gaat.",
  },
  {
    q: "Hoeveel offertes kan ik het beste vergelijken?",
    a: "Ik raad aan om minimaal 3 offertes te vergelijken. Zo krijg je een eerlijk beeld van de prijs, het voorgestelde type en de voorwaarden, en voorkom je dat je te veel betaalt.",
  },
  {
    q: "Hoe lang duurt het voordat ik een offerte ontvang?",
    a: "Meestal ontvang je binnen een paar werkdagen een eerste reactie. Een offerte op maat volgt vaak na een (online) schouw van je woning.",
  },
  {
    q: "Zit ik ergens aan vast als ik een offerte aanvraag?",
    a: "Nee. Een offerte aanvragen is vrijblijvend. Je beslist pas iets als je een installateur en prijs hebt gekozen die bij je passen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function OffertePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              Offerte aanvragen
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Warmtepomp offerte aanvragen: vergelijk 3 installateurs
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Ik help je in een paar minuten aan een eerlijke indicatie voor jouw woning. Daarna
              kun je vrijblijvend offertes opvragen en rustig vergelijken — zonder verkooppraat.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustSignals.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark"
                >
                  <s.icon className="h-5 w-5 text-green" />
                  {s.label}
                </span>
              ))}
            </div>

            <AddressLookupForm />
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Checklist
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat staat er in een goede offerte?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Een goede offerte is volledig en navolgbaar. Dit zou er wat mij betreft minimaal in
                moeten staan:
              </p>
            </div>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-green/10 bg-white p-5 text-base leading-relaxed text-muted"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Vergelijken
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Hoe vergelijk je 3 offertes?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tips.map((tip, i) => (
                <article
                  key={tip.titel}
                  className="rounded-2xl border border-green/10 bg-light-bg p-7 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-dark">{tip.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Let op
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Veelgemaakte fouten bij offertes aanvragen
              </h2>
            </div>
            <ul className="space-y-3">
              {fouten.map((fout) => (
                <li
                  key={fout}
                  className="flex items-start gap-3 rounded-2xl border border-green/10 bg-white p-5 text-base leading-relaxed text-muted"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-error/10 text-error">
                    <CloseIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{fout}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Veelgestelde vragen
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Vragen over offertes aanvragen
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

            <p className="mt-8 text-center text-sm text-muted">
              Liever eerst zien wat je kunt verwachten?{" "}
              <Link href="/kosten" className="font-bold text-action hover:underline">
                Bekijk het eerlijke kostenoverzicht
              </Link>
              .
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
