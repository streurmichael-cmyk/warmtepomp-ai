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
      <section className="border-t border-green/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Hoe werkt de keuzehulp van warmtepomp.ai?
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>
              warmtepomp.ai is een onafhankelijke keuzehulp die je in een paar minuten een
              persoonlijke indicatie geeft voor jouw woning. Je vult je postcode en huisnummer in,
              waarna de tool automatisch de bekende woninggegevens ophaalt — zoals het woningtype,
              het bouwjaar en de oppervlakte. Aangevuld met een paar korte vragen over je huidige
              verwarming en isolatie bepaalt de keuzehulp welk type warmtepomp het beste bij jouw
              situatie past.
            </p>
            <p>
              Je krijgt een indicatie van het best passende type warmtepomp, een richtprijs voor
              aanschaf en installatie, de ISDE-subsidie waarvoor je mogelijk in aanmerking komt en
              een inschatting van je besparing. Zo zie je in één overzicht waar je financieel
              ongeveer aan toe bent — zonder dat je meteen een afspraak hoeft te maken of je
              gegevens bij meerdere bedrijven hoeft achter te laten. Je doorloopt de keuzehulp
              volledig zelf en in je eigen tempo, en bepaalt aan het eind of je de indicatie per
              e-mail wilt ontvangen of vrijblijvend offertes wilt opvragen.
            </p>
            <p>
              Ik ben aan geen enkel merk of installateur gebonden. De aanbeveling is dus gebaseerd
              op wat bij jouw woning past, niet op wie er iets wil verkopen. Wil je een stap verder,
              dan help ik je richting een gecertificeerde installateur die op basis van jouw
              indicatie een offerte op maat kan opstellen. Daarbij kies je zelf of en met wie je
              verdergaat; je zit nergens aan vast.
            </p>
            <p>
              Belangrijk om te weten: de uitkomst is een indicatie, geen bindende offerte. De
              werkelijke kosten, het exacte vermogen en de definitieve subsidie hangen af van een
              opname bij jou thuis. Gebruik de indicatie daarom als vertrekpunt voor een goed
              gesprek met een installateur, niet als eindbedrag.
            </p>
          </div>
        </div>
      </section>
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
