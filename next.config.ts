import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "mgvt7bzfwovleo6c.public.blob.vercel-storage.com",
        port: "",
        pathname: "/Projects/**",
      },
    ],
  },
};

export default nextConfig;
