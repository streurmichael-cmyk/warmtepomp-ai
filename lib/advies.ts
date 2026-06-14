export const oppervlakteOpties = [
  "< 75 m²",
  "75 - 100 m²",
  "100 - 150 m²",
  "150 - 200 m²",
  "> 200 m²",
] as const;

export const bouwjaarOpties = ["Voor 1975", "1975 - 1992", "1992 - 2015", "Na 2015"] as const;

export const isolatieOpties = [
  "Goed geïsoleerd",
  "Redelijk geïsoleerd",
  "Matig of oud",
  "Weet ik niet",
] as const;

export const systeemOpties = [
  "CV-ketel op gas",
  "Stadsverwarming",
  "Elektrisch",
  "Hybride warmtepomp",
  "Anders",
] as const;

const OPPERVLAKTE_MIDDEN: Record<string, number> = {
  "< 75 m²": 60,
  "75 - 100 m²": 87,
  "100 - 150 m²": 125,
  "150 - 200 m²": 175,
  "> 200 m²": 220,
};

const GAS_PER_M2: Record<string, number> = {
  "Voor 1975": 18,
  "1975 - 1992": 15,
  "1992 - 2015": 11,
  "Na 2015": 7,
};

/** Schat het jaarlijkse gasverbruik (m³) op basis van oppervlakte en bouwjaar — gebruikt als
 * voorstel in de vragenflow zodat niemand met een lege/onbekende waarde vastloopt. */
export function schatGasverbruik(oppervlakte: string, bouwjaar: string): number {
  const m2 = OPPERVLAKTE_MIDDEN[oppervlakte] ?? 100;
  const perM2 = GAS_PER_M2[bouwjaar] ?? 13;
  const ruw = m2 * perM2;
  return Math.max(500, Math.min(4000, Math.round(ruw / 50) * 50));
}

/** Standaard isolatieniveau als de gebruiker "weet ik niet" kiest, op basis van bouwjaar. */
export function standaardIsolatie(bouwjaar: string): string {
  switch (bouwjaar) {
    case "Voor 1975":
    case "1975 - 1992":
      return "Matig of oud";
    case "1992 - 2015":
      return "Redelijk geïsoleerd";
    case "Na 2015":
      return "Goed geïsoleerd";
    default:
      return "Redelijk geïsoleerd";
  }
}

export type AdviesInput = {
  woningtype: string;
  oppervlakte: string;
  bouwjaar: string;
  isolatie: string;
  huidigSysteem: string;
  gasverbruik: number;
  heeftZonnepanelen?: string;
  aantalZonnepanelen?: number;
  jaarlijkseOpwekKwh?: number;
  /** Voorkeur bij gas/overig: in één keer volledig elektrisch, of eerst een hybride tussenstap. */
  overstapVoorkeur?: "volledig" | "hybride";
};

export type ZonnepanelenImpact = {
  eigenOpwekKwh: number;
  dekkingPercentage: number;
  extraBesparingPerJaar: number;
  terugverdientijdMetZon: string;
};

export type AdviesResultaat = {
  passend: boolean;
  type: string;
  toelichting: string;
  kostenRange: string;
  subsidie: string;
  besparingPerJaar: number;
  terugverdientijd: string;
  zonnepanelen?: ZonnepanelenImpact;
};

const BESPARING_PER_M3 = 0.56;

/** Gemiddelde jaaropbrengst van één zonnepaneel (400 Wp) in kWh. */
export const KWH_PER_ZONNEPANEEL = 350;
/** Gemiddeld jaarverbruik van een warmtepomp in kWh. */
export const WARMTEPOMP_VERBRUIK_KWH = 3500;
/** Gehanteerde stroomprijs per kWh voor de besparingsberekening. */
export const STROOMPRIJS_PER_KWH = 0.32;

/** Eenvoudige, lokale indicatie-berekening — geen AI nodig, draait direct in de browserflow
 * zodat de bezoeker zijn advies ziet vóórdat hij contactgegevens achterlaat. */
