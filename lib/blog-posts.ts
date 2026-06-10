export type BlogSection =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "link"; href: string; label: string; description: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "warmtepomp-subsidie-2026-complete-gids",
    title: "ISDE Subsidie Warmtepomp 2026: Complete Gids",
    description:
      "Alles over de ISDE-subsidie voor warmtepompen in 2026: bedragen per type, voorwaarden, het aanvraagproces en praktische tips om je aanvraag soepel te laten verlopen.",
    publishedAt: "2026-06-03",
    intro:
      "Een warmtepomp is een flinke investering, maar de overheid betaalt via de ISDE-regeling een aanzienlijk deel mee. In deze gids leggen we in gewone taal uit hoe de ISDE-subsidie voor warmtepompen in 2026 werkt, hoeveel je kunt krijgen, aan welke voorwaarden je moet voldoen en hoe je de aanvraag stap voor stap doet.",
    sections: [
      {
        type: "text",
        heading: "Wat is de ISDE-subsidie precies?",
        paragraphs: [
          "ISDE staat voor Investeringssubsidie Duurzame Energie en Klimaattransitie. Het is een landelijke subsidieregeling van de Rijksoverheid, uitgevoerd door de Rijksdienst voor Ondernemend Nederland (RVO). Het doel is simpel: huiseigenaren en bedrijven stimuleren om over te stappen op duurzame verwarming, zoals een warmtepomp, in plaats van een cv-ketel op aardgas.",
          "Voor particulieren betekent dit dat je, als je een warmtepomp aanschaft en laat installeren, een deel van de aanschaf- en installatiekosten kunt terugvragen. De subsidie wordt uitgekeerd als een vast bedrag per warmtepomp, gebaseerd op het type en het vermogen van de installatie — niet als percentage van de factuur. Daardoor weet je vooraf vrij nauwkeurig waar je aan toe bent.",
          "Belangrijk om te weten: de ISDE-regeling wordt jaarlijks vastgesteld en de bedragen en voorwaarden kunnen veranderen. Wat in dit artikel staat is gebaseerd op de meest recente informatie, maar controleer voor je definitieve aanvraag altijd de actuele bedragen op rvo.nl.",
        ],
      },
      {
        type: "text",
        heading: "Hoeveel subsidie kun je krijgen per type warmtepomp?",
        paragraphs: [
          "De hoogte van de ISDE-subsidie hangt af van het type warmtepomp dat je laat plaatsen. Voor een lucht-water warmtepomp — de meest gekozen warmtepomp in Nederland — kun je doorgaans tot €2.500 subsidie ontvangen, afhankelijk van het thermisch vermogen van de installatie. Hoe hoger het vermogen, hoe hoger het subsidiebedrag, tot een bepaald maximum.",
          "Voor een hybride warmtepomp, die je bestaande cv-ketel niet vervangt maar aanvult, ligt het subsidiebedrag doorgaans lager dan voor een volledig elektrische warmtepomp. Het exacte bedrag is wisselend en hangt af van het vermogen en type van de hybride installatie.",
          "Voor bodem-water (geothermische) warmtepompen geldt vaak een hoger subsidiebedrag, omdat deze installaties duurder zijn en doorgaans efficiënter werken. Voor lucht-lucht warmtepompen — die voornamelijk verwarmen én koelen via luchtcirculatie — geldt meestal geen of een zeer beperkte ISDE-subsidie.",
          "Omdat deze bedragen per jaar en per situatie kunnen verschillen, is het verstandig om je eigen situatie gratis te laten doorrekenen voordat je een definitieve keuze maakt.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Bekijk de actuele subsidiebedragen",
        description:
          "Op onze subsidiepagina vind je een overzicht van de indicatieve ISDE-bedragen per type warmtepomp.",
      },
      {
        type: "text",
        heading: "Aan welke voorwaarden moet je voldoen?",
        paragraphs: [
          "Om in aanmerking te komen voor de ISDE-subsidie, moet je aan een aantal voorwaarden voldoen. Allereerst moet de warmtepomp geïnstalleerd worden in een bestaande woning of nieuwbouwwoning die voldoet aan de eisen die de RVO stelt aan dat type installatie.",
          "Daarnaast moet de installatie worden uitgevoerd door een erkend installatiebedrijf met de juiste certificering. Dit is niet alleen een subsidievoorwaarde, maar ook een goede garantie dat de installatie vakkundig gebeurt en dat de warmtepomp optimaal wordt afgesteld op jouw woning.",
          "Verder geldt dat je de aanvraag binnen een vastgestelde termijn na aanschaf en installatie moet indienen — meestal binnen 12 maanden. Tot slot is de subsidiepot niet onuitputtelijk: zodra het jaarlijkse subsidiebudget op is, sluit de regeling tijdelijk, ook al voldoe je verder aan alle voorwaarden. Op = op dus, en aanvragen vroeg in het jaar vergroot de kans dat er nog budget beschikbaar is.",
        ],
      },
      {
        type: "text",
        heading: "Hoe vraag je de ISDE-subsidie aan? Stap voor stap",
        paragraphs: [
          "De aanvraag voor de ISDE-subsidie verloopt volledig online via mijn.rvo.nl, en je kunt dit als particulier zelf doen. Het proces bestaat in grote lijnen uit drie stappen.",
          "Stap 1: schaf je warmtepomp aan en laat hem installeren door een erkend installatiebedrijf. Bewaar de offerte die je vooraf hebt ontvangen — deze heb je later nodig.",
          "Stap 2: verzamel na de installatie de definitieve factuur en het bewijs van betaling. Controleer of op de factuur duidelijk het type warmtepomp, het vermogen en het energielabel of de COP-waarde staan vermeld, want deze gegevens heeft de RVO nodig om je aanvraag te beoordelen.",
          "Stap 3: log in met je DigiD op mijn.rvo.nl en doorloop het aanvraagformulier. Je uploadt hier de offerte, de factuur en het betaalbewijs. Na indiening krijg je meestal binnen enkele weken tot maanden uitsluitsel en wordt het subsidiebedrag, bij goedkeuring, op je rekening gestort.",
        ],
      },
      {
        type: "text",
        heading: "Tips om je aanvraag soepel te laten verlopen",
        paragraphs: [
          "Vraag je installateur om alle benodigde technische gegevens (zoals vermogen en energielabel) standaard op de factuur te zetten — dit voorkomt vertraging omdat de RVO anders om aanvullende documenten kan vragen.",
          "Dien je aanvraag niet te lang na de installatie in. Hoewel je in principe 12 maanden de tijd hebt, voorkom je zo dat je het vergeet en mis je geen subsidiebudget dat eerder op kan raken in een volgend jaar.",
          "Combineer waar mogelijk: naast de ISDE kun je in sommige gevallen ook gebruikmaken van een lening via het Nationaal Warmtefonds tegen een gunstige rente, zodat je de investering makkelijker kunt voorfinancieren.",
          "En tot slot: laat je vooraf goed adviseren over welk type warmtepomp het beste bij jouw woning past. Een verkeerde keuze kan niet alleen zorgen voor een lager subsidiebedrag, maar ook voor tegenvallende besparingen op de lange termijn.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontvang gratis advies over jouw situatie",
        description:
          "Beantwoord een paar vragen over je woning en ontvang een persoonlijk advies inclusief geschatte subsidie en besparing.",
      },
      {
        type: "text",
        heading: "Veelgemaakte fouten bij de ISDE-aanvraag",
        paragraphs: [
          "Een veelgemaakte fout is dat mensen denken dat de subsidie automatisch wordt verrekend door de installateur. Dat is niet zo: in de meeste gevallen vraag je de subsidie zelf aan, ná installatie. Sommige installateurs bieden aan om dit voor je te regelen, maar de verantwoordelijkheid en het account bij mijn.rvo.nl blijven bij jou.",
          "Een andere valkuil is het indienen van een onvolledige factuur, bijvoorbeeld zonder vermelding van het vermogen van de warmtepomp. Dit leidt vaak tot vertraging of zelfs afwijzing van de aanvraag. Controleer dus vooraf samen met je installateur of alle gegevens correct en volledig zijn.",
          "Tot slot onderschatten veel mensen hoe snel het subsidiebudget op kan raken, vooral in de eerste maanden van het jaar. Wacht daarom niet te lang met je aanvraag als je weet dat je in aanmerking komt.",
        ],
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De ISDE-subsidie maakt de overstap naar een warmtepomp voor veel huishoudens een stuk aantrekkelijker. Door op tijd te starten, een erkend installatiebedrijf te kiezen en je administratie op orde te hebben, verloopt de aanvraag meestal soepel. Twijfel je nog welk type warmtepomp het beste bij jouw woning past, of wil je weten op hoeveel subsidie jij ongeveer kunt rekenen? Onze gratis keuzehulp geeft je binnen een paar minuten een persoonlijk advies, inclusief een inschatting van de kosten, subsidie en besparing.",
        ],
      },
    ],
  },
  {
    slug: "hybride-warmtepomp-ervaringen",
    title: "Hybride Warmtepomp: Ervaringen, Kosten en Voordelen in 2026",
    description:
      "Een eerlijk verhaal over de hybride warmtepomp: hoe het werkt, voor wie het geschikt is, wat het kost en wat huiseigenaren in de praktijk merken van hun besparing.",
    publishedAt: "2026-06-10",
    intro:
      "De hybride warmtepomp is al jaren de meest verkochte warmtepomp in Nederland, en niet zonder reden. In dit artikel leggen we uit wat een hybride warmtepomp is, voor wie hij geschikt is, wat de kosten en besparingen in de praktijk zijn, en waar je op moet letten voordat je de overstap maakt.",
    sections: [
      {
        type: "text",
        heading: "Wat is een hybride warmtepomp?",
        paragraphs: [
          "Een hybride warmtepomp is, zoals de naam al zegt, een combinatie van twee systemen: een (lucht-water) warmtepomp en je bestaande cv-ketel. De warmtepomp neemt het grootste deel van het verwarmingswerk over — meestal zo'n 70 tot 90% van het jaar — terwijl de cv-ketel alleen bijspringt op de allerkoudste dagen, wanneer de warmtepomp minder efficiënt wordt.",
          "Het systeem schakelt automatisch tussen beide bronnen, op basis van de buitentemperatuur en de warmtevraag. Voor de bewoner verandert er in de praktijk weinig: de thermostaat werkt zoals je gewend bent, alleen draait er nu meestal de warmtepomp in plaats van de ketel.",
          "Het grote voordeel hiervan is dat je niet je hele verwarmingssysteem hoeft om te gooien. Je cv-ketel en radiatoren blijven gewoon staan, en de warmtepomp wordt ernaast geplaatst. Dat maakt de drempel om te starten met verduurzamen een stuk lager dan bij een volledig elektrische warmtepomp.",
        ],
      },
      {
        type: "text",
        heading: "Voor wie is een hybride warmtepomp geschikt?",
        paragraphs: [
          "Een hybride warmtepomp is vooral interessant voor woningen die nog niet (volledig) zijn geïsoleerd, of waar de radiatoren nog niet zijn afgestemd op de lagere aanvoertemperaturen die volledig elektrische warmtepompen het liefst gebruiken.",
          "In de praktijk zien we dat veel jaren '30-woningen, naoorlogse rijtjeswoningen en tussenwoningen met standaard radiatoren goed uit de voeten kunnen met een hybride warmtepomp. De warmtepomp doet het meeste werk bij milde temperaturen — en in Nederland is dat het grootste deel van het stookseizoen — terwijl de ketel alleen bijspringt tijdens vorstperiodes.",
          "Ook voor huiseigenaren die stap voor stap willen verduurzamen is een hybride warmtepomp een logische eerste stap: je bespaart direct op gas, en als je later (extra) isoleert, kun je eventueel alsnog overstappen op een volledig elektrische warmtepomp.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk het volledige kostenoverzicht",
        description:
          "Vergelijk de kosten van een hybride warmtepomp met andere types, inclusief subsidie en besparing.",
      },
      {
        type: "text",
        heading: "Wat kost een hybride warmtepomp en wat levert het op?",
        paragraphs: [
          "De aanschaf- en installatiekosten van een hybride warmtepomp liggen doorgaans tussen de €3.500 en €7.000, afhankelijk van het merk, vermogen en de complexiteit van de installatie. Dit is aanzienlijk lager dan de €6.000 tot €12.000 die je vaak betaalt voor een volledig elektrische lucht-water warmtepomp.",
          "Met de ISDE-subsidie kun je een deel van deze kosten terugkrijgen, al ligt het subsidiebedrag voor hybride installaties doorgaans lager dan voor volledig elektrische warmtepompen.",
          "Wat de besparing betreft: huiseigenaren met een hybride warmtepomp zien in de praktijk vaak een gasbesparing van 30 tot 50%, afhankelijk van de woning en het stookgedrag. Dit vertaalt zich naar een maandelijkse besparing op de energierekening, al stijgt het stroomverbruik enigszins doordat de warmtepomp elektriciteit gebruikt. Per saldo houden de meeste huishoudens een netto besparing over, vooral bij de huidige gasprijzen.",
          "De terugverdientijd van een hybride warmtepomp ligt voor veel woningen tussen de 4 en 7 jaar, afhankelijk van de subsidie, de gasprijs en het isolatieniveau van de woning.",
        ],
      },
      {
        type: "text",
        heading: "Voordelen en nadelen op een rij",
        paragraphs: [
          "De belangrijkste voordelen van een hybride warmtepomp zijn de lage instapkosten, de eenvoudige installatie (vaak in één dag), het behoud van je cv-ketel als back-up, en een directe besparing op je gasverbruik zonder dat je je woning eerst hoeft te verbouwen.",
          "Daar staan een paar nadelen tegenover. Je gebruikt nog steeds een beetje gas, dus je bent niet volledig 'van het gas af'. De besparing is doorgaans lager dan bij een volledig elektrische warmtepomp, en je hebt nog steeds twee systemen die onderhoud nodig hebben (de ketel en de warmtepomp).",
          "Voor de meeste huiseigenaren wegen de voordelen — vooral de lage drempel en snelle terugverdientijd — ruimschoots op tegen de nadelen, zeker als eerste stap richting een duurzamere woning.",
        ],
      },
      {
        type: "text",
        heading: "Hybride versus volledig elektrisch: wat past bij jou?",
        paragraphs: [
          "De keuze tussen hybride en volledig elektrisch hangt sterk af van de staat van je woning. Is je woning goed geïsoleerd, heb je (vloer)verwarming of grote radiatoren, en wil je in één keer volledig van het gas af? Dan kan een volledig elektrische lucht-water warmtepomp interessanter zijn, ondanks de hogere aanschafkosten.",
          "Twijfel je, of is je woning nog niet volledig geïsoleerd? Dan is een hybride warmtepomp vaak de verstandigste keuze: je profiteert direct van de besparing, zonder dat je voor verrassingen komt te staan op de koudste dagen van het jaar.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontdek wat bij jouw woning past",
        description:
          "Onze gratis keuzehulp vergelijkt hybride en volledig elektrische warmtepompen voor jouw specifieke situatie.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De hybride warmtepomp blijft in 2026 een van de meest praktische manieren om te beginnen met verduurzamen: lage kosten, snelle installatie, directe besparing en een vertrouwd cv-ketel-vangnet voor de koudste dagen. Voor veel Nederlandse woningen — zeker tussenwoningen en woningen die nog niet volledig zijn geïsoleerd — is het een uitstekende eerste stap. Benieuwd of een hybride warmtepomp ook bij jouw woning past, en wat de geschatte kosten, subsidie en besparing voor jou zijn? Vul de gratis keuzehulp in en ontvang direct een persoonlijk advies.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-tussenwoning-geschikt",
    title: "Warmtepomp in een Tussenwoning: Alles wat je moet weten (2026)",
    description:
      "De tussenwoning is het meest voorkomende woningtype in Nederland. Alles over welk type warmtepomp het beste past, wat het kost, en waar je op moet letten.",
    publishedAt: "2026-06-17",
    intro:
      "De tussenwoning is veruit het meest voorkomende woningtype in Nederland, en dat zie je terug in de vragen die we krijgen: 'past een warmtepomp wel bij mijn tussenwoning?' Het korte antwoord is: in vrijwel alle gevallen wel. In dit artikel lopen we door wat er allemaal komt kijken bij het plaatsen van een warmtepomp in een tussenwoning.",
    sections: [
      {
        type: "text",
        heading: "Waarom tussenwoningen vaak juist heel geschikt zijn",
        paragraphs: [
          "Een tussenwoning heeft een belangrijk voordeel ten opzichte van bijvoorbeeld een vrijstaande woning: er is minder buitenmuuroppervlak waardoor warmte kan ontsnappen. Doordat je woning aan twee kanten grenst aan buurwoningen, verlies je relatief minder warmte dan een hoekwoning of vrijstaande woning van vergelijkbare grootte.",
          "Dit betekent dat een tussenwoning vaak met een kleiner — en dus goedkoper — vermogen aan warmtepomp toekan dan een vrijstaande woning. Tegelijkertijd is de warmtevraag vaak voorspelbaarder, wat het voor installateurs eenvoudiger maakt om de juiste warmtepomp te dimensioneren.",
          "Een veelgehoorde zorg is de buitenunit: waar zet je die neer in een rij aaneengesloten woningen? In de praktijk is hier vrijwel altijd een oplossing voor, bijvoorbeeld in de achtertuin, naast de woning, of — bij compactere modellen — zelfs op een plat dak. Een goede installateur kijkt hier specifiek naar tijdens de opname.",
        ],
      },
      {
        type: "text",
        heading: "Welk type warmtepomp past het beste bij een tussenwoning?",
        paragraphs: [
          "Voor de gemiddelde tussenwoning van rond de 90 tot 120 m² is een hybride warmtepomp vaak de meest gekozen optie, zeker als de woning nog geen optimale isolatie heeft of als de radiatoren niet recent zijn vervangen. De hybride warmtepomp werkt samen met de bestaande cv-ketel en levert al snel een flinke gasbesparing op, zonder grote verbouwing.",
          "Is jouw tussenwoning al goed geïsoleerd — denk aan dubbel glas, dak- en spouwmuurisolatie, en bij voorkeur (deels) vloerverwarming of grotere radiatoren — dan is een volledig elektrische lucht-water warmtepomp vaak ook goed haalbaar. Je gaat dan helemaal van het gas af, wat op de lange termijn de grootste besparing en CO2-reductie oplevert.",
          "Een bodem-water warmtepomp is voor de meeste tussenwoningen minder voor de hand liggend, simpelweg omdat een bodemlus in de tuin van een tussenwoning vaak lastig te realiseren is door de beperkte buitenruimte en de nabijheid van buurpercelen.",
        ],
      },
      {
        type: "link",
        href: "/warmtepompen",
        label: "Bekijk alle types warmtepompen uitgelegd",
        description:
          "Lees meer over de verschillen tussen lucht-water, hybride, bodem-water en lucht-lucht warmtepompen.",
      },
      {
        type: "text",
        heading: "Kosten en subsidie voor een tussenwoning",
        paragraphs: [
          "Voor een gemiddelde tussenwoning liggen de kosten van een hybride warmtepomp doorgaans tussen €3.500 en €7.000, inclusief installatie. Een volledig elektrische lucht-water warmtepomp kost voor een tussenwoning meestal tussen €6.000 en €12.000, waarbij het lagere vermogen dat vaak volstaat voor een tussenwoning de prijs gunstig kan beïnvloeden ten opzichte van grotere woningtypes.",
          "Via de ISDE-subsidie kun je voor een lucht-water warmtepomp tot €2.500 terugkrijgen, afhankelijk van het vermogen. Voor een hybride warmtepomp is het subsidiebedrag wisselend, maar ook hier kan een deel van de kosten worden terugverdiend.",
          "Reken je de aanschafkosten, subsidie en de maandelijkse besparing op je gasrekening bij elkaar op, dan kom je voor veel tussenwoningen op een terugverdientijd van ongeveer 4 tot 6 jaar voor een hybride warmtepomp. Dat maakt het een van de meest kosteneffectieve verduurzamingsmaatregelen voor dit woningtype.",
        ],
      },
      {
        type: "text",
        heading: "Praktische aandachtspunten bij een tussenwoning",
        paragraphs: [
          "Geluid is voor veel bewoners van tussenwoningen een belangrijk aandachtspunt, simpelweg omdat de buitenunit relatief dicht bij de buren kan staan. Moderne warmtepompen produceren tussen de 35 en 60 decibel — vergelijkbaar met een rustig lopende ventilator — maar de plaatsing maakt wel verschil. Een goede installateur houdt rekening met de afstand tot slaapkamerramen, zowel van jouw woning als die van de buren.",
          "Een ander punt is de leidingroute: bij een tussenwoning moet de leiding van de buitenunit naar de binnenunit vaak via een specifieke route lopen, bijvoorbeeld door een muurdoorvoer aan de achterzijde. Dit is meestal goed te doen, maar het is iets om tijdens de offerteaanvraag te bespreken.",
          "Tot slot: als je in een blok van meerdere tussenwoningen woont met een vergelijkbare bouwstijl, kan het de moeite waard zijn om samen met buren offertes aan te vragen. Sommige installateurs geven korting bij meerdere installaties in dezelfde straat of hetzelfde blok.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontvang een persoonlijk advies voor jouw tussenwoning",
        description:
          "Vul de gratis keuzehulp in en ontvang binnen een paar minuten een advies inclusief geschatte kosten, subsidie en besparing.",
      },
      {
        type: "text",
        heading: "Stappenplan: zo pak je het aan",
        paragraphs: [
          "Stap 1: breng je huidige situatie in kaart — woningtype en oppervlakte, bouwjaar, isolatieniveau en je huidige verwarmingssysteem. Dit bepaalt grotendeels welk type warmtepomp het beste past.",
          "Stap 2: vraag een gratis en vrijblijvend advies aan via onze keuzehulp. Op basis van je antwoorden krijg je een aanbeveling voor het type warmtepomp, een inschatting van de kosten, de ISDE-subsidie en je maandelijkse besparing.",
          "Stap 3: vraag offertes aan bij twee tot drie gecertificeerde installateurs in jouw regio. Vergelijk niet alleen de prijs, maar ook de levertijd, het merk, de garantievoorwaarden en de ervaring van de installateur met tussenwoningen.",
          "Stap 4: na installatie vraag je de ISDE-subsidie aan via mijn.rvo.nl, met de offerte, factuur en betaalbewijs binnen handbereik.",
        ],
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Een tussenwoning is in veel opzichten een ideaal startpunt voor een warmtepomp: het beperkte buitenmuuroppervlak zorgt voor een relatief lage warmtevraag, en zowel hybride als volledig elektrische warmtepompen zijn doorgaans goed te realiseren. Met de juiste voorbereiding — van het bepalen van het juiste type tot het vergelijken van offertes — is de overstap voor de meeste tussenwoningen binnen een paar jaar terugverdiend. Wil je weten wat dit voor jouw woning betekent? Start de gratis keuzehulp en ontvang direct een persoonlijk advies.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
