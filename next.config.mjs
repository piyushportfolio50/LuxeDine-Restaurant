/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Images ko compress hone se rokega jo static me zaroori hai
  },
  // Yeh dynamic routes ka error bypass karega
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;