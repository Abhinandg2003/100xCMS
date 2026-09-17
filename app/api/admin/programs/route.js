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
  let slug = base || 'program'
  let suffix = 1

  // eslint-disable-next-line no-await-in-loop
  while (await prisma.program.findUnique({ where: { slug } })) {
    slug = `${base}-${suffix}`
    suffix += 1
  }

  return slug
}

export async function GET() {
  const programs = await prisma.program.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { chapters: true } } },
  })
  return NextResponse.json({ success: true, programs })
}

export async function POST(request) {
  const body = await request.json()

  if (!body.title) {
    return NextResponse.json(
      { success: false, message: 'Title is required.' },
      { status: 400 }
    )
  }

  const slug = await uniqueSlug(slugify(body.slug || body.title))

  const program = await prisma.program.create({
    data: {
      slug,
      title: body.title,
      description: body.description || '',
      coverImage: body.coverImage || null,
      duration: body.duration || null,
      level: body.level || null,
      published: body.published !== false,
      ...(body.metadata !== undefined ? { metadata: body.metadata } : {}),
    },
  })

  return NextResponse.json({ success: true, program })
}
