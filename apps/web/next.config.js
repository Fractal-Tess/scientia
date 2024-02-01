/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');
import nextPwa from 'next-pwa';

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development' // Remove console.log in production
  },
  transpilePackages: ['@repo/ui']
};

// Configuration object tells the next-pwa plugin
const withPWA = nextPwa({
  dest: 'public', // Destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true // Skip waiting for service worker activation
});

// Export the combined configuration for Next.js with PWA support
const config = withPWA(nextConfig);

export default config;
