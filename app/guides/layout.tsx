import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Information - Showa American Story',
  description: 'Everything you need to know about Showa American Story - system requirements, platforms, and how to get the game.',
  keywords: 'Showa American Story system requirements, platforms, PC, PlayStation, Steam, NEKCOM Games, game information',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'Game Information - Showa American Story',
    description: 'Everything you need to know about Showa American Story - system requirements, platforms, and how to get the game.',
    url: 'https://showa-american-story.com/guides',
  },
  twitter: {
    title: 'Game Information - Showa American Story',
    description: 'Everything you need to know about Showa American Story - system requirements, platforms, and how to get the game.',
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 