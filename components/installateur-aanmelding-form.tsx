"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircleIcon } from "./icons";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type GrecaptchaWindow = {
  grecaptcha?: {
    enterprise?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  };
};

/** Haalt een reCAPTCHA Enterprise-token op; undefined als niet geconfigureerd/geladen. */
async function getRecaptchaToken(): Promise<string | undefined> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return undefined;
  for (let i = 0; i < 30 && !(window as unknown as GrecaptchaWindow).grecaptcha?.enterprise; i++) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  const enterprise = (window as unknown as GrecaptchaWindow).grecaptcha?.enterprise;
  if (!enterprise) return undefined;
  try {
    return await new Promise<string>((resolve, reject) => {
      enterprise.ready(() => {
        enterprise.execute(RECAPTCHA_SITE_KEY!, { action: "installateur_aanmelding" }).then(resolve, reject);
      });
    });
  } catch {
    return undefined;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Velden = {
  bedrijfsnaam: string;
  contactpersoon: string;
  email: string;
  telefoon: string;
  werkgebied: string;
  kvk: string;
  fgassen: string;
  installq: string;
  toelichting: string;
};

const LEEG: Velden = {
  bedrijfsnaam: "",
  contactpersoon: "",
  email: "",
  telefoon: "",
  werkgebied: "",
  kvk: "",
  fgassen: "",
  installq: "",
  toelichting: "",
};

const inputClass =
  "w-full rounded-xl border-2 border-green/20 bg-white px-4 py-3 text-base text-dark placeholder:text-muted/60 outline-none transition-all focus:border-green focus:shadow-[0_0_0_4px_rgba(34,181,114,0.1)]";
const labelClass = "mb-1.5 block text-sm font-semibold text-dark";

export function InstallateurAanmeldingForm() {
  const [data, setData] = useState<Velden>(LEEG);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  // Laad het reCAPTCHA Enterprise-script (eenmalig) zodat ik een token kan ophalen.
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    const id = "recaptcha-enterprise";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  function update<K extends keyof Velden>(veld: K, waarde: string) {
    setData((d) => ({ ...d, [veld]: waarde }));
    if (errors[veld]) setErrors((e) => ({ ...e, [veld]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fouten: Record<string, string> = {};
    if (!data.bedrijfsnaam.trim()) fouten.bedrijfsnaam = "Vul je bedrijfsnaam in.";
    if (!data.contactpersoon.trim()) fouten.contactpersoon = "Vul een contactpersoon in.";
    if (!EMAIL_REGEX.test(data.email.trim())) fouten.email = "Vul een geldig e-mailadres in.";
    if (!data.telefoon.trim()) fouten.telefoon = "Vul een telefoonnummer in.";
    if (!data.werkgebied.trim()) fouten.werkgebied = "Vul je werkgebied in.";
    if (Object.keys(fouten).length > 0) {
      setErrors(fouten);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setSubmitError("");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/installateur-aanmelding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Request failed");
      }
      setDone(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error && err.message !== "Request failed"
          ? err.message
          : "Er ging iets mis bij het versturen. Probeer het opnieuw."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-green/15 bg-white p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-action/10 text-action">
          <CheckCircleIcon className="h-8 w-8" />
        </div>
        <h3 className="font-display text-xl font-bold text-dark">Bedankt voor je aanmelding</h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
          Ik heb je gegevens ontvangen en neem persoonlijk contact met je op voor een
          kennismaking. Tot snel.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-xl rounded-2xl border border-green/15 bg-white p-6 text-left sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bedrijfsnaam" className={labelClass}>Bedrijfsnaam *</label>
          <input id="bedrijfsnaam" type="text" className={inputClass} value={data.bedrijfsnaam}
            onChange={(e) => update("bedrijfsnaam", e.target.value)} autoComplete="organization" />
          {errors.bedrijfsnaam && <p className="mt-1 text-sm text-error">{errors.bedrijfsnaam}</p>}
        </div>
        <div>
          <label htmlFor="contactpersoon" className={labelClass}>Contactpersoon *</label>
          <input id="contactpersoon" type="text" className={inputClass} value={data.contactpersoon}
            onChange={(e) => update("contactpersoon", e.target.value)} autoComplete="name" />
          {errors.contactpersoon && <p className="mt-1 text-sm text-error">{errors.contactpersoon}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input id="email" type="email" className={inputClass} value={data.email}
            onChange={(e) => update("email", e.target.value)} autoComplete="email" />
          {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="telefoon" className={labelClass}>Telefoon *</label>
          <input id="telefoon" type="tel" className={inputClass} value={data.telefoon}
            onChange={(e) => update("telefoon", e.target.value)} autoComplete="tel" />
          {errors.telefoon && <p className="mt-1 text-sm text-error">{errors.telefoon}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="werkgebied" className={labelClass}>Werkgebied (regio of postcodes) *</label>
          <input id="werkgebied" type="text" className={inputClass} value={data.werkgebied}
            placeholder="Bijv. regio Utrecht, of 3500–3999"
            onChange={(e) => update("werkgebied", e.target.value)} />
          {errors.werkgebied && <p className="mt-1 text-sm text-error">{errors.werkgebied}</p>}
        </div>
        <div>
          <label htmlFor="kvk" className={labelClass}>KvK-nummer</label>
          <input id="kvk" type="text" className={inputClass} value={data.kvk}
            onChange={(e) => update("kvk", e.target.value)} />
        </div>
        <div>
          <label htmlFor="fgassen" className={labelClass}>F-gassen-gecertificeerd</label>
          <select id="fgassen" className={inputClass} value={data.fgassen}
            onChange={(e) => update("fgassen", e.target.value)}>
            <option value="">Maak een keuze</option>
            <option value="Ja">Ja</option>
            <option value="Nee">Nee</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="installq" className={labelClass}>InstallQ-erkenning (optioneel)</label>
          <select id="installq" className={inputClass} value={data.installq}
            onChange={(e) => update("installq", e.target.value)}>
            <option value="">Maak een keuze</option>
            <option value="Ja">Ja</option>
            <option value="Nee">Nee</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="toelichting" className={labelClass}>Korte toelichting (ervaring / specialisatie)</label>
          <textarea id="toelichting" rows={4} className={inputClass} value={data.toelichting}
            onChange={(e) => update("toelichting", e.target.value)} />
        </div>
      </div>

      {submitError && (
        <p role="alert" className="mt-4 text-sm text-error">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44] disabled:opacity-60"
      >
        {submitting ? "Versturen..." : "Aanmelden voor kennismaking"}
        {!submitting && <ArrowRight className="h-5 w-5" />}
      </button>
      <p className="mt-3 text-center text-xs text-muted-light">
        Dit is een vrijblijvende aanmelding voor een kennismaking. Ik neem persoonlijk contact
        met je op; je zit nergens aan vast. Zie mijn{" "}
        <Link href="/privacy" className="underline hover:text-action">
          privacyverklaring
        </Link>{" "}
        voor hoe ik met je gegevens omga.
      </p>
    </form>
  );
}
