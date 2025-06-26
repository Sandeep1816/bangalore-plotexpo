"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <p className="mb-6">
        Welcome to the official website of <strong>Mindsquare Media Exhibitions</strong> ("Company", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our websites, services, platforms, and event registrations through Mindsquare or any of our event-specific domains (the "Website").
      </p>

      <ol className="space-y-8 list-decimal pl-5">
        <li>
          <strong>Use of the Website</strong>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Users must be at least 18 years old.</li>
            <li>Use the Website lawfully and ethically.</li>
            <li>We may restrict access for violations.</li>
          </ul>
        </li>

        <li>
          <strong>Event Registration and Participation</strong>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>All bookings are subject to availability and approval.</li>
            <li>Registrations are final upon payment or written confirmation.</li>
            <li>Participants must provide accurate information.</li>
          </ul>
        </li>

        <li>
          <strong>Payment Terms</strong>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Invoices must be paid within 5 business days.</li>
            <li>Accepted methods: bank transfer or approved cards.</li>
          </ul>
        </li>

        <li>
          <strong>Cancellation and Substitution Policy</strong>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>All payments are non-refundable.</li>
            <li>Delegates may nominate a substitute with 48 hours’ notice.</li>
          </ul>
        </li>

        <li>
          <strong>Event Changes and Force Majeure</strong>
          <p className="mt-2">Events may be modified due to unforeseen circumstances. Alternatives like virtual events may be provided.</p>
        </li>

        <li>
          <strong>Intellectual Property</strong>
          <p className="mt-2">All website content is protected by law. No content may be reused without permission.</p>
        </li>

        <li>
          <strong>Photography and Media Release</strong>
          <p className="mt-2">Attendees consent to being recorded. Media may be used for promotional purposes.</p>
        </li>

        <li>
          <strong>Privacy and Data Protection</strong>
          <p className="mt-2">Data is handled per our Privacy Policy and relevant laws.</p>
        </li>

        <li>
          <strong>Limitation of Liability</strong>
          <p className="mt-2">We are not liable for damages resulting from website use or event participation.</p>
        </li>

        <li>
          <strong>Indemnification</strong>
          <p className="mt-2">Users agree to indemnify Mindsquare Media from any legal claims or losses.</p>
        </li>

        <li>
          <strong>Governing Law and Jurisdiction</strong>
          <p className="mt-2">These terms are governed by Indian law and subject to Indian courts.</p>
        </li>

        <li>
          <strong>Modifications to Terms</strong>
          <p className="mt-2">We may revise these Terms anytime, effective immediately upon posting.</p>
        </li>
      </ol>

      <div className="mt-10">
        <p>📧 <strong>Email:</strong> <a href="mailto:annu@mindsquaremedia.com" className="text-blue-600">annu@mindsquaremedia.com</a></p>
        <p>📞 <strong>Phone:</strong> 9845114655</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
