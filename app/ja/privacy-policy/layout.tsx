import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー - 昭和アメリカンストーリー',
  description: '昭和アメリカンストーリーのプライバシーポリシーをお読みください。個人情報の収集、使用、保護方法について説明します。',
  keywords: 'プライバシーポリシー, データ保護, 個人情報, 昭和アメリカンストーリー, NEKCOM Games',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'プライバシーポリシー - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーのプライバシーポリシーをお読みください。個人情報の収集、使用、保護方法について説明します。',
    url: 'https://showa-american-story.com/ja/privacy-policy',
  },
  twitter: {
    title: 'プライバシーポリシー - 昭和アメリカンストーリー',
    description: '昭和アメリカンストーリーのプライバシーポリシーをお読みください。個人情報の収集、使用、保護方法について説明します。',
  },
}

export default function JapanesePrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 