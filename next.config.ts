import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly set the project root to prevent Next.js from scanning parent directories
  experimental: {
    // This helps with workspace root detection
  },
};

export default nextConfig;
