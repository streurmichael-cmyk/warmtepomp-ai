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
  {
    slug: "groningen",
    name: "Groningen",
    province: "Groningen",
    context:
      "Van de karakteristieke jaren '30-wijken zoals de Korrewegwijk en Helpman tot de moderne nieuwbouw rond Meerstad",
    woningType: "jaren '30-woningen, studentenwoningen en nieuwbouw rond Meerstad",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Groningen?",
        a: "In Groningen liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de karakteristieke jaren '30-woningen in wijken als de Korrewegwijk is een hybride warmtepomp vaak een logische eerste stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Groningen?",
        a: "Ja, in Groningen en de provincie zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere stadswijken als de nieuwbouw rond Meerstad. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Groningen geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '30-woningen en studentenwoningen in de bestaande stad is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw rond Meerstad meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "tilburg",
    name: "Tilburg",
    province: "Noord-Brabant",
    context:
      "Van de naoorlogse wijken rond het centrum en Tilburg-Noord tot de moderne nieuwbouw in de Reeshof",
    woningType: "jaren '60-70 woningen en moderne nieuwbouw in de Reeshof",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Tilburg?",
        a: "In Tilburg liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De staat van isolatie van jouw woning bepaalt mede welk type het beste past en wat dat kost.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Tilburg?",
        a: "Ja, in Tilburg en de regio Hart van Brabant zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Tilburg geschikt voor een warmtepomp?",
        a: "Veel woningen in Tilburg zijn geschikt. Voor jaren '60-70 woningen rond het centrum en Tilburg-Noord is een hybride warmtepomp vaak een goede start, terwijl nieuwbouw in de Reeshof meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "breda",
    name: "Breda",
    province: "Noord-Brabant",
    context:
      "Van de karakteristieke jaren '30-wijken zoals Belcrum en Brabantpark tot de moderne nieuwbouw in Nieuw Wolfslaar",
    woningType: "jaren '30-woningen en moderne nieuwbouw",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Breda?",
        a: "Een hybride warmtepomp kost in Breda gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor de karakteristieke jaren '30-woningen in Belcrum en Brabantpark is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Breda?",
        a: "Ja, in Breda en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere woonwijken als nieuwbouwprojecten. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Breda geschikt voor een warmtepomp?",
        a: "Veel woningen in Breda zijn geschikt. Voor jaren '30-woningen in wijken als Brabantpark is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in Nieuw Wolfslaar meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "nijmegen",
    name: "Nijmegen",
    province: "Gelderland",
    context:
      "Van de karakteristieke jaren '20-30 woningen in Nijmegen-Oost tot de nieuwbouwwijken in de Waalsprong",
    woningType: "jaren '20-30 woningen en nieuwbouw in de Waalsprong",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Nijmegen?",
        a: "In Nijmegen liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de karakteristieke woningen in Nijmegen-Oost is vaak eerst een hybride warmtepomp de meest praktische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Nijmegen?",
        a: "Ja, in Nijmegen en de regio zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere stadswijken als de nieuwbouw aan de overkant van de Waal. Via onze keuzehulp plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Nijmegen geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '20-30 woningen in Nijmegen-Oost is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in de Waalsprong doorgaans al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "enschede",
    name: "Enschede",
    province: "Overijssel",
    context:
      "Van de vernieuwde wijk Roombeek tot de jaren '70-wijken zoals Wesselerbrink en Velve-Lindenhof",
    woningType: "jaren '70-woningen en moderne nieuwbouw in Roombeek",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Enschede?",
        a: "In Enschede liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Enschede?",
        a: "Ja, in Enschede en de regio Twente zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Enschede geschikt voor een warmtepomp?",
        a: "Veel woningen in Enschede zijn geschikt. Voor jaren '70-woningen in wijken als Wesselerbrink is een hybride warmtepomp vaak een goede start, terwijl de vernieuwde woningen in Roombeek meestal al geschikt zijn voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "zwolle",
    name: "Zwolle",
    province: "Overijssel",
    context:
      "Van de historische binnenstad binnen de grachten tot de groeiende nieuwbouwwijk Stadshagen",
    woningType: "oudere binnenstadswoningen en nieuwbouw in Stadshagen",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zwolle?",
        a: "Een hybride warmtepomp kost in Zwolle gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor woningen in de historische binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zwolle?",
        a: "Ja, in Zwolle en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de historische binnenstad als de nieuwbouw in Stadshagen. Via onze keuzehulp plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Zwolle geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor oudere woningen binnen de grachten is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in Stadshagen meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "amersfoort",
    name: "Amersfoort",
    province: "Utrecht",
    context:
      "Van de karakteristieke jaren '30-woningen in het Soesterkwartier tot de moderne nieuwbouw in Vathorst",
    woningType: "jaren '30-woningen en nieuwbouw in Vathorst",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Amersfoort?",
        a: "In Amersfoort liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de jaren '30-woningen in het Soesterkwartier is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Amersfoort?",
        a: "Ja, in Amersfoort en de regio Eemland zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Amersfoort geschikt voor een warmtepomp?",
        a: "Veel woningen in Amersfoort zijn geschikt. Voor jaren '30-woningen in het Soesterkwartier is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in Vathorst meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "apeldoorn",
    name: "Apeldoorn",
    province: "Gelderland",
    context:
      "Van de groene jaren '60-70 wijken tot de nieuwbouw in Zuidbroek en Het Vlaschveld",
    woningType: "jaren '60-70 woningen en moderne nieuwbouw",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Apeldoorn?",
        a: "In Apeldoorn liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Apeldoorn?",
        a: "Ja, in Apeldoorn en de regio zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Apeldoorn geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '60-70 woningen is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in Zuidbroek en Het Vlaschveld meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "dordrecht",
    name: "Dordrecht",
    province: "Zuid-Holland",
    context:
      "Van de historische binnenstad op het eiland tot de nieuwbouwwijk Stadspolders",
    woningType: "historische grachtenpanden en nieuwbouw in Stadspolders",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Dordrecht?",
        a: "Een hybride warmtepomp kost in Dordrecht gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. In de historische binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Dordrecht?",
        a: "Ja, in Dordrecht en de Drechtsteden zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als nieuwbouw. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Dordrecht geschikt voor een warmtepomp?",
        a: "Veel woningen in Dordrecht zijn geschikt. Voor historische panden in de binnenstad is een hybride warmtepomp vaak een goede start, terwijl nieuwbouw in Stadspolders meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "zoetermeer",
    name: "Zoetermeer",
    province: "Zuid-Holland",
    context:
      "Een Vinex-stad met wijken als Palenstein, Seghwaert en Meerzicht, grotendeels gebouwd vanaf de jaren '60",
    woningType: "jaren '70-80 woningen en moderne nieuwbouw",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zoetermeer?",
        a: "In Zoetermeer liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Veel woningen in Zoetermeer hebben een vergelijkbare bouwstijl, wat de inschatting van de kosten vaak eenvoudiger maakt.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zoetermeer?",
        a: "Ja, in Zoetermeer en de regio Haaglanden zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Zoetermeer geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '70-80 woningen in wijken als Palenstein en Seghwaert is een hybride warmtepomp vaak de beste eerste stap, en bij goede isolatie kan een volledig elektrische warmtepomp ook al een optie zijn.",
      },
    ],
  },
  {
    slug: "maastricht",
    name: "Maastricht",
    province: "Limburg",
    context:
      "Van de historische binnenstad en Wyck tot de moderne nieuwbouw op Céramique",
    woningType: "historische woningen en moderne nieuwbouw op Céramique",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Maastricht?",
        a: "Een hybride warmtepomp kost in Maastricht gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor historische woningen in de binnenstad en Wyck kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Maastricht?",
        a: "Ja, in Maastricht en de regio Zuid-Limburg zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als nieuwbouw. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Maastricht geschikt voor een warmtepomp?",
        a: "Veel woningen in Maastricht zijn geschikt. Voor historische woningen in Wyck en de binnenstad is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw op Céramique meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "den-bosch",
    name: "Den Bosch",
    province: "Noord-Brabant",
    context:
      "Van de jaren '50-60 wijken zoals de Kruiskamp tot de nieuwbouw in Boschveld en De Groote Wielen",
    woningType: "jaren '50-60 woningen en nieuwbouw in Boschveld",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Den Bosch?",
        a: "In Den Bosch liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de jaren '50-60 woningen in de Kruiskamp is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Den Bosch?",
        a: "Ja, in Den Bosch en de regio zijn meerdere gecertificeerde installateurs actief. Via onze keuzehulp plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Den Bosch geschikt voor een warmtepomp?",
        a: "Veel woningen in Den Bosch zijn geschikt. Voor jaren '50-60 woningen in de Kruiskamp is een hybride warmtepomp vaak een goede start, terwijl nieuwbouw in Boschveld en De Groote Wielen meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "alkmaar",
    name: "Alkmaar",
    province: "Noord-Holland",
    context:
      "Van de jaren '70 wijken zoals De Mare en Daalmeer tot de nieuwbouw rond Overstad",
    woningType: "jaren '70-woningen en nieuwbouw rond Overstad",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Alkmaar?",
        a: "Een hybride warmtepomp kost in Alkmaar gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Alkmaar?",
        a: "Ja, in Alkmaar en de regio Noord-Holland-Noord zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Alkmaar geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '70-woningen in wijken als De Mare en Daalmeer is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw rond Overstad meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "delft",
    name: "Delft",
    province: "Zuid-Holland",
    context:
      "Van de historische binnenstad rond de grachten tot de jaren '70-80 wijk Tanthof",
    woningType: "historische woningen en jaren '70-80 woningen in Tanthof",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Delft?",
        a: "In Delft liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor historische woningen in de binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Delft?",
        a: "Ja, in Delft en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als naoorlogse wijken. Via onze keuzehulp plan je gratis een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Delft geschikt voor een warmtepomp?",
        a: "Veel woningen in Delft zijn geschikt. Voor historische woningen in de binnenstad is een hybride warmtepomp vaak de beste eerste stap, terwijl woningen in Tanthof bij goede isolatie ook al geschikt kunnen zijn voor een volledig elektrische warmtepomp.",
      },
    ],
  },
  {
    slug: "hoorn",
    name: "Hoorn",
    province: "Noord-Holland",
    context: "Van de jaren '70 wijk Grote Waal tot de nieuwbouw in Poort van Hoorn",
    woningType: "jaren '70-woningen en nieuwbouw in Poort van Hoorn",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Hoorn?",
        a: "Een hybride warmtepomp kost in Hoorn gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Hoorn?",
        a: "Ja, in Hoorn en de regio West-Friesland zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai plan je gratis en vrijblijvend een adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Hoorn geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor jaren '70-woningen in de Grote Waal is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in Poort van Hoorn meestal al geschikt is voor een volledig elektrische warmtepomp.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
