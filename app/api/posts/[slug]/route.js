import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { withCors, corsPreflight } from '@/lib/cors'

// Public, read-only. Consumed by the marketing site's blog post page.
export async function GET(_request, { params }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })

  if (!post) {
    return withCors(NextResponse.json({ message: 'Not found' }, { status: 404 }))
  }

  return withCors(NextResponse.json(post))
}

export async function OPTIONS() {
  return corsPreflight()
}