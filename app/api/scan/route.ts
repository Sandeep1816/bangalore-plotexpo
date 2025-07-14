export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { logScanToSheet } from "@/app/utils/googleSheet";

export async function POST(req: NextRequest) {
  try {
    const body = await safeJson(req);

    if (!body) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { ticketId, scannedBy } = body;

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

// 🛡️ helper to safely parse JSON
async function safeJson(req: NextRequest) {
  try {
    return await req.json();
  } catch {
    return null;
  }
}
