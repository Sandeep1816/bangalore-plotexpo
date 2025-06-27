
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
      false
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
          console.error("Error logging scan:", err);
          setStatus("❌ Error logging scan");
        }

        await scanner.clear(); // stop scanning after first scan
      },
      (errorMessage) => {
        console.warn("QR Error:", errorMessage);
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Scan Visitor QR Code</h2>
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



// "use client";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";

// const QrReader = dynamic(
//   () => import("@blackbox-vision/react-qr-reader").then((mod) => mod.QrReader),
//   { ssr: false }
// );

// export default function Scanner() {
//   const [ticketId, setTicketId] = useState("");
//   const [status, setStatus] = useState("");

//   const handleResult = async (result: any, error: any) => {
//     if (result?.text && result.text !== ticketId) {
//       setTicketId(result.text);
//       setStatus("Submitting...");

//       try {
//         const res = await fetch("/api/scan", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ticketId: result.text }),
//         });
//         setStatus(res.ok ? "✅ Scanned Successfully" : "❌ Failed to log scan");
//       } catch (err) {
//         console.error(err);
//         setStatus("❌ Network error");
//       }
//     }

//     if (error) {
//       console.error(error);
//       setStatus("❌ Scanner Error");
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto text-center">
//       <h2 className="text-xl font-bold mb-4">Scan QR</h2>
//       <QrReader
//         onResult={handleResult}
//         scanDelay={300}
//         constraints={{ facingMode: { ideal: "environment" } }}
//         containerStyle={{ width: "100%" }}
//         videoStyle={{ width: "100%" }}
//       />
//       <p className="mt-4 font-medium">Ticket ID: {ticketId}</p>
//       <p className="text-green-600 mt-2">{status}</p>
//     </div>
//   );
// }