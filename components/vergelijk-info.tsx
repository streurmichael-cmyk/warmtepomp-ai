import Link from "next/link";

const verderLinks = [
  { href: "/kosten", title: "Wat kost een warmtepomp?", desc: "Eerlijk kostenoverzicht per type" },
  { href: "/subsidie", title: "ISDE-subsidie", desc: "Hoeveel subsidie je kunt krijgen" },
  { href: "/installateurs", title: "Installateur vinden", desc: "Een gecertificeerde installateur" },
];

/**
 * Educatieve SEO-content voor /vergelijk. Wordt alleen op de eerste wizardstap
 * (adres) getoond, zodat crawlers en verse bezoekers de uitleg + interne links
 * zien, terwijl de wizard-flow daarna schoon en gefocust blijft.
 */
export function VergelijkInfo() {
  return (
    <div className="mt-12 border-t border-green/10 pt-10">
      <h2 className="font-display text-xl font-bold tracking-tight text-dark sm:text-2xl">
        Hoe werkt de keuzehulp van warmtepomp.ai?
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          warmtepomp.ai is een onafhankelijke keuzehulp die je in een paar minuten een
          persoonlijke indicatie geeft voor jouw woning. Je vult je postcode en huisnummer in,
          waarna de tool automatisch de bekende woninggegevens ophaalt — zoals het woningtype,
          het bouwjaar en de oppervlakte. Aangevuld met een paar korte vragen over je huidige
          verwarming en isolatie bepaalt de keuzehulp welk type warmtepomp het beste bij jouw
          situatie past.
        </p>
        <p>
          Je krijgt een indicatie van het best passende type warmtepomp, een richtprijs voor
          aanschaf en installatie, de ISDE-subsidie waarvoor je mogelijk in aanmerking komt en een
          inschatting van je besparing. Zo zie je in één overzicht waar je financieel ongeveer aan
          toe bent — zonder dat je meteen een afspraak hoeft te maken of je gegevens bij meerdere
          bedrijven hoeft achter te laten. Je doorloopt de keuzehulp volledig zelf en in je eigen
          tempo, en bepaalt aan het eind of je de indicatie per e-mail wilt ontvangen of
          vrijblijvend offertes wilt opvragen.
        </p>
        <p>
          Ik ben aan geen enkel merk of installateur gebonden. De aanbeveling is dus gebaseerd op
          wat bij jouw woning past, niet op wie er iets wil verkopen. Wil je een stap verder, dan
          help ik je richting een gecertificeerde installateur die op basis van jouw indicatie een
          offerte op maat kan opstellen. Daarbij kies je zelf of en met wie je verdergaat; je zit
          nergens aan vast.
        </p>
        <p>
          Belangrijk om te weten: de uitkomst is een indicatie, geen bindende offerte. De
          werkelijke kosten, het exacte vermogen en de definitieve subsidie hangen af van een
          opname bij jou thuis. Gebruik de indicatie daarom als vertrekpunt voor een goed gesprek
          met een installateur, niet als eindbedrag.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {verderLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-2xl border border-green/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_16px_48px_rgba(34,181,114,0.08)]"
          >
            <span className="block font-display text-sm font-bold text-dark">{l.title}</span>
            <span className="mt-1 block text-xs text-muted">{l.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
