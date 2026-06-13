"use client";

import { useState } from "react";
import { ArrowRight, MapPinIcon } from "./icons";

type Resultaat = { found: true; gemeente: string; woonplaats: string } | { found: false };

export function GemeenteLookupTool() {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultaat, setResultaat] = useState<Resultaat | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();

    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      setError("Vul een geldige postcode in, bijv. 1234AB");
      return;
    }

    setError("");
    setLoading(true);
    setResultaat(null);

    try {
      const res = await fetch(`/api/gemeente?postcode=${cleanPostcode}`);
      const data: Resultaat = await res.json();
      setResultaat(data);
    } catch {
      setError("Er ging iets mis bij het opzoeken, probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
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
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(14,122,79,0.3)] transition-colors hover:bg-[#0c6a44] disabled:opacity-70"
        >
          {loading ? "Zoeken..." : "Zoek op"}
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-2 text-left text-sm text-error pl-1">
          {error}
        </p>
      )}

      {resultaat && resultaat.found && (
        <div className="mt-6 rounded-2xl border border-green/15 bg-white p-6 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Jouw gemeente</p>
          <h3 className="mt-2 font-display text-xl font-bold text-dark">{resultaat.gemeente}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Net als alle andere gemeenten in Nederland is{" "}
            <strong className="text-dark">{resultaat.gemeente}</strong> wettelijk verplicht om een
            warmteplan op te stellen: een planning per wijk voor de overstap van aardgas naar
            duurzame warmte. Wanneer jouw wijk precies aan de beurt is, bepaalt de gemeente zelf —
            informeer hiernaar bij de gemeente {resultaat.woonplaats} of houd lokaal nieuws in de
            gaten.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Wil je niet wachten tot je wijk een aansluiting op het warmtenet krijgt? Met een
            warmtepomp ben je nu al onafhankelijk van het gasnet.
          </p>
        </div>
      )}

      {resultaat && !resultaat.found && (
        <p className="mt-4 text-sm text-muted">
          We konden deze postcode niet vinden. Controleer of je de postcode goed hebt ingevoerd.
        </p>
      )}
    </div>
  );
}
