import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取用户的国家代码
  const country = (request as any).geo?.country || 'US'
  
  // 获取当前路径
  const pathname = request.nextUrl.pathname
  
  // 如果用户来自日本且当前不在日语路径下
  if (country === 'JP' && !pathname.startsWith('/ja')) {
    // 构建日语版本的URL
    let jaPath = '/ja'
    
    // 根据当前路径映射到日语版本
    if (pathname === '/') {
      jaPath = '/ja'
    } else if (pathname.startsWith('/news')) {
      jaPath = '/ja/news'
    } else if (pathname.startsWith('/media')) {
      jaPath = '/ja/media'
    } else if (pathname.startsWith('/guides')) {
      jaPath = '/ja/guides'
    } else if (pathname.startsWith('/privacy-policy')) {
      jaPath = '/ja/privacy-policy'
    } else if (pathname.startsWith('/terms-of-service')) {
      jaPath = '/ja/terms-of-service'
    }
    
    // 重定向到日语版本
    return NextResponse.redirect(new URL(jaPath, request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (static images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
} 