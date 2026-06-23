import Link from "next/link";
import { ShieldIcon, UserIcon } from "./icons";

export function FounderTrust() {
  return (
    <section className="bg-light-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-green/15 bg-white p-8 text-center sm:flex-row sm:p-10 sm:text-left">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green/10 text-action">
            <UserIcon className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-dark">Wie maakt dit?</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              warmtepomp.ai is een onafhankelijk Nederlands online platform dat huiseigenaren via
              een AI-keuzehulp een persoonlijke warmtepomp-indicatie geeft, opgericht in 2026 door
              Michael Streur (regio Amsterdam). Geen callcenter, geen verkoopteam — een rekentool
              die je helpt om zelf een goede beslissing te nemen.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted sm:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <ShieldIcon className="h-4 w-4 text-action" />
                KvK-inschrijving: in aanvraag
              </span>
              <Link
                href="/over-ons"
                className="font-semibold text-action underline underline-offset-2 hover:text-dark"
              >
                Lees meer over mij
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
