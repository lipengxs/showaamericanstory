import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゲーム情報 - 昭和アメリカンストーリー',
  description: '昭和アメリカンストーリーについて知っておくべきすべて - システム要件、プラットフォーム、ゲームの入手方法。',
  keywords: '昭和アメリカンストーリー システム要件, プラットフォーム, PC, PlayStation, Steam, NEKCOM Games, ゲーム情報',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  metadataBase: new URL('https://showa-american-story.com'),
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  alternates: {
    canonical: '/ja/guides',
    languages: {
      'en': '/guides',
      'ja': '/ja/guides',
    },
  },
  openGraph: {
    title: 'ゲーム情報 - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーについて知っておくべきすべて - システム要件、プラットフォーム、ゲームの入手方法。',
    url: 'https://showa-american-story.com/ja/guides',
  },
  twitter: {
    title: 'ゲーム情報 - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーについて知っておくべきすべて - システム要件、プラットフォーム、ゲームの入手方法。',
  },
}

export default function JapaneseGuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 