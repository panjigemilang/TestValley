/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
      },
    ],
  },
}
export default nextConfig
