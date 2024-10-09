import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fucina - Website Template',
  description: 'Open source website template',
  keywords: ['Fucina', 'Website Template'],
  metadataBase: new URL('https://www.yourdomain.com'),
  alternates: {
    canonical: 'https://www.yourdomain.com',
  },
  openGraph: {
    title: 'Fucina - Website Template',
    description: 'Open source website template',
    url: 'https://www.yourdomain.com',
    siteName: 'Fucina',
    images: [
      {
        url: 'https://www.yourdomain.com/assets/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.yourdomain.com/assets/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Open source website template',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Fucina - Website Template',
    description: 'Open source website template',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.yourdomain.com/assets/twitter-og.png',
        alt: 'Open source website template',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
