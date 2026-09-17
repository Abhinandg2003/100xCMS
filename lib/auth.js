import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'dev-only-secret-change-me'
)

export const SESSION_COOKIE = 'admin_session'

export async function createSessionToken(username) {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifySessionToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}
