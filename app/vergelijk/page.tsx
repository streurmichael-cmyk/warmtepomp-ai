"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import {
  ArrowLeft,
  ArrowRight,
  BoltIcon,
  BuildingIcon,
  CheckCircleIcon,
  FlameIcon,
  HomeIcon,
  MailIcon,
  MapPinIcon,
  NetworkIcon,
  PhoneIcon,
  QuestionIcon,
  UserIcon,
} from "@/components/icons";

type IconComponent = React.ComponentType<{ className?: string }>;

const TOTAL_STEPS = 4;

const woningTypes: { label: string; icon: IconComponent }[] = [
  { label: "Tussenwoning", icon: HomeIcon },
  { label: "Hoekwoning", icon: HomeIcon },
  { label: "Twee-onder-een-kap", icon: HomeIcon },
  { label: "Vrijstaand", icon: HomeIcon },
  { label: "Appartement", icon: BuildingIcon },
];

const oppervlaktes = ["< 75 m²", "75 - 100 m²", "100 - 150 m²", "150 - 200 m²", "> 200 m²"];

const systemen: { label: string; icon: IconComponent }[] = [
  { label: "CV-ketel op gas", icon: FlameIcon },
  { label: "Stadsverwarming", icon: NetworkIcon },
  { label: "Elektrisch", icon: BoltIcon },
  { label: "Anders", icon: QuestionIcon },
];

type FormData = {
  woningtype: string;
  oppervlakte: string;
  huidigSysteem: string;
  postcode: string;
  voornaam: string;
  telefoon: string;
  email: string;
};

const initialData: FormData = {
  woningtype: "",
  oppervlakte: "",
  huidigSysteem: "",
  postcode: "",
  voornaam: "",
  telefoon: "",
  email: "",
};

type LeadErrors = Partial<Record<"voornaam" | "telefoon" | "email" | "postcode", string>>;

