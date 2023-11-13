/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // removeConsole: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
