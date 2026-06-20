import Link from "next/link";
import { MailIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/warmtepompen", label: "Warmtepompen" },
  { href: "/kosten", label: "Kosten" },
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/installateurs", label: "Installateurs" },
  { href: "/subsidie", label: "Subsidie" },
  { href: "/aardgasvrij", label: "Aardgasvrij" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/over-ons", label: "Over mij" },
];

export function Footer() {
  return (
    <footer className="border-t border-green/10 bg-footer">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Vind de beste deal voor jouw woning.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-dark">
              Navigatie
            </h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-action"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-dark">
              Contact
            </h2>
            <a
              href="mailto:info@warmtepomp.ai"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-action"
            >
              <MailIcon className="h-4 w-4 text-green" />
              info@warmtepomp.ai
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-muted transition-colors hover:text-action"
            >
              <WhatsAppIcon className="h-4 w-4 text-green" />
              +31 6 13818383
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-green/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} warmtepomp.ai · Alle rechten voorbehouden</span>
          <span className="flex gap-4">
            <Link href="/voor-installateurs" className="hover:text-action">
              Voor professionals
            </Link>
            <Link href="/privacy" className="hover:text-action">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-action">
              Disclaimer
            </Link>
            <Link href="/verwerkersovereenkomst" className="hover:text-action">
              Verwerkersovereenkomst
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
