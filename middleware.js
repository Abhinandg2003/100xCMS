import { NextResponse } from 'next/server'
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth'

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // The login page itself must stay reachable without a session.
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (session) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    )
  }

  const loginUrl = new URL('/admin/login', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
