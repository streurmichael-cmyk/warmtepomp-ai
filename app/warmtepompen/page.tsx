import Image from "next/image";
import Link from "next/link";
import { CitiesSection } from "@/components/cities-section";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  FlameIcon,
  GroundIcon,
  QuestionIcon,
  ShieldIcon,
  SnowflakeIcon,
  StarIcon,
} from "@/components/icons";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { ISDE_LUCHT_WATER_MAX_LABEL } from "@/lib/subsidie";

export const metadata = buildMetadata({
  title: "Welke warmtepomp past bij mij? | warmtepomp.ai",
  description:
    "Ontdek welk type warmtepomp past bij jouw woning: lucht-water, hybride, bodem-water of lucht-lucht. Met uitleg, voor- en nadelen, kosten en subsidie.",
  path: "/warmtepompen",
});

const types = [
  {
    icon: FlameIcon,
    naam: "Lucht-water warmtepomp",
    uitleg: "Haalt warmte uit de buitenlucht, meest gekozen in Nederland.",
    geschiktVoor: "Eengezinswoningen met (vloer)verwarming en redelijke isolatie.",
    voordelen: [
      "Geen bestaande ketel meer nodig",
      "Werkt het hele jaar door, ook bij vorst",
      "Veel ervaren installateurs beschikbaar",
    ],
    nadelen: ["Hogere aanschafprijs dan hybride", "Buitenunit maakt wat geluid"],
    kosten: "€6.000 – €12.000",
    subsidie: `Tot ${ISDE_LUCHT_WATER_MAX_LABEL}`,
    sterren: 5,
  },
  {
    icon: ShieldIcon,
    naam: "Hybride warmtepomp",
    uitleg: "Combineert een warmtepomp met je bestaande cv-ketel: een slimme tussenstap op weg naar volledig gasloos.",
    geschiktVoor: "Woningen die nog niet (volledig) geïsoleerd zijn.",
    voordelen: [
      "Lage instapkosten",
      "Cv-ketel blijft als back-up bij strenge vorst",
      "Directe besparing op je gasverbruik",
    ],
    nadelen: ["Je gebruikt nog steeds een beetje gas", "Minder besparing dan volledig elektrisch"],
    kosten: "€3.500 – €7.000",
    subsidie: "Wisselend bedrag",
    sterren: 4,
  },
  {
    icon: GroundIcon,
    naam: "Bodem-water warmtepomp",
    uitleg: "Haalt warmte uit de grond, meest efficiënt maar duurder.",
    geschiktVoor: "Vrijstaande woningen en nieuwbouw met tuinruimte voor een bodemlus.",
    voordelen: [
      "Zeer stabiele en hoge efficiëntie",
      "Nauwelijks geluid binnen of buiten",
      "Lange levensduur",
    ],
    nadelen: ["Hoge investeringskosten", "Boring in de tuin nodig"],
    kosten: "€12.000 – €20.000",
    subsidie: "Gratis berekenen",
    sterren: 3,
  },
  {
    icon: SnowflakeIcon,
    naam: "Lucht-lucht warmtepomp",
    uitleg: "Verwarmt én koelt, maar geen vloerverwarming.",
    geschiktVoor: "Appartementen of woningen waar je vooral 1-2 ruimtes wilt verwarmen/koelen.",
    voordelen: ["Lage aanschafkosten", "Kan ook koelen in de zomer", "Snel te installeren"],
    nadelen: ["Verwarmt niet je hele huis gelijkmatig", "Vaak geen ISDE-subsidie"],
    kosten: "€2.000 – €5.000",
    subsidie: "Meestal niet",
    sterren: 2,
  },
];

