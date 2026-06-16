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
  /** Unieke paragraaf over de lokale woningvoorraad voor de "Waarom warmtepomp.ai" sectie. */
  localParagraph: string;
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
    localParagraph:
      "Amsterdam heeft een opvallend gevarieerde woningvoorraad: van monumentale grachtenpanden in de binnenstad tot jaren '30-woningen in West en Zuid, en moderne nieuwbouw in IJburg en Amsterdam-Noord. Voor grachtenpanden en jaren '30-woningen is de isolatiegraad vaak wisselend, waardoor een hybride warmtepomp meestal de meest praktische eerste stap is: je bespaart direct op gas, terwijl je cv-ketel als back-up dient bij strenge vorst. Nieuwbouwwoningen in IJburg en Amsterdam-Noord zijn doorgaans al goed geïsoleerd en daardoor vaak geschikt voor een volledig elektrische lucht-water warmtepomp. Mijn keuzehulp houdt rekening met dit verschil en helpt je verder richting gecertificeerde installateurs die bekend zijn met zowel monumentale panden als moderne nieuwbouw in en om de hoofdstad.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Amsterdam?",
        a: "De kosten in Amsterdam liggen in dezelfde orde als landelijk: een hybride warmtepomp kost meestal €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. In monumentale grachtenpanden kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Amsterdam?",
        a: "Ja, in de regio Amsterdam zijn meerdere gecertificeerde installateurs actief die ervaring hebben met zowel grachtenpanden als nieuwbouwwoningen. Via mijn keuzehulp help ik je gratis verder richting gecertificeerde installateurs bij jou in de buurt.",
      },
      {
        q: "Is mijn woning in Amsterdam geschikt voor een warmtepomp?",
        a: "In de meeste gevallen wel. Voor oudere grachtenpanden en jaren '30-woningen is een hybride warmtepomp vaak de beste eerste stap, terwijl nieuwbouw in bijvoorbeeld IJburg vaak al geschikt is voor een volledig elektrische warmtepomp. Mijn keuzehulp houdt rekening met jouw specifieke woning.",
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
    localParagraph:
      "Rotterdam is een echte rijtjeswoningenstad: van de naoorlogse portiekwoningen in Zuidwijk en Pendrecht tot de talloze rijtjeswoningen in wijken als Overschie en Hillegersberg. Deze woningen hebben vaak een vergelijkbaar bouwjaar en isolatieniveau, waardoor installateurs goed kunnen inschatten welk vermogen warmtepomp nodig is — dat scheelt in de offerte. Voor rijtjeswoningen uit de jaren '50-60 is een hybride warmtepomp vaak een logische eerste stap, omdat de cv-ketel als back-up blijft dienen tijdens koude periodes. In nieuwbouwwijken zoals de Kop van Zuid en delen van Feyenoord City zijn woningen vaak al volledig elektrisch verwarmd. Via warmtepomp.ai vind je snel een installateur die ervaring heeft met jouw specifieke type rijtjeswoning in Rotterdam.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Rotterdam?",
        a: "Ook in Rotterdam betaal je voor een hybride warmtepomp gemiddeld €3.500 – €7.000 en voor een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Rotterdam?",
        a: "Ja, Rotterdam heeft een ruim aanbod aan gecertificeerde installateurs, van de havenrand tot de wijken rondom het centrum. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur in jouw regio.",
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
    localParagraph:
      "Utrecht combineert compacte jaren '30-woningen in wijken als Lombok en Tuindorp met de grootschalige nieuwbouw van Leidsche Rijn. De compacte stadswoningen binnen de Singel hebben vaak een kleinere warmtevraag, waardoor een warmtepomp met minder vermogen — en dus een lagere prijs — vaak al voldoet. Voor deze woningen is een hybride warmtepomp meestal de slimste eerste stap, zeker als de spouwmuur- of vloerisolatie nog niet optimaal is. Nieuwbouwwoningen in Leidsche Rijn voldoen vrijwel altijd aan de eisen voor een volledig elektrische lucht-water warmtepomp, vaak zelfs met vloerverwarming als standaard. Mijn keuzehulp stemt de indicatie af op jouw woningtype en bouwjaar, en helpt je verder richting gecertificeerde installateurs die zowel in de binnenstad als in Leidsche Rijn actief zijn.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Utrecht?",
        a: "In Utrecht liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Compacte woningen vragen vaak om een kleiner en dus voordeliger vermogen.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Utrecht?",
        a: "Ja, in en rond Utrecht zijn diverse gecertificeerde installateurs actief, met ervaring in zowel de compacte woningen binnen de Singel als de nieuwbouw in Leidsche Rijn. Ik help je gratis verder richting gecertificeerde installateurs bij jou in de buurt.",
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
    localParagraph:
      "Den Haag kent een sterke mix van karakteristieke jaren '30-wijken zoals Bezuidenhout en Voorburg, en de grootschalige Vinex-wijken Ypenburg en Leidschenveen. In de oudere wijken zijn woningen vaak voorzien van radiatoren met een hogere aanvoertemperatuur, waardoor een hybride warmtepomp — die de cv-ketel aanvult op de koudste dagen — vaak de beste keuze is. In Ypenburg en Leidschenveen zijn de meeste woningen na 2000 gebouwd met goede isolatie en vaak al lage-temperatuurverwarming, wat ze geschikt maakt voor een volledig elektrische lucht-water warmtepomp. Of je nu in een rijtjeswoning in Bezuidenhout woont of in een moderne eengezinswoning in Ypenburg, mijn keuzehulp geeft binnen enkele minuten een indicatie die is afgestemd op jouw specifieke situatie en helpt je verder richting gecertificeerde installateurs in de regio Haaglanden.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Den Haag?",
        a: "Een hybride warmtepomp kost in Den Haag gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De staat van isolatie van jouw woning bepaalt mede welk type het beste past en wat dat kost.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Den Haag?",
        a: "Ja, in de regio Den Haag zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de jaren '30-wijken als de Vinex-wijken. Via mijn keuzehulp laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Eindhoven groeit hard, en dat is goed te zien aan de woningvoorraad: naast de jaren '70-woningen rond Woensel en Tongelre staan er steeds meer goed geïsoleerde nieuwbouwwoningen in wijken als Meerhoven en Strijp. Voor de oudere jaren '70-woningen geldt vaak dat de spouwmuurisolatie en het glas verouderd zijn, waardoor een hybride warmtepomp een verstandige eerste stap is — je bespaart direct op gas zonder dat je meteen hoeft te investeren in extra isolatie. De nieuwbouwwoningen in Meerhoven en de Brainport-regio zijn vaak al uitgerust met vloerverwarming en een lage warmtevraag, ideaal voor een volledig elektrische lucht-water warmtepomp. Mijn keuzehulp houdt rekening met deze verschillen en helpt je verder richting gecertificeerde installateurs die de regio Eindhoven en Brainport goed kennen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Eindhoven?",
        a: "In Eindhoven liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Veel nieuwbouwwoningen in de regio zijn al goed geïsoleerd, wat de keuze voor een volledig elektrische warmtepomp eenvoudiger maakt.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Eindhoven?",
        a: "Ja, in de regio Eindhoven en de bredere Brainport-regio zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Almere is een van de jongste steden van Nederland, en dat is goed nieuws als je nadenkt over een warmtepomp. De meeste woningen in wijken als Almere Poort, Almere Buiten en Almere Hout zijn na 1990 gebouwd volgens moderne isolatienormen, vaak met vloerverwarming als standaard verwarmingssysteem. Dat maakt deze woningen meestal direct geschikt voor een volledig elektrische lucht-water warmtepomp, zonder dat er eerst dure isolatiemaatregelen nodig zijn. De terugverdientijd is daardoor in Almere vaak gunstiger dan in steden met veel oudere woningbouw. Toch verschilt het per wijk en bouwjaar hoeveel vermogen je nodig hebt en wat de exacte kosten zijn. Mijn gratis keuzehulp rekent dit voor jouw specifieke woning in Almere uit en helpt je verder richting gecertificeerde installateurs die de stad goed kennen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Almere?",
        a: "In Almere liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Doordat veel woningen in Almere relatief nieuw en goed geïsoleerd zijn, is een volledig elektrische warmtepomp vaak een logische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Almere?",
        a: "Ja, in Almere en de directe omgeving zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Haarlem staat bekend om zijn karakteristieke jaren '20-30-woningen en herenhuizen, met name in wijken als Haarlem-Noord en rond het centrum. Deze woningen hebben vaak hoge plafonds en oorspronkelijke radiatoren, wat betekent dat de woning een relatief hoge aanvoertemperatuur nodig heeft om warm te blijven. Een hybride warmtepomp is in dat geval vaak de beste eerste stap: hij vult je bestaande cv-ketel aan en zorgt voor een flinke gasbesparing, zonder dat je de hele verwarmingsinstallatie hoeft te vervangen. Is jouw herenhuis al voorzien van dubbel glas en spouwmuurisolatie, dan kan een volledig elektrische warmtepomp ook al een optie zijn. Via mijn keuzehulp krijg je een indicatie op maat van jouw Haarlemse woning, en help ik je verder richting gecertificeerde installateurs die ervaring hebben met dit type woningen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Haarlem?",
        a: "Een hybride warmtepomp kost in Haarlem gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor de karakteristieke jaren '20-30 woningen in Haarlem is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Haarlem?",
        a: "Ja, in Haarlem en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de historische binnenstad als de naoorlogse wijken. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Leiden is een compacte stad met veel kleine, dicht op elkaar gebouwde woningen in de binnenstad en studentenbuurten, en ruimere woningen in naoorlogse wijken als de Merenwijk en Zuidwest. Voor de compacte binnenstadswoningen geldt vaak dat er weinig ruimte is voor een buitenunit, maar moderne warmtepompen zijn inmiddels compact en stil genoeg om ook in zo'n situatie te plaatsen. Door de kleinere oppervlakte is bovendien vaak een warmtepomp met minder vermogen voldoende, wat de kosten drukt. In de Merenwijk en andere jaren '60-70 wijken is de isolatie wisselend, maar met de juiste aanpassingen is een volledig elektrische warmtepomp vaak haalbaar. Mijn keuzehulp houdt rekening met de beperkte ruimte die typisch is voor Leidse woningen en helpt je verder richting gecertificeerde installateurs die hier ervaring mee hebben.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Leiden?",
        a: "In Leiden liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor compacte binnenstadswoningen volstaat vaak een kleiner vermogen, wat gunstig is voor de prijs.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Leiden?",
        a: "Ja, in Leiden en de regio zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Zaandam is bekend om zijn karakteristieke Zaanse houten huizen en de jaren '30-woningen die de stad rijk is, naast moderne nieuwbouw langs de Zaan en in de Achtersluispolder. De traditionele Zaanse woningen hebben vaak een houten constructie en specifieke eisen aan ventilatie en vochtbeheersing, waar een installateur rekening mee moet houden bij het plaatsen van een warmtepomp. Voor deze woningen is een hybride warmtepomp meestal de praktische keuze: lage instapkosten en een snelle gasbesparing, zonder ingrijpende verbouwingen. De nieuwere woningen langs het water zijn vaak al beter geïsoleerd en kunnen sneller overstappen op een volledig elektrische lucht-water warmtepomp. Met mijn gratis keuzehulp kom je erachter wat voor jouw woning in Zaandam het beste past, en plan je een gesprek met een installateur die de regio Zaanstad kent.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zaandam?",
        a: "In Zaandam liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor karakteristieke Zaanse woningen is vaak eerst een hybride warmtepomp de meest praktische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zaandam?",
        a: "Ja, in Zaandam en de regio Zaanstad zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Purmerend bestaat voor een groot deel uit jaren '70-80 nieuwbouwwijken zoals Wheermolen, Overwhere en Gors — gebouwd in een periode waarin spouwmuurisolatie net gangbaar werd, maar vaak nog beperkt is naar huidige maatstaven. Voor woningen uit deze periode is een hybride warmtepomp vaak de slimste eerste stap: je profiteert direct van een lagere energierekening, terwijl je cv-ketel als back-up blijft draaien op de allerkoudste dagen. Heb je je woning al laten naisoleren of heb je dubbel glas en vloerisolatie laten aanbrengen? Dan kan een volledig elektrische lucht-water warmtepomp ook al een serieuze optie zijn. Omdat zoveel woningen in Purmerend uit dezelfde bouwperiode stammen, hebben lokale installateurs hier veel ervaring mee. Mijn keuzehulp geeft je in een paar minuten een indicatie op maat en helpt je verder richting gecertificeerde installateurs in de regio Waterland.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Purmerend?",
        a: "In Purmerend liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Purmerend?",
        a: "Ja, in Purmerend en de regio Waterland zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Groningen heeft een grote variatie aan woningen: van karakteristieke jaren '30-woningen in de Korrewegwijk en Helpman, via compacte studentenwoningen rond de binnenstad, tot moderne nieuwbouw in de groeiwijk Meerstad. De oudere stadswoningen hebben vaak nog originele radiatoren en wisselende isolatie, waardoor een hybride warmtepomp meestal de beste eerste stap is om te beginnen met besparen op gas. Studentenwoningen zijn vaak kleiner van oppervlakte, wat betekent dat een warmtepomp met minder vermogen — en dus lagere kosten — al voldoende kan zijn. Nieuwbouw in Meerstad is daarentegen vaak al volledig voorbereid op een elektrische warmtepomp met vloerverwarming. Mijn keuzehulp stemt de indicatie af op jouw specifieke woning en bouwjaar, en helpt je verder richting gecertificeerde installateurs die actief zijn in de hele provincie Groningen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Groningen?",
        a: "In Groningen liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de karakteristieke jaren '30-woningen in wijken als de Korrewegwijk is een hybride warmtepomp vaak een logische eerste stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Groningen?",
        a: "Ja, in Groningen en de provincie zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere stadswijken als de nieuwbouw rond Meerstad. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Tilburg heeft veel naoorlogse wijken met jaren '60-70-woningen rond het centrum en Tilburg-Noord, naast de uitgebreide nieuwbouwwijk de Reeshof. De jaren '60-70 woningen zijn vaak voorzien van enkel of dubbel glas van de eerste generatie en spouwmuren die niet altijd goed geïsoleerd zijn. Voor deze woningen is een hybride warmtepomp doorgaans de verstandigste keuze: hij werkt samen met je bestaande cv-ketel en levert direct besparing op je gasrekening. In de Reeshof zijn de meeste woningen na 1990 gebouwd met betere isolatie en vaak vloerverwarming, waardoor een volledig elektrische lucht-water warmtepomp hier vaak al een prima optie is zonder extra aanpassingen. Mijn gratis keuzehulp berekent voor jouw specifieke Tilburgse woning wat het beste past, en helpt je verder richting gecertificeerde installateurs in de regio Hart van Brabant.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Tilburg?",
        a: "In Tilburg liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De staat van isolatie van jouw woning bepaalt mede welk type het beste past en wat dat kost.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Tilburg?",
        a: "Ja, in Tilburg en de regio Hart van Brabant zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Breda combineert karakteristieke jaren '30-wijken zoals Belcrum en Brabantpark met moderne nieuwbouw in onder meer Nieuw Wolfslaar en Gageldonk. In de jaren '30-woningen is de spouwmuurisolatie vaak summier of afwezig, en zijn de radiatoren ontworpen voor een hogere aanvoertemperatuur. Een hybride warmtepomp is hier vaak de meest logische eerste stap: hij vermindert je gasverbruik aanzienlijk, terwijl de cv-ketel bijspringt op echt koude dagen. Voor woningen die al zijn voorzien van spouwmuur- en dakisolatie kan een volledig elektrische warmtepomp ook al haalbaar zijn. Nieuwbouwwoningen in Nieuw Wolfslaar voldoen vrijwel altijd aan de eisen voor een volledig elektrische lucht-water warmtepomp. Via mijn keuzehulp ontvang je een indicatie die is toegespitst op jouw woning in Breda, en help ik je verder richting gecertificeerde installateurs die de regio goed kennen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Breda?",
        a: "Een hybride warmtepomp kost in Breda gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor de karakteristieke jaren '30-woningen in Belcrum en Brabantpark is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Breda?",
        a: "Ja, in Breda en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere woonwijken als nieuwbouwprojecten. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Nijmegen-Oost staat bekend om zijn sfeervolle jaren '20-30-woningen met karakteristieke details, terwijl aan de overkant van de Waal de nieuwbouwwijk de Waalsprong steeds verder uitbreidt. De woningen in Nijmegen-Oost hebben vaak monumentale of beeldbepalende gevels, waardoor aanpassingen aan de buitenkant — zoals gevelisolatie — niet altijd mogelijk of wenselijk zijn. Een hybride warmtepomp is dan een uitkomst: je bespaart op gas zonder de uitstraling van je woning aan te tasten, en je cv-ketel blijft als back-up beschikbaar. In de Waalsprong zijn woningen vaak al voorbereid op duurzame verwarming met lage-temperatuurafgifte, wat ze geschikt maakt voor een volledig elektrische lucht-water warmtepomp. Mijn keuzehulp houdt rekening met dit verschil tussen de oude stad en de nieuwbouw, en helpt je verder richting gecertificeerde installateurs in de regio Nijmegen.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Nijmegen?",
        a: "In Nijmegen liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de karakteristieke woningen in Nijmegen-Oost is vaak eerst een hybride warmtepomp de meest praktische keuze.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Nijmegen?",
        a: "Ja, in Nijmegen en de regio zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de oudere stadswijken als de nieuwbouw aan de overkant van de Waal. Via mijn keuzehulp laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Enschede heeft een interessante mix van jaren '70-wijken zoals Wesselerbrink en Velve-Lindenhof, en de volledig vernieuwde wijk Roombeek, herbouwd na de vuurwerkramp met moderne, duurzame woningen. De jaren '70-woningen hebben vaak nog originele cv-installaties en wisselende isolatie, waardoor een hybride warmtepomp meestal de beste eerste stap is om te beginnen met besparen. Roombeek is daarentegen gebouwd met oog voor duurzaamheid, en veel woningen daar zijn al geschikt voor een volledig elektrische lucht-water warmtepomp, soms zelfs met stadsverwarming als alternatief. Welk type bij jouw woning past, hangt dus sterk af van de wijk en het bouwjaar. Mijn gratis keuzehulp geeft je in een paar minuten een persoonlijke indicatie en helpt je verder richting gecertificeerde installateurs in de regio Twente.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Enschede?",
        a: "In Enschede liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Enschede?",
        a: "Ja, in Enschede en de regio Twente zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Zwolle heeft een goed bewaarde historische binnenstad binnen de grachten, met woningen die vaak honderden jaren oud zijn, en de groeiende nieuwbouwwijk Stadshagen aan de andere kant van het Zwarte Water. Voor de historische woningen binnen de grachten geldt vaak dat ingrijpende isolatiemaatregelen lastig of niet toegestaan zijn vanwege monumentale status. Een hybride warmtepomp is dan ideaal: hij levert direct besparing op je gasrekening, terwijl de bestaande cv-ketel het karakter en comfort van je woning intact houdt op de koudste dagen. In Stadshagen zijn de meeste woningen na 2000 gebouwd met goede isolatie en vloerverwarming, wat ze vaak direct geschikt maakt voor een volledig elektrische lucht-water warmtepomp. Mijn keuzehulp houdt rekening met dit verschil en helpt je verder richting gecertificeerde installateurs die ervaring hebben met zowel historische panden als nieuwbouw in Zwolle.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zwolle?",
        a: "Een hybride warmtepomp kost in Zwolle gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor woningen in de historische binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zwolle?",
        a: "Ja, in Zwolle en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel de historische binnenstad als de nieuwbouw in Stadshagen. Via mijn keuzehulp laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Amersfoort kent een duidelijk contrast tussen de karakteristieke jaren '30-woningen in het Soesterkwartier en de moderne nieuwbouwwijk Vathorst. De woningen in het Soesterkwartier hebben vaak nog originele kozijnen en beperkte spouwmuurisolatie, waardoor de warmtevraag relatief hoog kan zijn. Een hybride warmtepomp is hier meestal de beste eerste stap: je profiteert direct van een lagere gasrekening, en je cv-ketel blijft als back-up beschikbaar voor de koudste dagen. In Vathorst zijn woningen vaak gebouwd met het oog op duurzaamheid, met goede isolatie en lage-temperatuurverwarming, waardoor een volledig elektrische lucht-water warmtepomp daar vaak al zonder extra aanpassingen kan. Mijn keuzehulp geeft binnen enkele minuten een indicatie die rekening houdt met het bouwjaar en type van jouw woning, en helpt je verder richting gecertificeerde installateurs in de regio Eemland.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Amersfoort?",
        a: "In Amersfoort liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de jaren '30-woningen in het Soesterkwartier is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Amersfoort?",
        a: "Ja, in Amersfoort en de regio Eemland zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Apeldoorn heeft veel groene woonwijken met jaren '60-70-woningen, naast de nieuwere wijken Zuidbroek en Het Vlaschveld die de afgelopen jaren zijn ontwikkeld. De oudere woningen hebben vaak een wisselende isolatiegraad: sommige zijn al nageïsoleerd, andere nog niet. Voor woningen die nog niet volledig geïsoleerd zijn, is een hybride warmtepomp de logische eerste stap — hij combineert besparing met een laag instapbedrag. Is jouw woning al voorzien van spouwmuur-, dak- en vloerisolatie? Dan kan een volledig elektrische lucht-water warmtepomp ook al uit. Nieuwbouwwoningen in Zuidbroek en Het Vlaschveld zijn vrijwel altijd al voorbereid op duurzame verwarming. Mijn gratis keuzehulp brengt in kaart wat voor jouw specifieke woning in Apeldoorn het beste past, en helpt je verder richting gecertificeerde installateurs uit de regio.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Apeldoorn?",
        a: "In Apeldoorn liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Apeldoorn?",
        a: "Ja, in Apeldoorn en de regio zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Dordrecht is gebouwd op een eiland, met een historische binnenstad vol monumentale grachtenpanden en de modernere nieuwbouwwijk Stadspolders iets verderop. De grachtenpanden in de binnenstad hebben vaak een beschermd stadsgezicht, waardoor zichtbare aanpassingen aan de gevel niet altijd mogelijk zijn. Een hybride warmtepomp is in dat geval een uitkomst: de buitenunit is compact te plaatsen en je bespaart direct op gas, zonder het karakter van je pand aan te tasten. In Stadspolders zijn woningen over het algemeen na de jaren '70 gebouwd met betere isolatie, waardoor een volledig elektrische lucht-water warmtepomp daar vaker al een goede optie is. Mijn keuzehulp houdt rekening met deze verschillen tussen de binnenstad en de nieuwere wijken, en helpt je verder richting gecertificeerde installateurs in de Drechtsteden.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Dordrecht?",
        a: "Een hybride warmtepomp kost in Dordrecht gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. In de historische binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Dordrecht?",
        a: "Ja, in Dordrecht en de Drechtsteden zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als nieuwbouw. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Zoetermeer is een echte Vinex-stad: het grootste deel van de woningen in wijken als Palenstein, Seghwaert en Meerzicht is gebouwd vanaf de jaren '60 en '70, vaak volgens vergelijkbare bouwtekeningen. Dat is goed nieuws als je een warmtepomp overweegt: omdat veel woningen sterk op elkaar lijken, kunnen installateurs snel inschatten welk vermogen nodig is en wat de kosten ongeveer zullen zijn. Voor de meeste woningen uit deze periode is een hybride warmtepomp de slimste eerste stap, vooral als de spouwmuurisolatie nog niet is aangepakt. Is je woning al goed geïsoleerd, dan is een volledig elektrische lucht-water warmtepomp ook hier een serieuze optie. Mijn gratis keuzehulp geeft je in een paar minuten een indicatie op maat van jouw woning in Zoetermeer en helpt je verder richting gecertificeerde installateurs in de regio Haaglanden.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Zoetermeer?",
        a: "In Zoetermeer liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Veel woningen in Zoetermeer hebben een vergelijkbare bouwstijl, wat de inschatting van de kosten vaak eenvoudiger maakt.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Zoetermeer?",
        a: "Ja, in Zoetermeer en de regio Haaglanden zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Maastricht heeft een rijke historische binnenstad en de wijk Wyck, met veel oudere woningen en panden, naast de moderne nieuwbouw op Céramique langs de Maas. Voor historische woningen in de binnenstad en Wyck geldt vaak dat ingrijpende isolatiemaatregelen lastig zijn vanwege de monumentale of beeldbepalende status van de panden. Een hybride warmtepomp is dan de beste eerste stap: je bespaart direct op gas, terwijl je cv-ketel het comfort op koude dagen waarborgt en het aanzien van je woning ongewijzigd blijft. Op Céramique zijn de meeste woningen na 2000 gebouwd met moderne isolatie en lage-temperatuurverwarming, waardoor een volledig elektrische lucht-water warmtepomp daar vaak al direct mogelijk is. Mijn keuzehulp houdt rekening met dit verschil en helpt je verder richting gecertificeerde installateurs die ervaring hebben in de regio Zuid-Limburg.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Maastricht?",
        a: "Een hybride warmtepomp kost in Maastricht gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. Voor historische woningen in de binnenstad en Wyck kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Maastricht?",
        a: "Ja, in Maastricht en de regio Zuid-Limburg zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als nieuwbouw. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Den Bosch heeft veel naoorlogse wijken met jaren '50-60-woningen, zoals de Kruiskamp, naast nieuwbouw in Boschveld en de groeiwijk De Groote Wielen. De woningen in de Kruiskamp zijn vaak voorzien van originele radiatoren en wisselende spouwmuurisolatie, waardoor een hybride warmtepomp meestal de meest praktische eerste stap is: lage instapkosten en directe besparing op gas, met je cv-ketel als back-up. In Boschveld en De Groote Wielen zijn woningen vaak gebouwd met het oog op duurzaamheid en zijn ze daardoor sneller geschikt voor een volledig elektrische lucht-water warmtepomp. Mijn gratis keuzehulp brengt in kaart welk type warmtepomp het beste past bij jouw specifieke woning in Den Bosch, op basis van bouwjaar, oppervlakte en huidige verwarmingssysteem, en helpt je verder richting gecertificeerde installateurs in de regio.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Den Bosch?",
        a: "In Den Bosch liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor de jaren '50-60 woningen in de Kruiskamp is vaak eerst een hybride warmtepomp een logische stap.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Den Bosch?",
        a: "Ja, in Den Bosch en de regio zijn meerdere gecertificeerde installateurs actief. Via mijn keuzehulp laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Alkmaar heeft veel woningen uit de jaren '70 in wijken als De Mare en Daalmeer, naast de nieuwere ontwikkeling rond Overstad. De jaren '70-woningen hebben vaak een spouwmuur die wel aanwezig is maar niet altijd is nageïsoleerd, en enkel of verouderd dubbel glas. Voor deze woningen is een hybride warmtepomp meestal de slimste keuze: je profiteert meteen van een lagere energierekening, terwijl je cv-ketel bijspringt op de koudste dagen. Nieuwbouwwoningen rond Overstad zijn vaak al uitgerust met moderne isolatie en lage-temperatuurverwarming, waardoor een volledig elektrische lucht-water warmtepomp daar een directe optie kan zijn. Mijn keuzehulp geeft binnen enkele minuten een persoonlijke indicatie voor jouw woning in Alkmaar, en helpt je verder richting gecertificeerde installateurs in de regio Noord-Holland-Noord.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Alkmaar?",
        a: "Een hybride warmtepomp kost in Alkmaar gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt mede af van de isolatiestaat van jouw woning.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Alkmaar?",
        a: "Ja, in Alkmaar en de regio Noord-Holland-Noord zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Delft combineert een historische binnenstad vol grachtenpanden met de naoorlogse wijk Tanthof, gebouwd in de jaren '70 en '80. De grachtenpanden hebben vaak een beschermd stadsgezicht en beperkte mogelijkheden voor gevelisolatie, waardoor een hybride warmtepomp meestal de beste eerste stap is: compact te plaatsen, direct besparing op gas, en je cv-ketel blijft beschikbaar voor de koudste dagen. In Tanthof is de spouwmuurisolatie vaak wel aanwezig maar gedateerd; met een kleine opknapbeurt aan de isolatie kan een volledig elektrische lucht-water warmtepomp hier al snel een goede optie zijn. Mijn keuzehulp houdt rekening met het verschil tussen de historische binnenstad en de naoorlogse wijken, en helpt je verder richting gecertificeerde installateurs die in en rond Delft actief zijn.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Delft?",
        a: "In Delft liggen de kosten van een hybride warmtepomp gemiddeld tussen €3.500 en €7.000, en een volledig elektrische lucht-water warmtepomp tussen €6.000 en €12.000, inclusief installatie. Voor historische woningen in de binnenstad kan extra maatwerk nodig zijn, wat de prijs kan beïnvloeden.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Delft?",
        a: "Ja, in Delft en omgeving zijn meerdere gecertificeerde installateurs actief, met ervaring in zowel historische panden als naoorlogse wijken. Via mijn keuzehulp laat je je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
    localParagraph:
      "Hoorn heeft met de Grote Waal een grote naoorlogse wijk met woningen uit de jaren '70, naast de nieuwe ontwikkeling Poort van Hoorn bij het station. De woningen in de Grote Waal hebben vaak een vergelijkbare bouwstijl en isolatieniveau, waardoor installateurs snel kunnen inschatten welk vermogen warmtepomp nodig is. Voor deze woningen is een hybride warmtepomp meestal de beste eerste stap: lage instapkosten en directe besparing, met je cv-ketel als back-up op de koudste dagen. Nieuwbouwwoningen in Poort van Hoorn zijn vaak al voorbereid op duurzame verwarming en daardoor sneller geschikt voor een volledig elektrische lucht-water warmtepomp. Mijn gratis keuzehulp geeft je in een paar minuten een indicatie op maat voor jouw woning in Hoorn, en helpt je verder richting gecertificeerde installateurs in de regio West-Friesland.",
    faqs: [
      {
        q: "Wat kost een warmtepomp installatie in Hoorn?",
        a: "Een hybride warmtepomp kost in Hoorn gemiddeld €3.500 – €7.000 en een volledig elektrische lucht-water warmtepomp €6.000 – €12.000, inclusief installatie. De exacte prijs hangt af van het type woning en het vermogen van de warmtepomp.",
      },
      {
        q: "Zijn er gecertificeerde installateurs actief in Hoorn?",
        a: "Ja, in Hoorn en de regio West-Friesland zijn meerdere gecertificeerde installateurs actief. Via warmtepomp.ai laat je vrijblijvend je gegevens achter, dan help ik je verder richting een gecertificeerde installateur bij jou in de buurt.",
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
