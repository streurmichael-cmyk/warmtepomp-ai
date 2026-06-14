import { NextResponse } from "next/server";
import { verifyLead } from "@/lib/leads-repository";
import { sendLeadNotification } from "@/lib/lead-emails";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") ?? "";

  const lead = await verifyLead(token);

  if (!lead) {
    // Onbekend, verlopen of al bevestigd token.
    return NextResponse.redirect(new URL("/aanvraag-bevestigd?status=ongeldig", request.url));
  }

  // Lead is nu geverifieerd — pas nu sturen we de interne notificatie.
  await sendLeadNotification(lead);

  return NextResponse.redirect(new URL("/aanvraag-bevestigd", request.url));
}
