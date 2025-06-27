// components/QRScanner.tsx
"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState("");
  const scannedBy = "admin";

  useEffect(() => {
const scanner = new Html5QrcodeScanner(
  "qr-reader",
  {
    fps: 10,
    qrbox: { width: 250, height: 250 },
  },
  false // <-- this is the third required argument: 'verbose'
);
    scanner.render(
      async (decodedText) => {
        setTicketId(decodedText);
        setStatus("Submitting...");

        try {
          const res = await fetch("/api/scan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ticketId: decodedText, scannedBy }),
          });

          if (res.ok) {
            setStatus("✅ Scanned & Logged Successfully");
          } else {
            setStatus("❌ Failed to log scan");
          }
        } catch (err) {
          console.error(err);
          setStatus("❌ Error logging scan");
        }

        await scanner.clear();
      },
      (errorMessage) => console.warn("QR Error:", errorMessage)
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Scan QR Code</h2>
      <div id="qr-reader" style={{ width: "100%" }} />
      <div className="mt-4">
        <p>
          Ticket ID:{" "}
          {ticketId ? (
            <span className="text-green-600">{ticketId}</span>
          ) : (
            <span className="text-red-600">Waiting for scan...</span>
          )}
        </p>
        <p className="mt-2 text-sm">{status}</p>
      </div>
    </div>
  );
}
