import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Showa American Story',
  description: 'Read Showa American Story\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
  keywords: 'terms of service, legal terms, user agreement, Showa American Story, NEKCOM Games',
  openGraph: {
    title: 'Terms of Service - Showa American Story',
    description: 'Read Showa American Story\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
    url: 'https://showa-american-story.com/terms-of-service',
  },
  twitter: {
    title: 'Terms of Service - Showa American Story',
    description: 'Read Showa American Story\'s Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.',
  },
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 