import { SITE_URL, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gratis warmtepomp advies op maat | warmtepomp.ai",
  description:
    "Beantwoord een paar vragen over je woning en ontvang gratis en vrijblijvend persoonlijk advies over het beste type warmtepomp, kosten, subsidie en besparing.",
  path: "/vergelijk",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Warmtepomp advies en installateur vergelijken",
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
    "Gratis en vrijblijvende keuzehulp die op basis van jouw woning een persoonlijk advies geeft over het beste type warmtepomp, geschatte kosten, ISDE-subsidie en besparing, en je koppelt aan gecertificeerde installateurs.",
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
