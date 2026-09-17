import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Protected by middleware.js (matches /api/admin/:path*).

export async function GET(_request, { params }) {
  const program = await prisma.program.findUnique({
    where: { id: params.id },
    include: { chapters: { orderBy: { order: 'asc' } } },
  })

  if (!program) {
    return NextResponse.json(
      { success: false, message: 'Program not found.' },
      { status: 404 }
    )
  }

  return NextResponse.json({ success: true, program })
}

export async function PUT(request, { params }) {
  const body = await request.json()

  if (!body.title) {
    return NextResponse.json(
      { success: false, message: 'Title is required.' },
      { status: 400 }
    )
  }

  try {
    const program = await prisma.program.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description || '',
        coverImage: body.coverImage || null,
        duration: body.duration || null,
        level: body.level || null,
        published: body.published !== false,
        // Only touch metadata if the caller explicitly sent it — the
        // basic admin form doesn't, so seeded metadata survives edits.
        ...(body.metadata !== undefined ? { metadata: body.metadata } : {}),
      },
    })

    return NextResponse.json({ success: true, program })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}

export async function DELETE(_request, { params }) {
  try {
    // onDelete: Cascade on Chapter.program takes care of its chapters.
    await prisma.program.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}
