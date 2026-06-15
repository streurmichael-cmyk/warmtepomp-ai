import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  FlameIcon,
  HomeIcon,
  ShieldIcon,
  SubsidyIcon,
} from "@/components/icons";
import { SubsidyDisclaimer } from "@/components/subsidy-disclaimer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Voorbeeldindicatie warmtepomp: zo ziet jouw indicatie eruit | warmtepomp.ai",
  description:
    "Benieuwd hoe een persoonlijke warmtepomp-indicatie eruitziet? Bekijk een voorbeeld met aanbevolen type, geschatte kosten, ISDE-subsidie en besparing.",
  path: "/voorbeeld-advies",
});

const woningGegevens = [
  { label: "Woningtype", value: "Tussenwoning" },
  { label: "Oppervlakte", value: "95 m²" },
  { label: "Huidig systeem", value: "CV-ketel op gas" },
];

const cijfers = [
  { label: "Geschatte kosten", value: "€4.500 – €6.500" },
  { label: "ISDE-subsidie", value: "€1.875" },
  { label: "Netto investering", value: "€2.625 – €4.625" },
  { label: "Terugverdientijd", value: "10 – 15 jaar" },
  { label: "Maandelijkse besparing", value: "€25 – €35" },
];

export default function VoorbeeldAdviesPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Voorbeeldindicatie
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Zo ziet jouw persoonlijke indicatie eruit
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Na het invullen van de keuzehulp ontvang je gratis en vrijblijvend een indicatie op
              maat. Hieronder een voorbeeld voor een fictieve woning.
            </p>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <HomeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-dark">Jouw woning</h2>
                  <p className="mt-1 text-sm text-muted">Voorbeeldsituatie</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {woningGegevens.map((item) => (
                  <div key={item.label} className="rounded-xl bg-light-bg p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-dark">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 rounded-xl bg-green/10 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-green">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-action">
                    Aanbevolen type
                  </p>
                  <h3 className="font-display text-xl font-bold text-dark">
                    Hybride warmtepomp
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Voor een tussenwoning van 95 m² met een CV-ketel op gas is een hybride
                    warmtepomp een logische eerste stap: lage instapkosten, je cv-ketel blijft
                    als back-up bij strenge vorst, en je bespaart direct op je gasverbruik.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-dark">
                  <FlameIcon className="h-5 w-5 text-green" />
                  Kosten, subsidie en besparing
                </h3>
                <div className="overflow-hidden rounded-2xl border border-green/10">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {cijfers.map((item, i) => (
                        <tr key={item.label} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                          <td className="px-5 py-3.5 font-bold text-dark sm:px-6">
                            {item.label}
                          </td>
                          <td className="px-5 py-3.5 text-green sm:px-6">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SubsidyDisclaimer className="mt-4" />
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-display text-lg font-bold text-dark">Volgende stap</h3>
                <ul className="space-y-2.5">
                  {[
                    "Vraag offertes aan bij gecertificeerde installateurs",
                    "Vergelijk prijs, levertijd en beoordelingen",
                    "Dien na installatie de ISDE-subsidie in via mijn.rvo.nl",
                  ].map((stap) => (
                    <li key={stap} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                      <span className="text-sm leading-relaxed text-muted">{stap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-xs text-muted">
                Dit is een voorbeeld op basis van een fictieve woning, ter illustratie van hoe
                een indicatie eruitziet. Kosten zijn indicatief. Bronnen: Milieu Centraal,
                Consumentenbond, RVO (2026).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-action py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SubsidyIcon className="mx-auto h-10 w-10 text-white/80" />
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benieuwd naar jouw eigen indicatie?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Beantwoord een paar vragen over je woning en ontvang binnen enkele minuten een
              indicatie op maat.
            </p>
            <Link
              href="/vergelijk"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-action shadow-[0_4px_28px_rgba(13,31,22,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.2)]"
            >
              Ontvang jouw eigen indicatie
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
