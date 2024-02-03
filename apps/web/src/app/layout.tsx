import '@repo/ui/globals.css';

import { Roboto, Fira_Mono } from 'next/font/google';

import { TRPCReactProvider } from '$/trpc/react';
import type { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

const inter = Roboto({
  subsets: ['cyrillic'],
  variable: '--font-roboto',
  weight: ['400', '700']
});
const firaMono = Fira_Mono({
  variable: '--font-fira-mono',
  weight: ['400', '700'],
  subsets: ['cyrillic']
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark'
};

export const metadata: Metadata = {
  generator: 'Next.js',
  manifest: '/manifest.json',
  authors: [
    { name: 'Fractal-Tess', url: 'https://www.github.con/Fractal-Tess' }
  ],
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' }
  ]
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`firaMono ${inter.variable} ${firaMono.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
