"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically load QR scanner component without SSR
const QrReader = dynamic<any>(() => import("react-qr-scanner"), { ssr: false });

export default function Scanner() {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleScan = async (result: { text: string } | null) => {
    if (result?.text && result.text !== ticketId) {
      setTicketId(result.text);
      setStatus("Submitting...");

      const res = await fetch("/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticketId: result.text }),
      });

      setStatus(res.ok ? "✅ Scanned Successfully" : "❌ Failed to log scan");
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    setStatus("Scanner Error");
  };

  if (!hasMounted) return null; // Avoid hydration mismatch

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Scan QR</h2>
      <QrReader
        onScan={handleScan}
        onError={handleError}
        style={{ width: "100%" }}
      />
      <p className="mt-4 font-medium">Ticket ID: {ticketId}</p>
      <p className="text-green-600 mt-2">{status}</p>
    </div>
  );
}
