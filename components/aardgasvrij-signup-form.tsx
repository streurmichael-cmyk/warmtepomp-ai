"use client";

import { useState } from "react";
import { ArrowRight, CheckCircleIcon, MailIcon, MapPinIcon, UserIcon } from "./icons";

export function AardgasvrijSignupForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (naam.trim().length === 0) {
      setError("Vul je naam in");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Vul een geldig e-mailadres in");
      return;
    }
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();
    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      setError("Vul een geldige postcode in, bijv. 1234AB");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/aardgasvrij", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam: naam.trim(), email, postcode: cleanPostcode }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Er ging iets mis, probeer het later opnieuw.");
        return;
      }

      setDone(true);
    } catch {
      setError("Er ging iets mis, probeer het later opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-green/15 bg-white p-8 text-center">
        <CheckCircleIcon className="h-10 w-10 text-green" />
        <h3 className="font-display text-lg font-bold text-dark">Bedankt voor je aanmelding!</h3>
        <p className="text-sm leading-relaxed text-muted">
          Ik houd je op de hoogte zodra er voldoende belangstelling is in jouw buurt voor een
          collectieve actie.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-md flex-col gap-3">
      <div className="relative">
        <UserIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
        <input
          type="text"
          value={naam}
          onChange={(e) => {
            setNaam(e.target.value);
            if (error) setError("");
          }}
          placeholder="Naam"
          autoComplete="name"
          aria-label="Naam"
          className="w-full rounded-xl border-2 border-green/20 bg-white pl-11 pr-4 py-4 text-base text-dark placeholder:text-muted/60 shadow-sm outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
        />
      </div>

      <div className="relative">
        <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="E-mailadres"
          autoComplete="email"
          aria-label="E-mailadres"
          className="w-full rounded-xl border-2 border-green/20 bg-white pl-11 pr-4 py-4 text-base text-dark placeholder:text-muted/60 shadow-sm outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
        />
      </div>

      <div className="relative">
        <MapPinIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
        <input
          type="text"
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
            if (error) setError("");
          }}
          placeholder="Postcode, bijv. 1234AB"
          maxLength={7}
          autoComplete="postal-code"
          aria-label="Postcode"
          className="w-full rounded-xl border-2 border-green/20 bg-white pl-11 pr-4 py-4 text-base text-dark placeholder:text-muted/60 shadow-sm outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
        />
      </div>

      {error && (
        <p role="alert" className="text-left text-sm text-error pl-1">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(14,122,79,0.3)] transition-colors hover:bg-[#0c6a44] disabled:opacity-70"
      >
        {submitting ? "Versturen..." : "Meld je aan"}
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="text-center text-xs text-muted">
        Je ontvangt alleen een update als er een collectieve actie in jouw buurt mogelijk is.
      </p>
    </form>
  );
}
