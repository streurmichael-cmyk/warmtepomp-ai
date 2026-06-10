export type CityFaq = {
  q: string;
  a: string;
};

export type City = {
  slug: string;
  name: string;
  province: string;
  /** Korte, unieke karakterschets van de stad voor de intro. */
  context: string;
  /** Meest voorkomende woningtypes in de stad. */
  woningType: string;
  faqs: CityFaq[];
};

export const cities: City[] = [
  {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "Noord-Holland",
    context:
      "Van de grachtenpanden in de binnenstad tot de nieuwbouwwijken in IJburg en Amsterdam-Noord",
    woningType: "grachtenpanden, jaren '30-woningen en moderne nieuwbouwappartementen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Amsterdam?",
        a: "De kosten in Amsterdam liggen in dezelfde orde als landelijk: een hybride warmtepomp kost meestal €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. In monumentale grachtenpanden kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Amsterdam?",
        a: "Ja, in de regio Amsterdam zijn meerdere gecertificeerde installateurs actief die ervaring hebben met zowel grachtenpanden als nieuwbouwwoningen. Via onze keuzehulp koppelen we je gratis aan installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Amsterdam geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor oudere grachtenpanden en jaren '30-woningen is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in bijvoorbeeld IJburg vaak al geschikt is voor een volledig elektrische warmtepomp. Onze keuzehulp houdt rekening met jouw specifieke woning.",
      },
    ],
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "Zuid-Holland",
    context:
      "Van naoorlogse wijken zoals Zuidwijk en Pendrecht tot de moderne nieuwbouw in de Kop van Zuid",
    woningType: "portiekwoningen, jaren '50-woningen en moderne nieuwbouwappartementen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Rotterdam?",
        a: "Ook in Rotterdam betaal je voor een hybride warmtepomp gemiddeld €3.500 – €7.000 en voor een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Rotterdam?",
        a: "Ja, Rotterdam heeft een ruim aanbod aan gecertificeerde installateurs, van de havenrand tot de wijken rondom het centrum. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs in jouw regio.",
      },
      {
        q: "Is mijn woning in Rotterdam geschikt voor een warmtepomp?",
        a: "Veel woningen in Rotterdam zijn dat zeker. Voor naoorlogse portiekwoningen en jaren '50-wijken is een hybride warmtepomp vaak een logische start, terwijl nieuwbouw in bijvoorbeeld de Kop van Zuid meestal geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    province: "Utrecht",
    context:
      "Van compacte woningen in wijken als Lombok en Tuindorp tot de nieuwbouw in Leidsche Rijn",
    woningType: "jaren '30-woningen, compacte stadswoningen en nieuwbouw in Leidsche Rijn",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Utrecht?",
        a: "In Utrecht liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Compacte woningen vragen vaak om een kleiner en dus voordeliger vermogen.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Utrecht?",
        a: "Ja, in en rond Utrecht zijn diverse gecertificeerde installateurs actief, met ervaring in zowel de compacte woningen binnen de Singel als de nieuwbouw in Leidsche Rijn. Wij koppelen je gratis aan installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Utrecht geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '30-woningen in wijken als Lombok is een hybride warmtepomp vaak de beste keuze, terwijl nieuwbouwwoningen in Leidsche Rijn doorgaans goed geïsoleerd zijn en geschikt zijn voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    province: "Zuid-Holland",
    context:
      "Van karakteristieke jaren '30-wijken zoals Bezuidenhout tot de Vinex-wijken in Ypenburg en Leidschenveen",
    woningType: "jaren '30-woningen, rijtjeswoningen en Vinex-nieuwbouw",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Den Haag?",
        a: "Een hybride warmtepomp kost in Den Haag gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De staat van isolatie van jouw woning bepaalt mede welk type het beste past en wat dat kost.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Den Haag?",
        a: "Ja, in de regio Den Haag zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de jaren '30-wijken als de Vinex-wijken. Via onze keuzehulp plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Den Haag geschikt voor een warmtepomp?",
        a: "Veel woningen in Den Haag zijn geschikt. Voor jaren '30-woningen en rijtjeswoningen in wijken als Bezuidenhout is een hybride warmtepomp vaak een goede start, terwijl nieuwbouw in Ypenburg en Leidschenveen meestal geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "Noord-Brabant",
    context:
      "Van de Brainport-regio met nieuwbouwwijken zoals Meerhoven tot de jaren '70-wijken rond Woensel",
    woningType: "nieuwbouwwoningen en jaren '70-woningen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Eindhoven?",
        a: "In Eindhoven liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Veel nieuwbouwwoningen in de regio zijn al goed geïsoleerd, wat de keuze voor een volledig elektrische warmtepomp eenvoudiger maakt.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Eindhoven?",
        a: "Ja, in de regio Eindhoven en de bredere Brainport-regio zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Eindhoven geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Nieuwbouwwoningen in wijken als Meerhoven zijn vaak al geschikt voor een volledig elektrische warmtepomp, terwijl voor jaren '70-woningen rond Woensel een hybride warmtepomp vaak de beste eerste stap is.",
      },
    ],
  },
  {
    slug: "almere",
    name: "Almere",
    province: "Flevoland",
    context:
      "Een relatief jonge stad met goed geïsoleerde woningen in wijken als Almere Poort en Almere Buiten",
    woningType: "moderne, goed geïsoleerde woningen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Almere?",
        a: "In Almere liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Doordat veel woningen in Almere relatief nieuw en goed geïsoleerd zijn, is een volledig elektrische warmtepomp vaak een logische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Almere?",
        a: "Ja, in Almere en de directe omgeving zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Almere geschikt voor een warmtepomp?",
        a: "Vrijwel altijd. Doordat woningen in Almere over het algemeen relatief modern en goed geïsoleerd zijn, zijn ze vaak al geschikt voor een volledig elektrische lucht-water warmtepomp, zonder grote aanpassingen vooraf.",
      },
    ],
  },
  {
    slug: "haarlem",
    name: "Haarlem",
    province: "Noord-Holland",
    context:
      "Van de historische binnenstad tot de karakteristieke jaren '20-30 wijken in Haarlem-Noord",
    woningType: "jaren '20-30 woningen en herenhuizen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Haarlem?",
        a: "Een hybride warmtepomp kost in Haarlem gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor de karakteristieke jaren '20-30 woningen in Haarlem is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Haarlem?",
        a: "Ja, in Haarlem en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de historische binnenstad als de naoorlogse wijken. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Haarlem geschikt voor een warmtepomp?",
        a: "Veel woningen in Haarlem zijn geschikt, al is de aanpak per woning verschillend. Voor jaren '20-30 woningen en herenhuizen is een hybride warmtepomp vaak de beste eerste stap; bij goed geïsoleerde woningen kan een volledig elektrische warmtepomp al een optie zijn.",
      },
    ],
  },
  {
    slug: "leiden",
    name: "Leiden",
    province: "Zuid-Holland",
    context:
      "Van compacte binnenstadswoningen en studentenhuizen tot de wijken rond De Mors en de Merenwijk",
    woningType: "compacte stadswoningen en jaren '60-70 wijken",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Leiden?",
        a: "In Leiden liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor compacte binnenstadswoningen volstaat vaak een kleiner vermogen, wat gunstig is voor de prijs.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Leiden?",
        a: "Ja, in Leiden en de regio zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Leiden geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor compacte stadswoningen in de binnenstad is een hybride warmtepomp vaak de beste start, terwijl woningen in wijken als de Merenwijk vaak al geschikt zijn voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "zaandam",
    name: "Zaandam",
    province: "Noord-Holland",
    context:
      "Van de karakteristieke Zaanse huizen tot de moderne nieuwbouw langs de Zaan",
    woningType: "jaren '30-woningen en moderne nieuwbouw langs het water",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zaandam?",
        a: "In Zaandam liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor karakteristieke Zaanse woningen is vaak eerst een hybride warmtepomp de meest praktische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zaandam?",
        a: "Ja, in Zaandam en de regio Zaanstad zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Zaandam geschikt voor een warmtepomp?",
        a: "Veel woningen in Zaandam zijn geschikt. Voor karakteristieke jaren '30-woningen is een hybride warmtepomp vaak een goede start, terwijl moderne nieuwbouw langs de Zaan meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "purmerend",
    name: "Purmerend",
    province: "Noord-Holland",
    context: "Een groeikern met veel jaren '70-80 wijken zoals Wheermolen en Overwhere",
    woningType: "jaren '70-80 woningen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Purmerend?",
        a: "In Purmerend liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Purmerend?",
        a: "Ja, in Purmerend en de regio Waterland zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Purmerend geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '70-80 woningen in wijken als Wheermolen en Overwhere is een hybride warmtepomp vaak de beste eerste stap, en bij goede isolatie kan een volledig elektrische warmtepomp ook al een optie zijn.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
