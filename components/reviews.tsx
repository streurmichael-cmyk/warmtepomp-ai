import Link from "next/link";
import { ArrowRight, ShieldIcon, WhatsAppIcon } from "./icons";

const sources = ["Milieu Centraal", "RVO", "Consumentenbond"];

export function Reviews() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const text = encodeURIComponent("Hallo, ik heb een vraag over warmtepompen");
  const whatsappHref = `https://wa.me/${number}?text=${text}`;

  return (
    <section id="transparantie" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-action">
          <ShieldIcon className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
          Wat andere huiseigenaren zeggen
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Warmtepomp.ai is net gestart, dus we hebben nog geen stapel reviews — en die gaan we
          ook niet verzinnen. Dit kunnen we wel laten zien:
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl gap-4 text-left">
          <Link
            href="/voorbeeld-advies"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-green/15 bg-white p-6 transition-colors hover:border-action"
          >
            <div>
              <p className="font-display text-lg font-bold text-dark">
                Bekijk een voorbeeldadvies
              </p>
              <p className="mt-1 text-sm text-muted">
                Een echt (geanonimiseerd) advies, zoals jij dat ook krijgt.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-action transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="rounded-2xl border border-green/15 bg-white p-6">
            <p className="font-display text-lg font-bold text-dark">Onze cijfers komen van</p>
            <p className="mt-1 text-sm text-muted">
              Geen interne marketingcijfers, maar erkende bronnen:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-green/10 px-3 py-1 text-xs font-bold text-action"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/over-ons"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-green/15 bg-white p-6 transition-colors hover:border-action"
          >
            <div>
              <p className="font-display text-lg font-bold text-dark">
                Hoe we verdienen staat gewoon online
              </p>
              <p className="mt-1 text-sm text-muted">
                We ontvangen een vergoeding van installateurs per doorverwezen aanvraag — nooit
                van fabrikanten, en het kost jou niets extra.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-action transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-green/15 bg-white p-6 transition-colors hover:border-action"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-dark">
                  Heb je al een warmtepomp via ons gevonden?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Laat ons weten hoe het is gegaan — jouw ervaring helpt andere huiseigenaren.
                </p>
              </div>
            </div>
            <span className="flex flex-shrink-0 items-center gap-1.5 font-display text-sm font-bold text-action transition-transform group-hover:translate-x-1">
              Stuur een berichtje
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
