#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

// Outreach-script: stuurt een samenwerkingsmail naar installateurs per regio.
//
// Gebruik:
//   node scripts/send-outreach.js <regio> [--dry-run]
//
// Voorbeeld:
//   node scripts/send-outreach.js rotterdam --dry-run
//   node scripts/send-outreach.js rotterdam

const path = require("path");
const { Resend } = require("resend");

try {
  process.loadEnvFile(path.join(__dirname, "..", ".env.local"));
} catch {
  // geen .env.local aanwezig (bv. in CI) of variabelen al via de environment gezet
}

const FROM = "Michael Streur - warmtepomp.ai <partners@warmtepomp.ai>";
const BCC = "info@warmtepomp.ai";
const SUBJECT = "Samenwerking warmtepomp leads via warmtepomp.ai";

function buildBody(regioLabel) {
  return `Geachte heer/mevrouw,

Mijn naam is Michael Streur, ik ben de oprichter van warmtepomp.ai — een onafhankelijk vergelijkingsplatform voor warmtepompen in Nederland.

Via onze site genereren we leads van huiseigenaren in de regio ${regioLabel} die actief op zoek zijn naar een warmtepomp. We zijn op zoek naar gecertificeerde installateurs die deze leads willen ontvangen.

De samenwerking werkt simpel:
- U ontvangt gekwalificeerde leads uit uw regio
- Vaste vergoeding per doorgestuurde aanvraag
- Geen abonnement, geen verplichtingen

Bekijk onze site op warmtepomp.ai

Interesse? Ik hoor graag van u.

Met vriendelijke groet,
Michael Streur
warmtepomp.ai
partners@warmtepomp.ai`;
}

