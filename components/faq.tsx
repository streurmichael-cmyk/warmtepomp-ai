"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    q: "Welk type warmtepomp past bij mijn woning?",
    a: "Dat hangt af van je isolatieniveau, verwarmingsoppervlak en budget. Een hybride warmtepomp werkt goed in oudere, slecht geïsoleerde woningen. Een volledig elektrische lucht/water-warmtepomp is efficiënter maar vereist betere isolatie. Onze keuzehulp stelt de juiste vragen en geeft je een persoonlijk advies.",
  },
  {
    q: "Hoeveel subsidie kan ik krijgen voor een warmtepomp?",
    a: "Via de ISDE-regeling (Investeringssubsidie Duurzame Energie) kun je in 2025 tot €3.500 subsidie ontvangen voor een warmtepomp. Het exacte bedrag hangt af van het type warmtepomp en het vermogen. Wij berekenen jouw subsidie automatisch op basis van jouw situatie.",
  },
  {
    q: "Wat kost een warmtepomp gemiddeld?",
    a: "Een hybride warmtepomp kost inclusief installatie gemiddeld €7.000 – €9.500. Een volledige lucht/water-warmtepomp kost €8.500 – €14.000 afhankelijk van je woningtype. Na ISDE-subsidie en eventuele BTW-teruggave kan dit aanzienlijk lager uitvallen.",
  },
  {
    q: "Hoe lang duurt de installatie van een warmtepomp?",
    a: "De meeste warmtepompen worden in één dag geïnstalleerd. Bij een hybride warmtepomp blijft je cv-ketel als backup, waardoor de installatie eenvoudiger is. Voor een volledige warmtepomp kan de installatie soms twee dagen in beslag nemen.",
  },
  {
    q: "Werkt een warmtepomp ook in een slecht geïsoleerde woning?",
    a: "Ja, maar dan is een hybride warmtepomp de betere keuze. De warmtepomp neemt het verwarmingswerk over zodra het buiten niet te koud is; de cv-ketel springt bij bij extreme kou. Zo bespaar je toch 30–50% op je gasverbruik, ook zonder extra isolatie.",
  },
  {
    q: "Is warmtepomp.ai echt onafhankelijk?",
    a: "Ja. Wij zijn niet in dienst van één merk of installateur en ontvangen geen provisie op verkopen. Wij vergelijken meer dan 40 merken op prijs, efficiency en betrouwbaarheid. Onze inkomsten komen uit een kleine verwijzingsvergoeding bij offerteaanvragen — alleen als jij tevreden bent.",
  },
  {
    q: "Wat is het verschil tussen lucht/water en bodemwarmtepomp?",
    a: "Een lucht/water-warmtepomp haalt warmte uit de buitenlucht en is makkelijker en goedkoper te installeren. Een bodemwarmtepomp (geothermisch) haalt warmte uit de grond en is efficiënter, maar vereist een boring in de tuin en hogere installatiekosten. Voor de meeste woningen is lucht/water de meest praktische keuze.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
            Veelgestelde vragen
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Alles wat je wil weten
          </h2>
        </div>

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