export default function VergelijkPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [leadErrors, setLeadErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postcode = params.get("postcode")?.replace(/\s/g, "").toUpperCase() ?? "";
    if (/^\d{4}[A-Z]{2}$/.test(postcode)) {
      setData((d) => ({ ...d, postcode }));
    }
  }, []);

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function selectAndNext(field: keyof FormData, value: string) {
    update(field, value);
    setStep((s) => s + 1);
  }

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: LeadErrors = {};
    if (!data.voornaam.trim()) errors.voornaam = "Vul je voornaam in";
    if (!/^[\d\s+()-]{9,}$/.test(data.telefoon.trim())) {
      errors.telefoon = "Vul een geldig telefoonnummer in";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = "Vul een geldig e-mailadres in";
    }
    const cleanPostcode = data.postcode.replace(/\s/g, "").toUpperCase();
    if (!/^\d{4}[A-Z]{2}$/.test(cleanPostcode)) {
      errors.postcode = "Vul een geldige postcode in, bijv. 1234AB";
    }

    if (Object.keys(errors).length > 0) {
      setLeadErrors(errors);
      return;
    }

    setLeadErrors({});
    setSubmitting(true);
    setSubmitError("");

    const payload = { ...data, postcode: cleanPostcode };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      update("postcode", cleanPostcode);
      setStep(5);
    } catch {
      setSubmitError("Er ging iets mis bij het versturen. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-dark text-white">
      <div
        className="hero-glow-green pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-green/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="hero-glow-turquoise pointer-events-none absolute -bottom-28 -right-24 h-[440px] w-[440px] rounded-full bg-turquoise/15 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-between px-5 py-6 sm:px-8">
        <Logo />
        <Link
          href="/"
          className="text-sm font-medium text-white/55 transition-colors hover:text-turquoise"
        >
          Sluiten
        </Link>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pb-16 sm:px-8">
        <div className="w-full max-w-2xl">
          {step <= TOTAL_STEPS && <ProgressBar step={step} total={TOTAL_STEPS} />}

          {step === 1 && (
            <Step heading="Wat voor woning heb je?">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {woningTypes.map((opt) => (
                  <OptionCard
                    key={opt.label}
                    label={opt.label}
                    icon={opt.icon}
                    selected={data.woningtype === opt.label}
                    onClick={() => selectAndNext("woningtype", opt.label)}
                  />
                ))}
              </div>
            </Step>
          )}

          {step === 2 && (
            <Step heading="Hoe groot is je woning?" onBack={() => setStep(1)}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {oppervlaktes.map((opt) => (
                  <OptionCard
                    key={opt}
                    label={opt}
                    selected={data.oppervlakte === opt}
                    onClick={() => selectAndNext("oppervlakte", opt)}
                  />
                ))}
              </div>
            </Step>
          )}

          {step === 3 && (
            <Step heading="Hoe verwarm je nu?" onBack={() => setStep(2)}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {systemen.map((opt) => (
                  <OptionCard
                    key={opt.label}
                    label={opt.label}
                    icon={opt.icon}
                    selected={data.huidigSysteem === opt.label}
                    onClick={() => selectAndNext("huidigSysteem", opt.label)}
                  />
                ))}
              </div>
            </Step>
          )}

          {step === 4 && (
            <Step heading="Jouw persoonlijke warmtepomp advies is klaar" onBack={() => setStep(3)}>
              <p className="mb-6 text-white/60">
                Vul je gegevens in en ontvang gratis en vrijblijvend advies, afgestemd op jouw
                woning.
              </p>
              <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                <FormField
                  name="postcode"
                  icon={MapPinIcon}
                  type="text"
                  placeholder="Postcode, bijv. 1234AB"
                  maxLength={7}
                  autoComplete="postal-code"
                  value={data.postcode}
                  onChange={(v) => update("postcode", v.toUpperCase())}
                  error={leadErrors.postcode}
                />
                <FormField
                  name="voornaam"
                  icon={UserIcon}
                  type="text"
                  placeholder="Voornaam"
                  autoComplete="given-name"
                  value={data.voornaam}
                  onChange={(v) => update("voornaam", v)}
                  error={leadErrors.voornaam}
                />
                <FormField
                  name="telefoon"
                  icon={PhoneIcon}
                  type="tel"
                  placeholder="Telefoonnummer"
                  autoComplete="tel"
                  value={data.telefoon}
                  onChange={(v) => update("telefoon", v)}
                  error={leadErrors.telefoon}
                />
                <FormField
                  name="email"
                  icon={MailIcon}
                  type="email"
                  placeholder="E-mailadres"
                  autoComplete="email"
                  value={data.email}
                  onChange={(v) => update("email", v)}
                  error={leadErrors.email}
                />

                {submitError && (
                  <p role="alert" className="text-sm text-red-400">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green to-turquoise px-7 py-4 text-base font-bold text-dark shadow-[0_4px_28px_rgba(34,181,114,0.35)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting ? "Versturen..." : "Ontvang gratis advies"}
                  {!submitting && <ArrowRight className="h-5 w-5" />}
                </button>
                <p className="text-center text-xs text-white/40">
                  Geen verplichtingen · Binnen 24 uur contact
                </p>
              </form>
            </Step>
          )}

          {step === 5 && (
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green/15 text-green">
                <CheckCircleIcon className="h-9 w-9" />
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bedankt, {data.voornaam}!
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/65">
                We koppelen je aan een installateur bij jou in de buurt. Je ontvangt binnen 24 uur
                een bericht.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-turquoise hover:text-turquoise"
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

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
        <span>
          Stap {step} van {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green to-turquoise transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
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
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors hover:text-turquoise"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug
        </button>
      )}
      <h1 className="mb-8 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {heading}
      </h1>
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
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 px-4 py-6 text-center text-sm font-semibold transition-all hover:-translate-y-1 ${
        selected
          ? "border-turquoise bg-turquoise/10 text-white"
          : "border-white/10 bg-white/5 text-white/85 hover:border-green/50 hover:bg-white/10"
      }`}
    >
      {Icon && (
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-green">
          <Icon className="h-6 w-6" />
        </span>
      )}
      {label}
    </button>
  );
}

function FormField({
  icon: Icon,
  value,
  onChange,
  error,
  name,
  ...rest
}: {
  icon: IconComponent;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "name">) {
  const errorId = `${name}-error`;
  return (
    <div>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green" />
        <input
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full rounded-xl border-2 border-white/20 bg-white/5 py-4 pl-11 pr-4 text-base text-white placeholder:text-white/30 outline-none transition-all focus:border-turquoise focus:bg-white/10"
          {...rest}
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
