import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ニュース - 昭和アメリカンストーリー',
  description: '昭和アメリカンストーリーの最新ニュース、発表、制作秘話をお届けします。',
  keywords: '昭和アメリカンストーリー ニュース, ゲーム更新, 発表, NEKCOM Games, ゲームニュース',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'ニュース - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの最新ニュース、発表、制作秘話をお届けします。',
    url: 'https://showa-american-story.com/ja/news',
  },
  twitter: {
    title: 'ニュース - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの最新ニュース、発表、制作秘話をお届けします。',
  },
}

export default function JapaneseNewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 