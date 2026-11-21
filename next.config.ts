import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    '**.run.app',
    '**.googleusercontent.com',
    '**.google.com',
    'localhost',
    '127.0.0.1',
  ],
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  turbopack: {},
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
