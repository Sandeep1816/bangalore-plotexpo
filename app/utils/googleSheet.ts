// // utils/googleSheet.ts
// import { google } from "googleapis";

// const auth = new google.auth.GoogleAuth({
//   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || "{}"),
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const sheets = google.sheets({ version: "v4", auth });
// const SHEET_ID = process.env.SCAN_SHEET_ID!;

// export async function logScanToSheet(ticketId: string, scannedBy?: string) {
//   const row = [
//     ticketId,
//     new Date().toISOString(),
//     scannedBy || "Scanner"
//   ];

//   await sheets.spreadsheets.values.append({
//     spreadsheetId: SHEET_ID,
//     range: "Sheet1!A1", // adjust to your actual sheet name
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//       values: [row],
//     },
//   });
// }

// utils/googleSheet.ts
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.SCAN_SHEET_ID!;
const SHEET_NAME = "visitor"; // Make sure this matches your actual sheet tab name

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!.replace(/\\n/g, "\n")),
  scopes: SCOPES,
});

export async function logScanToSheet(ticketId: string, scannedBy: string) {
  const client = (await auth.getClient()) as JWT;
  const sheets = google.sheets({ version: "v4", auth: client });

  const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[ticketId, now, scannedBy]],
      },
    });
  } catch (err) {
    console.error("❌ Failed to write to Google Sheet:", err);
    throw err;
  }
}



