import { type NextRequest, NextResponse } from "next/server";
import { pingIndexNow } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  if (!process.env.INDEXNOW_KEY) {
    return NextResponse.json({ error: "INDEXNOW_KEY niet ingesteld" }, { status: 500 });
  }

  // Optionele body: { "urls": ["/offerte", ...] }. Zonder geldige body wordt de homepage gemeld.
  let urls: string[] | undefined;
  try {
    const body = await request.json();
    if (Array.isArray(body?.urls)) {
      urls = body.urls.filter((u: unknown): u is string => typeof u === "string");
    }
  } catch {
    // Geen of ongeldige JSON-body → standaardgedrag (homepage).
  }

  const success = await pingIndexNow(urls && urls.length > 0 ? urls : undefined);
  return NextResponse.json({ success });
}
