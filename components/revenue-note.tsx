import { LockIcon } from "./icons";

// Compacte transparantieregel bij leadformulieren (onder de verzendknop).
export function RevenueNote({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border border-green/15 bg-green/5 px-4 py-3 text-xs font-semibold leading-relaxed text-action ${className}`}
    >
      <LockIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
      <span>
        Gratis en vrijblijvend. Ik ontvang een vergoeding van de installateur, nooit van jou — en
        jouw offerteprijs verandert daar niet door.
      </span>
    </div>
  );
}
