export type WoningGegevens = {
  adres: string;
  straatnaam?: string;
  huisnummer?: string;
  postcode?: string;
  plaats?: string;
  /** Bracket-waarde, matcht bouwjaarOpties in lib/advies.ts — alleen gezet als de bron dit teruggeeft. */
  bouwjaar?: string;
  /** Bracket-waarde, matcht oppervlakteOpties in lib/advies.ts — alleen gezet als de bron dit teruggeeft. */
  oppervlakte?: string;
};

function bouwjaarNaarBracket(jaar: number): string {
  if (jaar < 1975) return "Voor 1975";
  if (jaar < 1992) return "1975 - 1992";
  if (jaar < 2015) return "1992 - 2015";
  return "Na 2015";
}

function oppervlakteNaarBracket(m2: number): string {
  if (m2 < 75) return "< 75 m²";
  if (m2 < 100) return "75 - 100 m²";
  if (m2 < 150) return "100 - 150 m²";
  if (m2 < 200) return "150 - 200 m²";
  return "> 200 m²";
}

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
export async function zoekWoning(postcode: string, huisnummer: string): Promise<WoningGegevens | null> {
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
      result.bouwjaar = bouwjaarNaarBracket(bouwjaarRaw);
    }

    const oppervlakteRaw = Number(doc.oppervlakte ?? doc.oppervlakteverblijfsobject);
    if (Number.isFinite(oppervlakteRaw) && oppervlakteRaw > 0) {
      result.oppervlakte = oppervlakteNaarBracket(oppervlakteRaw);
    }

    return result;
  } catch (err) {
    console.warn("PDOK adres-opzoeken mislukt:", err);
    return null;
  }
}
