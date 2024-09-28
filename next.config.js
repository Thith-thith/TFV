/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'image.tmdb.org', 'plus.unsplash.com'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings/errors during build
  },
}

module.exports = nextConfig
