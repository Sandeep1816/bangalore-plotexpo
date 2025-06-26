// utils/googleSheet.ts
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || "{}"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const SHEET_ID = process.env.SCAN_SHEET_ID!;

export async function logScanToSheet(ticketId: string, scannedBy?: string) {
  const row = [
    ticketId,
    new Date().toISOString(),
    scannedBy || "Scanner"
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A1", // adjust to your actual sheet name
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}
