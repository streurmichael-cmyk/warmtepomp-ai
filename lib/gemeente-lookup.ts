export type GemeenteInfo = {
  gemeente: string;
  woonplaats: string;
};

type PdokPostcodeDoc = {
  gemeentenaam?: string;
  woonplaatsnaam?: string;
};

/**
 * Zoekt de gemeente op bij een postcode via de publieke, sleutelloze PDOK
 * Locatieserver (BAG-postcodes). Geeft `null` terug als de postcode niet
 * gevonden kan worden.
 */
export async function zoekGemeente(postcode: string): Promise<GemeenteInfo | null> {
  const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?${new URLSearchParams({
    q: postcode,
    fq: "type:postcode",
    rows: "1",
  })}`;

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;

    const data = await res.json();
    const doc: PdokPostcodeDoc | undefined = data?.response?.docs?.[0];
    if (!doc?.gemeentenaam) return null;

    return {
      gemeente: doc.gemeentenaam,
      woonplaats: doc.woonplaatsnaam ?? doc.gemeentenaam,
    };
  } catch (err) {
    console.warn("PDOK gemeente-opzoeken mislukt:", err);
    return null;
  }
}
