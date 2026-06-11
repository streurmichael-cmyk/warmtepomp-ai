"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";
import { ChevronDownIcon } from "./icons";

export function Faq({ showHeading = true }: { showHeading?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {showHeading && (
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
              Veelgestelde vragen
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Alles wat je wil weten
            </h2>
          </div>
        )}

        <dl className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-white transition-all ${
                  isOpen ? "border-green/40 shadow-[0_4px_24px_rgba(34,181,114,0.1)]" : "border-green/10"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-dark sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 flex-shrink-0 text-green transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
