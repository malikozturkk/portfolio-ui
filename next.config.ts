import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['cdn.jsdelivr.net'],
  },
};

export default nextConfig;
