// // next.config.mjs

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // Add other settings below as needed
// }

// export default nextConfig


// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["googleapis"],
  },
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
};

export default nextConfig;
