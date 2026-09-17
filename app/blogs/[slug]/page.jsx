import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export default async function BlogPostPage({ params }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })

  if (!post) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1.5 text-black/50 hover:text-black text-sm mb-10 transition-colors"
      >
        ← Back to blog
      </Link>

      <article>
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-aura/15 text-aura-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-black/40 mb-8">
          <span>{post.author}</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readTime} min read</span>
        </div>

        {post.coverImage && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-p:text-black/70 prose-headings:text-black max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}
