import { ConversationIcon } from "./icons";

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green">
          <ConversationIcon className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
          Eerste reviews komen binnenkort
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Wij starten vers en eerlijk — zodra klanten via warmtepomp.ai geholpen zijn, plaatsen
          we hier hun ervaringen.
        </p>
      </div>
    </section>
  );
}
