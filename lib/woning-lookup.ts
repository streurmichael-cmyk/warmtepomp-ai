import { zoekWoningBag } from "./bag-lookup";
import { zoekDetailsPdokBag } from "./pdok-bag-lookup";
import { bouwjaarNaarBracket, oppervlakteNaarBracket, type WoningGegevens } from "./woning-types";

export { bouwjaarNaarBracket, oppervlakteNaarBracket, type WoningGegevens };

type PdokDoc = {
  weergavenaam?: string;
  straatnaam?: string;
  huis_nlt?: string | number;
  postcode?: string;
  woonplaatsnaam?: string;
  bouwjaar?: string | number;
  oppervlakte?: string | number;
  oppervlakteverblijfsobject?: string | number;
};

/**
 * Zoekt een adres op via de publieke, sleutelloze PDOK Locatieserver (BAG-adressen).
 * Bouwjaar/oppervlakte worden alleen gevuld als de bron deze teruggeeft — zo niet, dan
 * blijft het veld leeg en kiest de gebruiker dit zelf op het bevestigingsscherm.
 */
async function zoekWoningPdok(postcode: string, huisnummer: string): Promise<WoningGegevens | null> {
  const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?${new URLSearchParams({
    q: `${postcode} ${huisnummer}`,
    fq: "type:adres",
    rows: "1",
  })}`;

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;

    const data = await res.json();
    const doc: PdokDoc | undefined = data?.response?.docs?.[0];
    if (!doc) return null;

    const result: WoningGegevens = {
      adres:
        doc.weergavenaam ??
        `${doc.straatnaam ?? ""} ${doc.huis_nlt ?? huisnummer}, ${doc.woonplaatsnaam ?? ""}`.trim(),
      straatnaam: doc.straatnaam,
      huisnummer: doc.huis_nlt !== undefined ? String(doc.huis_nlt) : huisnummer,
      postcode: doc.postcode,
      plaats: doc.woonplaatsnaam,
    };

    const bouwjaarRaw = Number(doc.bouwjaar);
    if (Number.isFinite(bouwjaarRaw) && bouwjaarRaw > 1000) {
      result.bouwjaarJaar = bouwjaarRaw;
      result.bouwjaar = bouwjaarNaarBracket(bouwjaarRaw);
    }

    const oppervlakteRaw = Number(doc.oppervlakte ?? doc.oppervlakteverblijfsobject);
    if (Number.isFinite(oppervlakteRaw) && oppervlakteRaw > 0) {
      result.oppervlakteM2 = oppervlakteRaw;
      result.oppervlakte = oppervlakteNaarBracket(oppervlakteRaw);
    }

    return result;
  } catch (err) {
    console.warn("PDOK adres-opzoeken mislukt:", err);
    return null;
  }
}

/**
 * Zoekt woninggegevens op bij een postcode + huisnummer.
 * Probeert eerst de officiële BAG API (als BAG_API_KEY is ingesteld) voor het adres,
 * en valt anders terug op de sleutelloze PDOK Locatieserver. Ontbreken bouwjaar,
 * oppervlakte of woningtype daarna nog, dan worden die aangevuld via de eveneens
 * sleutelloze BAG-WFS van PDOK (zie lib/pdok-bag-lookup.ts).
 */
export async function zoekWoning(postcode: string, huisnummer: string): Promise<WoningGegevens | null> {
  const basis = (await zoekWoningBag(postcode, huisnummer)) ?? (await zoekWoningPdok(postcode, huisnummer));
  if (!basis) return null;

  if (!basis.oppervlakte || !basis.bouwjaar || !basis.woningtype) {
    const details = await zoekDetailsPdokBag(postcode, huisnummer);
    if (details) {
      basis.oppervlakte ??= details.oppervlakte;
      basis.oppervlakteM2 ??= details.oppervlakteM2;
      basis.bouwjaar ??= details.bouwjaar;
      basis.bouwjaarJaar ??= details.bouwjaarJaar;
      basis.woningtype ??= details.woningtype;
    }
  }

  return basis;
}
