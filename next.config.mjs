/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Disable strict mode to avoid double rendering issues
  reactStrictMode: false,
  // Add experimental features to handle network issues better
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Add error handling for network issues
  async rewrites() {
    return {
      fallback: [
        {
          source: '/images/:path*',
          destination: '/placeholder.png?height=400&width=600&text=Image%20non%20disponible',
        },
      ],
    }
  },
}

export default nextConfig
