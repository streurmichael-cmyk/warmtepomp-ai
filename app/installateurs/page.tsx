"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrustBar } from "@/components/trust-bar";
import {
  ArrowRight,
  BuildingIcon,
  CheckCircleIcon,
  ConversationIcon,
  MailIcon,
  MapPinIcon,
  NetworkIcon,
  PhoneIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/icons";

const woningTypes = [
  "Tussenwoning",
  "Hoekwoning",
  "Twee-onder-een-kap",
  "Vrijstaand",
  "Appartement",
];

const benefits = [
  {
    icon: ShieldIcon,
    title: "Gecertificeerde installateurs",
    body: "Wij werken alleen samen met gescreende en gecertificeerde installateurs in jouw regio.",
  },
  {
    icon: NetworkIcon,
    title: "Meerdere offertes vergelijken",
    body: "Ontvang meerdere offertes en vergelijk prijs, levertijd en beoordelingen op één plek.",
  },
  {
    icon: ConversationIcon,
    title: "Gratis en onafhankelijk",
    body: "Geen verplichtingen en geen kosten. Wij zijn niet gebonden aan één installateur of merk.",
  },
];

type Step = "search" | "lead" | "done";

export default function InstallateursPage() {
  const [step, setStep] = useState<Step>("search");
  const [postcode, setPostcode] = useState("");
  const [woningtype, setWoningtype] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();
    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      newErrors.postcode = "Vul een geldige postcode in, bijv. 1234AB";
    }
    if (!woningtype) {
      newErrors.woningtype = "Kies je woningtype";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setPostcode(cleanPostcode);
    setErrors({});
    setStep("lead");
  }

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!voornaam.trim()) newErrors.voornaam = "Vul je voornaam in";
    if (!/^[\d\s+()-]{9,}$/.test(telefoon.trim())) {
      newErrors.telefoon = "Vul een geldig telefoonnummer in";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Vul een geldig e-mailadres in";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode, woningtype, voornaam, telefoon, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStep("done");
    } catch {
      setSubmitError("Er ging iets mis bij het versturen. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

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
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
              Installateurs
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Vind een gecertificeerde warmtepomp installateur bij jou in de buurt
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Vul je postcode en woningtype in en ontvang gratis en vrijblijvend offertes van
              installateurs uit jouw regio.
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-green/10 bg-light-bg p-6 text-left sm:p-8">
              {step === "search" && (
                <form onSubmit={handleSearchSubmit} noValidate className="space-y-4">
                  <div>
                    <div className="relative">
                      <MapPinIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
                      <input
                        type="text"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                        placeholder="Postcode, bijv. 1234AB"
                        maxLength={7}
                        autoComplete="postal-code"
                        aria-label="Postcode"
                        className="w-full rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark placeholder:text-muted/50 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
                      />
                    </div>
                    {errors.postcode && (
                      <p role="alert" className="mt-1.5 text-sm text-red-500">
                        {errors.postcode}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <BuildingIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
                      <select
                        value={woningtype}
                        onChange={(e) => setWoningtype(e.target.value)}
                        aria-label="Woningtype"
                        className="w-full appearance-none rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
                      >
                        <option value="">Kies je woningtype</option>
                        {woningTypes.map((w) => (
                          <option key={w} value={w}>
                            {w}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.woningtype && (
                      <p role="alert" className="mt-1.5 text-sm text-red-500">
                        {errors.woningtype}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green to-turquoise px-7 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
                  >
                    Zoek installateurs
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              )}

              {step === "lead" && (
                <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                  <p className="text-sm text-muted">
                    We hebben installateurs gevonden in {postcode}. Vul je gegevens in om
                    vrijblijvend offertes te ontvangen.
                  </p>
                  <div>
                    <div className="relative">
                      <UserIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
                      <input
                        type="text"
                        value={voornaam}
                        onChange={(e) => setVoornaam(e.target.value)}
                        placeholder="Voornaam"
                        autoComplete="given-name"
                        className="w-full rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark placeholder:text-muted/50 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
                      />
                    </div>
                    {errors.voornaam && (
                      <p role="alert" className="mt-1.5 text-sm text-red-500">
                        {errors.voornaam}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <PhoneIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
                      <input
                        type="tel"
                        value={telefoon}
                        onChange={(e) => setTelefoon(e.target.value)}
                        placeholder="Telefoonnummer"
                        autoComplete="tel"
                        className="w-full rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark placeholder:text-muted/50 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
                      />
                    </div>
                    {errors.telefoon && (
                      <p role="alert" className="mt-1.5 text-sm text-red-500">
                        {errors.telefoon}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mailadres"
                        autoComplete="email"
                        className="w-full rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark placeholder:text-muted/50 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
                      />
                    </div>
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-500">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green to-turquoise px-7 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? "Versturen..." : "Ontvang offertes"}
                    {!submitting && <ArrowRight className="h-5 w-5" />}
                  </button>
                </form>
              )}

              {step === "done" && (
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green">
                    <CheckCircleIcon className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-dark">
                    Bedankt, {voornaam}!
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    We hebben je een bevestigingsmail gestuurd. Installateurs bij jou in de buurt
                    nemen binnen 24 uur contact met je op.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl text-center sm:mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
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
