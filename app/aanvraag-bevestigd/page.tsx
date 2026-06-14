import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { ArrowRight, CheckCircleIcon, QuestionIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Aanvraag bevestigd | warmtepomp.ai",
  description: "Je warmtepomp-aanvraag is bevestigd.",
  path: "/aanvraag-bevestigd",
});

export default async function AanvraagBevestigdPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const ongeldig = status === "ongeldig";

  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                ongeldig ? "bg-muted-light/15 text-muted" : "bg-action/10 text-action"
              }`}
            >
              {ongeldig ? (
                <QuestionIcon className="h-9 w-9" />
              ) : (
                <CheckCircleIcon className="h-9 w-9" />
              )}
            </div>

            {ongeldig ? (
              <>
                <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Deze bevestigingslink is niet (meer) geldig
                </h1>
                <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
                  Mogelijk heb je je aanvraag al bevestigd, of is de link verlopen. Twijfel je? Vul
                  gerust opnieuw de keuzehulp in of mail ons op{" "}
                  <a href="mailto:info@warmtepomp.ai" className="font-semibold text-action hover:underline">
                    info@warmtepomp.ai
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Je aanvraag is bevestigd!
                </h1>
                <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
                  Bedankt voor het bevestigen van je e-mailadres. Je aanvraag is nu definitief
                  geactiveerd — we gaan ermee aan de slag en nemen waar nodig contact met je op.
                </p>
              </>
            )}

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-green/20 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:border-action hover:text-action"
            >
              Terug naar home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
