import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import LanguageProvider from '../components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Showa American Story - Official Website',
  description: 'Experience the unique blend of Japanese and American culture in this post-apocalyptic action RPG. Join Chouko on her revenge-fueled journey across Showa America.',
  keywords: 'Showa American Story, NEKCOM, RPG, action game, post-apocalyptic, Japanese culture, American culture, Chouko, video game',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '8efc5c28f3725232',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://showa-american-story.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ja': '/ja',
    },
  },
  openGraph: {
    title: 'Showa American Story - Official Website',
    description: 'Experience the unique blend of Japanese and American culture in this post-apocalyptic action RPG.',
    url: 'https://showa-american-story.com',
    siteName: 'Showa American Story',
    images: [
      {
        url: '/images/showa-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Showa American Story',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showa American Story - Official Website',
    description: 'Experience the unique blend of Japanese and American culture in this post-apocalyptic action RPG.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/showa-logo.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 广告代码 - 确保在所有页面源代码中都能看到 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '52c4d8bf21fcb0528adfac339324941a',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
              };
            `
          }}
        />
        <script src="//www.highperformanceformat.com/52c4d8bf21fcb0528adfac339324941a/invoke.js" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
} 