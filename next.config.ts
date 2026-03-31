import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // makes /out on build (no separate "next export" step)
  trailingSlash: true,        // friendlier for cPanel/Apache
  images: { unoptimized: true } // next/image on static hosts
};

export default nextConfig;
