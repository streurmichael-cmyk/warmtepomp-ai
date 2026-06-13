import { SITE_URL, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gratis warmtepomp-indicatie op maat | warmtepomp.ai",
  description:
    "Beantwoord een paar vragen over je woning en ontvang gratis en vrijblijvend een persoonlijke indicatie van het beste type warmtepomp, kosten, subsidie en besparing.",
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
      {children}
    </>
  );
}
