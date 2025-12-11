/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // App Router is enabled by default in Next.js 13+
  },
}

module.exports = nextConfig