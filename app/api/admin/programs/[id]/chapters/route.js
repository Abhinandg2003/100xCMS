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

async function uniqueSlug(programId, base) {
  let slug = base || 'chapter'
  let suffix = 1

  // eslint-disable-next-line no-await-in-loop
  while (
    await prisma.chapter.findUnique({
      where: { programId_slug: { programId, slug } },
    })
  ) {
    slug = `${base}-${suffix}`
    suffix += 1
  }

  return slug
}

export async function GET(_request, { params }) {
  const chapters = await prisma.chapter.findMany({
    where: { programId: params.id },
    orderBy: { order: 'asc' },
  })
  return NextResponse.json({ success: true, chapters })
}

export async function POST(request, { params }) {
  const body = await request.json()

  if (!body.title) {
    return NextResponse.json(
      { success: false, message: 'Title is required.' },
      { status: 400 }
    )
  }

  const program = await prisma.program.findUnique({
    where: { id: params.id },
  })

  if (!program) {
    return NextResponse.json(
      { success: false, message: 'Program not found.' },
      { status: 404 }
    )
  }

  const slug = await uniqueSlug(params.id, slugify(body.slug || body.title))

  // New chapters default to going at the end of the list.
  const last = await prisma.chapter.findFirst({
    where: { programId: params.id },
    orderBy: { order: 'desc' },
  })

  const chapter = await prisma.chapter.create({
    data: {
      programId: params.id,
      slug,
      title: body.title,
      content: body.content || '',
      images: Array.isArray(body.images) ? body.images : [],
      order: (last?.order ?? -1) + 1,
    },
  })

  return NextResponse.json({ success: true, chapter })
}
