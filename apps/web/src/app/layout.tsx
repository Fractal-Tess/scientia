import '@repo/ui/globals.css';

import { Inter } from 'next/font/google';

import { TRPCReactProvider } from '$/trpc/react';
import { PropsWithChildren } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = {
  title: 'Home',
  description: 'Boilerplate app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{props.children}</TRPCReactProvider>
      </body>
    </html>
  );
}
