import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Showa American Story',
  description: 'Read Showa American Story\'s Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your rights and our data practices.',
  keywords: 'privacy policy, data protection, personal information, Showa American Story, NEKCOM Games',
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