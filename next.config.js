/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.piaic.org',"blog.liquid.com"],
  },
}

module.exports = nextConfig
