import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site to `out/` — no server, no Node runtime needed.
  // Deploy target: Cloudflare Pages / Netlify / Vercel.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
