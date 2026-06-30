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

/**
 * Bouwstenen van de ISDE-berekening voor de eerste lucht-water warmtepomp
 * (geverifieerd bij RVO, juni 2026). Formule:
 *   startbedrag + (per kW × vermogen) + (label A+++ ? bonus : 0)
 * Controle: 4 kW + A+++ = 1025 + 225×4 + 200 = €2.125.
 */
export const ISDE_LUCHT_WATER_START = 1025;
/** Subsidie per kW thermisch vermogen, vanaf de 1e kW, in euro's. */
export const ISDE_LUCHT_WATER_PER_KW = 225;
/** Extra bonus bij energielabel A+++, in euro's. */
export const ISDE_LUCHT_WATER_LABEL_BONUS = 200;
/** Vermogensbereik (kW) waarvoor we de calculator aanbieden. */
export const ISDE_LUCHT_WATER_KW_MIN = 1;
export const ISDE_LUCHT_WATER_KW_MAX = 20;

/**
 * Berekent het indicatieve ISDE-subsidiebedrag voor een eerste lucht-water
 * warmtepomp op basis van het thermisch vermogen (kW) en of het toestel
 * energielabel A+++ heeft.
 */
export function berekenIsdeLuchtWater(vermogenKw: number, isAplusplusplus: boolean): number {
  return (
    ISDE_LUCHT_WATER_START +
    ISDE_LUCHT_WATER_PER_KW * vermogenKw +
    (isAplusplusplus ? ISDE_LUCHT_WATER_LABEL_BONUS : 0)
  );
}

/** Maximale ISDE-subsidie voor een hybride warmtepomp, in euro's. */
export const ISDE_HYBRIDE_MAX = 2300;
/** '€2.300' */
export const ISDE_HYBRIDE_MAX_LABEL = formatEuro(ISDE_HYBRIDE_MAX);
/** 'tot €2.300' */
export const ISDE_HYBRIDE_MAX_TOT = `tot ${ISDE_HYBRIDE_MAX_LABEL}`;
