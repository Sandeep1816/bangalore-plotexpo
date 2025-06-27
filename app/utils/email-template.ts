const EVENT_NAME = process.env.EVENT_NAME || "Bengaluru Plot Expo 2025";
const EVENT_DATE = process.env.EVENT_DATE || "August 02-03, 2025";
const EVENT_WEBSITE = process.env.EVENT_WEBSITE || "https://www.plotexpo.in/";
const EVENT_EMAIL = process.env.EVENT_EMAIL || "annu@mindsquaremedia.com";

export const ThankYouEmailHandler = ({
  name,
  visitorPassId,
}: {
  name: string;
  visitorPassId: string;
}) => {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(visitorPassId)}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - ${EVENT_NAME}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" style="padding:20px 0;background:#f5f5f5">
    <tr><td align="center">
      <table width="600" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);">
        <tr><td><img src="https://cloud1.email2go.io/4825f2b20fb569c346c060a2f8c31c18/2f670d69bf62c2f1771da273bba15277eb2357d555540dde4e1dc26f0db9d71c.jpg" style="width:100%" /></td></tr>
        <tr><td style="padding:40px 30px;text-align:center;">
          <p style="font-size:18px;"><strong>Hey ${name?.split(" ")[0] || "there"},</strong></p>
          <p>Thank you for registering for <strong style="color:#00214d;">${EVENT_NAME}</strong> on <strong style="color:#fdb714;">${EVENT_DATE}</strong>.</p>
          <p>Please find your visitor pass ID below:</p>
          <div style="background:#fff6e0;padding:20px;border-left:4px solid #fdb714;margin:30px 0;">
            <p style="margin:0;font-size:24px;font-weight:bold;color:#00214d;">${visitorPassId}</p>
          </div>
          <div style="margin:30px 0;">
            <p>Scan this QR code at the entry:</p>
            <img src="${qrImageUrl}" alt="QR Code" style="width:150px;height:150px;" />
          </div>
          <p><strong>Note:</strong> Carry this pass while coming to the exhibition.</p>
          <table style="margin: 20px auto;">
<tr>
  <td style="padding: 0 8px;">
    <a href="https://www.facebook.com/bengaluruplotexpo2025" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e6e9ef; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" style="vertical-align: middle;" />
    </a>
  </td>
  <td style="padding: 0 8px;">
    <a href="https://www.youtube.com/@BengaluruPlotExpo" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e6e9ef; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="24" height="24" style="vertical-align: middle;" />
    </a>
  </td>
  <td style="padding: 0 8px;">
    <a href="https://www.linkedin.com/showcase/bengaluru-plot-expo/" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e6e9ef; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" height="24" style="vertical-align: middle;" />
    </a>
  </td>
  <td style="padding: 0 8px;">
    <a href="https://www.instagram.com/bengaluru_plot_expo/" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e6e9ef; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" style="vertical-align: middle;" />
    </a>
  </td>
</tr>

          </table>
        </td></tr>
        <tr><td style="background:#f5f5f5;padding:30px;text-align:center;border-top:1px solid #ddd;">
          <p style="font-weight:600;">Best Regards,</p>
          <p style="font-weight:700;color:#00214d;">${EVENT_NAME}</p>
          <p><a href="${EVENT_WEBSITE}" style="color:#fdb714;">${EVENT_WEBSITE}</a></p>
          <p>Contact: <a href="mailto:${EVENT_EMAIL}" style="color:#00214d;">${EVENT_EMAIL}</a></p>
        </td></tr>
        <tr><td style="background:#00214d;padding:20px;text-align:center;">
          <p style="color:#fff;font-size:12px;">©️ 2025 ${EVENT_NAME}. All rights reserved.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
};
