"use client";

import { useState } from "react";
import { ArrowRight, MapPinIcon } from "./icons";

export function AddressLookupForm() {
  const [postcode, setPostcode] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase();
    const cleanHuisnummer = huisnummer.trim();

    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      setError("Vul een geldige postcode in, bijv. 1234AB");
      return;
    }
    if (!/^\d+[A-Za-z]?$/.test(cleanHuisnummer)) {
      setError("Vul een geldig huisnummer in");
      return;
    }

    setError("");
    window.location.href = `/vergelijk?postcode=${cleanPostcode}&huisnummer=${encodeURIComponent(cleanHuisnummer)}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 w-full max-w-md lg:mx-0">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-[2]">
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
        <div className="relative flex-1">
          <input
            type="text"
            value={huisnummer}
            onChange={(e) => {
              setHuisnummer(e.target.value);
              if (error) setError("");
            }}
            placeholder="Huisnr."
            maxLength={6}
            autoComplete="address-line2"
            aria-label="Huisnummer"
            className="w-full rounded-xl border-2 border-green/20 bg-white px-4 py-4 text-base text-dark placeholder:text-muted/60 shadow-sm outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-2 text-left text-sm text-error pl-1">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-2 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(14,122,79,0.3)] transition-colors hover:bg-[#0c6a44]"
      >
        Analyseer mijn woning
        <ArrowRight className="h-5 w-5" />
      </button>

      <p className="mt-3 text-center text-sm text-muted lg:text-left">
        De AI haalt automatisch je woninggegevens op via het Kadaster
      </p>
    </form>
  );
}
