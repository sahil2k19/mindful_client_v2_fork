import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

/** Full-device layout: notches, home indicator, pinch-zoom cap for accessibility */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#1a7a6d',
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-parkinsons-dm',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-parkinsons-playfair',
  display: 'swap',
});

export default function RtmsParkinsonsLayout({ children }: { children: ReactNode }) {
  return <div className={`${dmSans.variable} ${playfair.variable}`}>{children}</div>;
}
