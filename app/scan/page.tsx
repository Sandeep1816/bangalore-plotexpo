"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import type { Result } from "@zxing/library"; // Optional, for better type safety

const QrReader = dynamic(() => import("react-qr-reader").then((mod) => mod.QrReader), {
  ssr: false,
});

export default function Scanner() {
  const [ticketId, setTicketId] = useState("");
  const [status, setStatus] = useState("");

  const handleScan = async (data: string) => {
    if (data && data !== ticketId) {
      setTicketId(data);
      setStatus("Submitting...");

      try {
        const res = await fetch("/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ticketId: data }),
        });
        setStatus(res.ok ? "✅ Scanned Successfully" : "❌ Failed to log scan");
      } catch (error) {
        setStatus("❌ Network Error");
        console.error(error);
      }
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    setStatus("Scanner Error");
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Scan QR</h2>
      <div className="w-full"> {/* apply layout here instead of to QrReader */}
        <QrReader
          scanDelay={300}
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) handleScan(result.getText());
            if (!!error) handleError(error);
          }}
        />
      </div>
      <p className="mt-4 font-medium">Ticket ID: {ticketId}</p>
      <p className="text-green-600 mt-2">{status}</p>
    </div>
  );
}
