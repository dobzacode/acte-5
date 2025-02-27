import Providers from '@/app/providers';

import AlertBanner from '@/components/sanity/alert-banner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className="min-h-screen brand-theme">
        {draftMode().isEnabled && <AlertBanner />}
        <Providers>{children}</Providers>

        {draftMode().isEnabled && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
