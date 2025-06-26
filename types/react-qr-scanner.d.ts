declare module "react-qr-scanner" {
  import * as React from "react";

  export interface QrReaderProps {
    onScan: (result: { text: string } | null) => void;
    onError: (error: any) => void;
    style?: React.CSSProperties;
    delay?: number;
    facingMode?: string;
    legacyMode?: boolean;
  }

  const QrReader: React.ComponentType<QrReaderProps>;
  export default QrReader;
}
