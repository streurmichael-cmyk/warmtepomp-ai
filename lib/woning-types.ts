export type WoningGegevens = {
  adres: string;
  straatnaam?: string;
  huisnummer?: string;
  postcode?: string;
  plaats?: string;
  /** Bracket-waarde, matcht bouwjaarOpties in lib/advies.ts — alleen gezet als de bron dit teruggeeft. */
  bouwjaar?: string;
  /** Exacte bouwjaar (indien bekend), voor weergave op het bevestigingsscherm. */
  bouwjaarJaar?: number;
  /** Bracket-waarde, matcht oppervlakteOpties in lib/advies.ts — alleen gezet als de bron dit teruggeeft. */
  oppervlakte?: string;
  /** Exacte gebruiksoppervlakte in m² (indien bekend), voor weergave op het bevestigingsscherm. */
  oppervlakteM2?: number;
  /** Woningtype indien de bron dit kon afleiden (bijv. "Appartement"). */
  woningtype?: string;
};

export function bouwjaarNaarBracket(jaar: number): string {
  if (jaar < 1975) return "Voor 1975";
  if (jaar < 1992) return "1975 - 1992";
  if (jaar < 2015) return "1992 - 2015";
  return "Na 2015";
}

export function oppervlakteNaarBracket(m2: number): string {
  if (m2 < 75) return "< 75 m²";
  if (m2 < 100) return "75 - 100 m²";
  if (m2 < 150) return "100 - 150 m²";
  if (m2 < 200) return "150 - 200 m²";
  return "> 200 m²";
}
