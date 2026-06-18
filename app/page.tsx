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
import { RelatedLinks } from "@/components/related-links";
import { Reviews } from "@/components/reviews";
import { TrustBar } from "@/components/trust-bar";
import { faqs } from "@/lib/faqs";
import { SITE_URL, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Warmtepomp vergelijken 2026 | Keuzehulp | warmtepomp.ai",
  description:
    "Onafhankelijke keuzehulp voor warmtepompen. Krijg een persoonlijke indicatie van het beste type warmtepomp, plus actuele subsidie-informatie.",
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
  description: "Onafhankelijke warmtepomp-vergelijking voor jouw woning",
  inLanguage: "nl-NL",
};

// Komt overeen met de FAQ die onderaan de homepage zichtbaar is (<Faq />).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        <RelatedLinks />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
