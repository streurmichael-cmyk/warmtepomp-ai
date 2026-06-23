/**
 * Centrale bron voor de ISDE-subsidiebedragen (warmtepomp, 2026).
 *
 * Pas de bedragen hier aan als de ISDE-regeling wijzigt; alle pagina's, de
 * keuzehulp, de FAQ en de blog verwijzen naar deze constanten in plaats van
 * de bedragen los te hardcoden. Let op: dit gaat alléén over de landelijke
 * ISDE-maxima. Gemeentelijke of provinciale regelingen (die toevallig ook
 * €2.500 kunnen zijn) horen hier niet thuis.
 */

/** Maximale ISDE-subsidie voor een (volledig elektrische) lucht-water warmtepomp, in euro's. */
export const ISDE_LUCHT_WATER_MAX = 2500;

/** Maximale ISDE-subsidie voor een hybride warmtepomp, in euro's. */
export const ISDE_HYBRIDE_MAX = 2300;

/** Formatteert een bedrag in hele euro's als bijv. '€2.500' (nl-NL-notatie). */
export function formatEuro(amount: number): string {
  return `€${amount.toLocaleString("nl-NL")}`;
}

/** '€2.500' */
export const ISDE_LUCHT_WATER_MAX_LABEL = formatEuro(ISDE_LUCHT_WATER_MAX);
/** '€2.300' */
export const ISDE_HYBRIDE_MAX_LABEL = formatEuro(ISDE_HYBRIDE_MAX);

/** 'tot €2.500' */
export const ISDE_LUCHT_WATER_MAX_TOT = `tot ${ISDE_LUCHT_WATER_MAX_LABEL}`;
/** 'tot €2.300' */
export const ISDE_HYBRIDE_MAX_TOT = `tot ${ISDE_HYBRIDE_MAX_LABEL}`;
