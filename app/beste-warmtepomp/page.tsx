import Link from "next/link";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { CtaBanner } from "@/components/cta-banner";
import {
  ChevronDownIcon,
  FlameIcon,
  HomeIcon,
  NetworkIcon,
  SnowflakeIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Beste Warmtepomp 2026 | Onafhankelijke Top 5",
  description:
    "Onafhankelijke top 5 beste warmtepompen van 2026, vergeleken op SCOP, prijs en geschiktheid. Ontdek welk type en merk het beste bij jouw woning past.",
  path: "/beste-warmtepomp",
});

const top5 = [
  {
    merk: "Daikin",
    type: "Lucht-water",
    scop: "3,8 – 5,1",
    prijs: "€7.000 – €14.000",
    geschikt: "Goed geïsoleerde woningen, all-electric",
  },
  {
    merk: "Nibe",
    type: "Lucht-water & bodem-water",
    scop: "4,0 – 5,5",
    prijs: "€8.000 – €20.000",
    geschikt: "Wie maximale efficiëntie wil",
  },
  {
    merk: "Vaillant",
    type: "Lucht-water & hybride",
    scop: "3,7 – 4,8",
    prijs: "€6.000 – €13.000",
    geschikt: "Zowel hybride als all-electric",
  },
  {
    merk: "Mitsubishi",
    type: "Lucht-water & lucht-lucht",
    scop: "3,5 – 4,8",
    prijs: "€5.000 – €12.000",
    geschikt: "Woningen met lage-temperatuur afgifte",
  },
  {
    merk: "Bosch",
    type: "Lucht-water & hybride",
    scop: "3,6 – 4,7",
    prijs: "€5.500 – €12.000",
    geschikt: "Hybride en gefaseerd verduurzamen",
  },
];

const keuzefactoren = [
  {
    icon: HomeIcon,
    titel: "Isolatie en energielabel",
    body: "Hoe beter je woning is geïsoleerd, hoe lager je kunt stoken — en hoe efficiënter elke warmtepomp werkt. Dit weegt zwaarder dan het merk.",
  },
  {
    icon: NetworkIcon,
    titel: "Je afgiftesysteem",
    body: "Vloerverwarming of lage-temperatuur radiatoren halen het meeste uit een warmtepomp. Oude radiatoren vragen soms aanpassing.",
  },
  {
    icon: FlameIcon,
    titel: "All-electric of hybride",
    body: "Een goed geïsoleerd huis kan all-electric. Bij een slecht geïsoleerd of monumentaal pand is een hybride warmtepomp vaak de slimmere keuze.",
  },
  {
    icon: SnowflakeIcon,
    titel: "Ruimte en geluid",
    body: "Een buitenunit heeft ruimte nodig en maakt geluid. Controleer de plek en de geluidsnormen voordat je een type kiest.",
  },
];

const duurNietBeste = [
  "Een dure bodem-water warmtepomp in een slecht geïsoleerd huis: zonder goede isolatie verzilver je de hoge efficiëntie niet.",
  "Een overgedimensioneerd vermogen: groter is niet beter en kost onnodig veel — het toestel moet bij je warmtevraag passen.",
  "Betalen voor een premium merk zonder meerwaarde, terwijl een goedkoper model in jouw situatie net zo goed presteert.",
  "All-electric forceren waar een hybride goedkoper en realistischer is — bijvoorbeeld bij hoge stooktemperaturen.",
];

const faqs = [
  {
    q: "Wat is de beste warmtepomp in 2026?",
    a: "Er is geen enkele 'beste' warmtepomp. De beste keuze hangt af van je woning, isolatie en budget. Merken als Daikin, Nibe, Vaillant, Mitsubishi en Bosch scoren over het algemeen goed; welk model bij jou past, bepaal je op basis van SCOP, prijs en geschiktheid.",
  },
  {
    q: "Welk merk warmtepomp is het betrouwbaarst?",
    a: "De grote merken bieden vergelijkbare betrouwbaarheid en garantie. Belangrijker dan het merk is een vakkundige installatie en een installateur met goede service in jouw regio.",
  },
  {
    q: "Is een duurdere warmtepomp altijd beter?",
    a: "Nee. Een duurder toestel of een bodem-water warmtepomp levert alleen meer op als je woning er geschikt voor is. In een slecht geïsoleerd huis kan een goedkopere hybride juist de slimste keuze zijn.",
  },
  {
    q: "Welke SCOP heeft de beste warmtepomp?",
    a: "Goede lucht-water warmtepompen halen een SCOP van 4,0–4,5; de beste bodem-water systemen komen boven de 5,0. Hoe hoger de SCOP, hoe lager je stroomverbruik — maar reken met realistische omstandigheden, niet alleen de testwaarde.",
  },
  {
    q: "Hoe vind ik de beste warmtepomp voor mijn woning?",
    a: "Begin met een onafhankelijke indicatie op basis van je woninggegevens. Mijn gratis keuzehulp geeft je het best passende type, een prijsindicatie en de subsidie — daarna kun je gericht offertes vergelijken.",
  },
];

