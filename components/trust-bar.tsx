import { CheckCircleIcon } from "./icons";

const items = [
  "100% onafhankelijk advies",
  "Gratis & vrijblijvend advies",
  "Binnen 24 uur reactie",
];

export function TrustBar() {
  return (
    <div className="bg-green py-2.5 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1.5 px-5 text-xs font-semibold sm:px-8">
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5">
            <CheckCircleIcon className="h-3.5 w-3.5 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
