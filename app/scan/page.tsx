// app/scan/page.tsx

import QRScanner from "@/app/components/QRScanner";

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <QRScanner />
    </main>
  );
}