import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function ProgramsPage() {
  const programs = await prisma.program.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { chapters: true } } },
  })

  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <div className="flex items-start justify-between gap-4 mb-14">
        <div>
          <span className="inline-flex items-center gap-2 text-aura-dark text-sm font-medium mb-4">
            <span>✦</span> Learn
          </span>
          <h1 className="text-4xl md:text-5xl font-medium">Programs</h1>
        </div>

        <Link
          href="/admin"
          className="shrink-0 text-sm px-5 py-2.5 rounded-full bg-aura text-black font-medium hover:opacity-90 transition-opacity"
        >
          Admin
        </Link>
      </div>

      {programs.length === 0 ? (
        <div className="rounded-2xl border border-black/10 p-10 text-center">
          <p className="text-black/60">No programs yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.slug}`}
              className="group block rounded-2xl border border-black/10 bg-black/[0.03] overflow-hidden hover:border-black/20 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-black/5 overflow-hidden">
                {program.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={program.coverImage}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/30 text-sm">
                    No cover image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-lg font-medium mb-2 leading-snug">
                  {program.title}
                </h2>

                {program.description && (
                  <p className="text-black/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {program.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-black/40">
                  <span>
                    {program._count.chapters} chapters
                    {program.duration && <> · {program.duration}</>}
                  </span>
                  <span className="text-aura-dark font-medium">Start →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
