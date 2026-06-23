"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "/warmtepompen", label: "Warmtepompen" },
  { href: "/kosten", label: "Kosten" },
  { href: "/hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/installateurs", label: "Installateurs" },
  { href: "/subsidie", label: "Subsidie" },
  { href: "/faq", label: "FAQ" },
  { href: "/over-ons", label: "Over mij" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-white">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo variant="light" />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Hoofdnavigatie">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark/70 transition-colors hover:text-action"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-sm font-medium text-dark/70 transition-colors hover:text-action"
          >
            Kennisbank
          </Link>
          <Link
            href="/vergelijk"
            className="inline-flex items-center gap-1.5 rounded-lg bg-action px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0c6a44]"
          >
            Start keuzehulp
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-green/20 text-dark lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-green/10 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobiele navigatie"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-base font-medium text-dark/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="block py-2.5 text-base font-medium text-dark/80"
                onClick={() => setOpen(false)}
              >
                Kennisbank
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/vergelijk"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-action px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Start keuzehulp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
