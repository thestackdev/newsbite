const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
