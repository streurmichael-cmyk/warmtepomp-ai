import { Benefits } from "@/components/benefits";
import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PricingRanges } from "@/components/pricing-ranges";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <PricingRanges />
        <Reviews />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
