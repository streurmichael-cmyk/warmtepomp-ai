"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import {
  ISDE_LUCHT_WATER_KW_MAX,
  ISDE_LUCHT_WATER_KW_MIN,
  ISDE_LUCHT_WATER_LABEL_BONUS,
  ISDE_LUCHT_WATER_PER_KW,
  ISDE_LUCHT_WATER_START,
  berekenIsdeLuchtWater,
  formatEuro,
} from "@/lib/subsidie";

// Stempel zodat bezoekers zien hoe vers de gecontroleerde bedragen zijn.
const GECONTROLEERD_OP = "juni 2026";
const RVO_ISDE_WIJZIGINGEN =
  "https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026";

type IsdeCalculatorProps = {
  className?: string;
  /** Toon de CTA-knop onder de uitkomst. Standaard aan. */
  showCta?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function IsdeCalculator({
  className = "",
  showCta = true,
  ctaHref = "/vergelijk",
  ctaLabel = "Vraag een vrijblijvende indicatie aan",
}: IsdeCalculatorProps) {
  const [vermogen, setVermogen] = useState(6);
  const [isTopLabel, setIsTopLabel] = useState(false);

  const kwBedrag = ISDE_LUCHT_WATER_PER_KW * vermogen;
  const bonus = isTopLabel ? ISDE_LUCHT_WATER_LABEL_BONUS : 0;
  const totaal = berekenIsdeLuchtWater(vermogen, isTopLabel);

  return (
    <div
      className={`rounded-2xl border border-green/10 bg-white p-8 sm:p-10 ${className}`}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Vermogen */}
        <div>
          <label htmlFor="isde-vermogen" className="block text-sm font-bold text-dark">
            Thermisch vermogen warmtepomp (kW)
          </label>
          <input
            id="isde-vermogen"
            type="range"
            min={ISDE_LUCHT_WATER_KW_MIN}
            max={ISDE_LUCHT_WATER_KW_MAX}
            step={1}
            value={vermogen}
            onChange={(e) => setVermogen(Number(e.target.value))}
            className="mt-4 w-full accent-green"
            aria-describedby="isde-vermogen-waarde"
          />
          <p
            id="isde-vermogen-waarde"
            className="mt-2 text-center font-display text-2xl font-bold text-dark"
          >
            {vermogen} kW
          </p>
          <p className="mt-1 text-center text-xs text-muted">
            Weet je het vermogen niet zeker? Een gemiddelde rijtjeswoning zit rond de 6 kW.
          </p>
        </div>

        {/* Energielabel */}
        <fieldset>
          <legend className="block text-sm font-bold text-dark">Energielabel warmtepomp</legend>
          <div className="mt-4 grid gap-3">
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                isTopLabel
                  ? "border-action bg-action/5 text-dark"
                  : "border-green/15 text-muted hover:border-green/35"
              }`}
            >
              <input
                type="radio"
                name="isde-label"
                checked={isTopLabel}
                onChange={() => setIsTopLabel(true)}
                className="accent-green"
              />
              <span>
                A+++ <span className="text-muted">(met labelbonus)</span>
              </span>
            </label>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                !isTopLabel
                  ? "border-action bg-action/5 text-dark"
                  : "border-green/15 text-muted hover:border-green/35"
              }`}
            >
              <input
                type="radio"
                name="isde-label"
                checked={!isTopLabel}
                onChange={() => setIsTopLabel(false)}
                className="accent-green"
              />
              <span>Lager dan A+++</span>
            </label>
          </div>
        </fieldset>
      </div>

      {/* Uitkomst */}
      <div className="mt-8 rounded-xl bg-light-bg p-6 text-center sm:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          Indicatief subsidiebedrag
        </p>
        <p
          className="mt-2 font-display text-4xl font-bold text-action sm:text-5xl"
          aria-live="polite"
        >
          {formatEuro(totaal)}
        </p>
        <p className="mt-3 text-sm text-muted">
          {formatEuro(ISDE_LUCHT_WATER_START)} startbedrag
          {" + "}
          {formatEuro(kwBedrag)} voor {vermogen} kW
          {bonus > 0 && <> {" + "}{formatEuro(bonus)} A+++-bonus</>}
        </p>
        <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted">
          Indicatie. Het exacte bedrag hangt af van de meldcode van jouw specifieke warmtepomp.
          Controleer altijd de actuele bedragen via{" "}
          <a
            href="https://www.rvo.nl/subsidies-financiering/isde"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-action underline underline-offset-2 hover:no-underline"
          >
            rvo.nl
          </a>
          .
        </p>

        {showCta && (
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-action px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_28px_rgba(13,31,22,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(13,31,22,0.18)]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Voetnoot & stempel */}
      <p className="mt-6 text-xs leading-relaxed text-muted">
        Geldt voor je eerste lucht-water warmtepomp.
        <br />
        Alleen voor eigenaar-bewoners van een bestaande woning (bouwjaar vóór 2019), met
        installatie door een erkend installateur.
      </p>
      <p className="mt-3 text-xs text-muted">
        <a
          href={RVO_ISDE_WIJZIGINGEN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-green/10 px-2.5 py-1 font-bold text-green-ink underline underline-offset-2 hover:no-underline"
        >
          <span aria-hidden="true">✓</span> Gecontroleerd op: {GECONTROLEERD_OP}
        </a>
      </p>
    </div>
  );
}
