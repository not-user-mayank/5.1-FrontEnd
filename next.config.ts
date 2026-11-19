import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const githubPagesBasePath = "/5.1-FrontEnd";

const nextConfig: NextConfig = {
  output: isProduction ? "export" : undefined,
  basePath: isProduction ? githubPagesBasePath : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