export function berekenAdvies(input: AdviesInput): AdviesResultaat {
  const { woningtype, isolatie, huidigSysteem, gasverbruik, overstapVoorkeur } = input;

  if (huidigSysteem === "Stadsverwarming") {
    return {
      passend: false,
      type: "Geen warmtepomp nodig",
      toelichting:
        "Je woning is al aangesloten op stadsverwarming. Een warmtepomp voegt daar in de praktijk weinig aan toe — kijk liever naar de voorwaarden van je warmtenet.",
      kostenRange: "—",
      subsidie: "—",
      besparingPerJaar: 0,
      terugverdientijd: "—",
    };
  }

  const groteWoning = woningtype === "Vrijstaand" || woningtype === "Twee-onder-een-kap";
  const appartement = woningtype === "Appartement";

  if (huidigSysteem === "Hybride warmtepomp" && isolatie === "Matig of oud") {
    return {
      passend: false,
      type: "Je hybride warmtepomp is nu nog de beste keuze",
      toelichting:
        "Met de huidige isolatie van je woning is een volledig elektrische warmtepomp nog niet de beste stap: je hybride warmtepomp blijft het grootste deel van het jaar de efficiëntste oplossing. Verbeter eerst je isolatie — daarna wordt een volledige overstap pas echt interessant.",
      kostenRange: "—",
      subsidie: "—",
      besparingPerJaar: 0,
      terugverdientijd: "—",
    };
  }

  let type: string;
  let kostenRange: string;
  let subsidie: string;
  let toelichting: string;

  if (huidigSysteem === "Hybride warmtepomp") {
    type = appartement ? "Lucht/lucht warmtepomp" : "Volledig elektrische warmtepomp (upgrade)";
    kostenRange = appartement ? "€2.500 – €4.500" : groteWoning ? "€5.500 – €8.000" : "€4.500 – €6.500";
    subsidie = appartement ? "doorgaans niet subsidiabel via ISDE" : "tot €3.500";
    toelichting =
      "Je hebt al een hybride warmtepomp die het grootste deel van het jaar verwarmt. De volgende stap is een volledig elektrische warmtepomp die de cv-ketel helemaal vervangt. Omdat een deel van de installatie er al staat, zijn de extra kosten vaak lager dan bij een eerste installatie.";
  } else if (isolatie === "Matig of oud") {
    type = "Hybride warmtepomp";
    kostenRange = appartement ? "€5.500 – €7.500" : groteWoning ? "€8.500 – €11.000" : "€7.000 – €9.500";
    subsidie = "tot €1.225";
    toelichting =
      "Bij matige isolatie werkt een hybride warmtepomp het best: hij neemt het grootste deel van het stookjaar over en je cv-ketel springt alleen bij op de koudste dagen. Volledig overstappen kan vaak pas nadat je beter geïsoleerd hebt.";
    if (overstapVoorkeur === "volledig") {
      toelichting +=
        " Een meteen volledige overstap is met de huidige isolatie nog niet aan te raden — verbeter eerst de isolatie, dan kun je daarna alsnog overstappen op volledig elektrisch.";
    }
  } else if (isolatie === "Redelijk geïsoleerd") {
    if (appartement) {
      type = "Lucht/lucht warmtepomp";
      kostenRange = "€4.000 – €6.000";
      subsidie = "doorgaans niet subsidiabel via ISDE";
      toelichting =
        "Met een redelijke isolatie kun je vaak al volledig elektrisch verwarmen, maar een hybride variant is een veiligere én goedkopere eerste stap. Welke het beste past hangt af van je budget en je radiatoren.";
    } else if (overstapVoorkeur === "hybride") {
      type = "Hybride warmtepomp";
      kostenRange = groteWoning ? "€8.500 – €11.000" : "€7.000 – €9.500";
      subsidie = "tot €1.225";
      toelichting =
        "Met een redelijke isolatie en jouw voorkeur om in stappen over te gaan, is een hybride warmtepomp een mooie eerste stap: hij neemt het grootste deel van het stookjaar over en je cv-ketel blijft als back-up. Een volledige overstap naar all-electric kan altijd nog.";
    } else if (overstapVoorkeur === "volledig") {
      type = "Lucht/water warmtepomp (volledig elektrisch)";
      kostenRange = groteWoning ? "€10.500 – €14.000" : "€9.500 – €13.000";
      subsidie = "tot €2.500";
      toelichting =
        "Met een redelijke isolatie en jouw voorkeur om in één keer volledig van het gas af te gaan, is een volledig elektrische warmtepomp goed mogelijk. Let goed op je radiatoren — bij lage temperaturen werkt een warmtepomp het efficiëntst.";
    } else {
      type = "Hybride of volledig elektrische warmtepomp";
      kostenRange = groteWoning ? "€9.500 – €13.000" : "€7.500 – €10.500";
      subsidie = "tot €2.500";
      toelichting =
        "Met een redelijke isolatie kun je vaak al volledig elektrisch verwarmen, maar een hybride variant is een veiligere én goedkopere eerste stap. Welke het beste past hangt af van je budget en je radiatoren.";
    }
  } else {
    type = appartement ? "Lucht/lucht warmtepomp" : "Lucht/water warmtepomp (volledig elektrisch)";
    kostenRange = appartement ? "€4.000 – €6.000" : groteWoning ? "€10.500 – €14.000" : "€8.500 – €11.000";
    subsidie = appartement ? "doorgaans niet subsidiabel via ISDE" : "tot €3.500";
    toelichting =
      "Je woning is goed geïsoleerd, dus een volledig elektrische warmtepomp kan je gasaansluiting helemaal vervangen. Dat levert de grootste besparing op.";
  }

  const besparingPerJaar = Math.round(gasverbruik * BESPARING_PER_M3 * (isolatie === "Matig of oud" ? 0.6 : 1));

  // Indicatie van de netto investering (na subsidie) voor de terugverdientijd-berekening.
  const kostenGetallen = kostenRange.match(/[\d.]+/g)?.map((n) => Number(n.replace(/\./g, ""))) ?? [8000, 10000];
  const gemKosten = (kostenGetallen[0] + kostenGetallen[1]) / 2;
  const subsidieGetal = Number(subsidie.match(/[\d.]+/)?.[0]?.replace(/\./g, "") ?? 0);
  const nettoInvestering = Math.max(gemKosten - subsidieGetal, 1000);

  const terugverdientijd =
    besparingPerJaar > 0
      ? `${Math.max(1, Math.round((nettoInvestering / besparingPerJaar) * 10) / 10)} jaar`
      : "—";

  let zonnepanelen: ZonnepanelenImpact | undefined;
  if (input.heeftZonnepanelen === "Ja" && (input.jaarlijkseOpwekKwh || input.aantalZonnepanelen)) {
    const eigenOpwekKwh =
      input.jaarlijkseOpwekKwh && input.jaarlijkseOpwekKwh > 0
        ? input.jaarlijkseOpwekKwh
        : (input.aantalZonnepanelen ?? 0) * KWH_PER_ZONNEPANEEL;
    const dekkingPercentage = Math.min(
      Math.round((eigenOpwekKwh / WARMTEPOMP_VERBRUIK_KWH) * 100),
      100
    );
    const extraBesparingPerJaar = Math.round(eigenOpwekKwh * STROOMPRIJS_PER_KWH);
    const totaleBesparing = besparingPerJaar + extraBesparingPerJaar;
    const terugverdientijdMetZon =
      totaleBesparing > 0
        ? `${Math.max(1, Math.round((nettoInvestering / totaleBesparing) * 10) / 10)} jaar`
        : "—";

    zonnepanelen = {
      eigenOpwekKwh,
      dekkingPercentage,
      extraBesparingPerJaar,
      terugverdientijdMetZon,
    };
  }

  return {
    passend: true,
    type,
    toelichting,
    kostenRange,
    subsidie,
    besparingPerJaar,
    terugverdientijd,
    zonnepanelen,
  };
}
