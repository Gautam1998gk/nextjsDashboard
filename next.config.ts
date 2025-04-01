import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 's3.amazonaws.com',
      },
    ],
  },
  
};

export default nextConfig;
