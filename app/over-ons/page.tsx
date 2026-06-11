import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  MailIcon,
  MapPinIcon,
  ShieldIcon,
  SubsidyIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Over ons | warmtepomp.ai",
  description:
    "Maak kennis met warmtepomp.ai: onafhankelijk advies over warmtepompen, opgericht door Michael Streur. Lees wie we zijn, waarom we dit doen en hoe we geld verdienen.",
  path: "/over-ons",
});

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Over ons
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Eerlijk advies, zonder poespas
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Warmtepomp.ai is nieuw, klein en transparant over wie we zijn en hoe we werken.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="aspect-square h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                    alt="Portretfoto van Michael Streur, oprichter van warmtepomp.ai"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-dark">Wie we zijn</h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Warmtepomp.ai is opgericht door Michael Streur, een onafhankelijke adviseur
                    uit de regio Amsterdam.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-dark">Waarom warmtepomp.ai</h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Ik merkte dat het vergelijken van warmtepompen en installateurs ondoorzichtig
                    en tijdrovend is. Warmtepomp.ai maakt dat simpel en eerlijk.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <SubsidyIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-dark">
                    Hoe we geld verdienen
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Wij ontvangen een vergoeding van installateurs wanneer zij via ons platform
                    een klant begeleiden. Dit heeft geen invloed op ons advies — wij zijn altijd
                    aan jouw kant.
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
                Praktisch
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Gegevens
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">
                  KvK-inschrijving
                </p>
                <p className="mt-2 font-display text-lg font-bold text-dark">In aanvraag</p>
              </div>
              <div className="rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <MailIcon className="mx-auto h-5 w-5 text-green" />
                <a
                  href="mailto:info@warmtepomp.ai"
                  className="mt-2 block font-display text-lg font-bold text-dark hover:text-action"
                >
                  info@warmtepomp.ai
                </a>
              </div>
              <div className="rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <MapPinIcon className="mx-auto h-5 w-5 text-green" />
                <p className="mt-2 font-display text-lg font-bold text-dark">Heel Nederland</p>
                <p className="text-xs text-muted">Werkgebied</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benieuwd wat wij voor jou kunnen doen?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Beantwoord een paar vragen over je woning en ontvang gratis en vrijblijvend
              advies.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Start de keuzehulp
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
