import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ProgramForm from '@/components/admin/ProgramForm'

export const dynamic = 'force-dynamic'

export default async function EditProgramPage({ params }) {
  const program = await prisma.program.findUnique({ where: { id: params.id } })

  if (!program) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Edit program</h1>
      <ProgramForm initialProgram={program} />
    </main>
  )
}
