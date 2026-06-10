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
  {
    q: "Wat is een warmtepomp precies?",
    a: "Een warmtepomp is een apparaat dat warmte uit de buitenlucht, de grond of het water haalt en daarmee jouw huis en je warme water verwarmt. Het werkt eigenlijk als een koelkast, maar dan andersom: in plaats van warmte naar buiten af te voeren, haalt hij warmte van buiten naar binnen. Hij gebruikt daarvoor een klein beetje stroom in plaats van gas.",
  },
  {
    q: "Werkt een warmtepomp ook bij een oud huis?",
    a: "Ja, dat kan zeker. Bij een ouder, minder geïsoleerd huis is een hybride warmtepomp vaak de beste start: die werkt samen met je bestaande cv-ketel. Naarmate je huis beter geïsoleerd wordt, kun je later eventueel overstappen op een volledig elektrische warmtepomp.",
  },
  {
    q: "Heb ik vloerverwarming nodig voor een warmtepomp?",
    a: "Nee, dat hoeft niet. Vloerverwarming helpt omdat een warmtepomp het beste werkt met water op een lagere temperatuur, maar moderne warmtepompen kunnen ook prima samenwerken met (grotere) radiatoren. Onze keuzehulp houdt hier rekening mee bij het advies.",
  },
  {
    q: "Wat gebeurt er als het buiten vriest?",
    a: "Een warmtepomp blijft ook bij vorst gewoon warmte uit de buitenlucht halen — dat kan tot ver onder het vriespunt. Bij een hybride warmtepomp neemt de cv-ketel het tijdens hele koude dagen even over, zodat je huis altijd warm blijft.",
  },
  {
    q: "Hoeveel stroom verbruikt een warmtepomp?",
    a: "Dat hangt af van je woning en het type warmtepomp, maar gemiddeld komt het neer op zo'n 2.000 tot 4.000 kWh extra per jaar. Daar staat tegenover dat je veel minder of geen gas meer gebruikt, waardoor je totale energierekening vaak lager uitvalt.",
  },
  {
    q: "Is een warmtepomp stil?",
    a: "Een moderne warmtepomp is vergelijkbaar met het geluid van een ventilator of een koelkast — meestal tussen de 35 en 60 decibel. De buitenunit maakt het meeste geluid, daarom adviseren installateurs vaak een goede plek in de tuin of tegen de gevel, uit de buurt van slaapkamerramen.",
  },
  {
    q: "Wat is het verschil tussen een hybride en een volledig elektrische warmtepomp?",
    a: "Een hybride warmtepomp werkt samen met je bestaande cv-ketel: de warmtepomp doet het meeste werk, en de ketel springt bij op de koudste dagen. Een volledig elektrische warmtepomp vervangt je cv-ketel helemaal en verwarmt je huis het hele jaar door zonder gas. Hybride is goedkoper en een fijne tussenstap; volledig elektrisch bespaart het meest, maar vraagt om een beter geïsoleerde woning.",
  },
  {
    q: "Wanneer is een warmtepomp niet geschikt?",
    a: "Een warmtepomp is minder geschikt als je woning slecht geïsoleerd is én je niet kiest voor een hybride variant, of als er simpelweg geen ruimte is voor een buitenunit of bodemlus. Ook bij zeer beperkt budget en geen mogelijkheid tot financiering kan het lastig zijn. In bijna alle andere gevallen is er een passend type warmtepomp — onze keuzehulp laat zien welke dat is.",
  },
  {
    q: "Hoe vraag ik ISDE-subsidie aan?",
    a: "Je vraagt de ISDE-subsidie zelf aan via mijn.rvo.nl, nadat je warmtepomp is gekocht en geïnstalleerd. Je hebt hiervoor de offerte, de factuur en het betaalbewijs nodig. De aanvraag moet binnen 12 maanden na installatie worden ingediend. Veel installateurs helpen je hier graag bij.",
  },
];

export function Faq({ showHeading = true }: { showHeading?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-light-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {showHeading && (
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
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
