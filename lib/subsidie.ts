/**
 * Centrale bron voor de ISDE-subsidiebedragen (warmtepomp, 2026).
 *
 * Pas de bedragen hier aan als de ISDE-regeling wijzigt; alle pagina's, de
 * keuzehulp, de FAQ en de blog verwijzen naar deze constanten in plaats van
 * de bedragen los te hardcoden.
 *
 * Achtergrond (RVO, 2026): de subsidie voor een lucht-water warmtepomp is geen
 * vast bedrag, maar loopt op met het thermisch vermogen. Voor de eerste
 * warmtepomp geldt: €1.025 basis + €225 per kW + €200 energielabelbonus. Een
 * compacte 4 kW-installatie (A+++) komt zo op ±€2.125, een krachtige ~10 kW-unit
 * op ±€3.475. We tonen daarom een range in plaats van één plat bedrag. Minimaal
 * ontvang je €500. Bron: https://www.rvo.nl/subsidies-financiering/isde
 *
 * Let op: gemeentelijke of provinciale regelingen (die toevallig ook €2.500
 * kunnen zijn) horen hier niet thuis.
 */

/** Formatteert een bedrag in hele euro's als bijv. '€2.500' (nl-NL-notatie). */
export function formatEuro(amount: number): string {
  return `€${amount.toLocaleString("nl-NL")}`;
}

/** Indicatieve ondergrens ISDE lucht-water warmtepomp (compacte installatie), in euro's. */
export const ISDE_LUCHT_WATER_MIN = 2000;
/** Indicatieve bovengrens ISDE lucht-water warmtepomp (hoog vermogen), in euro's. */
export const ISDE_LUCHT_WATER_MAX = 3500;

/** '€2.000' */
export const ISDE_LUCHT_WATER_MIN_LABEL = formatEuro(ISDE_LUCHT_WATER_MIN);
/** '€3.500' */
export const ISDE_LUCHT_WATER_MAX_LABEL = formatEuro(ISDE_LUCHT_WATER_MAX);
/** '€2.000 – €3.500' — indicatieve range, afhankelijk van het vermogen. */
export const ISDE_LUCHT_WATER_RANGE = `${ISDE_LUCHT_WATER_MIN_LABEL} – ${ISDE_LUCHT_WATER_MAX_LABEL}`;

/** Maximale ISDE-subsidie voor een hybride warmtepomp, in euro's. */
export const ISDE_HYBRIDE_MAX = 2300;
/** '€2.300' */
export const ISDE_HYBRIDE_MAX_LABEL = formatEuro(ISDE_HYBRIDE_MAX);
/** 'tot €2.300' */
export const ISDE_HYBRIDE_MAX_TOT = `tot ${ISDE_HYBRIDE_MAX_LABEL}`;
