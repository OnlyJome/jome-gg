/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {ignoreDuringBuilds:True}
};
module.exports = nextConfig;