const beslisRijen = [
  {
    situatie: "Mijn huis heeft vloerverwarming en is goed geïsoleerd",
    advies: "Lucht-water warmtepomp",
  },
  {
    situatie: "Ik wil starten met besparen, maar mijn huis is nog niet klaar voor 100% elektrisch",
    advies: "Hybride warmtepomp",
  },
  {
    situatie: "Ik heb een tuin en wil de meest efficiënte oplossing",
    advies: "Bodem-water warmtepomp",
  },
  {
    situatie: "Ik woon in een appartement en wil 1 of 2 kamers verwarmen én koelen",
    advies: "Lucht-lucht warmtepomp",
  },
];

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Geschiktheidsscore: ${score} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i <= score ? "text-green" : "text-green/15"}`}
        />
      ))}
    </div>
  );
}

export default function WarmtepompenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              type: "CollectionPage",
              name: "Welke warmtepomp past bij mij?",
              description:
                "Ontdek welk type warmtepomp past bij jouw woning: lucht-water, hybride, bodem-water of lucht-lucht. Met uitleg, voor- en nadelen, kosten en subsidie.",
              path: "/warmtepompen",
            }),
          ),
        }}
      />
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Warmtepompen", path: "/warmtepompen" }]}
      />
      <Header />
      <TrustBar />
      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Uitleg
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Wat is een warmtepomp eigenlijk?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Een warmtepomp haalt warmte uit de lucht, de grond of het water om jouw huis te
              verwarmen. Hij gebruikt geen gas, maar een beetje stroom om die warmte naar binnen
              te brengen.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Hoe werkt het?
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Een koelkast, maar dan andersom
              </h2>
            </div>
            <div className="mb-8 aspect-[16/9] max-h-[300px] overflow-hidden rounded-xl sm:max-h-none">
              <Image
                src="/images/buitenunit-closeup.webp"
                alt="Buitenunit van een warmtepomp naast een woning"
                width={1200}
                height={675}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <p className="text-base leading-relaxed text-muted">
                Je kent een koelkast wel: die haalt warmte ván binnen weg en stuurt die naar
                buiten, zodat het binnenin de koelkast lekker koud blijft.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Een warmtepomp doet precies hetzelfde, maar dan andersom. Hij haalt warmte uit de
                buitenlucht (of uit de grond) — ook als het buiten koud is, zit daar nog warmte in
                — en stuurt die naar binnen, naar je huis. Met een klein beetje stroom wordt die
                warmte als het ware &quot;opgepompt&quot; naar een hogere temperatuur, zodat jouw
                huis en je water lekker warm worden.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Het mooie: voor elke 1 deel stroom die de warmtepomp gebruikt, levert hij vaak 3 à
                4 delen warmte. Dat maakt hem veel zuiniger dan een cv-ketel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                De 4 types
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Welke warmtepompen zijn er?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {types.map((type) => (
                <article
                  key={type.naam}
                  className="rounded-2xl border border-green/10 bg-light-bg p-8 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-action text-white shadow-[0_4px_16px_rgba(34,181,114,0.3)]">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <StarRating score={type.sterren} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-dark">{type.naam}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{type.uitleg}</p>

                  <div className="mt-5 rounded-xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-action">
                      Geschikt voor
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {type.geschiktVoor}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-dark">
                        Voordelen
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {type.voordelen.map((v) => (
                          <li key={v} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-dark">
                        Nadelen
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {type.nadelen.map((n) => (
                          <li key={n} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted/50" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-green/10 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        Kosten
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-dark">
                        {type.kosten}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        Subsidie
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-green-ink">
                        {type.subsidie}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <SubsidyDisclaimer className="mt-8" />

            <p className="mt-4 text-center text-xs text-muted">
              Kosten zijn indicatief. Bronnen: Milieu Centraal, Consumentenbond, RVO (2026).
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Snel checken
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Welke past bij mij?
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-green/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">
                      Jouw situatie
                    </th>
                    <th className="px-5 py-4 font-display text-base font-bold sm:px-6">
                      Beste keuze
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {beslisRijen.map((rij, i) => (
                    <tr
                      key={rij.situatie}
                      className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}
                    >
                      <td className="px-5 py-4 leading-relaxed text-muted sm:px-6">
                        {rij.situatie}
                      </td>
                      <td className="px-5 py-4 font-bold text-green-ink sm:px-6">{rij.advies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-green/10 bg-white p-6">
              <QuestionIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
              <p className="text-sm leading-relaxed text-muted">
                Twijfel je nog? Geen probleem. Mijn keuzehulp stelt een paar simpele vragen over
                jouw woning en geeft je direct een persoonlijke indicatie — inclusief geschatte
                kosten, subsidie en besparing.
              </p>
            </div>
          </div>
        </section>

        <CitiesSection className="bg-white" />

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welke warmtepomp past bij jouw woning?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white">
              Beantwoord een paar vragen en ontvang direct een persoonlijke indicatie, op maat van
              jouw situatie.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Welke warmtepomp past bij jouw woning?
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
