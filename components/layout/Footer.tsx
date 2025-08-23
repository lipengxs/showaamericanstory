'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isJapanese = pathname.startsWith('/ja')

  const socialLinks = [
    {
      name: 'Steam',
      href: 'https://store.steampowered.com/app/1687540/Showa_American_Story/',
      icon: '/images/icon-steam.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lipengxs/showaamericanstory',
      icon: '/images/icon-github.svg',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/NEKCOM_SAS',
      icon: '/images/icon-twitter.svg',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UC7oPlGEZ0KUJL2dD13BJ8sQ',
      icon: '/images/icon-youtube.svg',
    },
    {
      name: 'Discord',
      href: 'https://t.co/0GcXP9dsYd',
      icon: '/images/icon-discord.svg',
    },
  ]

  const footerLinks = [
    { name: isJapanese ? 'ホーム' : 'Home', href: isJapanese ? '/ja' : '/' },
    { name: isJapanese ? 'ニュース' : 'News', href: isJapanese ? '/ja/news' : '/news' },
    { name: isJapanese ? 'メディア' : 'Media', href: isJapanese ? '/ja/media' : '/media' },
    { name: isJapanese ? 'ガイド' : 'Guides', href: isJapanese ? '/ja/guides' : '/guides' },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Game Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt={isJapanese ? "昭和アメリカンストーリー" : "Showa American Story"}
              width={220}
              height={70}
              className="h-16 w-auto"
              priority
            />
            <div className="text-sm text-gray-300 space-y-1">
              <p>PlayStation® 4 / PlayStation® 5 / PC</p>
              <p>RPG • Single-player</p>
              <p>Developer: NEKCOM GAMES</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{isJapanese ? 'ナビゲーション' : 'Navigation'}</h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{isJapanese ? 'フォロー' : 'Follow Us'}</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="h-5 w-5"
                    onError={(e) => {
                      console.error(`${social.name} icon failed to load:`, e)
                    }}
                  />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© {currentYear} showa-american-story.com. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href={isJapanese ? '/ja/privacy-policy' : '/privacy-policy'}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isJapanese ? 'プライバシーポリシー' : 'Privacy Policy'}
              </Link>
              <Link
                href={isJapanese ? '/ja/terms-of-service' : '/terms-of-service'}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isJapanese ? '利用規約' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 