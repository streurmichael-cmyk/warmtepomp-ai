import { NextResponse } from "next/server";
import { zoekWoning } from "@/lib/woning-lookup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get("postcode")?.replace(/\s/g, "").toUpperCase() ?? "";
  const huisnummer = searchParams.get("huisnummer")?.trim() ?? "";

  if (!/^\d{4}[A-Z]{2}$/.test(postcode) || !/^\d+[A-Za-z]?$/.test(huisnummer)) {
    return NextResponse.json({ error: "Ongeldige postcode of huisnummer" }, { status: 400 });
  }

  const woning = await zoekWoning(postcode, huisnummer);
  if (!woning) {
    return NextResponse.json({ found: false });
  }

  return NextResponse.json({ found: true, woning });
}
