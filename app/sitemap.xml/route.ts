// app/sitemap.xml/route.ts

export const runtime = 'edge'; // or "nodejs"

import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.plotexpo.in/</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/about</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/past-event</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/registration?type=exhibitor</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/registration?type=visitor</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/registration?type=enquiry</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/terms</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/privacy</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.plotexpo.in/BPE%20Post%20Event%20Docket%20(2).pdf</loc>
    <lastmod>2025-06-26T12:27:00+00:00</lastmod>
    <priority>0.64</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
