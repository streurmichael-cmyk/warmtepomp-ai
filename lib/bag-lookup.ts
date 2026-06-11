import { bouwjaarNaarBracket, oppervlakteNaarBracket, type WoningGegevens } from "./woning-lookup";

const BAG_BASE = "https://api.bag.kadaster.nl/lvbag/individuelebevragingen/v2";

type BagAdres = {
  straatnaam?: string;
  openbareRuimteNaam?: string;
  huisnummer?: number | string;
  huisletter?: string;
  huisnummertoevoeging?: string;
  postcode?: string;
  woonplaatsNaam?: string;
  oppervlakte?: number | string;
  gebruiksdoelen?: string[];
  pandIdentificaties?: string[];
};

type BagPand = {
  oorspronkelijkBouwjaar?: number | string;
  oppervlakte?: number | string;
};

/**
 * Zoekt woninggegevens op via de officiële BAG API van het Kadaster.
 * Vereist de omgevingsvariabele BAG_API_KEY (gratis aan te vragen via
 * https://www.kadaster.nl/zakelijk/producten/adressen-en-gebouwen/bag-api-individuele-bevragingen).
 * Geeft `null` terug als er geen sleutel is, de aanvraag faalt, of er geen resultaat is —
 * de aanroeper valt dan terug op de sleutelloze PDOK-zoekfunctie.
 */
export async function zoekWoningBag(postcode: string, huisnummer: string): Promise<WoningGegevens | null> {
  const apiKey = process.env.BAG_API_KEY;
  if (!apiKey) return null;

  const headers = {
    "X-Api-Key": apiKey,
    Accept: "application/hal+json",
  };

  try {
    const adresUrl = `${BAG_BASE}/adressen?${new URLSearchParams({
      postcode,
      huisnummer,
      exacteMatch: "true",
    })}`;

    const adresRes = await fetch(adresUrl, { headers, signal: AbortSignal.timeout(5000) });
    if (!adresRes.ok) return null;

    const adresData = await adresRes.json();
    const adres: BagAdres | undefined = adresData?._embedded?.adressen?.[0];
    if (!adres) return null;

    const straat = adres.openbareRuimteNaam ?? adres.straatnaam ?? "";
    const nummer = `${adres.huisnummer ?? huisnummer}${adres.huisletter ?? ""}${
      adres.huisnummertoevoeging ?? ""
    }`;
    const plaats = adres.woonplaatsNaam ?? "";

    const result: WoningGegevens = {
      adres: `${straat} ${nummer}, ${adres.postcode ?? postcode} ${plaats}`.replace(/\s+/g, " ").trim(),
      straatnaam: straat || undefined,
      huisnummer: nummer || huisnummer,
      postcode: adres.postcode ?? postcode,
      plaats: plaats || undefined,
    };

    const oppervlakteRaw = Number(adres.oppervlakte);
    if (Number.isFinite(oppervlakteRaw) && oppervlakteRaw > 0) {
      result.oppervlakteM2 = oppervlakteRaw;
      result.oppervlakte = oppervlakteNaarBracket(oppervlakteRaw);
    }

    const gebruiksdoelen = adres.gebruiksdoelen ?? [];
    if (gebruiksdoelen.length > 0 && !gebruiksdoelen.includes("woonfunctie")) {
      // Geen woonfunctie bekend voor dit adres — laat woningtype open, gebruiker kiest zelf.
      return result;
    }

    const pandId = adres.pandIdentificaties?.[0];
    if (pandId) {
      const pandRes = await fetch(`${BAG_BASE}/panden/${pandId}`, {
        headers,
        signal: AbortSignal.timeout(5000),
      });
      if (pandRes.ok) {
        const pandData = await pandRes.json();
        const pand: BagPand | undefined = pandData?._embedded?.pand ?? pandData?.pand;
        const bouwjaarRaw = Number(pand?.oorspronkelijkBouwjaar);
        if (Number.isFinite(bouwjaarRaw) && bouwjaarRaw > 1000) {
          result.bouwjaarJaar = bouwjaarRaw;
          result.bouwjaar = bouwjaarNaarBracket(bouwjaarRaw);
        }
      }
    }

    return result;
  } catch (err) {
    console.warn("BAG-opzoeken mislukt:", err);
    return null;
  }
}
