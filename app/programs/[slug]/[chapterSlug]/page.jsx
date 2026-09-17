import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function ChapterPage({ params }) {
  const program = await prisma.program.findUnique({
    where: { slug: params.slug },
    include: { chapters: { orderBy: { order: 'asc' } } },
  })

  if (!program || !program.published) notFound()

  const index = program.chapters.findIndex(
    (c) => c.slug === params.chapterSlug
  )
  const chapter = program.chapters[index]

  if (!chapter) notFound()

  const prevChapter = program.chapters[index - 1]
  const nextChapter = program.chapters[index + 1]

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link
        href={`/programs/${program.slug}`}
        className="inline-flex items-center gap-1.5 text-black/50 hover:text-black text-sm mb-8 transition-colors"
      >
        ← {program.title}
      </Link>

      <article>
        <p className="text-aura-dark text-sm font-medium mb-2">
          Chapter {index + 1} of {program.chapters.length}
        </p>
        <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">
          {chapter.title}
        </h1>

        {chapter.images?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {chapter.images.map((url) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={url}
                src={url}
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        )}

        <div
          className="prose prose-p:text-black/70 prose-headings:text-black max-w-none"
          dangerouslySetInnerHTML={{ __html: chapter.content }}
        />
      </article>

      <div className="flex items-center justify-between mt-14 pt-8 border-t border-black/10">
        {prevChapter ? (
          <Link
            href={`/programs/${program.slug}/${prevChapter.slug}`}
            className="text-sm text-black/60 hover:text-black transition-colors"
          >
            ← {prevChapter.title}
          </Link>
        ) : (
          <span />
        )}
        {nextChapter && (
          <Link
            href={`/programs/${program.slug}/${nextChapter.slug}`}
            className="text-sm px-4 py-2 rounded-full bg-aura text-black font-medium"
          >
            {nextChapter.title} →
          </Link>
        )}
      </div>
    </main>
  )
}
