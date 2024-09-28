/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'image.tmdb.org', 'plus.unsplash.com'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_TMDB_BASEURL:
      process.env.NEXT_PUBLIC_TMDB_BASEURL || 'https://api.themoviedb.org/3',
  },
}

module.exports = nextConfig
