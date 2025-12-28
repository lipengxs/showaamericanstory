import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media - Showa American Story',
  description: 'Explore the world of Showa American Story through our collection of trailers, gameplay videos, and stunning screenshots.',
  keywords: 'Showa American Story media, trailers, screenshots, gameplay videos, wallpapers, NEKCOM Games',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  metadataBase: new URL('https://showa-american-story.com'),
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  alternates: {
    canonical: '/media',
    languages: {
      'en': '/media',
      'ja': '/ja/media',
    },
  },
  openGraph: {
    title: 'Media - Showa American Story',
    description: 'Explore the world of Showa American Story through our collection of trailers, gameplay videos, and stunning screenshots.',
    url: 'https://showa-american-story.com/media',
  },
  twitter: {
    title: 'Media - Showa American Story',
    description: 'Explore the world of Showa American Story through our collection of trailers, gameplay videos, and stunning screenshots.',
  },
}

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 