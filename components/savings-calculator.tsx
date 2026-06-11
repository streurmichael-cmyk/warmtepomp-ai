"use client";

import { useState } from "react";

const BESPARING_PER_M3 = 0.56; // indicatieve besparing per m³ gas bij overstap op warmtepomp
const GEMIDDELDE_INVESTERING_NA_SUBSIDIE = 6500; // lucht-water, gemiddelde kosten min. ISDE-subsidie

export function SavingsCalculator() {
  const [gasverbruik, setGasverbruik] = useState(1500);

  const besparingPerJaar = Math.round(gasverbruik * BESPARING_PER_M3);
  const besparingPerMaand = Math.round(besparingPerJaar / 12);
  const terugverdientijd =
    besparingPerJaar > 0
      ? Math.round((GEMIDDELDE_INVESTERING_NA_SUBSIDIE / besparingPerJaar) * 10) / 10
      : 0;

  return (
    <div className="rounded-2xl border border-green/10 bg-white p-8 sm:p-10">
      <label htmlFor="gasverbruik" className="block text-sm font-bold text-dark">
        Huidig gasverbruik (m³ per jaar)
      </label>
      <input
        id="gasverbruik"
        type="range"
        min={500}
        max={3000}
        step={50}
        value={gasverbruik}
        onChange={(e) => setGasverbruik(Number(e.target.value))}
        className="mt-4 w-full accent-green"
      />
      <p className="mt-2 text-center font-display text-2xl font-bold text-dark">
        {gasverbruik.toLocaleString("nl-NL")} m³
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-light-bg p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            Besparing per maand
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-action">
            €{besparingPerMaand.toLocaleString("nl-NL")}
          </p>
        </div>
        <div className="rounded-xl bg-light-bg p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            Besparing per jaar
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-action">
            €{besparingPerJaar.toLocaleString("nl-NL")}
          </p>
        </div>
        <div className="rounded-xl bg-light-bg p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            Terugverdientijd
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-action">
            {terugverdientijd.toLocaleString("nl-NL")} jaar
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        Dit is een indicatie op basis van gemiddelde gas- en stroomprijzen en een gemiddelde
        investering van circa €6.500 (na ISDE-subsidie) voor een lucht-water warmtepomp. Jouw
        werkelijke besparing hangt af van je woning, isolatie en energieprijzen.
      </p>
    </div>
  );
}
