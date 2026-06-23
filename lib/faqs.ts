import { ISDE_LUCHT_WATER_RANGE } from "./subsidie";

export type FaqItem = {
  q: string;
  a: string;
  /** Optionele link naar een verdiepend blogartikel. */
  link?: { href: string; label: string };
};

export const faqs: FaqItem[] = [
  {
    q: "Welk type warmtepomp past bij mijn woning?",
    a: "Dat hangt af van je isolatieniveau, verwarmingsoppervlak en budget. Een hybride warmtepomp werkt goed in oudere, slecht geïsoleerde woningen. Een volledig elektrische lucht/water-warmtepomp is efficiënter maar vereist betere isolatie. Mijn keuzehulp stelt de juiste vragen en geeft je een persoonlijke indicatie.",
    link: {
      href: "/blog/warmtepomp-geschikt-voor-mijn-woning",
      label: "Lees de complete checklist: is een warmtepomp geschikt voor jouw woning?",
    },
  },
  {
    q: "Hoeveel subsidie kan ik krijgen voor een warmtepomp?",
    a: `Via de ISDE-regeling (Investeringssubsidie Duurzame Energie) kun je in 2026 subsidie krijgen voor een warmtepomp. Voor een lucht-water warmtepomp gaat het doorgaans om ${ISDE_LUCHT_WATER_RANGE}, oplopend met het thermisch vermogen. Het exacte bedrag hangt af van het type warmtepomp en het vermogen. Ik bereken jouw subsidie automatisch op basis van jouw situatie.`,
    link: {
      href: "/blog/warmtepomp-subsidie-2026-complete-gids",
      label: "Lees de complete ISDE-subsidiegids voor 2026",
    },
  },
  {
    q: "Wat kost een warmtepomp gemiddeld?",
    a: "Een hybride warmtepomp kost inclusief installatie gemiddeld €7.000 – €9.500. Een volledige lucht/water-warmtepomp kost €8.500 – €14.000 afhankelijk van je woningtype. Na ISDE-subsidie en eventuele BTW-teruggave kan dit aanzienlijk lager uitvallen.",
    link: {
      href: "/blog/warmtepomp-kosten-2026",
      label: "Bekijk het complete kostenoverzicht voor 2026",
    },
  },
  {
    q: "Hoe lang duurt de installatie van een warmtepomp?",
    a: "De meeste warmtepompen worden in één dag geïnstalleerd. Bij een hybride warmtepomp blijft je cv-ketel als backup, waardoor de installatie eenvoudiger is. Voor een volledige warmtepomp kan de installatie soms twee dagen in beslag nemen.",
  },
  {
    q: "Heb ik een vergunning nodig voor een warmtepomp?",
    a: "Dat hangt af van waar de buitenunit komt te staan — en van de regels in jouw gemeente. Plaats je 'm op de grond, dan is het meestal vergunningvrij: zolang de unit niet hoger is dan 1 meter en niet groter dan 2 m², en dat is bij de meeste buitenunits het geval. Komt de unit aan de gevel of op het dak, dan gelden de regels uit het omgevingsplan van je gemeente en is er vaak wél een vergunning nodig. Woon je in een monument, dan is bijna altijd een vergunning nodig, ook voor een kleine unit. En in een appartementencomplex met een VvE heb je sowieso toestemming van de Vereniging van Eigenaren nodig, los van de gemeentelijke vergunning. Mijn advies: doe eerst de gratis Vergunningcheck op het Omgevingsloket (omgevingswet.overheid.nl/thema/airco) en vraag het bij twijfel even na bij je gemeente — de regels kunnen per gemeente verschillen. (Bron: Informatiepunt Leefomgeving / Rijksoverheid.)",
  },
  {
    q: "Werkt een warmtepomp ook in een slecht geïsoleerde woning?",
    a: "Ja, maar dan is een hybride warmtepomp een slimme tussenstap. De warmtepomp neemt het verwarmingswerk over zodra het buiten niet te koud is; de cv-ketel springt bij bij extreme kou. Zo bespaar je toch 30–50% op je gasverbruik, ook zonder extra isolatie. Tip: heb je de mogelijkheid om te isoleren? Dan verdien je de warmtepomp sneller terug en heb je minder vermogen nodig.",
  },
  {
    q: "Is warmtepomp.ai echt onafhankelijk?",
    a: "Ja. Ik ben niet in dienst van één merk of installateur en ontvang geen provisie op verkopen. Ik maak een onafhankelijke vergelijking van welk type warmtepomp het beste bij jouw woning past en help je vervolgens de beste optie te vinden. Ik bouw aan een netwerk van gecertificeerde installateurs, zodat je straks zelf offertes kunt vergelijken. Mijn inkomsten komen uit een kleine verwijzingsvergoeding bij offerteaanvragen — alleen als jij tevreden bent.",
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
    a: "Nee, dat hoeft niet. Vloerverwarming helpt omdat een warmtepomp het beste werkt met water op een lagere temperatuur, maar moderne warmtepompen kunnen ook prima samenwerken met (grotere) radiatoren. Mijn keuzehulp houdt hier rekening mee bij de indicatie.",
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
    q: "Hoe kan een warmtepomp zo zuinig zijn? (COP uitgelegd)",
    a: "Een warmtepomp máákt geen warmte, hij verplaatst het. Hij haalt warmte uit de buitenlucht — die er zelfs bij vorst nog in zit — en pompt die naar binnen. De stroom gebruikt hij alleen om die warmte te verplaatsen, net als een koelkast die warmte van binnen naar buiten brengt. Daardoor levert 1 kWh stroom ongeveer 3 tot 4 kWh warmte op. Dat getal heet de COP. Hoe kouder het buiten is en hoe warmer het water moet worden (bijvoorbeeld bij oude radiatoren), hoe lager de COP. Over een heel jaar gemeten — de SCOP — zit een goed systeem op vloerverwarming rond de 3,5 à 4.",
  },
  {
    q: "Verspilt een cv-ketel energie vergeleken met een warmtepomp?",
    a: "Nee, een moderne hr-ketel is juist heel efficiënt: die zet zo'n 95% van het gas om in warmte. Een ketel is dus niet verspillend. Het verschil zit hem hierin: een ketel máákt warmte uit gas en komt daardoor nooit boven ongeveer 1 kWh warmte per kWh gas. Een warmtepomp haalt warmte uit de lucht en komt daardoor wél boven de 1. Je vergelijkt dus eigenlijk twee verschillende dingen: warmte per kWh stroom versus warmte per kWh gas.",
  },
  {
    q: "Ben je met een warmtepomp echt goedkoper uit dan met gas?",
    a: "Let op: een COP van 3-4 betekent niet dat je 3 tot 4 keer goedkoper uit bent. Stroom is per kWh een stuk duurder dan gas. Die hogere stroomprijs wordt grotendeels gecompenseerd door de hoge COP, waardoor je netto meestal goedkoper uit bent dan met gas. De grootste winst zit in CO₂: een warmtepomp stoot veel minder uit, en dat wordt elk jaar beter naarmate de stroom groener wordt.",
  },
  {
    q: "Hoe kan een warmtepomp 4x meer warmte leveren dan de stroom die hij gebruikt? Die energie moet toch ergens vandaan komen?",
    a: "Klopt — en die energie komt uit de buitenlucht. Zelfs bij vorst zit er nog warmte in de lucht. De warmtepomp haalt die warmte naar binnen; de elektriciteit gebruikt hij alleen om die warmte te verplaatsen, niet om het te maken. Vergelijk het met een koelkast: die gebruikt ook weinig stroom maar verplaatst veel warmte. De verhouding (de COP) varieert wel: hoe kouder het buiten is en hoe warmer het water moet worden, bijvoorbeeld bij oude radiatoren, hoe lager de COP. Geen magie, gewoon natuurkunde.",
  },
  {
    q: "Is een warmtepomp stil?",
    a: "Een moderne warmtepomp is vergelijkbaar met het geluid van een ventilator of een koelkast — meestal tussen de 35 en 60 decibel. De buitenunit maakt het meeste geluid, daarom adviseren installateurs vaak een goede plek in de tuin of tegen de gevel, uit de buurt van slaapkamerramen.",
  },
  {
    q: "Wat is het verschil tussen een hybride en een volledig elektrische warmtepomp?",
    a: "Een hybride warmtepomp werkt samen met je bestaande cv-ketel: de warmtepomp doet het meeste werk, en de ketel springt bij op de koudste dagen. Een volledig elektrische warmtepomp vervangt je cv-ketel helemaal en verwarmt je huis het hele jaar door zonder gas. De uiteindelijke richting is all-electric; een hybride is een slimme tussenstap op weg naar volledig gasloos, die nu al 30–50% op gas bespaart en de overgang makkelijker maakt. Volledig elektrisch bespaart het meest, maar vraagt om een beter geïsoleerde woning.",
  },
  {
    q: "Wanneer is een warmtepomp niet geschikt?",
    a: "Een warmtepomp is minder geschikt als je woning slecht geïsoleerd is én je niet kiest voor een hybride variant, of als er simpelweg geen ruimte is voor een buitenunit of bodemlus. Ook bij zeer beperkt budget en geen mogelijkheid tot financiering kan het lastig zijn. In bijna alle andere gevallen is er een passend type warmtepomp — mijn keuzehulp laat zien welke dat is.",
  },
  {
    q: "Hoe vraag ik ISDE-subsidie aan?",
    a: "Je vraagt de ISDE-subsidie zelf aan via mijn.rvo.nl, nadat je warmtepomp is gekocht en geïnstalleerd. Je hebt hiervoor de offerte, de factuur en het betaalbewijs nodig. De aanvraag moet binnen 12 maanden na installatie worden ingediend. Veel installateurs helpen je hier graag bij.",
    link: {
      href: "/blog/warmtepomp-subsidie-aanvragen-stap-voor-stap",
      label: "Bekijk de ISDE-aanvraag stap voor stap",
    },
  },
  {
    q: "Kost warmtepomp.ai mij iets?",
    a: "Nee. Het gebruik is volledig gratis en je zit nergens aan vast.",
  },
  {
    q: "Verdien je dan aan mij?",
    a: "Ik ontvang een vergoeding van de installateur wanneer ik je introduceer, niet van jou. Die vergoeding komt in de plaats van de advertentie- en acquisitiekosten die een installateur anders maakt om aan nieuwe klanten te komen — voor hem is het dus geen extra kostenpost, maar een andere. Daardoor verandert jouw offerteprijs er niet wezenlijk door.",
  },
  {
    q: "Is je vergelijking echt onafhankelijk?",
    a: "Mijn informatie en vergelijking zijn niet gekoppeld aan het assortiment van één installateur of merk. Ik laat zien wat bij jouw woning past, niet wat iemand wil verkopen.",
  },
];
