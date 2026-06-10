import Link from "next/link";
import { Logo } from "./logo";

const infoLinks = [
  { href: "#hoe-werkt", label: "Hoe het werkt" },
  { href: "#", label: "Subsidies 2025" },
  { href: "#", label: "Merken vergelijken" },
  { href: "#faq", label: "Veelgestelde vragen" },
];

const aboutLinks = [
  { href: "#", label: "Over warmtepomp.ai" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacybeleid" },
  { href: "#", label: "Cookiebeleid" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-white/55">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Onafhankelijk vergelijkingsplatform voor warmtepompen in Nederland.
              Gratis advies op basis van jouw situatie.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white/90">
              Informatie
            </h2>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-turquoise"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white/90">
              Over ons
            </h2>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-turquoise"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} warmtepomp.ai · Alle rechten voorbehouden</span>
          <span className="flex gap-4">
            <Link href="#" className="hover:text-turquoise">
              Privacy
            </Link>
            <Link href="#" className="hover:text-turquoise">
              Cookies
            </Link>
            <Link href="#" className="hover:text-turquoise">
              Disclaimer
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
