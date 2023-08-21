// @ts-check
const { i18n } = require('./next-i18next.config.js');

const nextUtilsConfig = () => {
  const tsconfigPath = process.env.NEXTJS_TSCONFIG_PATH ? process.env.NEXTJS_TSCONFIG_PATH : './tsconfig.json';
  return {
    tsconfigPath,
  };
};
const { tsconfigPath } = nextUtilsConfig();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    esmExternals: 'loose', // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hb.bizmrg.com',
        port: '',
        pathname: '/api_test/**',
      },
    ],
  },
  i18n,
  reactStrictMode: true,
  typescript: { tsconfigPath },
};

module.exports = nextConfig;
