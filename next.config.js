/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add this:
    domains: ['raw.githubusercontent.com'],
  },
  experimental: {
    // Tells Next.js to optimize imports from this package
    optimizePackageImports: ['@phosphor-icons/react'],
  },
}

export default nextConfig
