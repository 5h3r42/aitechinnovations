import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-ignore - turbopack options might need type update or ignored if not in types yet
    turbopack: {
      root: __dirname,
    },
  },
  eslint: {
    // We already check linting separately, this ensures build doesn't fail on minor lint warnings if any
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
