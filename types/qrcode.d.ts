declare module 'qrcode' {
  /**
   * Generates a QR code as a data URL (base64 image).
   * @param text The text to encode into the QR code.
   * @param options Optional options for QR code generation.
   * @returns A promise that resolves to a base64 data URL string.
   */
  export function toDataURL(
    text: string,
    options?: {
      errorCorrectionLevel?: 'low' | 'medium' | 'quartile' | 'high';
      type?: 'image/png' | 'image/jpeg' | 'image/webp';
      quality?: number;
      margin?: number;
      width?: number;
      color?: {
        dark?: string;
        light?: string;
      };
    }
  ): Promise<string>;
}
