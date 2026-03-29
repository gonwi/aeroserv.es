import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from '@/components/providers';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aeroserv | Servicios aeronáuticos y logística industrial',
    template: '%s',
  },
  description: 'Servicios aeronáuticos y logística industrial',
  icons: {
    icon: '/favicon-aeroserv.png',
    apple: '/favicon-aeroserv.png',
    shortcut: '/favicon-aeroserv.png',
  },
  openGraph: {
    siteName: 'Aeroserv',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
