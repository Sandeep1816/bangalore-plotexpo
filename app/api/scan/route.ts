// import { NextRequest, NextResponse } from "next/server";
// import { logScanToSheet } from "@/app/utils/googleSheet";

// export async function POST(req: NextRequest) {
//   try {
//     if (req.headers.get("content-type") !== "application/json") {
//       return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
//     }

//     const { ticketId, scannedBy } = await req.json();

//     if (!ticketId || !scannedBy) {
//       return NextResponse.json({ error: "Missing ticketId or scannedBy" }, { status: 400 });
//     }

//     await logScanToSheet(ticketId, scannedBy);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error logging scan:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { logScanToSheet } from "@/app/utils/googleSheet";

export async function POST(req: NextRequest) {
  try {
    if (req.headers.get("content-type") !== "application/json") {
      return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
    }

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
