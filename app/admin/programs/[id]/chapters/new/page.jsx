import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ChapterForm from '@/components/admin/ChapterForm'

export const dynamic = 'force-dynamic'

export default async function NewChapterPage({ params }) {
  const program = await prisma.program.findUnique({ where: { id: params.id } })

  if (!program) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-1">New chapter</h1>
      <p className="text-black/40 text-sm mb-8">in {program.title}</p>
      <ChapterForm programId={program.id} />
    </main>
  )
}
