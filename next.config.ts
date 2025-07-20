import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Suppress webpack cache warnings
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default nextConfig;
