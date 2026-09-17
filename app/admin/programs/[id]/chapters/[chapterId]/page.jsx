import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ChapterForm from '@/components/admin/ChapterForm'

export const dynamic = 'force-dynamic'

export default async function EditChapterPage({ params }) {
  const [program, chapter] = await Promise.all([
    prisma.program.findUnique({ where: { id: params.id } }),
    prisma.chapter.findUnique({ where: { id: params.chapterId } }),
  ])

  if (!program || !chapter || chapter.programId !== program.id) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">Edit chapter</h1>
      <p className="text-black/40 text-sm mb-8">in {program.title}</p>
      <ChapterForm programId={program.id} initialChapter={chapter} />
    </main>
  )
}
