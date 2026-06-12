import { NextResponse } from "next/server";
import { pingIndexNow } from "@/lib/indexnow";

export async function POST() {
  if (!process.env.INDEXNOW_KEY) {
    return NextResponse.json({ error: "INDEXNOW_KEY niet ingesteld" }, { status: 500 });
  }

  const success = await pingIndexNow();
  return NextResponse.json({ success });
}
