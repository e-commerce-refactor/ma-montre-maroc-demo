/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.shopify.com', 'mamontre.ma'],
  },
};

module.exports = nextConfig;
