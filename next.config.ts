import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.accernity.com', // ADD THIS ONE (from your error)
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;