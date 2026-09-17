import { NextResponse } from 'next/server'
import { SESSION_COOKIE, createSessionToken } from '@/lib/auth'

export async function POST(request) {
  const { username, password } = await request.json()

  const validUsername = process.env.ADMIN_USERNAME
  const validPassword = process.env.ADMIN_PASSWORD

  if (!validUsername || !validPassword) {
    return NextResponse.json(
      {
        success: false,
        message:
          'ADMIN_USERNAME / ADMIN_PASSWORD are not configured on the server.',
      },
      { status: 500 }
    )
  }

  if (username !== validUsername || password !== validPassword) {
    return NextResponse.json(
      { success: false, message: 'Invalid username or password.' },
      { status: 401 }
    )
  }

  const token = await createSessionToken(username)

  const response = NextResponse.json({ success: true })
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return response
}
