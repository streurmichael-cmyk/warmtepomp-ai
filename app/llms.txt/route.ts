import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/seo";

// Gecureerde hoofdpagina's voor llms.txt (llmstxt.org). Bewust géén dump van alle
// stadpagina's; die zitten achter het installateurs-overzicht onder Optional.
const hoofdpaginas: { path: string; naam: string; beschrijving: string }[] = [
  {
    path: "/vergelijk",
    naam: "Keuzehulp: warmtepomp vergelijken",
    beschrijving:
      "Gratis AI-keuzehulp; vul je adres in en ontvang een persoonlijke indicatie van het beste type warmtepomp, de kosten en de subsidie.",
  },
  {
    path: "/kosten",
    naam: "Wat kost een warmtepomp",
    beschrijving:
      "Eerlijk overzicht van de kosten van een warmtepomp in 2026: aanschaf en installatie per type, ISDE-subsidie en maandlasten.",
  },
  {
    path: "/subsidie",
    naam: "ISDE-subsidie",
    beschrijving:
      "Alles over de ISDE-subsidie voor warmtepompen in 2026: bedragen per type, voorwaarden en hoe je de subsidie aanvraagt.",
  },
  {
    path: "/warmtepompen",
    naam: "Soorten warmtepompen",
    beschrijving:
      "De typen warmtepompen (lucht-water, hybride, bodem-water, lucht-lucht) met uitleg, voor- en nadelen, kosten en subsidie.",
  },
  {
    path: "/beste-warmtepomp",
    naam: "Beste warmtepomp 2026",
    beschrijving:
      "Onafhankelijke top 5 van warmtepompen in 2026, vergeleken op SCOP, prijs en geschiktheid.",
  },
  {
    path: "/hybride-warmtepomp",
    naam: "Hybride warmtepomp",
    beschrijving:
      "Wat een hybride warmtepomp is, wanneer het de slimste keuze is, wat het kost en hybride versus all-electric.",
  },
  {
    path: "/over-ons",
    naam: "Over mij",
    beschrijving:
      "Wie ik ben (Michael Streur, regio Amsterdam), waarom ik warmtepomp.ai bouw en hoe ik onafhankelijk blijf.",
  },
  {
    path: "/faq",
    naam: "Veelgestelde vragen",
    beschrijving:
      "Antwoorden op de meest gestelde vragen over warmtepompen, kosten, subsidie en installatie.",
  },
];

const optioneel: { path: string; naam: string; beschrijving: string }[] = [
  {
    path: "/offerte",
    naam: "Offerte aanvragen",
    beschrijving: "Vrijblijvend warmtepomp-offertes aanvragen en 3 installateurs vergelijken.",
  },
  {
    path: "/hoe-het-werkt",
    naam: "Hoe het werkt",
    beschrijving:
      "In 4 stappen van je adres naar een persoonlijke indicatie en een gecertificeerde installateur.",
  },
  {
    path: "/voorbeeld-advies",
    naam: "Voorbeeldindicatie",
    beschrijving: "Een voorbeeld van een persoonlijke warmtepomp-indicatie, zodat je weet wat je krijgt.",
  },
  {
    path: "/installateurs",
    naam: "Installateur vinden",
    beschrijving:
      "Een gecertificeerde warmtepomp-installateur vinden; met afzonderlijke pagina's per stad.",
  },
  {
    path: "/aardgasvrij",
    naam: "Aardgasvrij",
    beschrijving:
      "Zoek op postcode wanneer jouw buurt van het gas af gaat en meld je aan voor een collectieve actie.",
  },
];

function link(naam: string, path: string, beschrijving: string): string {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return `- [${naam}](${url}): ${beschrijving}`;
}

export function GET() {
  const regels: string[] = [
    "# warmtepomp.ai",
    "",
    "> warmtepomp.ai is een onafhankelijk Nederlands platform met een gratis AI-keuzehulp die " +
      "huiseigenaren op basis van hun woning een persoonlijke warmtepomp-indicatie geeft. Ik ben " +
      "onafhankelijk van fabrikanten en merken. De " +
      "keuzehulp is gratis voor jou; ik ontvang een vergoeding van installateurs wanneer ik je " +
      "doorverwijs, wat de vergelijking niet beïnvloedt en jou niets extra kost.",
    "",
    "Ik (Michael Streur, regio Amsterdam) bouw warmtepomp.ai om huiseigenaren in heldere taal te " +
      "helpen kiezen: welk type warmtepomp bij hun woning past, wat het kost, welke ISDE-subsidie " +
      "geldt en wat het oplevert. Alle bedragen zijn indicatief; voor een definitieve prijs is een " +
      "offerte van een installateur nodig.",
    "",
    "## Belangrijkste pagina's",
    ...hoofdpaginas.map((p) => link(p.naam, p.path, p.beschrijving)),
    "",
    "## Blog",
    ...blogPosts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)),
    "",
    "## Optional",
    ...optioneel.map((p) => link(p.naam, p.path, p.beschrijving)),
    "",
  ];

  return new Response(regels.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
