"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "#voordelen", label: "Voordelen" },
  { href: "#hoe-werkt", label: "Hoe het werkt" },
  { href: "#kosten", label: "Kosten" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdnavigatie">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-turquoise"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/vergelijk"
            className="rounded-lg bg-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-turquoise"
          >
            Start keuzehulp
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
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
          className="border-t border-white/10 bg-dark px-5 py-4 md:hidden"
          aria-label="Mobiele navigatie"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-base font-medium text-white/85"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/vergelijk"
                className="block rounded-lg bg-green px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Start keuzehulp
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
