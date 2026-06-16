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
      "Een warmtepomp is een flinke investering, maar de overheid betaalt via de ISDE-regeling een aanzienlijk deel mee. In deze gids leg ik in gewone taal uit hoe de ISDE-subsidie voor warmtepompen in 2026 werkt, hoeveel je kunt krijgen, aan welke voorwaarden je moet voldoen en hoe je de aanvraag stap voor stap doet.",
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
          "Op mijn subsidiepagina vind je een overzicht van de indicatieve ISDE-bedragen per type warmtepomp.",
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
        label: "Ontvang een gratis indicatie van jouw situatie",
        description:
          "Beantwoord een paar vragen over je woning en ontvang een persoonlijke indicatie inclusief geschatte subsidie en besparing.",
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
          "De ISDE-subsidie maakt de overstap naar een warmtepomp voor veel huishoudens een stuk aantrekkelijker. Door op tijd te starten, een erkend installatiebedrijf te kiezen en je administratie op orde te hebben, verloopt de aanvraag meestal soepel. Twijfel je nog welk type warmtepomp het beste bij jouw woning past, of wil je weten op hoeveel subsidie jij ongeveer kunt rekenen? Mijn gratis keuzehulp geeft je binnen een paar minuten een persoonlijke indicatie, inclusief een inschatting van de kosten, subsidie en besparing.",
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
      "De hybride warmtepomp is al jaren de meest verkochte warmtepomp in Nederland, en niet zonder reden. In dit artikel leg ik uit wat een hybride warmtepomp is, voor wie hij geschikt is, wat de kosten en besparingen in de praktijk zijn, en waar je op moet letten voordat je de overstap maakt.",
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
          "In de praktijk zie ik dat veel jaren '30-woningen, naoorlogse rijtjeswoningen en tussenwoningen met standaard radiatoren goed uit de voeten kunnen met een hybride warmtepomp. De warmtepomp doet het meeste werk bij milde temperaturen — en in Nederland is dat het grootste deel van het stookseizoen — terwijl de ketel alleen bijspringt tijdens vorstperiodes.",
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
          "Wees realistisch over de terugverdientijd: een hybride warmtepomp op zichzelf verdient zich voor veel woningen pas in zo'n 12 tot 18 jaar terug, afhankelijk van de subsidie, de gasprijs en het isolatieniveau. Heb je eigen zonnepanelen, dan kan dat korter — zeker vanaf 2027, wanneer de salderingsregeling stopt en het zelf gebruiken van je zonnestroom (bijvoorbeeld voor je warmtepomp) waardevoller wordt.",
        ],
      },
      {
        type: "text",
        heading: "Voordelen en nadelen op een rij",
        paragraphs: [
          "De belangrijkste voordelen van een hybride warmtepomp zijn de lage instapkosten, de eenvoudige installatie (vaak in één dag), het behoud van je cv-ketel als back-up, en een directe besparing op je gasverbruik zonder dat je je woning eerst hoeft te verbouwen.",
          "Daar staan een paar nadelen tegenover. Je gebruikt nog steeds een beetje gas, dus je bent niet volledig 'van het gas af'. De besparing is doorgaans lager dan bij een volledig elektrische warmtepomp, en je hebt nog steeds twee systemen die onderhoud nodig hebben (de ketel en de warmtepomp).",
          "Voor de meeste huiseigenaren wegen de voordelen — vooral de lage instapdrempel en de directe gasbesparing — op tegen de nadelen, zeker als eerste stap richting een duurzamere woning.",
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
          "Mijn gratis keuzehulp vergelijkt hybride en volledig elektrische warmtepompen voor jouw specifieke situatie.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De hybride warmtepomp blijft in 2026 een van de meest praktische manieren om te beginnen met verduurzamen: lage kosten, snelle installatie, directe besparing en een vertrouwd cv-ketel-vangnet voor de koudste dagen. Voor veel Nederlandse woningen — zeker tussenwoningen en woningen die nog niet volledig zijn geïsoleerd — is het een uitstekende eerste stap. Benieuwd of een hybride warmtepomp ook bij jouw woning past, en wat de geschatte kosten, subsidie en besparing voor jou zijn? Vul de gratis keuzehulp in en ontvang direct een persoonlijke indicatie.",
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
      "De tussenwoning is veruit het meest voorkomende woningtype in Nederland, en dat zie je terug in de vragen die ik krijg: 'past een warmtepomp wel bij mijn tussenwoning?' Het korte antwoord is: in vrijwel alle gevallen wel. In dit artikel loop ik door wat er allemaal komt kijken bij het plaatsen van een warmtepomp in een tussenwoning.",
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
          "Reken je de aanschafkosten, subsidie en de netto besparing op je energierekening bij elkaar op, dan kom je voor veel tussenwoningen op een terugverdientijd van zo'n 12 tot 18 jaar voor de warmtepomp op zichzelf. Heb je eigen zonnepanelen, dan kan dat korter, zeker vanaf 2027 wanneer de salderingsregeling stopt. Het blijft een van de meest impactvolle verduurzamingsmaatregelen voor dit woningtype, maar wees realistisch over de terugverdientijd.",
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
        label: "Ontvang een persoonlijke indicatie voor jouw tussenwoning",
        description:
          "Vul de gratis keuzehulp in en ontvang binnen een paar minuten een indicatie inclusief geschatte kosten, subsidie en besparing.",
      },
      {
        type: "text",
        heading: "Stappenplan: zo pak je het aan",
        paragraphs: [
          "Stap 1: breng je huidige situatie in kaart — woningtype en oppervlakte, bouwjaar, isolatieniveau en je huidige verwarmingssysteem. Dit bepaalt grotendeels welk type warmtepomp het beste past.",
          "Stap 2: vraag een gratis en vrijblijvende indicatie aan via mijn keuzehulp. Op basis van je antwoorden krijg je een aanbeveling voor het type warmtepomp, een inschatting van de kosten, de ISDE-subsidie en je maandelijkse besparing.",
          "Stap 3: vraag offertes aan bij twee tot drie gecertificeerde installateurs in jouw regio. Vergelijk niet alleen de prijs, maar ook de levertijd, het merk, de garantievoorwaarden en de ervaring van de installateur met tussenwoningen.",
          "Stap 4: na installatie vraag je de ISDE-subsidie aan via mijn.rvo.nl, met de offerte, factuur en betaalbewijs binnen handbereik.",
        ],
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Een tussenwoning is in veel opzichten een ideaal startpunt voor een warmtepomp: het beperkte buitenmuuroppervlak zorgt voor een relatief lage warmtevraag, en zowel hybride als volledig elektrische warmtepompen zijn doorgaans goed te realiseren. Met de juiste voorbereiding — van het bepalen van het juiste type tot het vergelijken van offertes — verdient de overstap zich voor de meeste tussenwoningen op de lange termijn terug. Wil je weten wat dit voor jouw woning betekent? Start de gratis keuzehulp en ontvang direct een persoonlijke indicatie.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-kosten-2026-compleet-overzicht",
    title: "Warmtepomp Kosten 2026: Compleet Overzicht Aanschaf en Installatie",
    description:
      "Alle kosten van een warmtepomp op een rij: aanschaf, installatie, bijkomende kosten, subsidie en de invloed van je woning. Het complete kostenoverzicht voor 2026.",
    publishedAt: "2026-06-24",
    intro:
      "Wat kost een warmtepomp nu eigenlijk echt? Niet alleen het apparaat zelf, maar ook de installatie, eventuele aanpassingen aan je woning en de jaarlijkse kosten daarna. In dit artikel zet ik alle kostenposten voor 2026 op een rij, zodat je vooraf weet waar je rekening mee moet houden — en hoeveel je dankzij subsidie kunt terugkrijgen.",
    sections: [
      {
        type: "text",
        heading: "De drie meest voorkomende type warmtepompen en hun prijs",
        paragraphs: [
          "De prijs van een warmtepomp hangt sterk af van het type. Een hybride warmtepomp, die naast je bestaande cv-ketel werkt, kost gemiddeld €3.500 tot €7.000 inclusief installatie. Dit is voor veel huishoudens de meest toegankelijke instap, omdat je je verwarmingssysteem niet volledig hoeft te vervangen.",
          "Een volledig elektrische lucht-water warmtepomp, die je cv-ketel helemaal vervangt, kost doorgaans €6.000 tot €12.000 inclusief installatie. De prijs hangt af van het vermogen dat je woning nodig heeft, het merk en eventuele aanpassingen aan je afgiftesysteem (radiatoren of vloerverwarming).",
          "Een bodem-water warmtepomp, die warmte uit de grond haalt via een bodemlus, is de duurste optie: reken op €12.000 tot €20.000 inclusief installatie en boorwerkzaamheden. Daar staat tegenover dat dit type vaak het meest efficiënt is en het hele jaar door een stabiele temperatuur uit de bodem haalt.",
          "Deze bedragen zijn landelijke gemiddelden, gebaseerd op cijfers van Milieu Centraal, de Consumentenbond en RVO. De exacte prijs voor jouw situatie hangt af van je woning, het gewenste vermogen en de installateur die je kiest.",
        ],
      },
      {
        type: "text",
        heading: "Waar bestaan de installatiekosten precies uit?",
        paragraphs: [
          "De totaalprijs die je van een installateur krijgt, bestaat meestal uit een aantal onderdelen: het apparaat zelf (de buitenunit en eventueel een binnenunit of boilervat), het installatiemateriaal (leidingen, koudemiddel, elektra), het arbeidsloon van de monteurs, en eventuele bijkomende werkzaamheden.",
          "Bij een hybride warmtepomp is de installatie vaak in één dag klaar, omdat de bestaande cv-ketel en radiatoren blijven staan. Bij een volledig elektrische warmtepomp kan de installatie meerdere dagen duren, zeker als ook de radiatoren vervangen moeten worden door grotere exemplaren of als er (deels) vloerverwarming wordt aangelegd.",
          "Een ander kostenonderdeel waar mensen vaak aan voorbijgaan: een nieuwe groep in de meterkast. Een warmtepomp heeft relatief veel stroom nodig, en niet elke meterkast heeft hier standaard ruimte voor. Een elektricien moet hier soms apart voor langskomen, wat een paar honderd euro kan kosten.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk het volledige kostenoverzicht per type",
        description:
          "Vergelijk de kosten van hybride, lucht-water en bodem-water warmtepompen inclusief subsidie en besparing.",
      },
      {
        type: "text",
        heading: "Bijkomende kosten waar je rekening mee moet houden",
        paragraphs: [
          "Naast de aanschaf en installatie zijn er een paar kostenposten die vaak vergeten worden. Allereerst: isolatie. Voor een volledig elektrische warmtepomp is het belangrijk dat je woning goed geïsoleerd is, anders loopt je energierekening alsnog op. Als je woning nog niet goed geïsoleerd is, kan dit een investering van enkele duizenden euro's betekenen — al kom je daar vaak ook voor in aanmerking voor subsidie.",
          "Ten tweede: onderhoud. Een warmtepomp heeft, net als een cv-ketel, periodiek onderhoud nodig om optimaal te blijven functioneren. Reken op een onderhoudscontract van ongeveer €100 tot €200 per jaar, afhankelijk van de leverancier.",
          "Ten derde: de buitenunit. Bij sommige woningen is een geluiddempende ombouw of een speciale plaatsing nodig, bijvoorbeeld vanwege regelgeving rond geluid bij de buren. Dit is meestal een relatief kleine kostenpost, maar telt wel mee in de totale prijs.",
          "Tot slot: als je een bodem-water warmtepomp overweegt, moet er een vergunning worden aangevraagd voor de bodemlus. De kosten hiervoor verschillen per gemeente, maar een goede installateur regelt dit doorgaans voor je en neemt het mee in de offerte.",
        ],
      },
      {
        type: "text",
        heading: "Hoeveel subsidie kun je aftrekken van de aanschafprijs?",
        paragraphs: [
          "Via de ISDE-subsidie kun je een vast bedrag terugkrijgen, afhankelijk van het type en vermogen van je warmtepomp. Voor een lucht-water warmtepomp is dit doorgaans tot €2.500. Voor een hybride warmtepomp ligt het bedrag meestal lager, en voor een bodem-water warmtepomp vaak hoger, omdat deze installaties duurder zijn.",
          "Reken je de subsidie mee, dan daalt de netto-investering voor een gemiddelde lucht-water warmtepomp van bijvoorbeeld €9.000 naar ongeveer €6.500. Voor een hybride warmtepomp van €5.000 kan de netto-investering uitkomen op ongeveer €4.000 tot €4.500, afhankelijk van het exacte subsidiebedrag voor jouw installatie.",
          "Let op: de ISDE-bedragen worden jaarlijks vastgesteld door RVO en kunnen wijzigen. Controleer voor je definitieve berekening altijd de actuele bedragen.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Check hoeveel ISDE-subsidie jij kunt krijgen",
        description:
          "Bekijk de actuele subsidiebedragen per type warmtepomp en lees hoe je de aanvraag doet.",
      },
      {
        type: "text",
        heading: "Wat levert het op? Terugverdientijd en maandlasten",
        paragraphs: [
          "De terugverdientijd van een warmtepomp hangt af van de aanschafprijs, de subsidie, je huidige energierekening en hoeveel je netto bespaart. Wees realistisch: een warmtepomp op zichzelf — hybride of volledig elektrisch — verdient zich voor veel woningen pas in zo'n 15 tot 20 jaar terug. Dat wordt korter bij een hoger gasverbruik, met een hybride als tussenstap, of als je cv-ketel toch al aan vervanging toe was. Zonnepanelen verkorten dat nauwelijks: die wekken vooral 's zomers op, terwijl een warmtepomp voor verwarming in de winter draait. Bij een volledig elektrische warmtepomp staat tegenover de langere terugverdientijd dat je helemaal van het gas af bent en minder afhankelijk bent van gasprijsschommelingen.",
          "Qua maandlasten zien veel huishoudens dat hun gasrekening flink daalt, terwijl de stroomrekening iets stijgt. Per saldo houden de meeste mensen een netto besparing over, zeker met de huidige energieprijzen. Hoeveel dat precies is, hangt sterk af van je woning, je stookgedrag en het elektriciteitscontract dat je hebt.",
          "Wil je niet zelf gaan rekenen, maar gewoon weten wat een warmtepomp voor jouw specifieke woning ongeveer gaat kosten en opleveren? Mijn gratis keuzehulp geeft je in een paar minuten een persoonlijk overzicht van de kosten, subsidie en geschatte besparing.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Bereken de kosten voor jouw woning",
        description:
          "Vul een paar vragen over je woning in en ontvang direct een persoonlijke kosteninschatting.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De kosten van een warmtepomp variëren flink, van zo'n €3.500 voor een hybride warmtepomp tot €20.000 voor een bodem-water systeem. Door rekening te houden met bijkomende kosten zoals isolatie, een extra groep in de meterkast en onderhoud, voorkom je verrassingen achteraf. Met de ISDE-subsidie en de besparing op je energierekening verdien je de investering bij de meeste woningen binnen enkele jaren terug. Twijfel je welk type het beste bij jouw woning past en wat dat ongeveer gaat kosten? Start de gratis keuzehulp voor een persoonlijke indicatie.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-subsidie-aanvragen-stap-voor-stap",
    title: "ISDE Subsidie Aanvragen in 2026: Stap voor Stap Uitgelegd",
    description:
      "Een praktische stap-voor-stap handleiding voor het aanvragen van de ISDE-subsidie voor je warmtepomp in 2026, inclusief documenten, deadlines en veelgemaakte fouten.",
    publishedAt: "2026-06-26",
    intro:
      "De ISDE-subsidie kan honderden tot duizenden euro's schelen op de aanschaf van je warmtepomp, maar de aanvraag voelt voor veel mensen onnodig ingewikkeld. In dit artikel loop ik stap voor stap door het hele proces: van de voorbereiding tot het moment dat het geld op je rekening staat.",
    sections: [
      {
        type: "text",
        heading: "Voordat je begint: wat heb je nodig?",
        paragraphs: [
          "Voor je aan de aanvraag begint, is het handig om een aantal zaken alvast te verzamelen. Je hebt een DigiD nodig om in te loggen op mijn.rvo.nl, je rekeningnummer (IBAN) waarop de subsidie gestort moet worden, en straks de offerte, factuur en betaalbewijs van je warmtepomp.",
          "Het is belangrijk om te weten dat je de aanvraag pas kunt indienen ná de installatie en betaling van je warmtepomp — niet vooraf. De offerte heb je wel al vóór de installatie nodig, dus bewaar deze goed zodra je hem ontvangt van je installateur.",
        ],
      },
      {
        type: "text",
        heading: "Stap 1: kies een erkend installatiebedrijf en vraag een offerte aan",
        paragraphs: [
          "De eerste stap is het kiezen van een installateur. Voor de ISDE-subsidie is het belangrijk dat de installatie wordt uitgevoerd door een vakbekwaam installatiebedrijf — dit is niet alleen een subsidievoorwaarde, maar ook je garantie voor een correct afgestelde warmtepomp.",
          "Vraag bij voorkeur offertes aan bij twee tot drie installateurs, zodat je kunt vergelijken op prijs, levertijd en het type warmtepomp dat geadviseerd wordt. Let erop dat de offerte duidelijk het merk, type, vermogen en de COP-waarde (de efficiëntie) van de warmtepomp vermeldt — deze gegevens heb je later nodig bij je aanvraag.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Vind een installateur en vergelijk offertes",
        description:
          "Vul de gratis keuzehulp in en plan een vrijblijvend adviesgesprek met installateurs bij jou in de buurt.",
      },
      {
        type: "text",
        heading: "Stap 2: laat de warmtepomp installeren en bewaar alle documenten",
        paragraphs: [
          "Na akkoord op de offerte plant de installateur de installatie in. Tijdens of na de installatie ontvang je een factuur. Controleer deze goed: staat het type warmtepomp, het vermogen en de COP-waarde correct vermeld? Klopt het bedrag met de offerte? Eventuele extra werkzaamheden, zoals een nieuwe groep in de meterkast, mogen vaak ook worden meegenomen in de aanvraag, dus zorg dat deze ook duidelijk op de factuur staan.",
          "Betaal de factuur en bewaar het betaalbewijs (bijvoorbeeld een bankafschrift of betalingsbevestiging). Zonder geldig betaalbewijs kan RVO je aanvraag afwijzen, dus dit is een document dat je niet mag missen.",
        ],
      },
      {
        type: "text",
        heading: "Stap 3: log in op mijn.rvo.nl en vul het aanvraagformulier in",
        paragraphs: [
          "Ga naar mijn.rvo.nl en log in met je DigiD. Kies de regeling 'ISDE' en vervolgens de categorie voor warmtepompen voor particuliere woningeigenaren. Het formulier vraagt om je persoonlijke gegevens, het adres waar de warmtepomp is geïnstalleerd, en gegevens over de installatie zelf, zoals het type, merk en vermogen.",
          "Vervolgens upload je de offerte, de factuur en het betaalbewijs als bijlagen. Zorg dat dit duidelijk leesbare scans of foto's zijn — onleesbare documenten zijn een veelvoorkomende reden voor vertraging.",
          "Controleer aan het einde van het formulier al je gegevens nog een keer voordat je de aanvraag definitief verstuurt. Na het indienen ontvang je een ontvangstbevestiging per e-mail.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Bekijk de actuele ISDE-bedragen per warmtepomp",
        description:
          "Zie hoeveel subsidie je kunt verwachten voor jouw type warmtepomp voordat je de aanvraag indient.",
      },
      {
        type: "text",
        heading: "Stap 4: wachten op de beoordeling en uitbetaling",
        paragraphs: [
          "Na het indienen beoordeelt RVO je aanvraag. Dit duurt meestal enkele weken, maar kan in drukke periodes (bijvoorbeeld vlak na de jaarwisseling, wanneer veel mensen tegelijk een aanvraag indienen) langer duren.",
          "Wordt je aanvraag goedgekeurd, dan ontvang je een toekenningsbrief en wordt het subsidiebedrag overgemaakt op het rekeningnummer dat je hebt opgegeven. Wordt je aanvraag afgewezen of wil RVO aanvullende informatie, dan ontvang je hierover bericht — vaak kun je in dat geval binnen een bepaalde termijn alsnog de ontbrekende documenten aanleveren.",
        ],
      },
      {
        type: "text",
        heading: "Veelgemaakte fouten en hoe je ze voorkomt",
        paragraphs: [
          "De meest voorkomende fout is een onvolledige of onduidelijke factuur, waarop bijvoorbeeld het vermogen van de warmtepomp ontbreekt. Vraag je installateur vooraf om te bevestigen dat de factuur alle benodigde technische gegevens bevat.",
          "Een andere fout is te lang wachten met de aanvraag. Hoewel je vaak 12 maanden de tijd hebt, kan het jaarlijkse subsidiebudget eerder op raken. Dien je aanvraag daarom in zodra je alle documenten compleet hebt.",
          "Tot slot: sommige mensen denken dat de installateur de subsidie automatisch voor hen aanvraagt. Dat is meestal niet het geval — de aanvraag en de verantwoordelijkheid daarvoor liggen bij jou als woningeigenaar, ook al kan een installateur je hier soms wel bij helpen.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk wat een warmtepomp kost ná aftrek van subsidie",
        description:
          "Zie hoe de ISDE-subsidie de netto-investering van jouw warmtepomp verlaagt.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De ISDE-aanvraag is geen ingewikkeld proces, zolang je de juiste documenten op het juiste moment verzamelt: een duidelijke offerte vooraf, en een complete factuur en betaalbewijs na installatie. Door je aanvraag op tijd in te dienen via mijn.rvo.nl, voorkom je dat je misloopt op subsidie. Wil je eerst weten welk type warmtepomp het beste bij jouw woning past en hoeveel subsidie je daarvoor ongeveer kunt verwachten? Start de gratis keuzehulp voor een persoonlijke indicatie.",
        ],
      },
    ],
  },
  {
    slug: "beste-warmtepomp-merken-2026",
    title: "Beste Warmtepomp Merken 2026: Daikin, Vaillant, Bosch Vergeleken",
    description:
      "Een eerlijke vergelijking van populaire warmtepompmerken in 2026: Daikin, Vaillant, Bosch en meer. Wat zijn de verschillen en waar moet je op letten bij je keuze?",
    publishedAt: "2026-06-29",
    intro:
      "Bij het kiezen van een warmtepomp kom je al snel een aantal bekende merknamen tegen: Daikin, Vaillant, Bosch, en nog een paar anderen. Maar wat zijn nu eigenlijk de verschillen, en hoe belangrijk is het merk eigenlijk voor jouw uiteindelijke keuze? In dit artikel zet ik de meest gekozen merken op een rij en geef ik praktische tips voor het maken van je keuze.",
    sections: [
      {
        type: "text",
        heading: "Hoe belangrijk is het merk eigenlijk?",
        paragraphs: [
          "Voordat ik de merken bespreek, eerst een belangrijke nuance: het merk is niet het enige — en vaak ook niet het belangrijkste — onderdeel van een goede warmtepompinstallatie. Minstens zo belangrijk is of het vermogen van de warmtepomp goed is afgestemd op jouw woning, en of de installateur de installatie vakkundig uitvoert en goed afstelt.",
          "Een topmerk dat verkeerd is gedimensioneerd of slecht is afgesteld, presteert in de praktijk vaak slechter dan een minder bekend merk dat wél goed is geïnstalleerd. Toch hebben de grote merken wel degelijk verschillen in geluidsniveau, efficiëntie (uitgedrukt in COP- en SCOP-waarden), garantievoorwaarden en de beschikbaarheid van onderdelen en servicemonteurs.",
        ],
      },
      {
        type: "text",
        heading: "Daikin",
        paragraphs: [
          "Daikin is een van de bekendste namen op de Nederlandse markt en heeft een breed assortiment, van hybride warmtepompen tot volledig elektrische lucht-water systemen. Het merk staat bekend om een relatief stille werking en een ruim landelijk netwerk van installateurs en servicemonteurs, wat handig is mocht er ooit onderhoud nodig zijn.",
          "Daikin-warmtepompen zitten qua prijs vaak in het middensegment tot iets hoger. Voor mensen die zekerheid willen over de beschikbaarheid van onderdelen en service in de toekomst, is dit een belangrijk voordeel.",
        ],
      },
      {
        type: "text",
        heading: "Vaillant",
        paragraphs: [
          "Vaillant is van oudsher vooral bekend van cv-ketels, maar heeft inmiddels ook een sterk aanbod aan warmtepompen, waaronder hybride modellen die goed samenwerken met bestaande Vaillant-ketels. Dit kan praktisch zijn als je al een Vaillant-ketel hebt en op zoek bent naar een hybride oplossing.",
          "Vaillant-warmtepompen worden over het algemeen goed beoordeeld op betrouwbaarheid en hebben vaak een ruime garantietermijn op onderdelen, mits het onderhoud wordt uitgevoerd door een erkende installateur.",
        ],
      },
      {
        type: "text",
        heading: "Bosch",
        paragraphs: [
          "Bosch biedt een breed scala aan warmtepompen, van compacte hybride modellen tot grotere lucht-water systemen voor volledig elektrische verwarming. Het merk staat bekend om een goede prijs-kwaliteitverhouding en een relatief eenvoudige bediening via een app.",
          "Net als Daikin en Vaillant heeft Bosch een uitgebreid netwerk van installateurs in Nederland, wat zorgt voor een goede beschikbaarheid van onderdelen en service.",
        ],
      },
      {
        type: "link",
        href: "/warmtepompen",
        label: "Lees meer over de verschillende types warmtepompen",
        description:
          "Voordat je een merk kiest, is het slim om eerst te weten welk type warmtepomp het beste bij jouw woning past.",
      },
      {
        type: "text",
        heading: "Andere merken die je tegenkomt",
        paragraphs: [
          "Naast Daikin, Vaillant en Bosch kom je in Nederland ook regelmatig merken tegen zoals Mitsubishi Electric, Nibe, Itho Daalderop, Remeha en Toshiba. Deze merken bieden vergelijkbare types warmtepompen en zitten vaak in een vergelijkbaar prijssegment, met net iets andere accenten — bijvoorbeeld op geluidsniveau, ontwerp van de buitenunit, of specifieke functies in de bijbehorende app.",
          "Voor de meeste huishoudens geldt: de verschillen tussen deze A-merken zijn in de praktijk klein vergeleken met het effect van een goed afgestelde installatie. Het is daarom verstandiger om in eerste instantie te kiezen voor een installateur die je vertrouwt en die ervaring heeft met het type woning dat jij hebt, en pas daarna te kijken welk merk die installateur aanbeveelt.",
        ],
      },
      {
        type: "text",
        heading: "Waar moet je op letten bij het vergelijken van merken en offertes?",
        paragraphs: [
          "Kijk allereerst naar de SCOP-waarde (Seasonal Coefficient of Performance) — dit geeft aan hoe efficiënt de warmtepomp het hele jaar door werkt. Hoe hoger de SCOP, hoe minder stroom de warmtepomp nodig heeft om dezelfde hoeveelheid warmte te leveren.",
          "Let ook op het geluidsniveau van de buitenunit, vooral als deze dicht bij je eigen slaapkamer of die van de buren komt te staan. Dit wordt meestal uitgedrukt in decibel (dB) en kan per merk en model verschillen.",
          "Vraag daarnaast naar de garantietermijn op onderdelen en arbeid, en of er in jouw regio voldoende servicemonteurs beschikbaar zijn voor het merk dat geadviseerd wordt. Tot slot: vergelijk niet alleen de aanschafprijs, maar ook de geschatte energiekosten op de lange termijn — een iets duurdere, efficiëntere warmtepomp kan zich op termijn terugbetalen.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontvang een indicatie zonder gebonden te zijn aan één merk",
        description:
          "Mijn keuzehulp is onafhankelijk van merk en installateur — je krijgt een indicatie die past bij jouw woning, niet bij een specifiek merk.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Daikin, Vaillant en Bosch zijn alledrie betrouwbare merken met een ruim aanbod aan warmtepompen en een goed servicenetwerk in Nederland — en hetzelfde geldt voor merken als Mitsubishi Electric, Nibe en Itho Daalderop. Het verschil tussen deze merken is voor de meeste woningen kleiner dan het verschil tussen een goed en een slecht uitgevoerde installatie. Kies daarom in eerste instantie een betrouwbare, gecertificeerde installateur, en laat die op basis van jouw woning een passend merk en model adviseren. Wil je weten welk type warmtepomp en welk vermogen bij jouw woning past? Start de gratis keuzehulp voor een persoonlijke indicatie.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-geschikt-voor-mijn-woning",
    title: "Is een Warmtepomp Geschikt voor Mijn Woning? De Complete Checklist",
    description:
      "Twijfel je of een warmtepomp geschikt is voor jouw woning? Deze complete checklist helpt je op basis van bouwjaar, isolatie, radiatoren en woningtype.",
    publishedAt: "2026-07-01",
    intro:
      "Een van de meest gestelde vragen die ik krijg is: 'is een warmtepomp wel geschikt voor mijn woning?' Het goede nieuws is dat voor vrijwel elke woning een passende oplossing bestaat — de vraag is vooral wélk type warmtepomp het beste past. Met deze checklist loop je zelf de belangrijkste punten na.",
    sections: [
      {
        type: "text",
        heading: "1. Wat is het bouwjaar van je woning?",
        paragraphs: [
          "Het bouwjaar van je woning zegt vaak iets over de standaard isolatie en het type verwarmingssysteem. Woningen van vóór de jaren '70 hebben doorgaans minder isolatie en kleinere radiatoren, terwijl woningen vanaf de jaren '90 en zeker nieuwbouw vaak al goed geïsoleerd zijn en soms al vloerverwarming hebben.",
          "Dit betekent niet dat een oudere woning ongeschikt is — het betekent vooral dat een hybride warmtepomp vaak een logischere eerste stap is voor oudere woningen, terwijl nieuwere woningen vaak direct geschikt zijn voor een volledig elektrische warmtepomp.",
        ],
      },
      {
        type: "text",
        heading: "2. Hoe is je woning geïsoleerd?",
        paragraphs: [
          "Isolatie is misschien wel de belangrijkste factor. Heeft je woning dubbel glas, dakisolatie, vloerisolatie en spouwmuurisolatie? Dan is de kans groot dat een volledig elektrische warmtepomp goed werkt, omdat je woning de warmte goed vasthoudt.",
          "Is je woning nog niet (volledig) geïsoleerd, dan raad ik vaak aan om eerst te kijken naar de meest voor de hand liggende isolatiemaatregelen — zoals dakisolatie of het vervangen van enkel glas — voordat je overstapt op een volledig elektrische warmtepomp. Een hybride warmtepomp kan in de tussentijd al wel voor een flinke besparing zorgen, zonder dat isolatie een vereiste is.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk de kosten per type warmtepomp",
        description:
          "Zie wat hybride, lucht-water en bodem-water warmtepompen kosten, inclusief subsidie.",
      },
      {
        type: "text",
        heading: "3. Welk type radiatoren of vloerverwarming heb je?",
        paragraphs: [
          "Volledig elektrische warmtepompen werken het meest efficiënt met een lage aanvoertemperatuur — dus met (deels) vloerverwarming of grote lage-temperatuur radiatoren. Heb je nog kleine, oude radiatoren uit de jaren '60-70, dan kunnen deze soms onvoldoende warmte afgeven bij de lagere temperaturen van een volledig elektrische warmtepomp.",
          "Dit is geen showstopper: vaak volstaat het om een aantal radiatoren te vervangen door grotere exemplaren, wat door een installateur tijdens de offerte wordt meegenomen. Of, als alternatief, kies je voor een hybride warmtepomp die ook bij hogere temperaturen goed functioneert.",
        ],
      },
      {
        type: "text",
        heading: "4. Welk woningtype heb je en hoeveel buitenruimte is er?",
        paragraphs: [
          "Bij een tussenwoning of appartement is er vaak beperkte ruimte voor een buitenunit, maar dit is bijna altijd op te lossen — denk aan plaatsing in de tuin, op een balkon of zelfs op een plat dak. Bij een vrijstaande woning of woning met veel grond is er bovendien de mogelijkheid om een bodem-water warmtepomp te overwegen, met een bodemlus in de tuin.",
          "Bij appartementen in een gestapeld gebouw (bijvoorbeeld een flat) ligt de situatie vaak anders: hier is een individuele warmtepomp niet altijd mogelijk of wenselijk, en wordt verduurzaming soms collectief geregeld via de VvE. Woon je in een dergelijk gebouw, dan is het verstandig om dit gezamenlijk met de VvE te bespreken.",
        ],
      },
      {
        type: "link",
        href: "/warmtepompen",
        label: "Welk type warmtepomp past bij jouw situatie?",
        description: "Lees de uitleg over hybride, lucht-water, bodem-water en lucht-lucht warmtepompen.",
      },
      {
        type: "text",
        heading: "5. Hoeveel stroom kan je meterkast aan?",
        paragraphs: [
          "Een warmtepomp gebruikt meer stroom dan een cv-ketel, en niet elke meterkast heeft hier standaard voldoende capaciteit voor. Vooral bij oudere woningen met een verouderde meterkast kan een extra groep nodig zijn.",
          "Dit is meestal eenvoudig op te lossen door een elektricien, maar het is wel een kostenpost om in je begroting mee te nemen. Een goede installateur checkt dit standaard tijdens de opname.",
        ],
      },
      {
        type: "text",
        heading: "6. Wat is je huidige energieverbruik en stookgedrag?",
        paragraphs: [
          "Tot slot speelt je huidige energieverbruik een rol bij het bepalen van het juiste vermogen van de warmtepomp. Een installateur kijkt hiervoor vaak naar je gasverbruik van de afgelopen jaren, het aantal vierkante meters dat verwarmd moet worden, en het aantal bewoners.",
          "Een te kleine warmtepomp zal op koude dagen niet voldoende warmte kunnen leveren, terwijl een te grote warmtepomp onnodig duur is in aanschaf en minder efficiënt kan werken. Dit is precies waarom een goede opname door een installateur zo belangrijk is.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Doe de gratis check voor jouw woning",
        description:
          "Beantwoord een paar vragen over je woning en ontvang direct een persoonlijke indicatie van welk type warmtepomp past.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Voor vrijwel elke woning bestaat een passende warmtepompoplossing — de vraag is niet zozeer óf, maar wélk type. Bouwjaar, isolatie, het type radiatoren, je woningtype en de capaciteit van je meterkast bepalen samen welk type warmtepomp het beste past en wat de eventuele bijkomende werkzaamheden zijn. Loop je deze checklist door en blijf je toch met vragen zitten? Vul de gratis keuzehulp in en ontvang binnen een paar minuten een persoonlijke indicatie, afgestemd op jouw woning.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-besparing-berekenen",
    title: "Hoeveel Bespaar je met een Warmtepomp? Bereken het Zelf (2026)",
    description:
      "Reken zelf uit hoeveel je kunt besparen met een warmtepomp: van gasverbruik en energieprijzen tot subsidie en terugverdientijd. Met praktische rekenvoorbeelden voor 2026.",
    publishedAt: "2026-07-03",
    intro:
      "Een warmtepomp kan flink besparen op je energierekening, maar hoeveel precies hangt af van jouw situatie. In dit artikel laat ik zien welke factoren de besparing bepalen en geef ik praktische rekenvoorbeelden, zodat je voor jouw eigen woning een goede inschatting kunt maken.",
    sections: [
      {
        type: "text",
        heading: "Welke factoren bepalen je besparing?",
        paragraphs: [
          "De besparing die een warmtepomp oplevert, hangt af van een aantal factoren: je huidige gasverbruik, het type warmtepomp dat je kiest, de actuele gas- en stroomprijzen, en de isolatiestaat van je woning.",
          "In grote lijnen geldt: hoe hoger je huidige gasverbruik, hoe groter het besparingspotentieel. Een woning die nu 1.500 m³ gas per jaar verbruikt, heeft logischerwijs meer te besparen dan een woning die al maar 800 m³ verbruikt.",
        ],
      },
      {
        type: "text",
        heading: "Stap 1: bepaal je huidige gasverbruik en -kosten",
        paragraphs: [
          "Kijk op je laatste jaarafrekening van je energieleverancier hoeveel m³ gas je het afgelopen jaar hebt verbruikt, en wat de gasprijs per m³ was. Vermenigvuldig deze twee getallen om je jaarlijkse gaskosten te bepalen.",
          "Bijvoorbeeld: bij een verbruik van 1.200 m³ en een gasprijs van €1,30 per m³ kom je uit op €1.560 aan jaarlijkse gaskosten. Dit is je startpunt voor de berekening.",
        ],
      },
      {
        type: "text",
        heading: "Stap 2: schat de besparing met een hybride warmtepomp",
        paragraphs: [
          "Een hybride warmtepomp neemt typisch 70 tot 90% van de verwarmingsvraag over, wat in de praktijk vaak neerkomt op een gasbesparing van 30 tot 50%. Bij mijn voorbeeld van €1.560 aan gaskosten zou dit een besparing van ongeveer €470 tot €780 per jaar betekenen op je gasrekening.",
          "Daar staat een stijging van je stroomverbruik tegenover, omdat de warmtepomp elektriciteit gebruikt. Voor een gemiddelde hybride warmtepomp komt dit neer op extra stroomkosten van ongeveer €200 tot €400 per jaar, afhankelijk van je stroomtarief en de hoeveelheid warmte die de warmtepomp levert.",
          "Per saldo kom je voor een hybride warmtepomp dan vaak uit op een netto besparing van €200 tot €450 per jaar, bovenop het comfort van een modern verwarmingssysteem.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk de aanschafkosten van een hybride warmtepomp",
        description:
          "Zie wat een hybride warmtepomp kost inclusief installatie en ISDE-subsidie.",
      },
      {
        type: "text",
        heading: "Stap 3: schat de besparing met een volledig elektrische warmtepomp",
        paragraphs: [
          "Bij een volledig elektrische lucht-water warmtepomp ga je (vrijwel) helemaal van het gas af. In mijn voorbeeld zou je dus de volledige €1.560 aan gaskosten besparen — minus een klein bedrag voor eventueel resterend gasverbruik, bijvoorbeeld voor koken.",
          "Daar staat een grotere stijging van je stroomverbruik tegenover dan bij een hybride warmtepomp, omdat de warmtepomp nu al jouw verwarming voor zijn rekening neemt. Voor een gemiddelde woning kan dit neerkomen op extra stroomkosten van ongeveer €700 tot €1.100 per jaar.",
          "Per saldo houd je dan vaak een netto besparing over van €400 tot €700 per jaar, afhankelijk van je woning, isolatie en stroomtarief — plus dat je niet langer afhankelijk bent van de gasprijs.",
        ],
      },
      {
        type: "text",
        heading: "Stap 4: reken de subsidie en terugverdientijd uit",
        paragraphs: [
          "Trek van de aanschafprijs eerst de ISDE-subsidie af om je netto-investering te bepalen. Voor een hybride warmtepomp van bijvoorbeeld €5.000 met een subsidie van €1.000 kom je op een netto-investering van €4.000. Bij een netto besparing van €300 per jaar is de terugverdientijd dan ongeveer 13 jaar — maar let op: dit is exclusief de stijgende gasprijzen, die de besparing in de praktijk vaak groter maken naarmate de jaren vorderen.",
          "Voor een volledig elektrische warmtepomp van bijvoorbeeld €9.000 met €2.500 subsidie kom je op een netto-investering van €6.500. Bij een netto besparing van €550 per jaar kom je dan uit op een terugverdientijd van ongeveer 12 jaar.",
          "Deze berekeningen zijn voorbeelden — de werkelijke cijfers voor jouw woning kunnen hoger of lager uitvallen, afhankelijk van je verbruik, isolatie en de energieprijzen op het moment van aanschaf.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Bekijk de actuele ISDE-subsidiebedragen",
        description: "Zie hoeveel subsidie jij kunt krijgen en hoe dit je terugverdientijd verkort.",
      },
      {
        type: "text",
        heading: "Wat de berekening niet meeneemt, maar wel meetelt",
        paragraphs: [
          "Naast de directe besparing op je energierekening zijn er een paar zaken die niet altijd in een simpele berekening passen, maar wel waardevol zijn. Zo is een woning met een warmtepomp en een goed energielabel doorgaans meer waard bij verkoop. Daarnaast geeft een warmtepomp vaak meer comfort, bijvoorbeeld doordat hij ook kan koelen in de zomer (afhankelijk van het model).",
          "Ook onafhankelijkheid van gas speelt voor veel mensen een rol: met een volledig elektrische warmtepomp ben je niet meer kwetsbaar voor schommelingen in de gasprijs, wat voor sommige huishoudens net zo belangrijk is als de besparing zelf.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Bereken jouw persoonlijke besparing",
        description:
          "Vul de gratis keuzehulp in op basis van jouw woning en ontvang een berekening op maat.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De besparing van een warmtepomp hangt sterk af van je huidige gasverbruik, het gekozen type en de energieprijzen — maar voor de meeste woningen geldt dat een warmtepomp na aftrek van subsidie binnen 10 tot 15 jaar is terugverdiend, met daarna jarenlang voordeel. Wil je niet zelf alle berekeningen maken, maar gewoon een persoonlijke inschatting voor jouw woning? Vul de gratis keuzehulp in en ontvang direct een indicatie inclusief geschatte besparing en terugverdientijd.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-vloerverwarming-perfecte-combinatie",
    title: "Warmtepomp en Vloerverwarming: De Perfecte Combinatie (2026)",
    description:
      "Waarom warmtepompen en vloerverwarming zo goed samengaan, of het ook zonder kan, wat vloerverwarming aanleggen kost en wat dit betekent voor je terugverdientijd.",
    publishedAt: "2026-06-12",
    intro:
      "Warmtepomp en vloerverwarming worden vaak in één adem genoemd, en dat is niet zonder reden. Deze twee technieken versterken elkaar enorm: een warmtepomp werkt het meest efficiënt bij lage temperaturen, en vloerverwarming is daar precies op gebouwd. Maar betekent dit dat je eerst vloerverwarming moet aanleggen voordat een warmtepomp zin heeft? In dit artikel leg ik uit waarom deze combinatie zo goed werkt, wat je alternatieven zijn als je geen vloerverwarming hebt, wat het aanleggen ervan kost en hoe dit je terugverdientijd beïnvloedt.",
    sections: [
      {
        type: "text",
        heading: "Waarom warmtepomp en vloerverwarming zo goed samengaan",
        paragraphs: [
          "Het draait allemaal om de aanvoertemperatuur: de temperatuur van het water dat door je verwarmingssysteem stroomt. Een ouderwetse cv-ketel stookt het water op tot 60-70°C om je radiatoren snel warm te krijgen. Een warmtepomp kan dat ook, maar moet daar veel harder voor werken — en dat kost extra elektriciteit.",
          "Vloerverwarming heeft daarentegen maar 30-35°C nodig om een ruimte aangenaam warm te krijgen, omdat de warmte over een heel groot oppervlak (je hele vloer) wordt verspreid. Dat is precies het temperatuurbereik waarin een warmtepomp het allerefficiëntst draait.",
          "Het verschil is goed te zien aan de COP (Coefficient of Performance): bij een aanvoertemperatuur van 35°C kan een warmtepomp een COP van 4 tot 5 halen, wat betekent dat hij voor elke kWh stroom 4 tot 5 kWh aan warmte levert. Bij 55-60°C, zoals vaak nodig is voor radiatoren, zakt de COP naar 2,5 tot 3. Lagere aanvoertemperatuur betekent dus rechtstreeks een lagere energierekening.",
          "Daar komt nog bij dat vloerverwarming en warmtepomp ook qua comfort goed matchen: een vloer met veel massa (denk aan een betonnen dekvloer) houdt de warmte vast en geeft die geleidelijk af. Dat past goed bij een warmtepomp, die het liefst lang en rustig draait in plaats van kort en krachtig op- en afslaat zoals een cv-ketel.",
        ],
      },
      {
        type: "text",
        heading: "Kan een warmtepomp ook zonder vloerverwarming?",
        paragraphs: [
          "Ja, dat kan zeker — heel veel woningen in Nederland hebben een warmtepomp met gewoon de bestaande radiatoren, zonder dat er ooit vloerverwarming is aangelegd. De warmtepomp werkt dan met een iets hogere aanvoertemperatuur, waardoor de COP wat lager uitvalt, maar de besparing ten opzichte van een gasketel blijft meestal nog ruim aanwezig.",
          "Een populaire tussenoplossing is de LT-radiator (lage temperatuur radiator): deze is groter of heeft een ingebouwde ventilator, waardoor hij bij een lagere aanvoertemperatuur (rond de 45°C) toch genoeg warmte kan afgeven. Het vervangen van een paar radiatoren door LT-varianten is vaak veel goedkoper dan een hele vloer openbreken.",
          "Een andere optie is de hybride warmtepomp. Die werkt het grootste deel van het jaar op een lage temperatuur en laat de cv-ketel alleen op de allerkoudste dagen bijspringen, wanneer radiatoren echt hun volledige vermogen nodig hebben. Zo profiteer je meteen van een flinke gasbesparing, zonder dat je het hele verwarmingssysteem moet aanpassen.",
          "Is je woning goed geïsoleerd? Dan kan het zelfs zijn dat je bestaande radiatoren bij een lagere aanvoertemperatuur al voldoende warmte afgeven, simpelweg omdat je woning minder warmte verliest. In dat geval is vloerverwarming aanleggen een leuke extra, maar geen noodzaak.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Bekijk de kosten van een warmtepomp voor jouw situatie",
        description:
          "Zie de indicatieve aanschaf- en installatiekosten per type warmtepomp, met en zonder aanpassingen aan je verwarmingssysteem.",
      },
      {
        type: "text",
        heading: "Wat kost het om vloerverwarming aan te leggen?",
        paragraphs: [
          "De kosten van vloerverwarming hangen sterk af van of je bouwt of renoveert. In nieuwbouw is vloerverwarming relatief goedkoop om mee te nemen: reken op zo'n €30 tot €50 per m² extra, omdat de leidingen gewoon worden meegestort in de dekvloer die er toch al komt.",
          "Bij een bestaande woning ligt dat anders. Een traditionele vloerverwarming aanleggen betekent vaak dat de huidige vloer eruit moet, er een nieuwe dekvloer met leidingen in komt en daarna de afwerkvloer (tegels, laminaat) weer terug moet. Dat kost meestal €70 tot €100 per m², en je huis is een tijdje onbewoonbaar in de betreffende ruimtes.",
          "Een steeds populairder alternatief is renovatie- of lowbuild-vloerverwarming: dunne systemen die boven op de bestaande vloer worden gelegd, zonder slopen. Dit kost meestal €60 tot €90 per m² en is veel sneller te installeren, al gaat er wel een paar millimeter tot centimeter vloerhoogte mee verloren.",
          "Voor een gemiddelde woning van rond de 100 m² kom je bij een lowbuild-systeem dus uit op ongeveer €6.000 tot €9.000, en bij een traditionele vloerverwarming op €7.000 tot €10.000 of meer — bovenop de kosten van de warmtepomp zelf.",
        ],
      },
      {
        type: "text",
        heading: "Terugverdientijd: met en zonder vloerverwarming",
        paragraphs: [
          "Stel je hebt een gemiddelde woning met radiatoren en een gasverbruik van rond de 1.300 m³ per jaar. Met een warmtepomp op de bestaande radiatoren (COP rond de 3) bespaar je al een flink deel van je gasrekening, met een terugverdientijd van pakweg 12 tot 15 jaar — een prima investering.",
          "Leg je daar vloerverwarming bij aan, dan stijgt de COP naar 4 tot 4,5. Dat scheelt op jaarbasis vaak nog eens €100 tot €250 aan stroomkosten, afhankelijk van je verbruik en de stroomprijs. Maar daar staat een extra investering van €6.000 tot €10.000 tegenover voor het aanleggen van de vloerverwarming zelf.",
          "Reken je dat door, dan duurt het vaak 10 tot 15 jaar voordat alleen de extra investering in vloerverwarming is terugverdiend via de hogere efficiëntie — een stuk langer dan de terugverdientijd van de warmtepomp zelf. Vloerverwarming achteraf aanleggen puur voor de warmtepomp is dus financieel meestal geen quick win.",
          "Het verhaal verandert helemaal als je toch al aan het renoveren of verbouwen bent, of als je sowieso een nieuwe vloer of dekvloer overweegt. Dan zijn de meerkosten van vloerverwarming veel lager (vaak alleen de leidingen en aansluiting), en wordt de combinatie met een warmtepomp wél heel aantrekkelijk — zowel financieel als qua comfort.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontvang een persoonlijke warmtepomp-indicatie",
        description:
          "Vul de gratis keuzehulp in en ontdek welk type warmtepomp past bij jouw woning en verwarmingssysteem, inclusief geschatte besparing.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Warmtepomp en vloerverwarming zijn een ijzersterke combinatie omdat ze allebei draaien op een lage aanvoertemperatuur, wat de efficiëntie van de warmtepomp flink verhoogt. Maar een warmtepomp werkt ook prima met bestaande radiatoren of LT-radiatoren, en vloerverwarming achteraf aanleggen is puur voor de besparing meestal niet de snelste investering. Ben je toch aan het renoveren, dan is de combinatie wel een no-brainer. Twijfel je wat het beste bij jouw woning past? Vul de gratis keuzehulp in en ontvang een indicatie op maat.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-zonnepanelen-besparing-berekenen",
    title: "Warmtepomp + Zonnepanelen: Hoe Veel (en Weinig) Ze Samen Doen (2026)",
    description:
      "Verlagen zonnepanelen echt de kosten van je warmtepomp? Ik leg eerlijk uit waarom dat tegenvalt door de seizoensmismatch, wat het einde van de salderingsregeling per 2027 betekent, en hoe je panelen en warmtepomp wél slim combineert.",
    publishedAt: "2026-06-15",
    intro:
      "Een warmtepomp draait op stroom, en zonnepanelen wekken stroom op — dus die twee versterken elkaar perfect, toch? Dat wordt vaak beweerd, maar het ligt genuanceerder. Voor de verwarming verlagen zonnepanelen de kosten van je warmtepomp namelijk maar beperkt, en met het einde van de salderingsregeling per 2027 verandert er nog meer. In dit artikel leg ik eerlijk uit hoe het echt zit — en hoe je panelen en warmtepomp wél slim combineert.",
    sections: [
      {
        type: "text",
        heading: "De aanname die vaak misgaat",
        paragraphs: [
          "Een warmtepomp vervangt (een deel van) je gasverbruik door elektriciteit. Dat is op zichzelf al een besparing, omdat elektrisch verwarmen via een warmtepomp veel efficiënter is dan stoken op gas. Maar het betekent ook dat je stroomverbruik flink toeneemt — een gemiddelde warmtepomp gebruikt ongeveer 3.500 kWh per jaar.",
          "De gangbare redenering is dan: zet er zonnepanelen op, en die opgewekte stroom voedt je warmtepomp. Op een jaarrekening lijkt dat te kloppen. Maar er zit een belangrijke kink in: je panelen wekken het meeste op in de zomer, terwijl je warmtepomp voor verwarming juist in de winter draait — precies wanneer je panelen weinig opleveren. Die twee vallen dus grotendeels niet samen.",
          "Het gevolg: de stroom waarmee je in de winter verwarmt, komt grotendeels gewoon van het net. Zonnepanelen verlagen de kosten van je warmtepomp daardoor maar beperkt. Dat maakt panelen geen slechte investering — ze besparen op je totale stroomrekening — maar reken niet op een veel kortere terugverdientijd van je warmtepomp dankzij die panelen.",
        ],
      },
      {
        type: "text",
        heading: "Hoeveel zonnepanelen heb je nodig voor je warmtepomp?",
        paragraphs: [
          "Een gemiddeld modern zonnepaneel heeft een vermogen van ongeveer 400 Wp (wattpiek) en levert in Nederland zo'n 350 kWh per jaar op. Een gemiddelde warmtepomp verbruikt, zoals genoemd, ongeveer 3.500 kWh per jaar.",
          "Reken je dat door, dan zou je met 10 zonnepanelen (10 × 350 kWh = 3.500 kWh) op jaarbasis ongeveer net zoveel stroom opwekken als je warmtepomp verbruikt. Op papier dekken 10 panelen dus zo'n 100% van het stroomverbruik van je warmtepomp.",
          "Let op: dit is een jaarbasis-berekening. In de praktijk wekken je zonnepanelen het meeste op in de zomer, terwijl je warmtepomp vooral in de winter draait — dus je gebruikt niet letterlijk elke opgewekte kWh direct voor je warmtepomp. Toch is de jaarrekensom een nuttige en gangbare manier om de besparing in te schatten, zeker zolang saldering nog bestaat (zie verder in dit artikel).",
          "Heb je minder dan 10 panelen, dan dek je een proportioneel kleiner deel: 6 panelen (2.100 kWh) dekken bijvoorbeeld ongeveer 60% van het verbruik van je warmtepomp. Heb je meer dan 10 panelen, dan gaat het overschot naar de rest van je huishouden of het net.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Check de ISDE-subsidie voor jouw warmtepomp",
        description:
          "Naast de besparing via zonnepanelen kun je ook subsidie krijgen op de warmtepomp zelf. Bekijk de actuele bedragen.",
      },
      {
        type: "text",
        heading: "Rekenvoorbeeld: waarom de jaarrekensom misleidt",
        paragraphs: [
          "Laten we het concreet maken. Stel: je hebt 10 zonnepanelen die samen 3.500 kWh per jaar opwekken, en een warmtepomp die 3.500 kWh per jaar verbruikt. Op papier dekt je opwek dus 100% van je warmtepompverbruik.",
          "De verleiding is om te zeggen: bij €0,32 per kWh 'wegstreep' je dan €1.120 aan warmtepompstroom per jaar. Maar dat klopt niet, want het moment telt. Je warmtepomp verbruikt het grootste deel van die 3.500 kWh in de wintermaanden om je huis te verwarmen, terwijl je panelen dan maar een fractie van hun jaaropbrengst leveren. De zomerse opwek valt grotendeels buiten je verwarmingsseizoen.",
          "In de praktijk gebruik je dus maar een deel van je eigen zonnestroom direct voor de verwarming; de rest van de winterstroom koop je gewoon van het net, en je zomerse overschot lever je terug. Zolang salderen nog bestaat valt dat verschil weg op je jaarrekening, maar dat verandert per 2027 (zie verderop).",
          "De eerlijke conclusie: zonnepanelen verlagen je totale stroomrekening, maar ze verlagen de kosten van je warmtepomp-verwarming maar beperkt. Beoordeel je warmtepomp en je zonnepanelen daarom als twee losse investeringen die elk op zichzelf de moeite waard kunnen zijn — niet als een duo dat elkaars terugverdientijd halveert.",
        ],
      },
      {
        type: "text",
        heading: "Terugverdientijd: reken de warmtepomp op zichzelf",
        paragraphs: [
          "De terugverdientijd van je warmtepomp bereken je als: (kosten warmtepomp na subsidie) ÷ (jaarlijkse besparing op je energierekening). Voor de meeste woningen komt een warmtepomp daarmee op zo'n 15 tot 20 jaar uit. Dat wordt korter bij een hoger gasverbruik, met een hybride als tussenstap, of als je cv-ketel toch al aan vervanging toe was — dan telt alleen het prijsverschil mee.",
          "De verleiding is om de 'besparing dankzij zonnepanelen' bij die jaarlijkse besparing op te tellen, zodat de terugverdientijd ineens veel korter lijkt. Dat geeft een te rooskleurig beeld: zoals hierboven uitgelegd dekken je panelen je winterse verwarmingsstroom maar beperkt, omdat ze dan weinig opwekken.",
          "Reken de terugverdientijd van je warmtepomp daarom op zichzelf, zonder zonnestroom mee te tellen. Heb je ook zonnepanelen, beoordeel die dan als een aparte investering met een eigen terugverdientijd — gebaseerd op je totale stroomverbruik over het jaar, niet op dat van je warmtepomp specifiek.",
          "Zo voorkom je een onaangename verrassing en weet je waar je echt aan toe bent: twee verstandige stappen, elk met een eerlijk eigen plaatje.",
        ],
      },
      {
        type: "text",
        heading: "De salderingsregeling stopt per 2027 — wat betekent dat?",
        paragraphs: [
          "Tot nu toe geldt in Nederland de salderingsregeling: stroom die je zonnepanelen opwekken en die je niet direct zelf gebruikt, wordt teruggeleverd aan het net en 'wegstreept' tegen stroom die je later afneemt — tegen hetzelfde tarief. Daardoor maakt het op je jaarrekening nu nog weinig uit wanneer je je eigen stroom gebruikt.",
          "Dat verandert: de salderingsregeling stopt definitief per 1 januari 2027, en wordt in één keer beëindigd in plaats van geleidelijk afgebouwd. Dit is vastgelegd in de Wet beëindiging salderingsregeling. Voor stroom die je daarna teruglevert, krijg je een terugleververgoeding van minimaal 50% van het kale leveringstarief.",
          "Bovendien rekenen veel energieleveranciers nu al vaste terugleverkosten voor wie veel teruglevert. Terugleveren levert dus nu al weinig op. De hele beleidsrichting is om mensen te stimuleren hun zelf opgewekte stroom direct te gebruiken in plaats van terug te leveren.",
          "Betekent dat dat je warmtepomp na 2027 ineens veel voordeliger wordt met zonnepanelen? Nee. Het knelpunt blijft de seizoensmismatch: je warmtepomp verbruikt het meest in de winter, als je panelen weinig opwekken. Je kunt die winterstroom niet zomaar uit je zomerse opwek halen. Wachten op een '2027-voordeel' voor je warmtepomp heeft dus geen zin — beoordeel de warmtepomp op zijn eigen merites. Waar zelf verbruiken wél loont, lees je in de volgende sectie.",
        ],
      },
      {
        type: "text",
        heading: "Zo combineer je panelen en warmtepomp wél slim",
        paragraphs: [
          "Er zijn wél manieren om meer van je eigen zonnestroom te benutten — juist nu terugleveren steeds minder oplevert. Verschuif grootverbruikers als je wasmachine, droger, vaatwasser of het laden van je elektrische auto zoveel mogelijk naar het midden van de dag (ongeveer 11:00–15:00). Dan wekken je panelen het meest op en gebruik je je eigen stroom direct, in plaats van 'm voor weinig terug te leveren. Dat werkt vooral goed in het voorjaar en de zomer.",
          "Wil je panelen en warmtepomptechniek écht laten samenwerken, kijk dan naar een warmtepompboiler voor je warme water. Die draait het hele jaar door — óók 's zomers, als je panelen volop opwekken. Dáár vullen zonnepanelen en warmtepomptechniek elkaar wél aan, en een warmtepompboiler is bovendien flink goedkoper in gebruik dan warm water maken met gas.",
          "De eerlijke kanttekening blijft: voor de ruimteverwarming gaat dit niet op. Die draait in de winter, als je panelen weinig opleveren — daar moet je dus niet op rekenen.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Bereken wat een warmtepomp jou oplevert",
        description:
          "Vul de gratis keuzehulp in en ontvang direct een eerlijke berekening van het type, de kosten en de terugverdientijd voor jouw woning.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Een warmtepomp en zonnepanelen zijn allebei verstandige stappen naar een lagere energierekening, maar het zijn geen wondercombinatie die elkaars terugverdientijd halveert. De warmtepomp verlaagt je gasverbruik; de zonnepanelen verlagen je totale stroomrekening. Voor de verwarming vullen ze elkaar maar beperkt aan, doordat je panelen vooral in de zomer opwekken en je warmtepomp vooral in de winter verwarmt.",
          "Beoordeel beide dus op hun eigen merites, en reken niet op een '2027-voordeel' voor je warmtepomp door het einde van de salderingsregeling. Wil je weten wat een warmtepomp voor jouw woning oplevert? Vul de gratis keuzehulp in en ontvang een eerlijke indicatie van het type, de kosten en de terugverdientijd.",
        ],
      },
    ],
  },
  {
    slug: "beste-all-electric-warmtepomp-2026",
    title: "Beste All-Electric Warmtepomp 2026: Vergelijking, Voor- en Nadelen",
    description:
      "Welke all-electric warmtepomp past het best bij jouw woning in 2026? Ik vergelijk lucht-water en bodem-water systemen en bespreek kosten, subsidie, geschiktheid en de belangrijkste voor- en nadelen.",
    publishedAt: "2026-06-13",
    intro:
      "Een all-electric warmtepomp verwarmt je woning volledig zonder aardgas en is daarmee de meest vergaande stap in de verduurzaming van je huis. Maar welke variant past het beste bij jouw situatie, en waar moet je op letten voordat je de gasaansluiting de deur uit doet? In dit artikel vergelijk ik de belangrijkste all-electric warmtepompen voor 2026, met hun kosten, subsidie, geschiktheid en de voor- en nadelen op een rij.",
    sections: [
      {
        type: "text",
        heading: "Wat is een all-electric warmtepomp precies?",
        paragraphs: [
          "Een all-electric warmtepomp — ook wel een volledig elektrische warmtepomp genoemd — verzorgt in zijn eentje de volledige verwarming van je woning en de productie van warm tapwater, zonder dat er nog een cv-ketel op gas aan te pas komt. Het verschil met een hybride warmtepomp is dus wezenlijk: bij een hybride systeem blijft je cv-ketel als back-up aanwezig voor de koudste dagen, terwijl een all-electric warmtepomp je gasaansluiting volledig overbodig maakt.",
          "Omdat het systeem alle warmte elektrisch opwekt — door warmte uit de buitenlucht of de bodem te onttrekken en op te waarderen — is een all-electric warmtepomp het meest geschikt voor woningen die goed geïsoleerd zijn en bij voorkeur lage-temperatuurverwarming hebben, zoals vloer- of wandverwarming. In zo'n woning haalt de warmtepomp zijn hoogste rendement en blijven je stroomkosten beheersbaar.",
          "De grote winst zit hem in de efficiëntie: een goede all-electric warmtepomp levert voor elke kilowattuur stroom die hij verbruikt al snel drie tot vier kilowattuur aan warmte. Die verhouding heet de COP (Coefficient of Performance) en is dé maatstaf om warmtepompen met elkaar te vergelijken.",
        ],
      },
      {
        type: "text",
        heading: "Lucht-water versus bodem-water: de twee hoofdtypen",
        paragraphs: [
          "De meest gekozen all-electric warmtepomp in Nederland is de lucht-water warmtepomp. Deze haalt warmte uit de buitenlucht en geeft die af aan het water van je verwarmingssysteem. Het grote voordeel is de relatief lage aanschafprijs en het feit dat er geen ingrijpende werkzaamheden in je tuin nodig zijn. Het nadeel is dat het rendement iets daalt op de koudste winterdagen, juist wanneer je de meeste warmte nodig hebt, en dat de buitenunit een zeker geluid maakt.",
          "De bodem-water warmtepomp (ook wel geothermische of bodemgebonden warmtepomp) haalt warmte uit de grond via een lus of een bron. Omdat de bodemtemperatuur het hele jaar door vrij stabiel is, werkt dit type systeem zeer efficiënt en gelijkmatig, ook in de winter. Daar staat tegenover dat de aanschaf en installatie fors duurder zijn, omdat er een boring of een bodemlus in de tuin nodig is.",
          "Voor appartementen en woningen waar je vooral een of twee ruimtes wilt verwarmen, bestaat daarnaast de lucht-lucht warmtepomp, die warmte via de lucht in plaats van via water verspreidt. Deze is goedkoop en kan ook koelen, maar verwarmt je hele huis minder gelijkmatig en komt doorgaans niet in aanmerking voor ISDE-subsidie.",
        ],
      },
      {
        type: "link",
        href: "/warmtepompen",
        label: "Bekijk alle warmtepomptypen op een rij",
        description:
          "Op mijn overzichtspagina vergelijk ik de verschillende warmtepomptypen op kosten, geschiktheid en rendement.",
      },
      {
        type: "text",
        heading: "Wat kost een all-electric warmtepomp in 2026?",
        paragraphs: [
          "De kosten van een all-electric warmtepomp lopen flink uiteen, afhankelijk van het type, het benodigde vermogen en je woning. Voor een lucht-water warmtepomp in een gemiddelde rij- of tussenwoning moet je inclusief installatie rekenen op grofweg €8.500 tot €11.000. Voor grotere, vrijstaande woningen kan dit oplopen tot €14.000 of meer, omdat er een krachtiger systeem nodig is.",
          "Een bodem-water warmtepomp is duurder: door de noodzakelijke bodemboring of -lus liggen de totale kosten al snel tussen de €12.000 en €20.000. Die hogere investering verdient zich op de lange termijn deels terug door het hogere rendement en de lagere stroomkosten, vooral in grotere woningen met een hoge warmtevraag.",
          "Naast de warmtepomp zelf moet je soms rekening houden met bijkomende kosten, zoals het aanpassen van je radiatoren naar lage-temperatuurradiatoren of het aanleggen van vloerverwarming, en eventueel het verzwaren van je elektriciteitsaansluiting. Deze kosten worden vaak onderschat, maar zijn bepalend voor hoe goed je all-electric warmtepomp uiteindelijk presteert.",
        ],
      },
      {
        type: "link",
        href: "/kosten",
        label: "Lees meer over de kosten van een warmtepomp",
        description:
          "Een gedetailleerd overzicht van aanschaf-, installatie- en gebruikskosten van de verschillende warmtepompen.",
      },
      {
        type: "text",
        heading: "Subsidie op een all-electric warmtepomp",
        paragraphs: [
          "Voor een all-electric warmtepomp kun je via de ISDE-regeling een aanzienlijk subsidiebedrag terugkrijgen. Voor een lucht-water warmtepomp gaat het doorgaans om een bedrag tot ongeveer €2.500 à €3.500, afhankelijk van het thermisch vermogen van de installatie. Voor bodem-water warmtepompen ligt het subsidiebedrag vaak hoger, omdat deze systemen duurder en efficiënter zijn.",
          "Juist omdat een all-electric warmtepomp je gasaansluiting volledig vervangt, valt deze in een gunstiger subsidiecategorie dan een hybride systeem. Dat maakt de netto-investering een stuk aantrekkelijker. Houd er wel rekening mee dat de exacte bedragen jaarlijks worden vastgesteld en dat het subsidiebudget op kan raken — vraag de subsidie dus tijdig aan.",
        ],
      },
      {
        type: "text",
        heading: "De belangrijkste voordelen",
        paragraphs: [
          "Het grootste voordeel van een all-electric warmtepomp is dat je volledig van het aardgas af bent. Je bent niet langer afhankelijk van de gasprijs en de vaste kosten van een gasaansluiting, en je woning is klaar voor een toekomst zonder gas. In combinatie met zonnepanelen kun je een groot deel van je warmte zelfs met je eigen opgewekte stroom verzorgen.",
          "Daarnaast levert een all-electric warmtepomp in een geschikte woning de grootste besparing op je energierekening op van alle warmtepompvarianten, omdat je je volledige gasverbruik vervangt door efficiënt opgewekte warmte. Veel all-electric warmtepompen kunnen in de zomer bovendien koelen, wat een prettig extra comfort geeft tijdens warme dagen.",
        ],
      },
      {
        type: "text",
        heading: "De nadelen en aandachtspunten",
        paragraphs: [
          "Tegenover de voordelen staan een paar belangrijke aandachtspunten. Een all-electric warmtepomp werkt alleen optimaal in een goed geïsoleerde woning met lage-temperatuurafgifte. Is je woning matig geïsoleerd, dan moet de warmtepomp harder werken, daalt het rendement en stijgt je stroomverbruik — en daarmee je rekening. In zo'n geval is eerst isoleren, of voorlopig kiezen voor een hybride warmtepomp, vaak verstandiger.",
          "Ook de investering is hoger dan bij een hybride systeem, en de buitenunit van een lucht-water warmtepomp maakt geluid, waar je rekening mee moet houden in verband met je buren en de regelgeving. Tot slot vervang je je gasverbruik door stroomverbruik: bij een ongunstige verhouding tussen gas- en stroomprijs kan de besparing tegenvallen, zeker zonder zonnepanelen.",
          "Het is daarom essentieel om vooraf goed te laten beoordelen of jouw woning echt geschikt is voor een volledig elektrisch systeem. Een eerlijke inschatting voorkomt teleurstellingen achteraf.",
        ],
      },
      {
        type: "text",
        heading: "Is een all-electric warmtepomp iets voor jou?",
        paragraphs: [
          "Kort samengevat: een all-electric warmtepomp is de beste keuze als je woning goed geïsoleerd is, je beschikt over of kunt overstappen op lage-temperatuurverwarming, en je definitief van het gas af wilt. Heb je bovendien zonnepanelen of overweeg je die aan te schaffen, dan wordt het plaatje nog gunstiger.",
          "Twijfel je of je woning er klaar voor is, of zit je nog in een tussenfase qua isolatie? Dan kan een hybride warmtepomp een verstandige eerste stap zijn, waarna je later alsnog volledig elektrisch gaat. De juiste keuze hangt sterk af van de specifieke kenmerken van jouw woning.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Ontdek welke warmtepomp bij jouw woning past",
        description:
          "Beantwoord een paar vragen over je woning en ontvang een gratis, persoonlijke indicatie inclusief het meest geschikte type, de kosten en de subsidie.",
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "De beste all-electric warmtepomp voor 2026 bestaat niet in algemene zin — het beste systeem is het systeem dat past bij jouw woning, isolatieniveau en budget. Voor de meeste goed geïsoleerde woningen is een lucht-water warmtepomp de logische en betaalbare keuze, terwijl een bodem-water warmtepomp interessant wordt bij grotere woningen met een hoge warmtevraag en ruimte in de tuin. Wil je zeker weten welke variant in jouw situatie het meest oplevert? Vul de gratis keuzehulp in en ontvang binnen een paar minuten een persoonlijke indicatie.",
        ],
      },
    ],
  },
  {
    slug: "warmtepomp-kosten-2026",
    title: "Warmtepomp Kosten 2026: Aanschaf, Installatie, Subsidie en Terugverdientijd",
    description:
      "Wat kost een warmtepomp in 2026? Een compleet en eerlijk overzicht van de aanschaf- en installatiekosten per type, de subsidie, de gebruikskosten en hoe je de terugverdientijd berekent.",
    publishedAt: "2026-06-14",
    intro:
      "De kosten van een warmtepomp zijn voor veel huiseigenaren de doorslaggevende factor bij de keuze om over te stappen. Maar 'wat kost een warmtepomp?' is lastig in één bedrag te vangen: het hangt af van het type, je woning en de bijkomende werkzaamheden. In dit artikel zetten we alle kosten voor 2026 op een rij — van aanschaf en installatie tot subsidie, gebruikskosten en de terugverdientijd — zodat je weet waar je financieel aan toe bent.",
    sections: [
      {
        type: "text",
        heading: "Waar bestaan de kosten van een warmtepomp uit?",
        paragraphs: [
          "De totale kosten van een warmtepomp vallen uiteen in drie onderdelen: de aanschaf van het apparaat zelf, de installatiekosten, en de bijkomende aanpassingen aan je woning. Daar tegenover staan de subsidie die je terugkrijgt en de jaarlijkse besparing op je energierekening. Pas als je al deze posten bij elkaar optelt, krijg je een eerlijk beeld van wat een warmtepomp je werkelijk kost — en oplevert.",
          "Het is belangrijk om onderscheid te maken tussen de eenmalige investering en de jaarlijkse gebruikskosten. Een goedkoop systeem kan op de lange termijn duurder uitpakken als het minder efficiënt is, terwijl een duurder maar zuiniger systeem zich juist sneller terugverdient. Kijk dus nooit alleen naar de aanschafprijs.",
        ],
      },
      {
        type: "text",
        heading: "Aanschaf- en installatiekosten per type",
        paragraphs: [
          "Een hybride warmtepomp is de goedkoopste manier om met een warmtepomp te beginnen. Inclusief installatie kost zo'n systeem doorgaans tussen de €5.500 en €9.500, afhankelijk van je woning. Je houdt je cv-ketel als back-up, waardoor de installatie eenvoudiger is en er minder hoeft te worden aangepast aan je verwarmingssysteem.",
          "Een all-electric lucht-water warmtepomp, die je gasaansluiting volledig vervangt, ligt hoger: reken op ongeveer €8.500 tot €14.000 inclusief installatie, afhankelijk van de grootte van je woning en het benodigde vermogen. Voor een appartement met een lucht-lucht systeem ben je vaak goedkoper uit, met bedragen vanaf circa €4.000.",
          "De duurste optie is de bodem-water warmtepomp, die warmte uit de grond haalt. Door de noodzakelijke bodemboring of -lus liggen de totale kosten tussen de €12.000 en €20.000. Dit systeem is vooral interessant voor grotere, vrijstaande woningen met een hoge warmtevraag, waar het hoge rendement de investering deels terugverdient.",
        ],
      },
      {
        type: "link",
        href: "/warmtepompen",
        label: "Vergelijk de warmtepomptypen en hun kosten",
        description:
          "Een overzicht van alle warmtepomptypen met hun prijsklasse, geschiktheid en sterke en zwakke punten.",
      },
      {
        type: "text",
        heading: "Vergeet de bijkomende kosten niet",
        paragraphs: [
          "Naast de warmtepomp en de installatie zijn er vaak bijkomende kosten die mensen onderschatten. Het belangrijkste aandachtspunt is je warmteafgifte: een warmtepomp werkt het efficiëntst bij lage temperaturen, dus in woningen zonder vloerverwarming kunnen aanpassingen aan de radiatoren nodig zijn. Het vervangen door lage-temperatuurradiatoren of het aanleggen van vloerverwarming kan een aanzienlijke extra investering betekenen.",
          "Daarnaast kan het nodig zijn om je elektriciteitsaansluiting te verzwaren, zeker bij een all-electric systeem in combinatie met bijvoorbeeld een elektrische auto. Ook isolatiemaatregelen, die de warmtepomp efficiënter laten werken, horen eigenlijk in het kostenplaatje thuis. Een goede installateur neemt deze posten mee in de offerte, zodat je niet voor verrassingen komt te staan.",
        ],
      },
      {
        type: "text",
        heading: "Hoeveel subsidie haal je van de kosten af?",
        paragraphs: [
          "De ISDE-subsidie verlaagt je netto-investering flink. Voor een all-electric lucht-water warmtepomp kun je doorgaans tot €2.500 à €3.500 terugkrijgen, afhankelijk van het vermogen. Voor een hybride warmtepomp ligt het subsidiebedrag lager, en voor bodem-water warmtepompen vaak hoger. Lucht-lucht systemen komen meestal niet in aanmerking.",
          "Belangrijk is dat de subsidie wordt uitgekeerd als een vast bedrag per installatie en niet als percentage van de factuur. Je weet dus vooraf vrij precies hoeveel er van je investering afgaat. De bedragen worden jaarlijks vastgesteld en het budget kan opraken, dus vraag de subsidie tijdig aan nadat je warmtepomp is geïnstalleerd.",
        ],
      },
      {
        type: "link",
        href: "/subsidie",
        label: "Bekijk de actuele ISDE-subsidiebedragen",
        description:
          "Een overzicht van de indicatieve subsidiebedragen per type warmtepomp voor 2026.",
      },
      {
        type: "text",
        heading: "De gebruikskosten: wat verandert er op je energierekening?",
        paragraphs: [
          "Een warmtepomp verlaagt je gasverbruik fors — bij een all-electric systeem zelfs tot nul — maar verhoogt tegelijk je stroomverbruik. Het netto-effect op je energierekening is in vrijwel alle geschikte woningen positief, maar hoe groot de besparing is, hangt af van de verhouding tussen de gas- en stroomprijs en van de efficiëntie van je systeem.",
          "Een gemiddeld huishouden bespaart met een warmtepomp doorgaans enkele honderden euro's per jaar op de energierekening. In goed geïsoleerde woningen en bij een hoog rendement loopt dit verder op. Heb je zonnepanelen, dan kun je een deel van de stroom voor je warmtepomp zelf opwekken, waardoor je nog meer bespaart en je terugverdientijd korter wordt.",
        ],
      },
      {
        type: "link",
        href: "/vergelijk",
        label: "Bereken jouw kosten, subsidie en besparing",
        description:
          "Beantwoord een paar vragen over je woning en ontvang een persoonlijke indicatie van de kosten, de subsidie en je jaarlijkse besparing.",
      },
      {
        type: "text",
        heading: "Zo bereken je de terugverdientijd",
        paragraphs: [
          "De terugverdientijd is misschien wel het belangrijkste getal om de kosten van een warmtepomp in perspectief te plaatsen. Je berekent hem door je netto-investering — de totale kosten min de subsidie — te delen door je jaarlijkse besparing op de energierekening. Kost je warmtepomp na subsidie bijvoorbeeld €7.000 en bespaar je €700 per jaar, dan is de terugverdientijd ongeveer tien jaar.",
          "Voor een hybride warmtepomp is de terugverdientijd vaak korter, omdat de investering lager is, terwijl een all-electric systeem in een goed geïsoleerde woning op de lange termijn de grootste totale besparing oplevert. Zonnepanelen verlagen die terugverdientijd maar beperkt: ze wekken vooral 's zomers op, terwijl de warmtepomp voor verwarming in de winter draait. Omdat elke woning anders is, is een persoonlijke berekening de enige manier om echt te weten waar jij aan toe bent.",
        ],
      },
      {
        type: "text",
        heading: "Is je cv-ketel aan vervanging toe? Dan verandert de rekensom",
        paragraphs: [
          "Een belangrijk kostenaspect dat vaak over het hoofd wordt gezien: de leeftijd van je huidige cv-ketel. Een cv-ketel gaat gemiddeld zo'n 15 jaar mee. Is die van jou aan vervanging toe, dan zou je sowieso al snel zo'n €3.000 uitgeven aan een nieuwe ketel.",
          "In dat geval is de eerlijke vergelijking niet 'warmtepomp versus niets', maar 'warmtepomp versus een nieuwe cv-ketel'. Die uitgespaarde vervangingskosten mag je van de investering in je warmtepomp aftrekken, waardoor de netto-meerprijs — en dus de terugverdientijd — flink lager uitvalt. Loopt je ketel tegen het einde van zijn levensduur, dan is het moment om over te stappen dus juist extra gunstig.",
        ],
      },
      {
        type: "text",
        heading: "Energielabel: hoe het je kosten beïnvloedt",
        paragraphs: [
          "Het energielabel van je woning (A tot en met G) zegt veel over hoe goed je woning geïsoleerd is, en dat werkt direct door in de kosten. Hoe beter het label, hoe lager de aanvoertemperatuur die je warmtepomp hoeft te leveren — en hoe efficiënter (en goedkoper) hij draait.",
          "Bij een goed label (A of B) kan een all-electric warmtepomp vaak zonder grote aanpassingen worden geïnstalleerd en haalt hij een hoog rendement. Bij een lager label (E, F of G) moet de warmtepomp harder werken, stijgt het stroomverbruik en zijn soms extra maatregelen nodig, zoals grotere radiatoren. Je officiële energielabel vind je gratis op EP-online; weet je het niet, dan is het bouwjaar een goede eerste indicatie.",
        ],
      },
      {
        type: "text",
        heading: "COP uitgelegd: wat het wél en niet over je kosten zegt",
        paragraphs: [
          "Een warmtepomp máákt geen warmte, hij verplaatst het: hij haalt warmte uit de buitenlucht — die er zelfs bij vorst nog in zit — en pompt die naar binnen, net als een koelkast maar dan omgekeerd. De stroom gebruikt hij alleen om die warmte te verplaatsen. Daardoor levert 1 kWh stroom ongeveer 3 tot 4 kWh warmte op. Dat getal heet de COP. Hoe kouder het buiten is en hoe warmer het water moet worden (bijvoorbeeld bij oude radiatoren), hoe lager de COP; over een heel jaar gemeten — de SCOP — zit een goed systeem op vloerverwarming rond de 3,5 à 4.",
          "Een veelgehoord misverstand is dat een cv-ketel energie verspilt. Dat klopt niet: een moderne hr-ketel zet zo'n 95% van het gas om in warmte. Het verschil is dat een ketel warmte máákt uit gas en daardoor nooit boven ongeveer 1 kWh warmte per kWh gas komt, terwijl een warmtepomp warmte uit de lucht haalt en daardoor wél boven de 1 komt. Je vergelijkt dus warmte per kWh stroom met warmte per kWh gas.",
          "Belangrijk voor je portemonnee: een COP van 3-4 betekent niet dat je 3 tot 4 keer goedkoper uit bent. Stroom is per kWh een stuk duurder dan gas. Die hogere stroomprijs wordt grotendeels gecompenseerd door de hoge COP, waardoor je netto meestal goedkoper uit bent dan met gas. De grootste winst zit in CO₂: een warmtepomp stoot veel minder uit, en dat wordt elk jaar beter naarmate de stroom groener wordt.",
        ],
      },
      {
        type: "text",
        heading: "Alles in één keer: warmtepomp, zonnepanelen en HEMS",
        paragraphs: [
          "Steeds meer huishoudens kiezen ervoor om de warmtepomp te combineren met zonnepanelen, een thuisbatterij en een HEMS (Home Energy Management System). De zonnepanelen leveren de stroom voor je warmtepomp, de batterij slaat overschotten op, en de HEMS stuurt slim aan wanneer je opwekt, opslaat en verbruikt.",
          "Los van elkaar tellen die investeringen flink op, maar als gecombineerd pakket valt de prijs vaak lager uit doordat de installatie in één keer gebeurt. Bovendien versterken de systemen elkaar: samen verlagen ze je rekening méér dan de som der delen, wat de gezamenlijke terugverdientijd verkort. Een HEMS heeft nog een bijkomend voordeel: door slim met piekmomenten om te gaan, helpt het tegen netcongestie — een groeiend probleem op het Nederlandse stroomnet.",
        ],
      },
      {
        type: "text",
        heading: "Hybride warmtepomp: een tussenstap, geen eindbestemming",
        paragraphs: [
          "Een hybride warmtepomp wordt vaak gepresenteerd als dé oplossing voor oudere woningen, maar het is beter om hem te zien als een slimme tussenstap op weg naar volledig gasloos. Hij werkt samen met je bestaande cv-ketel en bespaart nu al 30 tot 50% op je gasverbruik, met een lagere investering dan een volledig elektrisch systeem.",
          "De uiteindelijke richting is all-electric: helemaal van het gas af. Een hybride maakt die overgang makkelijker en betaalbaarder, doordat je in stappen kunt verduurzamen. Verbeter je intussen je isolatie, dan kun je later vaak zonder problemen doorgroeien naar een volledig elektrische warmtepomp.",
        ],
      },
      {
        type: "text",
        heading: "Tip: eerst isoleren verdient zich dubbel terug",
        paragraphs: [
          "Tot slot een tip die op de kosten van je warmtepomp grote invloed heeft: isoleer eerst, als je de mogelijkheid hebt. Een beter geïsoleerde woning heeft minder warmte nodig, waardoor je met een lichtere — en dus goedkopere — warmtepomp toekunt en hij efficiënter draait.",
          "Daarmee verdien je je warmtepomp sneller terug én maak je op termijn een volledige overstap naar all-electric mogelijk. Isolatie en warmtepomp versterken elkaar dus: samen leveren ze de laagste energierekening en de kortste terugverdientijd op.",
        ],
      },
      {
        type: "text",
        heading: "Conclusie",
        paragraphs: [
          "Een warmtepomp is in 2026 een serieuze investering die varieert van zo'n €5.500 voor een hybride systeem tot €20.000 voor een bodem-water warmtepomp, maar door de ISDE-subsidie en de jaarlijkse besparing op je energierekening verdient die investering zich na verloop van tijd terug. De werkelijke kosten — en de terugverdientijd — hangen sterk af van jouw woning, je isolatie, het energielabel, de leeftijd van je cv-ketel en het gekozen systeem. Wil je een concreet beeld van wat een warmtepomp jou kost en oplevert? Vul de gratis keuzehulp in en ontvang een persoonlijke indicatie op maat.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Geeft tot `count` andere blogartikelen terug voor interne links onderaan een artikel. */
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return blogPosts.slice(0, count);
  const ordered = [...blogPosts.slice(index + 1), ...blogPosts.slice(0, index)];
  return ordered.slice(0, count);
}
