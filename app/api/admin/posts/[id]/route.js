import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Protected by middleware.js (matches /api/admin/:path*).

export async function GET(_request, { params }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } })

  if (!post) {
    return NextResponse.json(
      { success: false, message: 'Post not found.' },
      { status: 404 }
    )
  }

  return NextResponse.json({ success: true, post })
}

export async function PUT(request, { params }) {
  const body = await request.json()

  if (!body.title || !body.content || !body.author) {
    return NextResponse.json(
      { success: false, message: 'Title, content, and author are required.' },
      { status: 400 }
    )
  }

  try {
    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        title: body.title,
        excerpt: body.excerpt || '',
        content: body.content,
        coverImage: body.coverImage || null,
        author: body.author,
        tags: Array.isArray(body.tags) ? body.tags : [],
        readTime: Number(body.readTime) || 5,
        ...(body.publishedAt ? { publishedAt: new Date(body.publishedAt) } : {}),
      },
    })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}

export async function DELETE(_request, { params }) {
  try {
    await prisma.post.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}
