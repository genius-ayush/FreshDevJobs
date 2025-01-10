import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-south-1.graphassets.com',
        port: '',
        // pathname: '/clyfgge6609ki06o201991bwc/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
