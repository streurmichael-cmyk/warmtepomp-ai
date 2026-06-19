/**
 * Forwarding-toestemming (AVG): de bezoeker geeft toestemming om zijn gegevens met
 * installateurs te delen door expliciet "Vraag offertes aan" te kiezen, mét de
 * onderstaande disclosure zichtbaar. Die affirmatieve handeling leg ik vast.
 *
 * Bump de versie zodra de disclosure-tekst wijzigt, zodat ik per lead kan aantonen
 * wélke tekst de bezoeker zag bij akkoord. De tekst hier is de enige bron: het
 * formulier rendert dezelfde constante, zodat getoonde en vastgelegde tekst niet
 * uit elkaar lopen.
 */
export const FORWARDING_CONSENT_VERSION = "2026-06-19";

export const FORWARDING_CONSENT_TEXT =
  "Je gegevens worden gedeeld met gecertificeerde installateurs om je offerte te kunnen versturen. Ik verkoop ze nooit aan derden voor marketingdoeleinden. Maximaal 3 installateurs nemen contact op.";
