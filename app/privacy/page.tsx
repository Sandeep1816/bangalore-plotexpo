"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        We value your trust and are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your data.
      </p>

      <ol className="space-y-8 list-decimal pl-5">
        <li>
          <strong>Information We Collect</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Personal:</strong> Name, Email, Phone, City, Preferences</li>
            <li><strong>Non-Personal:</strong> IP, Browser type, Time spent, Pages visited</li>
          </ul>
        </li>

        <li>
          <strong>How We Use Your Information</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To provide support and property-related services</li>
            <li>To personalize your experience</li>
            <li>To analyze usage and improve functionality</li>
          </ul>
        </li>

        <li>
          <strong>Sharing Your Information</strong>
          <p className="mt-2">We do not sell your data. It may be shared with trusted partners or legal authorities when required.</p>
        </li>

        <li>
          <strong>Cookies and Tracking</strong>
          <p className="mt-2">We use cookies for preferences and analytics. You can disable cookies via your browser settings.</p>
        </li>

        <li>
          <strong>Data Security</strong>
          <p className="mt-2">We take reasonable measures to protect your information, though no method is 100% secure.</p>
        </li>

        <li>
          <strong>Your Rights</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access, correct, or delete your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </li>

        <li>
          <strong>Third-Party Links</strong>
          <p className="mt-2">Our site may contain links to third-party websites. We are not responsible for their practices.</p>
        </li>

        <li>
          <strong>Changes to Policy</strong>
          <p className="mt-2">We may update this policy. Revisions will be posted on this page.</p>
        </li>

        <li>
          <strong>Contact Us</strong>
          <p className="mt-2">For questions or concerns:</p>
          <p>📧 <a href="mailto:annu@mindsquaremedia.com" className="text-blue-600">annu@mindsquaremedia.com</a></p>
          <p>📍 50 2nd Floor, MM Road, Frazer Town, Bengaluru, Karnataka 560005, India</p>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicy;
