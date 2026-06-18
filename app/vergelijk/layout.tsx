import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE_URL, buildMetadata } from "@/lib/seo";

const verderLinks = [
  { href: "/kosten", title: "Wat kost een warmtepomp?", desc: "Eerlijk kostenoverzicht per type" },
  { href: "/subsidie", title: "ISDE-subsidie", desc: "Hoeveel subsidie je kunt krijgen" },
  { href: "/installateurs", title: "Installateur vinden", desc: "Een gecertificeerde installateur" },
];

export const metadata = buildMetadata({
  title: "Gratis warmtepomp-indicatie op maat | warmtepomp.ai",
  description:
    "Beantwoord een paar vragen over je woning en ontvang gratis een persoonlijke indicatie van het beste type warmtepomp, de kosten en de subsidie.",
  path: "/vergelijk",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Warmtepomp-indicatie en installateurs vergelijken",
  provider: {
    "@type": "Organization",
    name: "warmtepomp.ai",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Huiseigenaren",
  },
  description:
    "Gratis en vrijblijvende keuzehulp die op basis van jouw woning een persoonlijke indicatie geeft van het beste type warmtepomp, geschatte kosten, ISDE-subsidie en besparing, en je koppelt aan gecertificeerde installateurs.",
};

export default function VergelijkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Vergelijken", path: "/vergelijk" }]}
      />
      {children}
      <section className="border-t border-green/10 bg-light-bg py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Meer weten?
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Verdiep je verder
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {verderLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-2xl border border-green/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
              >
                <span className="block font-display text-base font-bold text-dark">{l.title}</span>
                <span className="mt-1 block text-sm text-muted">{l.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
