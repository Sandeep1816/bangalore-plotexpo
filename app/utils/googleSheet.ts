import { google } from "googleapis";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.SCAN_SHEET_ID!;
const SHEET_NAME = "visitor"; // Sheet tab name

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_BASE64!, "base64").toString("utf8")
);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

export async function logScanToSheet(ticketId: string, scannedBy: string) {
  try {
    const client = (await auth.getClient()) as JWT;
    const sheets = google.sheets({ version: "v4", auth: client });

    const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[ticketId, now, scannedBy]],
      },
    });
  } catch (err) {
    console.error("❌ Google Sheet Logging Failed:", err);
    throw err;
  }
}
