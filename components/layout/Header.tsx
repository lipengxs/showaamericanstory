'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const pathname = usePathname()
  const languageRef = useRef<HTMLDivElement>(null)

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 检测当前语言
  const isJapanese = pathname.startsWith('/ja')
  const currentLanguage = isJapanese ? 'ja' : 'en'

  // 根据当前路径生成对应语言的导航链接
  const getLocalizedPath = (path: string) => {
    if (isJapanese) {
      // 当前是日语，生成日语路径
      if (path === '/') return '/ja'
      return `/ja${path}`
    } else {
      // 当前是英语，生成英语路径
      if (path === '/ja') return '/'
      return path.replace('/ja', '')
    }
  }

  // 获取对应语言的路径
  const getLanguagePath = (targetLanguage: string) => {
    if (targetLanguage === 'ja') {
      // 生成日语路径
      if (pathname === '/') return '/ja'
      if (pathname.startsWith('/ja')) return pathname // 已经在日语路径
      return `/ja${pathname}`
    } else {
      // 生成英语路径
      if (pathname.startsWith('/ja')) {
        const englishPath = pathname.replace('/ja', '')
        return englishPath === '' ? '/' : englishPath
      }
      return pathname
    }
  }

  const navigation = [
    { name: isJapanese ? 'ホーム' : 'Home', href: getLocalizedPath('/') },
    { name: isJapanese ? 'ニュース' : 'News', href: getLocalizedPath('/news') },
    { name: isJapanese ? 'メディア' : 'Media', href: getLocalizedPath('/media') },
    { name: isJapanese ? 'ガイド' : 'Guides', href: getLocalizedPath('/guides') },
  ]

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      href: isJapanese ? (pathname === '/ja' ? '/' : pathname.replace('/ja', '')) : pathname,
      current: currentLanguage === 'en'
    },
    { 
      code: 'ja', 
      name: '日本語', 
      href: isJapanese ? pathname : (pathname === '/' ? '/ja' : `/ja${pathname}`),
      current: currentLanguage === 'ja'
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={getLocalizedPath('/')} className="flex items-center">
              <Image 
                src="/logo.png" 
              alt={isJapanese ? "昭和アメリカンストーリー" : "Showa American Story"}
              width={220}
              height={70}
              className="h-14 w-auto"
                priority
              />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
            </Link>
            ))}
          </nav>

          {/* Right side - Language and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen)
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded hover:bg-gray-800"
              >
                <Globe className="h-5 w-5" />
                <span className="hidden sm:block">{currentLanguage.toUpperCase()}</span>
                <span className={`text-xs transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-xl py-1 z-[9999] border border-gray-700">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={language.href}
                      className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                        language.current 
                          ? 'text-red-400 bg-gray-800 font-semibold' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={() => {
                        setIsLanguageOpen(false)
                      }}
                    >
                      {language.name}
                  </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-md mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 