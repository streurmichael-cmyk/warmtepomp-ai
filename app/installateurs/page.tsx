import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InstallateursLeadForm } from "@/components/installateurs-lead-form";
import { TrustBar } from "@/components/trust-bar";
import { ConversationIcon, NetworkIcon, ShieldIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Warmtepomp installateur vinden | warmtepomp.ai",
  description:
    "Op zoek naar een gecertificeerde warmtepomp installateur? Vul je gegevens in, dan help ik je de beste optie te vinden. Gratis en vrijblijvend.",
  path: "/installateurs",
});

const benefits = [
  {
    icon: ShieldIcon,
    title: "Gecertificeerde installateurs",
    body: "Ik bouw aan een netwerk van gescreende en gecertificeerde installateurs, zodat ik je straks de beste optie voor jouw woning kan bieden.",
  },
  {
    icon: NetworkIcon,
    title: "Adviesgesprek en offerte op maat",
    body: "Na een vrijblijvend gesprek en eventuele opname bij je thuis ontvang je een offerte die aansluit op jouw woning.",
  },
  {
    icon: ConversationIcon,
    title: "Gratis en onafhankelijk",
    body: "Geen verplichtingen en geen kosten. Ik ben niet gebonden aan één installateur of merk.",
  },
];

export default function InstallateursPage() {
  return (
    <>
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
              Installateurs
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Op zoek naar een gecertificeerde warmtepomp installateur?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Vul je postcode en woningtype in. Ik ga voor je op zoek naar een passende
              installateur en neem zo snel mogelijk vrijblijvend contact met je op.
            </p>

            <InstallateursLeadForm />
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
                Waarom via warmtepomp.ai?
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Eenvoudig de juiste installateur vinden
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-green/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
