import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Protected by middleware.js (matches /api/admin/:path*).

export async function GET(_request, { params }) {
  const chapter = await prisma.chapter.findUnique({ where: { id: params.id } })

  if (!chapter) {
    return NextResponse.json(
      { success: false, message: 'Chapter not found.' },
      { status: 404 }
    )
  }

  return NextResponse.json({ success: true, chapter })
}

export async function PUT(request, { params }) {
  const body = await request.json()

  const data = {}
  if (body.title !== undefined) data.title = body.title
  if (body.content !== undefined) data.content = body.content
  if (body.images !== undefined) {
    data.images = Array.isArray(body.images) ? body.images : []
  }
  if (body.order !== undefined) data.order = Number(body.order) || 0

  if (data.title === '') {
    return NextResponse.json(
      { success: false, message: 'Title is required.' },
      { status: 400 }
    )
  }

  try {
    const chapter = await prisma.chapter.update({
      where: { id: params.id },
      data,
    })

    return NextResponse.json({ success: true, chapter })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}

export async function DELETE(_request, { params }) {
  try {
    await prisma.chapter.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}
