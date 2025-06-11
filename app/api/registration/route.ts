import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const typeParam = url.searchParams.get("type") || "";

    // Normalize type
    let typeLabel = "Enquiry Registration"; // Default
    if (typeParam === "exhibitor") typeLabel = "Exhibitor Registration";
    else if (typeParam === "visitor") typeLabel = "Visitor Registration";

    const {
      name,
      workEmail,
      phoneNumber,
      companyName,
      industry,
      jobTitle,
      businessType,
      message,
      termsAccepted,
      marketingConsent,
    } = await req.json();

    // Validate required fields
    if (!name || !workEmail || !phoneNumber || !companyName || !jobTitle || !termsAccepted) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"BPE" <${process.env.EMAIL_USER}>`,
      to: "avalasandeep02@gmail.com,annu@mindsquaremedia.com", // Update with additional recipients if needed
      subject: `New ${typeLabel} - BPE`,
      html: `
        <h2>BPE - ${typeLabel}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${workEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry || "Not specified"}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Request Type:</strong> ${businessType || "Not specified"}</p>
        <p><strong>Message:</strong> ${message || "None"}</p>
        <p><strong>Terms Accepted:</strong> ${termsAccepted ? "Yes" : "No"}</p>
        <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Registration submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
