import { bouwjaarNaarBracket, oppervlakteNaarBracket, type WoningGegevens } from "./woning-types";

const WFS_BASE = "https://service.pdok.nl/lv/bag/wfs/v2_0";

type VerblijfsobjectProps = {
  identificatie?: string;
  oppervlakte?: number;
  gebruiksdoel?: string;
  huisnummer?: number;
  huisletter?: string;
  toevoeging?: string;
  postcode?: string;
  woonplaats?: string;
  openbare_ruimte?: string;
  bouwjaar?: number;
  pandidentificatie?: string;
};

function buildFilter(conditions: { field: string; value: string }[]): string {
  const clauses = conditions
    .map(
      ({ field, value }) =>
        `<fes:PropertyIsEqualTo><fes:ValueReference>${field}</fes:ValueReference><fes:Literal>${value}</fes:Literal></fes:PropertyIsEqualTo>`
    )
    .join("");
  const body = conditions.length > 1 ? `<fes:And>${clauses}</fes:And>` : clauses;
  return `<fes:Filter xmlns:fes="http://www.opengis.net/fes/2.0">${body}</fes:Filter>`;
}

async function wfsGetFeatures(
  conditions: { field: string; value: string }[],
  count = 5
): Promise<VerblijfsobjectProps[]> {
  const url = `${WFS_BASE}?${new URLSearchParams({
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    typeName: "bag:verblijfsobject",
    outputFormat: "json",
    count: String(count),
    filter: buildFilter(conditions),
  })}`;

  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) return [];

  const data = await res.json();
  const features: { properties: VerblijfsobjectProps }[] = data?.features ?? [];
  return features.map((f) => f.properties);
}

/**
 * Haalt bouwjaar, oppervlakte en (indien af te leiden) woningtype op via de gratis,
 * sleutelloze BAG-WFS van PDOK (https://service.pdok.nl/lv/bag/wfs/v2_0).
 * Woningtype wordt alleen gevuld als er meerdere verblijfsobjecten in hetzelfde pand
 * zitten (dan is het vrijwel zeker een appartement) — anders blijft het open, zodat
 * de gebruiker zelf kiest tussen tussenwoning/hoekwoning/twee-onder-een-kap/vrijstaand.
 */
export async function zoekDetailsPdokBag(postcode: string, huisnummer: string): Promise<Partial<WoningGegevens> | null> {
  const match = huisnummer.match(/^(\d+)([A-Za-z]?)$/);
  if (!match) return null;
  const [, nummer, letter] = match;

  try {
    const conditions = [
      { field: "postcode", value: postcode },
      { field: "huisnummer", value: nummer },
    ];
    if (letter) conditions.push({ field: "huisletter", value: letter.toUpperCase() });

    const objecten = await wfsGetFeatures(conditions);
    const object = objecten[0];
    if (!object) return null;

    const result: Partial<WoningGegevens> = {};

    const oppervlakteRaw = Number(object.oppervlakte);
    if (Number.isFinite(oppervlakteRaw) && oppervlakteRaw > 0) {
      result.oppervlakteM2 = oppervlakteRaw;
      result.oppervlakte = oppervlakteNaarBracket(oppervlakteRaw);
    }

    const bouwjaarRaw = Number(object.bouwjaar);
    if (Number.isFinite(bouwjaarRaw) && bouwjaarRaw > 1000) {
      result.bouwjaarJaar = bouwjaarRaw;
      result.bouwjaar = bouwjaarNaarBracket(bouwjaarRaw);
    }

    if (object.pandidentificatie) {
      const pandObjecten = await wfsGetFeatures(
        [{ field: "pandidentificatie", value: object.pandidentificatie }],
        10
      );
      // Meerdere verblijfsobjecten in het pand, waarvan minstens één een woonfunctie heeft:
      // vrijwel zeker een appartement. We kijken naar het pand als geheel, niet alleen naar
      // dit object, omdat individuele appartementen (vooral met huisletter) in BAG soms als
      // "overige gebruiksfunctie" geregistreerd staan terwijl het gebouw duidelijk woongebouw is.
      if (pandObjecten.length > 1 && pandObjecten.some((o) => o.gebruiksdoel === "woonfunctie")) {
        result.woningtype = "Appartement";
      }
    }

    return result;
  } catch (err) {
    console.warn("PDOK BAG-WFS opzoeken mislukt:", err);
    return null;
  }
}
