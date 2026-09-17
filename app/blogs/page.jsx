import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export default async function BlogsPage() {
  const posts = await prisma.post.findMany({ orderBy: { publishedAt: 'desc' } })

  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <div className="flex items-start justify-between gap-4 mb-14">
        <div>
          <span className="inline-flex items-center gap-2 text-aura-dark text-sm font-medium mb-4">
            <span>✦</span> From the blog
          </span>
          <h1 className="text-4xl md:text-5xl font-medium">Latest posts</h1>
        </div>

        <Link
          href="/admin"
          className="shrink-0 text-sm px-5 py-2.5 rounded-full bg-aura text-black font-medium hover:opacity-90 transition-opacity"
        >
          Admin
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-black/10 p-10 text-center">
          <p className="text-black/60 mb-4">No posts yet.</p>
          <Link
            href="/admin/new"
            className="inline-block text-sm px-5 py-2.5 rounded-full bg-aura text-black font-medium"
          >
            Write your first post
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group block rounded-2xl border border-black/10 bg-black/[0.03] overflow-hidden hover:border-black/20 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-black/5 overflow-hidden">
                {post.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/30 text-sm">
                    No cover image
                  </div>
                )}
              </div>

              <div className="p-6">
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-aura/15 text-aura-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-lg font-medium mb-2 leading-snug">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="text-black/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-black/40">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="text-aura-dark font-medium">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
