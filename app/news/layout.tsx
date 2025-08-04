import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News - Showa American Story',
  description: 'Stay updated with the latest news, announcements, and behind-the-scenes content from the world of Showa American Story.',
  keywords: 'Showa American Story news, game updates, announcements, NEKCOM Games, gaming news',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'News - Showa American Story',
    description: 'Stay updated with the latest news, announcements, and behind-the-scenes content from the world of Showa American Story.',
    url: 'https://showa-american-story.com/news',
  },
  twitter: {
    title: 'News - Showa American Story',
    description: 'Stay updated with the latest news, announcements, and behind-the-scenes content from the world of Showa American Story.',
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 