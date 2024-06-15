/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddthn74qt",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "a1d4onxk",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
