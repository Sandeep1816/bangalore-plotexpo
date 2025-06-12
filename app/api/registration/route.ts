import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { ThankYouEmailHandler } from "@/app/utils/email-template";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const typeParam = url.searchParams.get("type") || "";

    let typeLabel = "Enquiry Registration";
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

    if (!name || !workEmail || !phoneNumber || !companyName || !jobTitle || !termsAccepted) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

   const visitorPassId = typeParam === "visitor" ? `BPE-${uuidv4().slice(0, 8).toUpperCase()}` : "";


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `BPE <${process.env.EMAIL_USER}>`,
      to: "avalasandeep02@gmail.com,annu@mindsquaremedia.com",
      // to: "avalasandeep02@gmail.com",
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
        <p><strong>Visitor Pass ID:</strong> ${visitorPassId || "N/A"}</p>
        <p><strong>Terms Accepted:</strong> ${termsAccepted ? "Yes" : "No"}</p>
        <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
      `,
    });

    if (typeParam === "visitor") {
      const emailHtml = ThankYouEmailHandler({ name, visitorPassId });
      await transporter.sendMail({
        from: `Future Proptech Summit <${process.env.EMAIL_USER}>`,
        to: workEmail,
        subject: "🎟️ Your Visitor Pass - Future Proptech Summit",
        html: emailHtml,
      });
    }

    return NextResponse.json({ message: "Registration submitted successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
