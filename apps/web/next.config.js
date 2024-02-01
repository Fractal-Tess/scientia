/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');
import nextPwa from '@ducanh2912/next-pwa';

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development' // Remove console.log in production
  },
  transpilePackages: ['@repo/ui']
};

const withPWA = nextPwa({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true
  }
});

// Export the combined configuration for Next.js with PWA support
const config = withPWA(nextConfig);

export default config;
