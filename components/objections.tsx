"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const objections = [
  {
    question: "Een warmtepomp is veel te duur",
    answer:
      "Klopt, de aanschaf is een flinke uitgave: tussen de €7.000 en €14.000, afhankelijk van het type. Met de ISDE-subsidie (tot €3.500) en de besparing op je gasrekening verdien je dat — eerlijk gezegd — niet in een paar jaar terug: een warmtepomp op zichzelf doet daar al snel 15 tot 20 jaar over. Dat wordt korter bij een hoger gasverbruik, met een hybride als tussenstap, of als je cv-ketel toch al aan vervanging toe was (dan telt alleen het prijsverschil). Is je woning slecht geïsoleerd én is je budget krap? Dan is een hybride warmtepomp vaak een betaalbaardere eerste stap dan in één keer volledig overstappen.",
  },
  {
    question: "Een warmtepomp maakt te veel herrie",
    answer:
      "Een moderne warmtepomp maakt geluid vergelijkbaar met een ventilator of koelkast (35–60 dB). Dat is geen herrie, maar je hoort het wel als de buitenunit vlak naast je slaapkamerraam staat. Goede plaatsing — tegen de gevel, uit de buurt van ramen — lost dit in de praktijk meestal op. Woon je in een rij dicht op elkaar gebouwde huizen? Dan is dit wel iets om vooraf goed te bespreken met je installateur.",
  },
  {
    question: "Een warmtepomp werkt niet in een oud huis",
    answer:
      "Dit is het meest hardnekkige fabeltje — en gedeeltelijk waar. Een volledig elektrische warmtepomp werkt het best in een goed geïsoleerd huis. Maar een hybride warmtepomp werkt prima samen met je bestaande cv-ketel, ook in een matig geïsoleerd jaren-30-huis, en bespaart dan vaak 30–50% op je gasverbruik. Is je huis écht slecht geïsoleerd én niet te isoleren? Dan is eerst isoleren — en daarna pas een warmtepomp overwegen — eerlijk gezegd een betere volgorde.",
  },
  {
    question: "Ik zie op tegen vergunningen en gedoe",
    answer:
      "Voor de meeste woningen heb je voor een warmtepomp geen vergunning nodig — de buitenunit valt meestal onder vergunningsvrij bouwen. Uitzonderingen: monumenten, sommige beschermde dorps- of stadsgezichten, en als de unit aan de voorgevel of op het dak komt. Onze keuzehulp checkt dit niet automatisch, maar je gemeente kan dit meestal in 5 minuten bevestigen.",
  },
  {
    question: "De terugverdientijd is te lang, ik woon hier niet zo lang meer",
    answer:
      "Een eerlijk punt. Een warmtepomp op zichzelf verdient zich vaak pas in 15 tot 20 jaar terug, dus hij heeft vooral zin als je van plan bent langer te blijven wonen. Ga je over een paar jaar verhuizen? Dan is de winst vooral dat je huis met een warmtepomp makkelijker en voor een betere prijs verkoopt — energielabel telt steeds zwaarder mee. Maar als investering voor jezelf is het dan minder logisch. Onze tip in dat geval: wacht hiermee tot je volgende huis.",
  },
];

export function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-action">
            Eerlijke twijfels
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Is een warmtepomp wel iets voor mij?
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            De meest gehoorde twijfels — en het eerlijke antwoord. Soms is dat antwoord
            &ldquo;nee, nu nog niet&rdquo;.
          </p>
        </div>

        <div className="space-y-3">
          {objections.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-green/15 bg-light-bg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold text-dark">
                    &ldquo;{item.question}&rdquo;
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-shrink-0 text-action transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6 text-base leading-relaxed text-muted">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
