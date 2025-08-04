'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  useEffect(() => {
    // 根据路径设置html lang属性
    const isJapanese = pathname.startsWith('/ja')
    document.documentElement.lang = isJapanese ? 'ja' : 'en'
  }, [pathname])

  return <>{children}</>
} 