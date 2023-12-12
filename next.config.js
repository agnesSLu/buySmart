/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://buysmart-backend.onrender.com",
  },
  images: {
      domains: ["m.media-amazon.com"],
    },
  };
  
  module.exports = nextConfig;