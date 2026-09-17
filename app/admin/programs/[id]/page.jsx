import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ChaptersList from '@/components/admin/ChaptersList'

export const dynamic = 'force-dynamic'

export default async function ManageProgramPage({ params }) {
  const program = await prisma.program.findUnique({
    where: { id: params.id },
    include: { chapters: { orderBy: { order: 'asc' } } },
  })

  if (!program) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <Link
        href="/admin/programs"
        className="text-sm text-black/40 hover:text-black transition-colors"
      >
        ← Programs
      </Link>

      <div className="flex items-start justify-between gap-4 mt-2 mb-10 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold">{program.title}</h1>
          <p className="text-black/40 text-sm mt-1">
            /{program.slug} · {program.published ? 'Published' : 'Draft'}
          </p>
        </div>
        <Link
          href={`/admin/programs/${program.id}/edit`}
          className="text-sm px-4 py-2 rounded-full border border-black/10 hover:border-black/30 transition-colors"
        >
          Edit program details
        </Link>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Chapters</h2>
        <Link
          href={`/admin/programs/${program.id}/chapters/new`}
          className="text-sm px-4 py-2 rounded-full bg-aura text-black font-medium"
        >
          + Add chapter
        </Link>
      </div>

      <ChaptersList programId={program.id} chapters={program.chapters} />
    </main>
  )
}
