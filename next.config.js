/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.skillshare.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
