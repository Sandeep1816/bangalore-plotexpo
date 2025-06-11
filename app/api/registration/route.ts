import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
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

    // Ensure required fields are present
    if (!name || !workEmail || !phoneNumber || !companyName || !jobTitle || !termsAccepted) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail content
    const mailOptions = {
      from: `"BPE " <${process.env.EMAIL_USER}>`,
      to: "avalasandeep02@gmail.com,annu@mindsquaremedia.com", // Replace as needed
      subject: "BPE Registration Enquiry",
      html: `
        <h3>BPE Registration</h3> 
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
