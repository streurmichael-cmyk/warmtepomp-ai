"use client";

import { useState } from "react";
import { ArrowRight, MapPinIcon } from "./icons";

export function PostcodeInput() {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\s/g, "").toUpperCase();
    setPostcode(val);
    if (error) setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = postcode.replace(/\s/g, "");
    if (!/^\d{4}[A-Z]{2}$/i.test(clean)) {
      setError("Vul een geldige postcode in, bijv. 1234AB");
      return;
    }
    window.location.href = `#keuzehulp?postcode=${clean}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green" />
          <input
            type="text"
            value={postcode}
            onChange={handleChange}
            placeholder="Jouw postcode, bijv. 1234AB"
            maxLength={7}
            autoComplete="postal-code"
            aria-label="Postcode"
            aria-describedby={error ? "postcode-error" : undefined}
            className="w-full rounded-xl border-2 border-white/20 bg-white/10 pl-11 pr-4 py-4 text-base text-white placeholder:text-white/40 backdrop-blur-sm outline-none transition-all focus:border-turquoise focus:bg-white/15"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green to-turquoise px-7 py-4 text-base font-bold text-dark shadow-[0_4px_28px_rgba(34,181,114,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(0,212,160,0.5)] whitespace-nowrap"
        >
          Start gratis
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {error && (
        <p id="postcode-error" role="alert" className="mt-2 text-sm text-red-400 text-left pl-1">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-white/40 text-center">
        Geen registratie vereist · 100% gratis · Resultaat binnen 5 minuten
      </p>
    </form>
  );
}
