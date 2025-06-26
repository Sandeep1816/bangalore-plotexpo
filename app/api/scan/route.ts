import { NextRequest, NextResponse } from "next/server";
import { logScanToSheet } from "@/app/utils/googleSheet";

export async function POST(req: NextRequest) {
  try {
    const { ticketId, scannedBy } = await req.json();

    if (!ticketId) {
      return new NextResponse("Missing ticketId", { status: 400 });
    }

    await logScanToSheet(ticketId, scannedBy);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging scan:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
