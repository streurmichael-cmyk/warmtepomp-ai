import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  console.log("Nieuwe lead ontvangen:", data);

  return NextResponse.json({ success: true });
}
