export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { logScanToSheet } from "@/app/utils/googleSheet"; // adjust path if needed

export async function POST(req: NextRequest) {
  try {
    const { ticketId, scannedBy } = await req.json();

    if (!ticketId || !scannedBy) {
      return NextResponse.json({ error: "Missing ticketId or scannedBy" }, { status: 400 });
    }

    await logScanToSheet(ticketId, scannedBy);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging scan:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

