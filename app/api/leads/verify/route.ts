import { NextResponse } from "next/server";
import { verifyLead } from "@/lib/leads-repository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") ?? "";

  // Markeert de lead als geverifieerd. De interne info@-notificatie is al bij de
  // inzending verstuurd (zie /api/leads), dus hier sturen we niets meer — anders
  // zou info@ een dubbele notificatie krijgen.
  const lead = await verifyLead(token);

  if (!lead) {
    // Onbekend, verlopen of al bevestigd token.
    return NextResponse.redirect(new URL("/aanvraag-bevestigd?status=ongeldig", request.url));
  }

  return NextResponse.redirect(new URL("/aanvraag-bevestigd", request.url));
}
