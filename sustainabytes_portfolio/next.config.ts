

import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/sustainabytes' : '',
  assetPrefix: isProd ? '/sustainabytes/' : '',
  images: { unoptimized: true },
  env: {
    BASE_PATH: isProd ? "/sustainabytes" : "",
  },
  trailingSlash: true,
}
export default nextConfig