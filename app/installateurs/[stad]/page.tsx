import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InstallateursLeadForm } from "@/components/installateurs-lead-form";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  ChevronDownIcon,
  ConversationIcon,
  MapPinIcon,
  NetworkIcon,
  ShieldIcon,
  SubsidyIcon,
} from "@/components/icons";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { getBlogPost } from "@/lib/blog-posts";
import { cities, getCity } from "@/lib/cities";
import { buildMetadata } from "@/lib/seo";

// Evergreen blogartikelen die op elke stadpagina relevant zijn als verdieping.
const relatedArticleSlugs = [
  "warmtepomp-geschikt-voor-mijn-woning",
  "warmtepomp-kosten-2026-compleet-overzicht",
  "warmtepomp-besparing-berekenen",
];

export function generateStaticParams() {
  return cities.map((city) => ({ stad: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) return {};

  return buildMetadata({
    title: `Warmtepomp installateur ${city.name} | Gratis vergelijken | warmtepomp.ai`,
    description: `Op zoek naar een gecertificeerde warmtepomp installateur in ${city.name}? Krijg eerst een gratis, onafhankelijke indicatie voor jouw woning. ISDE subsidie tot €2.500.`,
    path: `/installateurs/${city.slug}`,
  });
}

const kostenTabel = [
  { type: "Hybride warmtepomp", bedrag: "€3.500 – €7.000" },
  { type: "Lucht-water warmtepomp", bedrag: "€6.000 – €12.000" },
  { type: "Bodem-water warmtepomp", bedrag: "€12.000 – €20.000" },
];

export default async function StadPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) notFound();

  const relatedArticles = relatedArticleSlugs
    .map((articleSlug) => getBlogPost(articleSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const waarom = [
    {
      icon: MapPinIcon,
      title: "Lokale installateurs",
      body: `Ik help je de beste optie voor jouw woning te vinden en bouw aan een netwerk van gecertificeerde installateurs die actief zijn in ${city.name} en de regio.`,
    },
    {
      icon: ShieldIcon,
      title: "Onafhankelijke vergelijking",
      body: "Ik ben niet gebonden aan één merk of installateur. Je krijgt een eerlijke vergelijking van het beste type warmtepomp voor jouw situatie.",
    },
    {
      icon: ConversationIcon,
      title: "Gratis en vrijblijvend",
      body: "Het invullen van de keuzehulp en een eventueel adviesgesprek met een installateur zijn volledig gratis en je zit nergens aan vast.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

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
              Installateurs in {city.name}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Warmtepomp installateur in {city.name} — vind de beste optie voor jouw woning
            </h1>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base leading-relaxed text-muted sm:text-center">
              <p>
                Op zoek naar een betrouwbare warmtepomp installateur in {city.name}? Via
                warmtepomp.ai krijg je eerst gratis en vrijblijvend een onafhankelijke indicatie
                voor jouw woning. {city.context} — ik help je de beste optie te vinden en bouw
                aan een netwerk van gecertificeerde installateurs die bekend zijn met{" "}
                {city.woningType.toLowerCase()} in {city.name}.
              </p>
              <p>
                Voordat je een installateur kiest, is het slim om eerst te weten welk type
                warmtepomp het beste bij jouw woning past. Mijn gratis keuzehulp geeft je in een
                paar minuten een persoonlijke indicatie van het beste type, de geschatte kosten en de
                ISDE-subsidie. Daarna help ik je verder richting een gecertificeerde installateur
                in {city.name} en omgeving, die op basis daarvan een offerte op maat kan opstellen.
              </p>
            </div>

            <InstallateursLeadForm
              initialPostcode={city.name}
              locationLabel="Postcode of plaatsnaam"
              acceptPlaceName
            />
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Waarom warmtepomp.ai
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Waarom warmtepomp.ai in {city.name}?
              </h2>
            </div>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-muted">
              {city.localParagraph}
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {waarom.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-green/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Kosten
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Gemiddelde warmtepomp kosten in {city.name} in 2026
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-green/10 bg-light-bg">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">Type</th>
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">
                      Inclusief installatie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabel.map((item, i) => (
                    <tr key={item.type} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                      <td className="px-5 py-4 font-bold text-dark sm:px-6">{item.type}</td>
                      <td className="px-5 py-4 text-muted sm:px-6">{item.bedrag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">
              * Bedragen zijn indicatief voor woningen in {city.name} en zijn afhankelijk van je
              woning, het vermogen van de warmtepomp en de installateur.
              <br />
              Bronnen: Milieu Centraal, Consumentenbond, RVO (2026).
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <SubsidyIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-dark">
                    ISDE subsidie in {city.name} (2026)
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Ook in {city.name} kun je via de ISDE-regeling van de Rijksoverheid subsidie
                    krijgen voor je warmtepomp — tot €2.500 voor een lucht-water warmtepomp,
                    afhankelijk van het vermogen. De aanvraag verloopt landelijk via
                    mijn.rvo.nl, ongeacht waar in Nederland je woont.
                  </p>

                  <SubsidyDisclaimer className="mt-4" />

                  <p className="mt-3 text-xs text-muted">
                    Bekijk ook{" "}
                    <Link href="/subsidie" className="font-bold text-action hover:underline">
                      mijn subsidiepagina
                    </Link>
                    .
                  </p>
                </div>
              </div>
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
                Vragen over warmtepompen in {city.name}
              </h2>
            </div>

            <dl className="space-y-3">
              {city.faqs.map((faq) => (
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

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Meer lezen
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Verder oriënteren
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/warmtepompen"
                className="flex items-center justify-between gap-3 rounded-2xl border border-green/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
              >
                <span>
                  <NetworkIcon className="mb-3 h-6 w-6 text-green" />
                  <span className="block font-display text-base font-bold text-dark">
                    Welk type warmtepomp?
                  </span>
                  <span className="block text-sm text-muted">Bekijk alle types uitgelegd</span>
                </span>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
              </Link>
              <Link
                href="/kosten"
                className="flex items-center justify-between gap-3 rounded-2xl border border-green/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
              >
                <span>
                  <CheckCircleIcon className="mb-3 h-6 w-6 text-green" />
                  <span className="block font-display text-base font-bold text-dark">
                    Wat kost het?
                  </span>
                  <span className="block text-sm text-muted">Eerlijk kostenoverzicht</span>
                </span>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
              </Link>
              <Link
                href="/subsidie"
                className="flex items-center justify-between gap-3 rounded-2xl border border-green/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
              >
                <span>
                  <SubsidyIcon className="mb-3 h-6 w-6 text-green" />
                  <span className="block font-display text-base font-bold text-dark">
                    ISDE-subsidie
                  </span>
                  <span className="block text-sm text-muted">Hoeveel krijg je terug?</span>
                </span>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
              </Link>
            </div>

            {relatedArticles.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 text-center text-sm font-bold text-dark">
                  Lees verder op de blog
                </p>
                <div className="space-y-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-green/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                    >
                      <span className="font-display text-sm font-bold text-dark sm:text-base">
                        {article.title}
                      </span>
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-green" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
