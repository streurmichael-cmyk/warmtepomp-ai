import Link from "next/link";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { GemeenteLookupTool } from "@/components/gemeente-lookup-tool";
import { AardgasvrijSignupForm } from "@/components/aardgasvrij-signup-form";
import { ArrowRight, BuildingIcon, NetworkIcon, UserIcon } from "@/components/icons";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wanneer gaat jouw buurt van het gas af? | warmtepomp.ai",
  description:
    "Zoek op postcode op wat de warmtetransitie betekent voor jouw gemeente en meld je aan voor een collectieve actie — vaak tot 30% voordeliger.",
  path: "/aardgasvrij",
});

const infoBlokken = [
  {
    icon: NetworkIcon,
    title: "Netbeheerders investeren fors",
    body: "Netbeheerder Liander investeert alleen al zo'n €1 miljard per jaar in het verzwaren en verduurzamen van het energienet, mede om buurten van het aardgas af te kunnen koppelen.",
  },
  {
    icon: BuildingIcon,
    title: "Elke gemeente heeft een warmteplan",
    body: "Iedere gemeente in Nederland is wettelijk verplicht om een warmteplan op te stellen: een planning per wijk voor de overstap van aardgas naar duurzame warmte zoals een warmtepomp of warmtenet.",
  },
  {
    icon: UserIcon,
    title: "Samen vaak voordeliger",
    body: "Wanneer meerdere huishoudens in dezelfde buurt gezamenlijk overstappen, kunnen installateurs vaak een collectieve aanbieding doen — dat kan tot 30% goedkoper uitvallen dan een individuele aanvraag.",
  },
];

export default function AardgasvrijPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Wanneer gaat jouw buurt van het gas af?",
              description:
                "Zoek op postcode op wat de warmtetransitie betekent voor jouw gemeente en meld je aan voor een collectieve actie — vaak tot 30% voordeliger.",
              path: "/aardgasvrij",
            }),
          ),
        }}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Aardgasvrij", path: "/aardgasvrij" }]} />
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
            aria-hidden="true"
          />
          <div
            className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full bg-turquoise/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Warmtetransitie
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Wanneer gaat jouw buurt van het gas af?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Elke gemeente werkt aan een planning om buurten van het aardgas af te koppelen. Zoek
              op postcode op wat dit voor jouw gemeente betekent.
            </p>

            <div className="mt-10">
              <GemeenteLookupTool />
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Achtergrond
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Waarom de overstap eraan komt
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {infoBlokken.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-green/15 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/35"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-muted">
              Bronnen: Liander investeringsplannen, Wet gemeentelijke instrumenten warmtetransitie
              (Wgiw). Cijfers zijn indicatief en kunnen per gemeente en jaar verschillen.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Collectieve actie
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Meld je aan voor een collectieve aanpak in jouw buurt
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Laat je gegevens achter en ik breng je in contact met buurtgenoten en
              gecertificeerde installateurs zodra er voldoende belangstelling is voor een
              collectieve actie in jouw postcodegebied.
            </p>

            <div className="mt-10">
              <AardgasvrijSignupForm />
            </div>
          </div>
        </section>

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Liever niet wachten op je buurt?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white">
              Met een warmtepomp ben je nu al onafhankelijk van het gasnet. Beantwoord een paar
              vragen en ontvang direct een persoonlijke indicatie.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Start de gratis keuzehulp
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
