import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";

export default function FaqPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">FAQ</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Veelgestelde vragen
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Alles wat je wilt weten over warmtepompen, kosten en subsidie — in gewone taal.
            </p>
          </div>
        </section>
        <Faq showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
