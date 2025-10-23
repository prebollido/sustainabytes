import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                // enables static export
  images: { unoptimized: true },   // GitHub Pages can't optimize images
  basePath: '/sustainabytes_portfolio',    // your repo name
  assetPrefix: '/sustainabytes_portfolio/', // your repo name
};

export default nextConfig;

