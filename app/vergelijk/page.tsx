"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Logo } from "@/components/logo";
import {
  ArrowLeft,
  ArrowRight,
  BoltIcon,
  CheckCircleIcon,
  FlameIcon,
  MailIcon,
  MapPinIcon,
  NetworkIcon,
  PhoneIcon,
  QuestionIcon,
  UserIcon,
} from "@/components/icons";
import {
  type AdviesResultaat,
  berekenAdvies,
  bouwjaarOpties,
  isolatieOpties,
  oppervlakteOpties,
  schatGasverbruik,
  standaardIsolatie,
} from "@/lib/advies";

type IconComponent = React.ComponentType<{ className?: string }>;

type StepName =
  | "adres"
  | "bevestig"
  | "isolatie"
  | "systeem"
  | "gasverbruik"
  | "advies"
  | "contact"
  | "bedankt";

const QUESTION_STEPS: StepName[] = ["adres", "bevestig", "isolatie", "systeem", "gasverbruik"];

const woningtypeOpties = ["Tussenwoning", "Hoekwoning", "Twee-onder-een-kap", "Vrijstaand", "Appartement"];

const systemen: { label: string; icon: IconComponent }[] = [
  { label: "CV-ketel op gas", icon: FlameIcon },
  { label: "Stadsverwarming", icon: NetworkIcon },
  { label: "Elektrisch", icon: BoltIcon },
  { label: "Anders", icon: QuestionIcon },
];

type FormData = {
  postcode: string;
  huisnummer: string;
  adres: string;
  woningtype: string;
  oppervlakte: string;
  bouwjaar: string;
  isolatie: string;
  huidigSysteem: string;
  gasverbruik: number;
  voornaam: string;
  telefoon: string;
  email: string;
};

const initialData: FormData = {
  postcode: "",
  huisnummer: "",
  adres: "",
  woningtype: "",
  oppervlakte: "",
  bouwjaar: "",
  isolatie: "",
  huidigSysteem: "",
  gasverbruik: 0,
  voornaam: "",
  telefoon: "",
  email: "",
};

type AdresErrors = Partial<Record<"postcode" | "huisnummer" | "algemeen", string>>;
type LeadErrors = Partial<Record<"voornaam" | "telefoon" | "email", string>>;

