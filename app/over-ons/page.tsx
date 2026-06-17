import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevenueTransparency } from "@/components/revenue-transparency";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  BuildingIcon,
  MailIcon,
  MapPinIcon,
  ShieldIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Over mij | warmtepomp.ai",
  description:
    "Maak kennis met warmtepomp.ai: onafhankelijke vergelijking van warmtepompen, opgericht door Michael Streur. Lees wie ik ben, waarom ik dit doe en hoe ik geld verdien.",
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
              Over mij
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Wie zit er achter warmtepomp.ai?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Warmtepomp.ai is nieuw, klein en transparant over wie ik ben en hoe ik werk.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                <Image
                  src="/portret-michael-rechtop.webp"
                  alt="Michael Streur, oprichter warmtepomp.ai"
                  width={112}
                  height={112}
                  className="h-24 w-24 flex-shrink-0 rounded-full border-4 border-green/10 object-cover sm:h-28 sm:w-28"
                />
                <div>
                  <p className="text-base leading-relaxed text-muted">
                    Ik ben de oprichter van warmtepomp.ai. Ik raakte geïnteresseerd in warmtepompen
                    en ben me er steeds verder in gaan verdiepen. Wat me opviel: het is een
                    ondoorzichtige wereld — offertes die je nauwelijks kunt vergelijken, ingewikkelde
                    subsidieregels, en informatie die vaak gekleurd is door wie er iets wil verkopen.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    Hoe meer ik leerde, hoe meer ik dacht: het kan duidelijker en eerlijker. Daarom
                    bouw ik warmtepomp.ai — ik wil de meest informatieve, onafhankelijke keuzehulp van
                    Nederland maken, zodat jij in een paar minuten begrijpt wat bij jouw woning past,
                    zonder verkooppraatjes. Ik woon in de regio Amsterdam en bouw de site in mijn
                    eentje stap voor stap uit over heel Nederland — en ik lees echt elke aanvraag die
                    binnenkomt.
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

            <RevenueTransparency className="mt-6" />
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
              <div className="flex flex-col items-center rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <BuildingIcon className="h-5 w-5 text-green" />
                <div className="mt-3 flex flex-1 flex-col items-center justify-start">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">
                    KvK-inschrijving
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-dark">In aanvraag</p>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <MailIcon className="h-5 w-5 text-green" />
                <div className="mt-3 flex flex-1 flex-col items-center justify-start">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">E-mail</p>
                  <a
                    href="mailto:info@warmtepomp.ai"
                    className="mt-2 font-display text-lg font-bold text-dark hover:text-action"
                  >
                    info@warmtepomp.ai
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-green/10 bg-light-bg p-6 text-center">
                <MapPinIcon className="h-5 w-5 text-green" />
                <div className="mt-3 flex flex-1 flex-col items-center justify-start">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">
                    Vestigingsplaats
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-dark">
                    Regio Amsterdam, Noord-Holland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benieuwd wat ik voor jou kan doen?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Beantwoord een paar vragen over je woning en ontvang gratis en vrijblijvend
              een indicatie.
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
