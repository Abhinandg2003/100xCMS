import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import ProgramsTable from '@/components/admin/ProgramsTable'

export const dynamic = 'force-dynamic'

export default async function AdminProgramsPage() {
  const programs = await prisma.program.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { chapters: true } } },
  })

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <Link
            href="/admin"
            className="text-sm text-black/40 hover:text-black transition-colors"
          >
            ← Dashboard
          </Link>
          <h1 className="text-2xl font-semibold mt-2">Programs</h1>
        </div>
        <Link
          href="/admin/programs/new"
          className="text-sm px-4 py-2 rounded-full bg-aura text-black font-medium"
        >
          + New program
        </Link>
      </div>

      <ProgramsTable programs={programs} />
    </main>
  )
}
