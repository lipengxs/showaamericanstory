import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Information & System Requirements - Showa American Story',
  description: 'Complete guide to Showa American Story: system requirements for PC, PlayStation platforms, game features, FAQ, and how to get the game. Everything you need to know about this unique Japanese-American fusion RPG.',
  keywords: 'Showa American Story system requirements, PC requirements, PlayStation 5, PlayStation 4, Steam, game features, FAQ, NEKCOM Games, action RPG, post-apocalyptic game, Japanese culture, American culture',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'Game Information & System Requirements - Showa American Story',
    description: 'Complete guide to Showa American Story: system requirements for PC, PlayStation platforms, game features, FAQ, and how to get the game.',
    url: 'https://showa-american-story.com/guides',
    siteName: 'Showa American Story',
    images: [
      {
        url: '/images/Home-960x540.jpeg',
        width: 960,
        height: 540,
        alt: 'Showa American Story Game Information',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Information & System Requirements - Showa American Story',
    description: 'Complete guide to Showa American Story: system requirements for PC, PlayStation platforms, game features, FAQ, and how to get the game.',
    images: ['/images/Home-960x540.jpeg'],
  },
  alternates: {
    canonical: '/guides',
    languages: {
      'en': '/guides',
      'ja': '/ja/guides',
    },
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 