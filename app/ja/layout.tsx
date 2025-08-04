import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '昭和アメリカンストーリー - 公式サイト',
  description: '日本とアメリカの文化が融合したポストアポカリプスアクションRPG。チョウコの復讐の旅に参加しよう。',
  keywords: '昭和アメリカンストーリー, NEKCOM, RPG, アクションゲーム, ポストアポカリプス, 日本文化, アメリカ文化, チョウコ, ビデオゲーム',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://showa-american-story.com'),
  alternates: {
    canonical: '/ja',
    languages: {
      'en': '/',
      'ja': '/ja',
    },
  },
  openGraph: {
    title: '昭和アメリカンストーリー - 公式サイト',
    description: '日本とアメリカの文化が融合したポストアポカリプスアクションRPG。',
    url: 'https://showa-american-story.com/ja',
    siteName: '昭和アメリカンストーリー',
    images: [
      {
        url: '/images/showa-logo.svg',
        width: 1200,
        height: 630,
        alt: '昭和アメリカンストーリー',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '昭和アメリカンストーリー - 公式サイト',
    description: '日本とアメリカの文化が融合したポストアポカリプスアクションRPG。',
    images: ['/images/showa-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 