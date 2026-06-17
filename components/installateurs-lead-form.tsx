"use client";

import { useState } from "react";
import {
  ArrowRight,
  BuildingIcon,
  CheckCircleIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "./icons";
import { RevenueNote } from "./revenue-note";

const woningTypes = [
  "Tussenwoning",
  "Hoekwoning",
  "Twee-onder-een-kap",
  "Vrijstaand",
  "Appartement",
];

type Step = "search" | "lead" | "done";

export function InstallateursLeadForm({
  initialPostcode = "",
  locationLabel = "Postcode, bijv. 1234AB",
  acceptPlaceName = false,
}: {
  initialPostcode?: string;
  locationLabel?: string;
  acceptPlaceName?: boolean;
}) {
  const [step, setStep] = useState<Step>("search");
  const [postcode, setPostcode] = useState(initialPostcode);
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
    const trimmed = postcode.replace(/\s/g, "").toUpperCase();
    const isValidPostcode = /^\d{4}[A-Z]{2}$/.test(trimmed);

    if (acceptPlaceName) {
      if (postcode.trim().length < 2) {
        newErrors.postcode = "Vul een postcode of plaatsnaam in";
      }
    } else if (!isValidPostcode) {
      newErrors.postcode = "Vul een geldige postcode in, bijv. 1234AB";
    }

    if (!woningtype) {
      newErrors.woningtype = "Kies je woningtype";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isValidPostcode) {
      setPostcode(trimmed);
    }
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
                placeholder={locationLabel}
                maxLength={32}
                autoComplete="postal-code"
                aria-label="Postcode of plaats"
                className="w-full rounded-xl border-2 border-green/15 bg-white py-4 pl-11 pr-4 text-base text-dark placeholder:text-muted/50 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
              />
            </div>
            {errors.postcode && (
              <p role="alert" className="mt-1.5 text-sm text-error">
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
              <p role="alert" className="mt-1.5 text-sm text-error">
                {errors.woningtype}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5"
          >
            Zoek installateurs
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      )}

      {step === "lead" && (
        <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
          <p className="text-sm text-muted">
            {postcode} is genoteerd. Vul je gegevens in, dan ga ik voor je op zoek naar een
            passende installateur voor jouw woning.
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
              <p role="alert" className="mt-1.5 text-sm text-error">
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
              <p role="alert" className="mt-1.5 text-sm text-error">
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
              <p role="alert" className="mt-1.5 text-sm text-error">
                {errors.email}
              </p>
            )}
          </div>

          {submitError && (
            <p role="alert" className="text-sm text-error">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {submitting ? "Versturen..." : "Verstuur mijn aanvraag"}
            {!submitting && <ArrowRight className="h-5 w-5" />}
          </button>
          <RevenueNote />
        </form>
      )}

      {step === "done" && (
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green">
            <CheckCircleIcon className="h-8 w-8" />
          </div>
          <h2 className="font-display text-xl font-bold text-dark">Bedankt, {voornaam}!</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Ik heb je een bevestigingsmail gestuurd. Ik ga voor je op zoek naar een passende
            installateur voor jouw woning en neem zo snel mogelijk vrijblijvend contact met je op.
            Is een warmtepomp geschikt voor jouw woning? Dan volgt een opname bij je thuis, waarna je
            een offerte op maat ontvangt.
          </p>
        </div>
      )}
    </div>
  );
}
