import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function ProgramPage({ params }) {
  const program = await prisma.program.findUnique({
    where: { slug: params.slug },
    include: { chapters: { orderBy: { order: 'asc' } } },
  })

  if (!program || !program.published) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link
        href="/programs"
        className="inline-flex items-center gap-1.5 text-black/50 hover:text-black text-sm mb-10 transition-colors"
      >
        ← Back to programs
      </Link>

      {program.coverImage && (
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={program.coverImage}
            alt={program.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
        {program.title}
      </h1>

      {program.description && (
        <p className="text-black/60 leading-relaxed mb-4">
          {program.description}
        </p>
      )}

      {(program.duration || program.level) && (
        <div className="flex items-center gap-3 text-sm text-black/40 mb-10">
          {program.duration && <span>{program.duration}</span>}
          {program.duration && program.level && <span>·</span>}
          {program.level && <span>{program.level}</span>}
        </div>
      )}

      <h2 className="text-lg font-medium mb-4">Chapters</h2>

      {program.chapters.length === 0 ? (
        <p className="text-black/50">No chapters yet.</p>
      ) : (
        <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
          {program.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              href={`/programs/${program.slug}/${chapter.slug}`}
              className="flex items-center gap-4 p-4 hover:bg-black/[0.03] transition-colors"
            >
              <span className="text-black/30 text-sm w-6 shrink-0">
                {index + 1}.
              </span>
              <span className="font-medium flex-1">{chapter.title}</span>
              <span className="text-aura-dark text-sm">Read →</span>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
