import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { withCors, corsPreflight } from '@/lib/cors'

// Public, read-only. Consumed by the marketing site's program detail page.
export async function GET(_request, { params }) {
  const program = await prisma.program.findUnique({
    where: { slug: params.slug },
    include: { chapters: { orderBy: { order: 'asc' } } },
  })

  if (!program || !program.published) {
    return withCors(NextResponse.json({ message: 'Not found' }, { status: 404 }))
  }

  return withCors(NextResponse.json(program))
}

export async function OPTIONS() {
  return corsPreflight()
}
