import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/install.ps1",
        destination:
          "https://raw.githubusercontent.com/mirakuta-dev/mirakuta/main/install.ps1",
      },
    ];
  },
};

export default nextConfig;
