export function SubsidyDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800 ${className}`}
    >
      <span aria-hidden="true">⚠️</span>
      <span>
        Subsidiebedragen zijn indicatief en kunnen wijzigen. Controleer actuele bedragen op{" "}
        <a
          href="https://www.rvo.nl/subsidies-financiering/isde"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-amber-900"
        >
          rvo.nl
        </a>
        .
      </span>
    </p>
  );
}
