import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { withCors, corsPreflight } from '@/lib/cors'

// Public, read-only. Consumed by the marketing site's programs listing page.
export async function GET() {
  const programs = await prisma.program.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { chapters: true } } },
  })

  return withCors(NextResponse.json({ programs }))
}

export async function OPTIONS() {
  return corsPreflight()
}
