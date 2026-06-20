import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import { InstallateurAanmeldingForm } from "@/components/installateur-aanmelding-form";
import { ArrowRight, CheckCircleIcon, ConversationIcon, NetworkIcon, ShieldIcon, StarIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Word partner-installateur | warmtepomp.ai",
  description:
    "Meld je aan als partner-installateur van warmtepomp.ai. Ik koppel huiseigenaren die serieus een warmtepomp overwegen aan een kleine groep installateurs.",
  path: "/voor-installateurs",
});

const stappen = [
  "Een huiseigenaar doorloopt mijn keuzehulp en vraagt een offerte aan.",
  "Die aanvraag stuur ik naar maximaal 2 à 3 installateurs in de regio — geen exclusiviteit, maar ook geen marktplaats waar tien partijen op één lead duiken.",
  "Je betaalt een transparante vergoeding per doorverwijzing. Geen abonnement, geen verplichtingen — je betaalt alleen voor wat je krijgt.",
  "Ik ben onafhankelijk van fabrikanten en merken en krijg geen fabrikant-provisie. De keuzehulp is gratis voor de huiseigenaar, en mijn advies wordt niet gestuurd door wie betaalt.",
];

const voordelen = [
  {
    icon: ConversationIcon,
    titel: "Kwalitatieve, lokale aanvragen",
    body: "Mensen die actief kiezen, niet koud gebeld.",
  },
  {
    icon: NetworkIcon,
    titel: "Max 2-3 installateurs per lead",
    body: "Een reële kans, en de klant wordt niet bestookt.",
  },
  {
    icon: ShieldIcon,
    titel: "Onafhankelijke positionering",
    body: "De huiseigenaar vertrouwt de doorverwijzing.",
  },
  {
    icon: CheckCircleIcon,
    titel: "Geen abonnement, geen verplichtingen",
    body: "Je betaalt alleen per doorverwijzing.",
  },
];

const basis = [
  "Een ingeschreven installatiebedrijf (KvK)",
  "F-gassen-gecertificeerd voor het koudemiddelwerk (persoons- én bedrijfscertificaat)",
  "Goed verzekerd. Werk je aan hybride systemen? Dan ook CO-gecertificeerd.",
];

export default function VoorInstallateursPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Voor installateurs", path: "/voor-installateurs" },
        ]}
      />
      <Header />
      <TrustBar />
      <main>
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-green/10 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Voor installateurs
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Word partner-installateur van warmtepomp.ai
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Ik koppel huiseigenaren die serieus een warmtepomp overwegen aan een kleine,
              geselecteerde groep installateurs. Onafhankelijk, zonder abonnement, en met een
              reële kans op de opdracht.
            </p>
            <a
              href="#aanmelden"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-action px-8 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
            >
              Aanmelden voor kennismaking
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* 2. Hoe het werkt */}
        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Hoe het werkt
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Van keuzehulp naar opdracht
              </h2>
            </div>
            <ol className="space-y-4">
              {stappen.map((stap, i) => (
                <li
                  key={stap}
                  className="flex items-start gap-4 rounded-2xl border border-green/10 bg-white p-5"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-action text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-muted">{stap}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. Waarom warmtepomp.ai */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Waarom warmtepomp.ai
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Wat het je oplevert
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {voordelen.map((v) => (
                <article
                  key={v.titel}
                  className="rounded-2xl border border-green/10 bg-light-bg p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-dark">{v.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Wat ik van je vraag */}
        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Wat ik van je vraag
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Eerlijk en overzichtelijk
              </h2>
            </div>

            <div className="rounded-2xl border border-green/10 bg-white p-7 sm:p-8">
              <h3 className="font-display text-lg font-bold text-dark">De basis (wettelijk verplicht):</h3>
              <ul className="mt-4 space-y-3">
                {basis.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-green/10 bg-white p-7 sm:p-8">
              <h3 className="font-display text-lg font-bold text-dark">Een pluspunt (niet verplicht):</h3>
              <p className="mt-4 flex items-start gap-3 text-base leading-relaxed text-muted">
                <StarIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green" />
                <span>
                  InstallQ-erkenning warmtepompinstallaties, Vakmanschap Warmtepomp, of aantoonbare
                  ervaring en reviews. Het maakt je voor mij én voor de klant aantrekkelijker.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. Eerlijk over de fase */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-green/15 bg-action/5 p-8 sm:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Eerlijk over de fase
              </p>
              <p className="text-base leading-relaxed text-muted">
                Volledige openheid: warmtepomp.ai is jong en groeit. Ik beloof je geen vast aantal
                leads. Dit is een kennismaking — ik bouw liever een kleine groep goede partners op
                dan veel losse afspraken. Geen exacte prijzen op deze pagina; die bespreek ik graag
                persoonlijk.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Aanmeldformulier */}
        <section id="aanmelden" className="scroll-mt-24 bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Aanmelden
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                Aanmelden voor kennismaking
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Laat je gegevens achter, dan neem ik persoonlijk contact met je op. Vrijblijvend.
              </p>
            </div>
            <InstallateurAanmeldingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
