// /app/api/debug-env/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ NODE_OPTIONS: process.env.NODE_OPTIONS });
}
