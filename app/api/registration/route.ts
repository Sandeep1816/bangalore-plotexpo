import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as XLSX from "xlsx";
import { writeFile } from "fs/promises";
import crypto from "crypto";
import os from "os";
import path from "path";
import QRCode from "qrcode";
import { ThankYouEmailHandler } from "@/app/utils/email-template";

const EVENT_NAME = process.env.EVENT_NAME || "Bengaluru Plot Expo 2025";

export async function POST(req: NextRequest) {
  try {
    const type = req.nextUrl.searchParams.get("type") || "visitor";
    const data = await req.json();

    const {
      name,
      workEmail = "",
      phoneNumber = "",
      companyName = "",
      industry = "",
      jobTitle = "",
      businessType = "",
      message = "",
      termsAccepted,
      marketingConsent,
      location = "",
      budget = "",
    } = data;

    const visitorPassId =
      type === "visitor"
        ? `BPE-${crypto.randomBytes(3).toString("hex").toUpperCase()}`
        : "";

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Excel Setup
    const sheetHeader = [
      "Visitor Pass ID", "Name", "Email", "Phone", "Company", "Industry", "Job Title",
      "Business Type", "Message", "Budget", "Location", "Terms Accepted",
      "Marketing Consent", "Submitted At"
    ];

    const sheetRow = [
      visitorPassId, name, workEmail, phoneNumber, companyName, industry,
      jobTitle, businessType, message, budget, location,
      termsAccepted ? "Yes" : "No",
      marketingConsent ? "Yes" : "No", submittedAt,
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([sheetHeader, sheetRow]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    const filePath = path.join(os.tmpdir(), `${type}-registration.xlsx`);
    await writeFile(filePath, buffer);

    // Email Setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST!,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    const adminEmailHtml = `
      <h2>New ${capitalizedType} Registration</h2>
      ${visitorPassId ? `<p><strong>Visitor Pass ID:</strong> ${visitorPassId}</p>` : ""}
      <p><strong>Name:</strong> ${name}</p>
      ${workEmail && `<p><strong>Email:</strong> ${workEmail}</p>`}
      ${phoneNumber && `<p><strong>Phone:</strong> ${phoneNumber}</p>`}
      ${companyName && `<p><strong>Company:</strong> ${companyName}</p>`}
      ${industry && `<p><strong>Industry:</strong> ${industry}</p>`}
      ${jobTitle && `<p><strong>Job Title:</strong> ${jobTitle}</p>`}
      ${businessType && `<p><strong>Business Type:</strong> ${businessType}</p>`}
      ${budget && `<p><strong>Budget:</strong> ${budget}</p>`}
      ${location && `<p><strong>Location:</strong> ${location}</p>`}
      ${message && `<p><strong>Message:</strong> ${message}</p>`}
      <p><strong>Terms Accepted:</strong> ${termsAccepted ? "Yes" : "No"}</p>
      <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
      <p><strong>Submitted At:</strong> ${submittedAt}</p>
    `;

    await transporter.sendMail({
      from: `"${EVENT_NAME}" <no-reply@maxpo.ae>`,
      to: process.env.TO_USER!,
      subject: `New ${capitalizedType} Registration - ${name}`,
      html: adminEmailHtml,
      // attachments: [
      //   {
      //     filename: `${type}-registration.xlsx`,
      //     path: filePath,
      //   },
      // ],
    });

    if (type === "visitor" && workEmail && visitorPassId) {
      const qrData = `Visitor Pass: ${visitorPassId}`;
      const qrImage = await QRCode.toDataURL(qrData);
      // console.log(qrImage)

      await transporter.sendMail({
        from: `"${EVENT_NAME}" <no-reply@maxpo.ae>`,
        to: workEmail,
        subject: `Your Visitor Pass - ${EVENT_NAME}`,
        html: ThankYouEmailHandler({ name, visitorPassId,  }),
      });
    }

    // Google Sheets
    await fetch("https://script.google.com/macros/s/AKfycbzaO0dCaH7oRBWwwqNzfXVZf6bPBKX-xRPEe_qXzsjpwa7jYyyOq9Li2LUV24lX_J26mw/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type, visitorPassId, name, workEmail, phoneNumber, companyName, industry,
        jobTitle, businessType, budget, location, message,
        termsAccepted, marketingConsent, submittedAt,
      }),
    });

    return NextResponse.json({ success: true, visitorPassId });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Failed to submit registration" }, { status: 500 });
  }
}
