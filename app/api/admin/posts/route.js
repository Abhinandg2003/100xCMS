import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Protected by middleware.js (matches /api/admin/:path*).

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

async function uniqueSlug(base) {
  let slug = base || 'post'
  let suffix = 1

  // eslint-disable-next-line no-await-in-loop
  while (await prisma.post.findUnique({ where: { slug } })) {
    slug = `${base}-${suffix}`
    suffix += 1
  }

  return slug
}

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json({ success: true, posts })
}

export async function POST(request) {
  const body = await request.json()

  if (!body.title || !body.content || !body.author) {
    return NextResponse.json(
      { success: false, message: 'Title, content, and author are required.' },
      { status: 400 }
    )
  }

  const slug = await uniqueSlug(slugify(body.slug || body.title))

  const post = await prisma.post.create({
    data: {
      slug,
      title: body.title,
      excerpt: body.excerpt || '',
      content: body.content,
      coverImage: body.coverImage || null,
      author: body.author,
      tags: Array.isArray(body.tags) ? body.tags : [],
      readTime: Number(body.readTime) || 5,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
    },
  })

  return NextResponse.json({ success: true, post })
}
