/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Higgsfield's generation CDN. The editorial images referenced from
    // /data/editorial-media.ts are served from here today. See
    // HIGGSFIELD-GENERATED-ASSETS.md for how to download them and switch
    // to local files in /public/images/editorial instead (recommended
    // for long-term stability/performance) — once switched, this entry
    // can be removed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
