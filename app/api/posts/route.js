import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { withCors, corsPreflight } from '@/lib/cors'

// Public, read-only. Consumed by the marketing site's blog listing page.
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { publishedAt: 'desc' },
  })

  return withCors(NextResponse.json({ posts }))
}

export async function OPTIONS() {
  return corsPreflight()
}