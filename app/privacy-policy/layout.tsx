import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Showa American Story',
  description: 'Read Showa American Story\'s Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your rights and our data practices.',
  keywords: 'privacy policy, data protection, personal information, Showa American Story, NEKCOM Games',
  authors: [{ name: 'NEKCOM Games' }],
  creator: 'NEKCOM Games',
  publisher: 'NEKCOM Games',
  other: {
    'msvalidate.01': 'B362957FC36C5EDDD6079B6D78330424',
    'yandex-verification': '7c53f06929310092',
  },
  openGraph: {
    title: 'Privacy Policy - Showa American Story',
    description: 'Read Showa American Story\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
    url: 'https://showa-american-story.com/privacy-policy',
  },
  twitter: {
    title: 'Privacy Policy - Showa American Story',
    description: 'Read Showa American Story\'s Privacy Policy to understand how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 