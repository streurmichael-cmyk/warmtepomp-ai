import { NextResponse } from "next/server";
import { zoekGemeente } from "@/lib/gemeente-lookup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get("postcode")?.replace(/\s/g, "").toUpperCase() ?? "";

  if (!/^\d{4}[A-Z]{2}$/.test(postcode)) {
    return NextResponse.json({ error: "Ongeldige postcode" }, { status: 400 });
  }

  const gemeente = await zoekGemeente(postcode);
  if (!gemeente) {
    return NextResponse.json({ found: false });
  }

  return NextResponse.json({ found: true, ...gemeente });
}
