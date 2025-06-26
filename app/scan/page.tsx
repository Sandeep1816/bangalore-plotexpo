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


"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner() {
  const [ticketId, setTicketId] = useState("");
  const qrCodeRegionId = "qr-reader";
  const scannedBy = "admin"; // Change as needed
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode(qrCodeRegionId);
    html5QrCodeRef.current = html5QrCode;

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    };

    html5QrCode
      .start(
        { facingMode: "environment" }, // Use rear camera
        config,
        async (decodedText) => {
          setTicketId(decodedText);

          try {
            await fetch("/api/log-scan", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ticketId: decodedText, scannedBy }),
            });
          } catch (err) {
            console.error("Logging scan failed:", err);
          }

          await html5QrCode.stop();
        },
        (errorMessage) => {
          console.warn("QR Error:", errorMessage);
        }
      )
      .catch((err) => {
        console.error("Start failed:", err);
      });

    return () => {
      html5QrCodeRef.current?.stop().then(() => {
        html5QrCode.clear();
      });
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Scan QR</h2>
      <div id={qrCodeRegionId} style={{ width: "100%" }} />
      <div className="mt-4">
        <p>
          Ticket ID:{" "}
          {ticketId ? (
            <span className="text-green-600">{ticketId}</span>
          ) : (
            <span className="text-red-600">Waiting for scan...</span>
          )}
        </p>
      </div>
    </div>
  );
}
