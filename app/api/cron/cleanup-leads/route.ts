import { NextResponse } from "next/server";
import { deleteExpiredLeads } from "@/lib/leads-repository";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { count, ids } = await deleteExpiredLeads();

  if (count > 0) {
    console.log(`Opschonen leads: ${count} verlopen lead(s) verwijderd (${ids.join(", ")})`);
  } else {
    console.log("Opschonen leads: geen verlopen leads gevonden");
  }

  return NextResponse.json({ deleted: count });
}