export default function BesteWarmtepompPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Beste warmtepomp 2026", path: "/beste-warmtepomp" },
        ]}
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
              Vergelijking 2026
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Beste warmtepomp 2026: onafhankelijke vergelijking
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Ik ben aan geen enkel merk gebonden, dus ik kijk puur naar wat bij jouw woning past.
              Hieronder leg ik eerlijk uit wat een warmtepomp &apos;de beste&apos; maakt — en geef ik
              een onafhankelijke top 5.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                De basis
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat maakt een warmtepomp &quot;de beste&quot;?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Eerlijk: er bestaat geen warmtepomp die voor iedereen de beste is. Ik beoordeel een
                warmtepomp op drie dingen samen:
              </p>
              <ul className="space-y-3">
                <li className="rounded-2xl border border-green/10 bg-white p-5">
                  <span className="font-bold text-dark">SCOP (efficiëntie).</span> Hoeveel warmte het
                  toestel maakt per kWh stroom. Hoe hoger, hoe lager je energierekening.
                </li>
                <li className="rounded-2xl border border-green/10 bg-white p-5">
                  <span className="font-bold text-dark">Prijs.</span> De totaalprijs inclusief
                  installatie én wat je netto betaalt na de ISDE-subsidie.
                </li>
                <li className="rounded-2xl border border-green/10 bg-white p-5">
                  <span className="font-bold text-dark">Merk en betrouwbaarheid.</span> Garantie,
                  service en de beschikbaarheid van onderdelen op de lange termijn.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Top 5
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Onafhankelijke top 5 warmtepompen
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-green/10">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="px-4 py-4 font-display text-sm font-bold sm:px-5">Merk</th>
                    <th className="px-4 py-4 font-display text-sm font-bold sm:px-5">Type</th>
                    <th className="px-4 py-4 font-display text-sm font-bold sm:px-5">SCOP</th>
                    <th className="px-4 py-4 font-display text-sm font-bold sm:px-5">Prijs incl. installatie</th>
                    <th className="px-4 py-4 font-display text-sm font-bold sm:px-5">Geschikt voor</th>
                  </tr>
                </thead>
                <tbody>
                  {top5.map((r, i) => (
                    <tr key={r.merk} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                      <td className="px-4 py-4 font-bold text-dark sm:px-5">{r.merk}</td>
                      <td className="px-4 py-4 text-muted sm:px-5">{r.type}</td>
                      <td className="px-4 py-4 font-semibold text-green sm:px-5">{r.scop}</td>
                      <td className="px-4 py-4 text-muted sm:px-5">{r.prijs}</td>
                      <td className="px-4 py-4 text-muted sm:px-5">{r.geschikt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">
              * Indicatieve bandbreedtes; elk merk voert meerdere modellen. Dit is geen rangschikking
              van best naar slecht — de beste keuze hangt af van jouw woning. Bronnen:
              fabrikantopgaven, Milieu Centraal (2026).
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Jouw situatie
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Hoe kies je de juiste voor jouw woning?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {keuzefactoren.map((f) => (
                <article
                  key={f.titel}
                  className="rounded-2xl border border-green/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark">{f.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Eerlijk advies
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wanneer is de duurste niet de beste keuze?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Een hoger prijskaartje betekent niet automatisch een betere uitkomst. Ik zie het
                regelmatig misgaan in deze situaties:
              </p>
            </div>
            <ul className="space-y-3">
              {duurNietBeste.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-green/10 bg-light-bg p-5 text-base leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Wil je weten wat de verschillen in efficiëntie kosten?{" "}
              <Link href="/kosten" className="font-bold text-action hover:underline">
                Bekijk het eerlijke kostenoverzicht
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Veelgestelde vragen
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Vragen over de beste warmtepomp
              </h2>
            </div>
            <dl className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-green/10 bg-white open:border-green/40 open:shadow-[0_4px_24px_rgba(34,181,114,0.1)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="font-display text-base font-bold text-dark sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-green transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
            </dl>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