// Per regio: label (gebruikt in de mailtekst) + lijst installateurs.
// Voeg hier later nieuwe regio's toe.
const REGIONS = {
  rotterdam: {
    label: "Rotterdam",
    installateurs: [
      { naam: "Vos Klimaattechniek", email: "info@vosklimaattechniek.nl" },
      { naam: "Lemij Klimaattechniek", email: "info@lemij.nl" },
      { naam: "M. Schroevers Installatiebedrijf", email: "info@mschroevers.nl" },
      { naam: "Warmtepomp Rotterdam", email: "info@warmtepomprotterdam.com" },
      { naam: "De Eilanden Installatietechniek", email: "info@de-eilanden.nl" },
      { naam: "Heijkoop Installatietechniek", email: "info@heijkoopinstallatietechniek.nl" },
      { naam: "De Warmtemeester", email: "info@dewarmtemeester.nl" },
      { naam: "WarmteMeesters", email: "verkoop@warmtemeesters.nl" },
      { naam: "Holland Warmte", email: "info@hollandwarmte.nl" },
      { naam: "Warmgarant", email: "info@warmgarant.nl" },
    ],
  },
  utrecht: {
    label: "Utrecht",
    installateurs: [
      { naam: "Warmtepomp Specialist Utrecht", email: "info@warmtepompspecialist-utrecht.nl" },
      { naam: "Caan Installatie & Afbouw", email: "info@caaninstallatie.nl" },
      { naam: "Warmtewerk", email: "info@warmtewerk.nl" },
      { naam: "Jos-Tech", email: "info@jos-tech.nl" },
      { naam: "Heuvelrug Techniek", email: "info@heuvelrugtechniek.nl" },
    ],
  },
  "den-haag": {
    label: "Den Haag",
    installateurs: [
      { naam: "GUNST Warmtetechniek", email: "info@gunstwarmtetechniek.nl" },
      { naam: "Installatiebedrijf Pepijn", email: "info@installatiebedrijfpepijn.nl" },
      { naam: "Leenards Warmte- en Luchttechniek", email: "cv@leenards.nl" },
    ],
  },
  eindhoven: {
    label: "Eindhoven",
    installateurs: [
      { naam: "A.J. Loots", email: "info@ajloots.nl" },
      { naam: "Eindhoven Warmtepomp", email: "info@eindhovenwarmtepomp.com" },
      { naam: "Van Berkum", email: "info@van-berkum.nl" },
      { naam: "Elektro Service Eindhoven", email: "info@elektroserviceeindhoven.nl" },
      { naam: "Kemkens", email: "verkoop@kemkens.nl" },
    ],
  },
  almere: {
    label: "Almere",
    installateurs: [
      { naam: "Blauw Klimaat", email: "info@blauwklimaat.nl" },
      { naam: "Hartman Installatie", email: "verkoop@hartman-installatie.nl" },
      { naam: "Jansen van de Grift Klimaattechniek", email: "info@jansenvandegrift.com" },
      { naam: "Warmteservice Almere", email: "almere@warmteservice.nl" },
      { naam: "HQ Projects", email: "info@installatiebedrijf-hqprojects.nl" },
    ],
  },
  haarlem: {
    label: "Haarlem",
    installateurs: [
      { naam: "Haarlem Warmtepomp", email: "info@haarlemwarmtepomp.nl" },
      { naam: "Kapitein BV", email: "info@kapiteinbv.nl" },
      { naam: "Warmland", email: "info@warmland.nl" },
      { naam: "HvH Installatietechniek", email: "info@hvh.nu" },
      { naam: "Vinkesteyn Verwarmingstechniek", email: "info@vinkesteyn.nl" },
    ],
  },
  leiden: {
    label: "Leiden",
    installateurs: [
      { naam: "Slim van het Gas Af", email: "info@slimvanhetgasaf.nl" },
      { naam: "P. Brandt Installatiebedrijf", email: "info@pbrandtinstallatiebedrijf.nl" },
      { naam: "Aqua Meijers", email: "info@aquameijers.nl" },
      { naam: "Van Dorp Leiden", email: "infoleiden@vandorp.eu" },
      { naam: "Deba Installatietechniek", email: "info@deba-installatietechniek.nl" },
      { naam: "Schouten Hazerswoude", email: "info@schoutenhazerswoude.nl" },
    ],
  },
  zaandam: {
    label: "Zaandam",
    installateurs: [
      { naam: "Warmland", email: "info@warmland.nl" },
      { naam: "Morsman Installatietechniek", email: "info@morsman.nl" },
      { naam: "EKS Installatie Management", email: "j.mandjes@eks.nl" },
    ],
  },
  purmerend: {
    label: "Purmerend",
    installateurs: [
      { naam: "Klimatcool", email: "info@klimatcool.nl" },
      { naam: "Good On-e", email: "info@goodon-e.nl" },
      { naam: "Installatiebedrijf Dekker", email: "info@installatiebedrijfdekker.nl" },
      { naam: "DS Service", email: "info@ds-service.nl" },
    ],
  },
  groningen: {
    label: "Groningen",
    installateurs: [
      { naam: "Feenstra Groningen", email: "groningen@feenstra.com" },
      { naam: "ZPN Duurzaam", email: "info@zpnduurzaam.nl" },
      { naam: "Airco Warmtepompen Service Groningen", email: "airco@aircoservicegroningen.nl" },
      { naam: "Halmtech Installatietechniek", email: "info@halmtech.nl" },
      { naam: "Van der Doorn Installatietechniek", email: "vddtechniek@hotmail.com" },
    ],
  },
  tilburg: {
    label: "Tilburg",
    installateurs: [
      { naam: "Dion Ketelaars Installatietechniek", email: "info@dionketelaars.nl" },
      { naam: "De Groot Service", email: "info@degrootservice.nl" },
      { naam: "P. van Erve Installatiebedrijf", email: "info@vanervetilburg.nl" },
      { naam: "Tegro", email: "info@tegro.nl" },
      { naam: "Eltechno Klimaat", email: "info@eltechno.nl" },
    ],
  },
  breda: {
    label: "Breda",
    installateurs: [
      { naam: "Dawood Koeltechniek", email: "info@dawood.nl" },
      { naam: "Installatiebedrijf v.d. Goorbergh", email: "info@installatiebedrijfvdgoorbergh.nl" },
      { naam: "BSI Breda", email: "info@bsibreda.nl" },
      { naam: "Warmteservice Breda", email: "breda@warmteservice.nl" },
      { naam: "Voltalux", email: "info@voltalux.nl" },
    ],
  },
  nijmegen: {
    label: "Nijmegen",
    installateurs: [
      { naam: "Bröker Installatietechniek", email: "info@brokerinstallatie.nl" },
      { naam: "Klimaland", email: "info@klimaland.nl" },
      { naam: "Warmteservice Nijmegen", email: "nijmegen@warmteservice.nl" },
      { naam: "Warmtepomp Nijmegen", email: "info@warmtepompnijmegen.com" },
    ],
  },
  enschede: {
    label: "Enschede",
    installateurs: [
      { naam: "Eek Installatietechniek", email: "info@eekinstallatietechniek.nl" },
      { naam: "Michorius", email: "info@michorius.com" },
      { naam: "Sardo Bouw & Installatie", email: "info@sardoinstallatie.nl" },
      { naam: "Warmteservice Enschede", email: "enschede@warmteservice.nl" },
      { naam: "Warmtepomp Enschede", email: "info@warmtepompenschede.com" },
    ],
  },
  zwolle: {
    label: "Zwolle",
    installateurs: [
      { naam: "Nijmeijer Koelt", email: "info@nijmeijerkoelt.nl" },
      { naam: "Een Duurzaam Thuis", email: "info@eenduurzaamthuis.nl" },
      { naam: "Warmteservice Zwolle", email: "zwolle@warmteservice.nl" },
      { naam: "Doldersum Warmtepompen", email: "info@doldersumwarmtepompen.nl" },
    ],
  },
  amersfoort: {
    label: "Amersfoort",
    installateurs: [
      { naam: "Bartels Installatie", email: "info@bartelsinstallatie.nl" },
      { naam: "Clima Energy", email: "info@climaenergy.nl" },
      { naam: "Warmteservice Amersfoort", email: "amersfoort@warmteservice.nl" },
      { naam: "Warmtepomp Amersfoort", email: "info@warmtepompamersfoort.com" },
    ],
  },
  apeldoorn: {
    label: "Apeldoorn",
    installateurs: [
      { naam: "Warmtepomp Apeldoorn", email: "info@warmtepompapeldoorn.com" },
      { naam: "T&P Technology", email: "info@tptechnology.nl" },
      { naam: "Warmteservice Apeldoorn", email: "apeldoorn@warmteservice.nl" },
      { naam: "WKZ Totaalinstallateur", email: "info@wkz.nl" },
    ],
  },
  dordrecht: {
    label: "Dordrecht",
    installateurs: [
      { naam: "ICD Techniek", email: "info@icdtechniek.nl" },
      { naam: "Van Dijk Installaties", email: "info@vandijk-installaties.nl" },
      { naam: "Nestor Service", email: "info@nestorservice.nl" },
      { naam: "Warmteservice Dordrecht", email: "dordrecht@warmteservice.nl" },
      { naam: "Blokland Installatietechniek", email: "dave@bloklandinstallatie.nl" },
    ],
  },
  zoetermeer: {
    label: "Zoetermeer",
    installateurs: [
      { naam: "Brenders Installatietechniek", email: "info@brendersinstallatietechniek.nl" },
      { naam: "Verbaan Installatiebedrijf", email: "info@verbaaninstallatie.nl" },
      { naam: "Warmteservice Zoetermeer", email: "zoetermeer@warmteservice.nl" },
      { naam: "CV-techniek (Polet Warmtepomptechniek)", email: "info@cvtechniek.nl" },
    ],
  },
  maastricht: {
    label: "Maastricht",
    installateurs: [
      { naam: "Comfort Partners", email: "info@comfort-partners.nl" },
      { naam: "Besems Installaties", email: "info@besemsinstallaties.nl" },
      { naam: "Warmteservice Maastricht", email: "maastricht@warmteservice.nl" },
      { naam: "AA Installaties", email: "info@aa-installaties.nl" },
    ],
  },
  "den-bosch": {
    label: "Den Bosch",
    installateurs: [
      { naam: "Gasservice Brabant", email: "info@gasservice-brabant.nl" },
      { naam: "Warmteservice Den Bosch", email: "denbosch@warmteservice.nl" },
      { naam: "Warmtepomp Specialist Noord-Brabant", email: "info@warmtepompspecialist-noordbrabant.nl" },
      { naam: "Warmtecentrum Brabant", email: "info@warmtecentrumbrabant.nl" },
    ],
  },
  alkmaar: {
    label: "Alkmaar",
    installateurs: [
      { naam: "Joost Beers Installatietechniek", email: "info@joostbeers.nl" },
      { naam: "Van Langen Installatietechniek", email: "info@vanlangen.nl" },
      { naam: "Coppens Alkmaar", email: "info@coppensalkmaar.nl" },
      { naam: "Kusch Alkmaar", email: "info@kuschalkmaar.nl" },
    ],
  },
  delft: {
    label: "Delft",
    installateurs: [
      { naam: "BOAS Installatietechniek", email: "info@boasinstallatietechniek.nl" },
      { naam: "HanVos Installaties", email: "info@hanvosinstallaties.nl" },
      { naam: "Aktie Totaalinstallateurs", email: "info@aktiebv.nl" },
      { naam: "Warmtepomp Specialist Zuid-Holland", email: "info@warmtepompspecialist-zuidholland.nl" },
    ],
  },
  hoorn: {
    label: "Hoorn",
    installateurs: [
      { naam: "EKI Techniek", email: "info@eki-techniek.nl" },
      { naam: "Warmteservice Hoorn", email: "hoorn@warmteservice.nl" },
      { naam: "Totaal Verduurzamen", email: "info@totaalgebouwbeheer.nl" },
      { naam: "Gisa Installatietechniek", email: "info@gisa.nl" },
    ],
  },
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const regioKey = process.argv[2];
  const dryRun = process.argv.includes("--dry-run");

  if (!regioKey || !REGIONS[regioKey]) {
    console.error(`Geef een geldige regio op. Beschikbaar: ${Object.keys(REGIONS).join(", ")}`);
    process.exit(1);
  }

  if (!dryRun && !process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY ontbreekt in de environment.");
    process.exit(1);
  }

  const regio = REGIONS[regioKey];
  const body = buildBody(regio.label);
  const resend = dryRun ? null : new Resend(process.env.RESEND_API_KEY);

  console.log(`Outreach voor regio ${regio.label}: ${regio.installateurs.length} installateurs.`);

  for (const installateur of regio.installateurs) {
    if (dryRun) {
      console.log(`[dry-run] zou mail sturen naar ${installateur.naam} <${installateur.email}>`);
    } else {
      try {
        const { data, error } = await resend.emails.send({
          from: FROM,
          to: installateur.email,
          bcc: BCC,
          subject: SUBJECT,
          text: body,
        });

        if (error) {
          console.error(`✗ ${installateur.naam} <${installateur.email}> — fout: ${error.message}`);
        } else {
          console.log(`✓ ${installateur.naam} <${installateur.email}> verstuurd (id: ${data?.id})`);
        }
      } catch (err) {
        console.error(`✗ ${installateur.naam} <${installateur.email}> — fout: ${err.message}`);
      }
    }

    await sleep(2000);
  }

  console.log("Klaar.");
}

main();
