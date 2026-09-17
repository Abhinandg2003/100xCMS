import { NextResponse } from 'next/server'

// Applied to the public /api/posts endpoints so the marketing site
// (running on a different origin/port) can fetch blog data. These are
// read-only, publicly-published content, so allowing any origin is fine —
// don't reuse this on the /api/admin routes.
export function withCors(response) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}

export function corsPreflight() {
  return withCors(new NextResponse(null, { status: 204 }))
}