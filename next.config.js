/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bestillinger",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random",
      },
    ],
  },
};

module.exports = nextConfig;
