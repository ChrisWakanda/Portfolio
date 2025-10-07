import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Maincontent',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
