"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { KeuzehulpWizard } from "@/components/keuzehulp-wizard";

export default function VergelijkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-light-bg text-dark">
      <div className="flex items-center justify-between px-5 py-6 sm:px-8">
        <Logo variant="light" />
        <Link href="/" className="text-sm font-medium text-muted transition-colors hover:text-action">
          Sluiten
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-5 pb-16 sm:px-8">
        <div className="w-full max-w-2xl">
          <KeuzehulpWizard />
        </div>
      </div>
    </main>
  );
}
