import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メディア - 昭和アメリカンストーリー',
  description: '昭和アメリカンストーリーの世界をトレーラー、ゲームプレイ動画、美しいスクリーンショットでお楽しみください。',
  keywords: '昭和アメリカンストーリー メディア, トレーラー, スクリーンショット, ゲームプレイ動画, 壁紙, NEKCOM Games',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'メディア - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの世界をトレーラー、ゲームプレイ動画、美しいスクリーンショットでお楽しみください。',
    url: 'https://showa-american-story.com/ja/media',
  },
  twitter: {
    title: 'メディア - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの世界をトレーラー、ゲームプレイ動画、美しいスクリーンショットでお楽しみください。',
  },
}

export default function JapaneseMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 