export default function VergelijkPage() {
  const [step, setStep] = useState<StepName>("adres");
  const [data, setData] = useState<FormData>(() => {
    if (typeof window === "undefined") return initialData;
    const params = new URLSearchParams(window.location.search);
    const postcode = params.get("postcode")?.replace(/\s/g, "").toUpperCase() ?? "";
    const woningtype = params.get("woningtype") ?? "";
    return {
      ...initialData,
      ...(/^\d{4}[A-Z]{2}$/.test(postcode) ? { postcode } : {}),
      ...(woningtypeOpties.includes(woningtype) ? { woningtype } : {}),
    };
  });
  const [zoeken, setZoeken] = useState(false);
  const [adresGevonden, setAdresGevonden] = useState(false);
  const [autoIngevuld, setAutoIngevuld] = useState(false);
  const [adresErrors, setAdresErrors] = useState<AdresErrors>({});
  const [leadErrors, setLeadErrors] = useState<LeadErrors>({});
  const [wantsInstallateur, setWantsInstallateur] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleAdresSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleanPostcode = data.postcode.replace(/\s/g, "").toUpperCase();
    const cleanHuisnummer = data.huisnummer.trim();

    const errors: AdresErrors = {};
    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      errors.postcode = "Vul een geldige postcode in, bijv. 1234AB";
    }
    if (!/^\d+[A-Za-z]?$/.test(cleanHuisnummer)) {
      errors.huisnummer = "Vul een geldig huisnummer in";
    }
    if (Object.keys(errors).length > 0) {
      setAdresErrors(errors);
      return;
    }

    setAdresErrors({});
    setZoeken(true);

    try {
      const res = await fetch(
        `/api/woninggegevens?postcode=${cleanPostcode}&huisnummer=${encodeURIComponent(cleanHuisnummer)}`
      );
      const json = await res.json();

      if (json?.found && json?.woning) {
        setData((d) => ({
          ...d,
          postcode: cleanPostcode,
          huisnummer: cleanHuisnummer,
          adres: json.woning.adres ?? `${cleanPostcode} ${cleanHuisnummer}`,
          bouwjaar: json.woning.bouwjaar || d.bouwjaar,
          oppervlakte: json.woning.oppervlakte || d.oppervlakte,
        }));
        setAdresGevonden(true);
        setAutoIngevuld(Boolean(json.woning.bouwjaar || json.woning.oppervlakte));
      } else {
        setData((d) => ({
          ...d,
          postcode: cleanPostcode,
          huisnummer: cleanHuisnummer,
          adres: `${cleanPostcode} ${cleanHuisnummer}`,
        }));
        setAdresGevonden(false);
        setAutoIngevuld(false);
      }
    } catch {
      setData((d) => ({
        ...d,
        postcode: cleanPostcode,
        huisnummer: cleanHuisnummer,
        adres: `${cleanPostcode} ${cleanHuisnummer}`,
      }));
      setAdresGevonden(false);
      setAutoIngevuld(false);
    } finally {
      setZoeken(false);
      setStep("bevestig");
    }
  }

  function selectIsolatie(opt: string) {
    const waarde = opt === "Weet ik niet" ? standaardIsolatie(data.bouwjaar) : opt;
    setData((d) => ({ ...d, isolatie: waarde }));
    setStep("systeem");
  }

  function selectSysteem(label: string) {
    const geschat = schatGasverbruik(data.oppervlakte, data.bouwjaar);
    setData((d) => ({ ...d, huidigSysteem: label, gasverbruik: d.gasverbruik || geschat }));
    setStep("gasverbruik");
  }

  const advies = useMemo<AdviesResultaat>(
    () =>
      berekenAdvies({
        woningtype: data.woningtype,
        oppervlakte: data.oppervlakte,
        bouwjaar: data.bouwjaar,
        isolatie: data.isolatie,
        huidigSysteem: data.huidigSysteem,
        gasverbruik: data.gasverbruik,
      }),
    [data.woningtype, data.oppervlakte, data.bouwjaar, data.isolatie, data.huidigSysteem, data.gasverbruik]
  );

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: LeadErrors = {};
    if (!data.voornaam.trim()) errors.voornaam = "Vul je voornaam in";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = "Vul een geldig e-mailadres in";
    }
    if (wantsInstallateur && !/^[\d\s+()-]{9,}$/.test(data.telefoon.trim())) {
      errors.telefoon = "Vul een geldig telefoonnummer in";
    }

    if (Object.keys(errors).length > 0) {
      setLeadErrors(errors);
      return;
    }

    setLeadErrors({});
    setSubmitting(true);
    setSubmitError("");

    const payload = {
      woningtype: data.woningtype,
      oppervlakte: data.oppervlakte,
      bouwjaar: data.bouwjaar,
      isolatie: data.isolatie,
      huidigSysteem: data.huidigSysteem,
      gasverbruik: data.gasverbruik,
      postcode: data.postcode,
      huisnummer: data.huisnummer,
      voornaam: data.voornaam.trim(),
      email: data.email.trim(),
      telefoon: wantsInstallateur ? data.telefoon.trim() : undefined,
      adviesType: advies.type,
      wantsInstallateur,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStep("bedankt");
    } catch {
      setSubmitError("Er ging iets mis bij het versturen. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-light-bg text-dark">
      <div className="flex items-center justify-between px-5 py-6 sm:px-8">
        <Logo variant="light" />
        <Link href="/" className="text-sm font-medium text-muted transition-colors hover:text-action">
          Sluiten
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 pb-16 sm:px-8">
        <div className="w-full max-w-2xl">
          <ProgressIndicator step={step} />

          {step === "adres" && (
            <Step heading="Waar staat je woning?">
              <p className="mb-6 text-base leading-relaxed text-muted">
                Vul je postcode en huisnummer in. De tool zoekt automatisch een aantal gegevens van
                je woning op, zodat je zelf minder hoeft in te vullen.
              </p>
              <form onSubmit={handleAdresSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="postcode"
                    label="Postcode"
                    icon={MapPinIcon}
                    type="text"
                    placeholder="1234 AB"
                    maxLength={7}
                    autoComplete="postal-code"
                    value={data.postcode}
                    onChange={(v) => update("postcode", v.toUpperCase())}
                    error={adresErrors.postcode}
                  />
                  <FormField
                    name="huisnummer"
                    label="Huisnummer"
                    type="text"
                    placeholder="12"
                    maxLength={6}
                    autoComplete="address-line2"
                    value={data.huisnummer}
                    onChange={(v) => update("huisnummer", v)}
                    error={adresErrors.huisnummer}
                  />
                </div>

                <button
                  type="submit"
                  disabled={zoeken}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44] disabled:opacity-60"
                >
                  {zoeken ? "Bezig met zoeken..." : "Zoek mijn woning"}
                  {!zoeken && <ArrowRight className="h-5 w-5" />}
                </button>
                <p className="text-center text-xs text-muted-light">
                  Geen verplichtingen — we vragen pas om je naam en e-mail als je advies klaar is.
                </p>
              </form>
            </Step>
          )}

          {step === "bevestig" && (
            <Step heading="Klopt dit?" onBack={() => setStep("adres")}>
              <div className="mb-8 flex items-start gap-3 rounded-xl border border-green/15 bg-white p-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-action/10 text-action">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-dark">
                    {data.adres || `${data.postcode} ${data.huisnummer}`}
                  </p>
                  <p className="text-sm text-muted">
                    {autoIngevuld
                      ? "De tool heeft een deel van je gegevens alvast ingevuld — klopt het niet, pas het dan aan."
                      : adresGevonden
                        ? "De tool heeft je adres gevonden, maar niet alle details. Vul de onderstaande gegevens zelf aan."
                        : "De tool kon je woning niet automatisch vinden. Vul de onderstaande gegevens zelf in."}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <ChipGroup
                  label="Wat voor woning is het?"
                  options={woningtypeOpties}
                  value={data.woningtype}
                  onChange={(v) => update("woningtype", v)}
                />
                <ChipGroup
                  label="Wanneer is je woning gebouwd?"
                  options={bouwjaarOpties}
                  value={data.bouwjaar}
                  onChange={(v) => update("bouwjaar", v)}
                />
                <ChipGroup
                  label="Hoe groot is je woning?"
                  options={oppervlakteOpties}
                  value={data.oppervlakte}
                  onChange={(v) => update("oppervlakte", v)}
                />
              </div>

              <button
                type="button"
                disabled={!data.woningtype || !data.bouwjaar || !data.oppervlakte}
                onClick={() => setStep("isolatie")}
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Klopt, ga verder
                <ArrowRight className="h-5 w-5" />
              </button>
            </Step>
          )}

          {step === "isolatie" && (
            <Step heading="Hoe is je woning geïsoleerd?" onBack={() => setStep("bevestig")}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {isolatieOpties.map((opt) => (
                  <OptionCard
                    key={opt}
                    label={opt}
                    selected={data.isolatie === opt || (opt === "Weet ik niet" && data.isolatie === "")}
                    onClick={() => selectIsolatie(opt)}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-light">
                Niet zeker? Kies &ldquo;Weet ik niet&rdquo; — dan gaat de tool uit van een gemiddelde
                isolatie voor het bouwjaar van je woning.
              </p>
            </Step>
          )}

          {step === "systeem" && (
            <Step heading="Hoe verwarm je nu?" onBack={() => setStep("isolatie")}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {systemen.map((opt) => (
                  <OptionCard
                    key={opt.label}
                    label={opt.label}
                    icon={opt.icon}
                    selected={data.huidigSysteem === opt.label}
                    onClick={() => selectSysteem(opt.label)}
                  />
                ))}
              </div>
            </Step>
          )}

          {step === "gasverbruik" && (
            <Step heading="Hoeveel gas verbruik je per jaar?" onBack={() => setStep("systeem")}>
              <p className="mb-6 text-base leading-relaxed text-muted">
                De tool heeft dit alvast geschat op basis van je woning. Klopt het ongeveer? Het
                exacte getal vind je op de jaarafrekening van je energieleverancier.
              </p>
              <input
                type="range"
                min={500}
                max={4000}
                step={50}
                value={data.gasverbruik}
                onChange={(e) => update("gasverbruik", Number(e.target.value))}
                className="w-full accent-action"
                aria-label="Geschat jaarlijks gasverbruik in kubieke meter"
              />
              <p className="mt-2 text-center font-display text-3xl font-bold text-dark">
                {data.gasverbruik.toLocaleString("nl-NL")} m³{" "}
                <span className="text-base font-semibold text-muted">per jaar</span>
              </p>

              <button
                type="button"
                onClick={() => setStep("advies")}
                className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44]"
              >
                Bekijk mijn advies
                <ArrowRight className="h-5 w-5" />
              </button>
            </Step>
          )}

          {step === "advies" && (
            <div>
              <button
                type="button"
                onClick={() => setStep("gasverbruik")}
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-action"
              >
                <ArrowLeft className="h-4 w-4" />
                Terug
              </button>

              {advies.passend ? (
                <>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-action">
                    Jouw indicatie
                  </p>
                  <h1 className="mb-6 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                    {advies.type}
                  </h1>
                  <p className="mb-8 text-base leading-relaxed text-muted">{advies.toelichting}</p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-green/15 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-light">
                        Indicatie kosten
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-dark">{advies.kostenRange}</p>
                    </div>
                    <div className="rounded-xl border border-green/15 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-light">
                        ISDE-subsidie
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-dark">{advies.subsidie}</p>
                    </div>
                    <div className="rounded-xl border border-green/15 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-light">
                        Terugverdientijd
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-dark">
                        {advies.terugverdientijd}
                      </p>
                    </div>
                  </div>

                  {advies.besparingPerJaar > 0 && (
                    <p className="mt-6 text-base text-muted">
                      Geschatte besparing op je energierekening:{" "}
                      <span className="font-bold text-dark">
                        €{advies.besparingPerJaar.toLocaleString("nl-NL")} per jaar
                      </span>
                      .
                    </p>
                  )}

                  <p className="mt-6 text-xs leading-relaxed text-muted-light">
                    Dit is een eerste indicatie op basis van de gegevens die je net invulde en
                    gemiddelde cijfers van Milieu Centraal en RVO. Je definitieve advies — met een
                    berekening op maat — ontvang je per e-mail.
                  </p>

                  <div className="mt-10 space-y-3">
                    <button
                      type="button"
                      onClick={() => {
                        setWantsInstallateur(true);
                        setStep("contact");
                      }}
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44]"
                    >
                      Vraag vrijblijvend offertes aan
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWantsInstallateur(false);
                        setStep("contact");
                      }}
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-green/20 px-7 py-3.5 text-base font-bold text-dark transition-colors hover:border-action hover:text-action"
                    >
                      Stuur dit advies naar mijn e-mail
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="mb-6 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                    {advies.type}
                  </h1>
                  <p className="mb-8 text-base leading-relaxed text-muted">{advies.toelichting}</p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-green/20 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:border-action hover:text-action"
                  >
                    Terug naar home
                  </Link>
                </>
              )}
            </div>
          )}

          {step === "contact" && (
            <Step
              heading={
                wantsInstallateur ? "Waar mogen installateurs je bereiken?" : "Waar sturen we je advies naartoe?"
              }
              onBack={() => setStep("advies")}
            >
              <p className="mb-6 text-base leading-relaxed text-muted">
                {wantsInstallateur
                  ? "We koppelen je aan maximaal 3 onafhankelijke installateurs in jouw regio. Zij nemen vrijblijvend contact met je op."
                  : "We sturen je het volledige advies, inclusief kosten, subsidie en terugverdientijd, per e-mail."}
              </p>
              <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                <FormField
                  name="voornaam"
                  label="Voornaam"
                  icon={UserIcon}
                  type="text"
                  placeholder="Voornaam"
                  autoComplete="given-name"
                  value={data.voornaam}
                  onChange={(v) => update("voornaam", v)}
                  error={leadErrors.voornaam}
                />
                <FormField
                  name="email"
                  label="E-mailadres"
                  icon={MailIcon}
                  type="email"
                  placeholder="naam@voorbeeld.nl"
                  autoComplete="email"
                  value={data.email}
                  onChange={(v) => update("email", v)}
                  error={leadErrors.email}
                />
                {wantsInstallateur && (
                  <FormField
                    name="telefoon"
                    label="Telefoonnummer"
                    icon={PhoneIcon}
                    type="tel"
                    placeholder="06 12345678"
                    autoComplete="tel"
                    value={data.telefoon}
                    onChange={(v) => update("telefoon", v)}
                    error={leadErrors.telefoon}
                  />
                )}

                {submitError && (
                  <p role="alert" className="text-sm text-error">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-action px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#0c6a44] disabled:opacity-60"
                >
                  {submitting ? "Versturen..." : wantsInstallateur ? "Vraag offertes aan" : "Stuur mijn advies"}
                  {!submitting && <ArrowRight className="h-5 w-5" />}
                </button>
                <p className="text-center text-xs text-muted-light">
                  Je gegevens worden nooit doorverkocht.{" "}
                  {wantsInstallateur
                    ? "Maximaal 3 installateurs nemen contact op."
                    : "Geen telefoontjes, alleen een e-mail."}
                </p>
              </form>
            </Step>
          )}

          {step === "bedankt" && (
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-action/10 text-action">
                <CheckCircleIcon className="h-9 w-9" />
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Bedankt, {data.voornaam}!
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
                {wantsInstallateur
                  ? "We hebben je gegevens doorgestuurd. Binnen 24 uur nemen maximaal 3 onafhankelijke installateurs in jouw regio contact met je op."
                  : "Check je inbox — we hebben het volledige advies naar je e-mailadres gestuurd."}
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-green/20 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:border-action hover:text-action"
              >
                Terug naar home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ProgressIndicator({ step }: { step: StepName }) {
  const idx = QUESTION_STEPS.indexOf(step);
  if (idx === -1) return null;

  const remaining = QUESTION_STEPS.length - idx;

  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold text-muted-light">
        {remaining === 1 ? "Nog 1 vraag" : `Nog ${remaining} vragen`}
      </p>
      <div className="flex gap-2">
        {QUESTION_STEPS.map((s, i) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full ${i <= idx ? "bg-action" : "bg-green/10"}`} />
        ))}
      </div>
    </div>
  );
}

function Step({
  heading,
  onBack,
  children,
}: {
  heading: string;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-action"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug
        </button>
      )}
      <h1 className="mb-8 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">{heading}</h1>
      {children}
    </div>
  );
}

function OptionCard({
  label,
  icon: Icon,
  selected,
  onClick,
}: {
  label: string;
  icon?: IconComponent;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!selected}
      className={`flex min-h-[96px] flex-col items-center justify-center gap-3 rounded-2xl border-2 px-4 py-6 text-center text-sm font-semibold transition-colors ${
        selected
          ? "border-action bg-action/10 text-dark"
          : "border-green/10 bg-white text-dark/85 hover:border-action/40"
      }`}
    >
      {Icon && (
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            selected ? "bg-action/15 text-action" : "bg-green/10 text-green"
          }`}
        >
          <Icon className="h-6 w-6" />
        </span>
      )}
      {label}
    </button>
  );
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-dark">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={value === opt}
            className={`min-h-[48px] rounded-full border-2 px-4 py-3 text-sm font-semibold transition-colors ${
              value === opt
                ? "border-action bg-action/10 text-action"
                : "border-green/15 bg-white text-dark hover:border-action/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function FormField({
  icon: Icon,
  label,
  value,
  onChange,
  error,
  name,
  ...rest
}: {
  icon?: IconComponent;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "name">) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-dark">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-action" />
        )}
        <input
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`min-h-[48px] w-full rounded-xl border-2 border-green/15 bg-white py-3.5 ${
            Icon ? "pl-11" : "pl-4"
          } pr-4 text-base text-dark placeholder:text-muted-light outline-none transition-colors focus:border-action`}
          {...rest}
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
