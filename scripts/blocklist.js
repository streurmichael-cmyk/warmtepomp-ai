// Gedeelde blocklist voor de scraper- én draftstap.
//
// Doel: voorkom dat grote ketens, fabrikanten, energieleveranciers,
// vergelijkers/lead-gen-netwerken en niet-lokale spelers een outreach-concept
// krijgen. Matching is case-insensitive op BEDRIJFSNAAM (substring) ÉN op
// e-mail/website-DOMEIN (exacte host of subdomein daarvan).
//
// Gebruik:
//   const { isBlocked, blockReason } = require("./blocklist");
//   if (isBlocked({ naam, email })) continue;

// Bekende ketens, fabrikanten, energieleveranciers, groothandels en
// vergelijkers/webshops. Substring-match op de bedrijfsnaam.
const BLOCKED_NAMES = [
  // Energieleveranciers
  "Eneco",
  "Vattenfall",
  "Essent",
  "Engie",
  // Ketens / landelijke dienstverleners
  "Feenstra",
  "Warmteservice",
  "Van Dorp",
  "Kemkens",
  "Comfort Partners",
  // Lead-gen/SEO-netwerk met provincie-brede "specialist"-sites
  "Warmtepomp Specialist",
  // Fabrikanten / merken
  "Bosch",
  "Daikin",
  "Mitsubishi",
  "Nathan",
  "Remeha",
  "Vaillant",
  "ATAG",
  "Intergas",
  "Itho",
  "Quatt",
  "Tonzon",
  // Vergelijkers
  "Pricewise",
  "Independer",
];

// Geblokkeerde domeinen (host of subdomein). Vangt o.a. de
// warmtepomp{stad}.com-familie (lead-gen/SEO-netwerk, deels bouncende adressen)
// en geeft de naam-gebaseerde ketens een tweede, hardere matchsleutel.
const BLOCKED_DOMAINS = [
  // Ketens / niet-lokaal
  "warmteservice.nl",
  "vandorp.eu",
  "kemkens.nl",
  "feenstra.com",
  "comfort-partners.nl",
  // "Warmtepomp Specialist"-sites
  "warmtepompspecialist-noordbrabant.nl",
  "warmtepompspecialist-zuidholland.nl",
  "warmtepompspecialist-utrecht.nl",
  // warmtepomp{stad}.com lead-gen/SEO-netwerk (incl. eerder gebouncte adressen)
  "eindhovenwarmtepomp.com",
  "warmtepompnijmegen.com",
  "warmtepompenschede.com",
  "warmtepompamersfoort.com",
  "warmtepompapeldoorn.com",
  "warmtepompamsterdam.com",
  "warmtepompzaandam.com",
];

function domainOf(email) {
  if (!email) return "";
  const at = email.indexOf("@");
  return (at === -1 ? email : email.slice(at + 1)).trim().toLowerCase();
}

/** Geeft de reden van blokkade terug, of null als niet geblokkeerd. */
function blockReason({ naam = "", email = "" } = {}) {
  const lowerNaam = naam.toLowerCase();
  for (const name of BLOCKED_NAMES) {
    if (lowerNaam.includes(name.toLowerCase())) return `naam bevat "${name}"`;
  }
  const domain = domainOf(email);
  for (const d of BLOCKED_DOMAINS) {
    const dl = d.toLowerCase();
    if (domain === dl || domain.endsWith(`.${dl}`)) return `domein ${d}`;
  }
  return null;
}

function isBlocked(entry) {
  return blockReason(entry) !== null;
}

const api = { BLOCKED_NAMES, BLOCKED_DOMAINS, isBlocked, blockReason, domainOf };

// Dual-use: Node (require) én browser (window.blocklist, voor scripts/review.html).
if (typeof module !== "undefined" && module.exports) {
  module.exports = api;
}
if (typeof window !== "undefined") {
  window.blocklist = api;
}
