import { Benefits } from "@/components/benefits";
import { CitiesSection } from "@/components/cities-section";
import { CtaBanner } from "@/components/cta-banner";
import { ExampleAdviceCta } from "@/components/example-advice-cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FounderTrust } from "@/components/founder-trust";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Objections } from "@/components/objections";
import { PricingRanges } from "@/components/pricing-ranges";
import { Reviews } from "@/components/reviews";
import { TrustBar } from "@/components/trust-bar";
import { SITE_URL, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Welke warmtepomp past bij jouw woning? | warmtepomp.ai",
  description:
    "Onafhankelijke keuzehulp voor warmtepompen in Nederland. Persoonlijk advies over het beste type warmtepomp, actuele subsidie-informatie en gekoppeld aan gecertificeerde installateurs bij jou in de buurt.",
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "warmtepomp.ai",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@warmtepomp.ai",
    contactType: "customer service",
    areaServed: "NL",
    availableLanguage: ["Dutch"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "warmtepomp.ai",
  url: SITE_URL,
  description: "Onafhankelijk warmtepomp advies voor jouw woning",
  inLanguage: "nl-NL",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      <TrustBar />
      <main>
        <Hero />
        <FounderTrust />
        <HowItWorks />
        <ExampleAdviceCta />
        <Benefits />
        <Objections />
        <PricingRanges />
        <CitiesSection />
        <Reviews />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
