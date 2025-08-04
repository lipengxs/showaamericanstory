import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 - 昭和アメリカンストーリー',
  description: '昭和アメリカンストーリーの利用規約をお読みください。ゲームとサービスの利用に関するルール、ガイドライン、法的条件について説明します。',
  keywords: '利用規約, 法的条件, ユーザー契約, 昭和アメリカンストーリー, NEKCOM Games',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: '利用規約 - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの利用規約をお読みください。ゲームとサービスの利用に関するルール、ガイドライン、法的条件について説明します。',
    url: 'https://showa-american-story.com/ja/terms-of-service',
  },
  twitter: {
    title: '利用規約 - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーの利用規約をお読みください。ゲームとサービスの利用に関するルール、ガイドライン、法的条件について説明します。',
  },
}

export default function JapaneseTermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 