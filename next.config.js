/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['avatars.dicebear.com', 'i.pinimg.com']
  }
}

module.exports = nextConfig