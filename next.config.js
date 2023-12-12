/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://buy-smart-backend.vercel.app",
  },
  images: {
      domains: ["m.media-amazon.com"],
    },
  };
  
  module.exports = nextConfig;