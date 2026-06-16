const points = [
  {
    term: "Op de grond plaatsen",
    body: "Vergunningvrij als de unit niet hoger is dan 1 meter en niet groter dan 2 m². Dat is bij de meeste buitenunits het geval.",
  },
  {
    term: "Aan de gevel of het dak",
    body: "Hier gelden de regels uit het omgevingsplan van je gemeente. Vaak is hier wél een vergunning nodig.",
  },
  {
    term: "Woon je in een monument?",
    body: "Dan is bijna altijd een vergunning nodig, ook voor een kleine buitenunit.",
  },
  {
    term: "Woon je in een VvE (appartementencomplex)?",
    body: "Dan heb je sowieso toestemming nodig van de Vereniging van Eigenaren, los van de gemeentelijke vergunning.",
  },
];

export function PermitsInfo() {
  return (
    <section className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Vergunningen
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Heb ik een vergunning nodig?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Dat hangt af van waar je de buitenunit plaatst — en van de regels in jouw gemeente. De
            hoofdlijnen:
          </p>
        </div>

        <dl className="space-y-4">
          {points.map((point) => (
            <div key={point.term} className="rounded-2xl border border-green/10 bg-white p-5">
              <dt className="font-display text-base font-bold text-dark">{point.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{point.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 rounded-xl border border-green/10 bg-white px-5 py-4 text-sm leading-relaxed text-muted">
          <span className="font-bold text-dark">Mijn advies:</span> doe altijd eerst de gratis{" "}
          <a
            href="https://omgevingswet.overheid.nl/thema/airco"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-action hover:underline"
          >
            Vergunningcheck op het Omgevingsloket
          </a>{" "}
          en vraag bij twijfel even na bij jouw gemeente. De regels staan in het omgevingsplan en
          kunnen per gemeente verschillen.
        </p>

        <p className="mt-3 text-xs text-muted">
          Bron: Informatiepunt Leefomgeving (IPLO) / Rijksoverheid
        </p>
      </div>
    </section>
  );
}
