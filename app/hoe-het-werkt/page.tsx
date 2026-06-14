import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  CheckCircleIcon,
  ConversationIcon,
  NetworkIcon,
  UserIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hoe werkt warmtepomp.ai? In 4 stappen naar jouw indicatie | warmtepomp.ai",
  description:
    "Zo werkt warmtepomp.ai: vul je gegevens in, ontvang persoonlijke indicatie, vergelijk gecertificeerde installateurs en plan je installatie. Gratis en vrijblijvend.",
  path: "/hoe-het-werkt",
});

const steps = [
  {
    icon: UserIcon,
    title: "Vul je gegevens in",
    body: "Beantwoord een paar korte vragen over je woning, oppervlakte en huidige verwarmingssysteem. Dit duurt minder dan 2 minuten.",
  },
  {
    icon: ConversationIcon,
    title: "Ontvang persoonlijke indicatie",
    body: "Op basis van jouw antwoorden berekent de tool direct welk type warmtepomp het beste past, inclusief een inschatting van kosten en subsidie.",
  },
  {
    icon: NetworkIcon,
    title: "Vergelijk installateurs",
    body: "We koppelen je aan gecertificeerde installateurs bij jou in de buurt, zodat je eenvoudig offertes kunt vergelijken.",
  },
  {
    icon: CheckCircleIcon,
    title: "Plan je installatie",
    body: "Kies de installateur die het beste bij jou past en plan de installatie van je nieuwe warmtepomp in.",
  },
];

export default function HoeHetWerktPage() {
  return (
    <>
      <Header />
      <TrustBar />
      <main>
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Hoe het werkt
              </p>
              <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
                In 4 stappen naar jouw warmtepomp
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted">
                Van eerste vraag tot werkende warmtepomp — wij begeleiden je bij elke stap.
              </p>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-green/10 bg-light-bg p-8"
                >
                  <span
                    className="absolute right-5 top-4 font-display text-4xl font-bold text-green/10"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-action text-white shadow-[0_4px_16px_rgba(34,181,114,0.3)]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative font-display text-lg font-bold text-dark">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-14 text-center">
              <Link
                href="/vergelijk"
                className="inline-flex items-center gap-2 rounded-xl bg-action px-8 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
              >
                Start nu gratis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                De techniek in het kort
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Hoe kan een warmtepomp zo zuinig zijn?
              </h2>
            </div>

            <div className="space-y-4 rounded-2xl border border-green/10 bg-white p-8 text-base leading-relaxed text-muted sm:p-10">
              <p>
                Een warmtepomp maakt geen warmte — hij <strong className="text-dark">verplaatst</strong>{" "}
                het. Net zoals een koelkast warmte van binnen naar buiten pompt, haalt een warmtepomp
                warmte uit de buitenlucht en brengt die naar binnen. Daarvoor is maar een klein beetje
                elektriciteit nodig.
              </p>
              <p>
                Het resultaat: <strong className="text-dark">1 eenheid stroom levert 3 à 4 eenheden
                warmte op</strong>. Dat noemen we een COP van 3 of 4. Een cv-ketel kan dat nooit — die
                zet gas om in warmte en verliest altijd energie bij de verbranding.
              </p>
              <p>
                En die extra warmte? Die komt gewoon uit de buitenlucht. Zelfs bij -10°C zit er nog
                warmte in de lucht die de warmtepomp naar binnen pompt. Geen magie, gewoon natuurkunde.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
