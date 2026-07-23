import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Serve modern formats when the browser supports them
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
