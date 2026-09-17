import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import PostsTable from '@/components/admin/PostsTable'
import LogoutButton from '@/components/admin/LogoutButton'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl  mx-auto">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h1 className="text-2xl font-semibold">Blog posts</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/programs"
            className="text-sm px-4 py-2 rounded-full border border-black/10 hover:border-black/30 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/admin/new"
            className="text-sm px-4 py-2 rounded-full bg-aura text-black font-medium"
          >
            + New post
          </Link>
          <LogoutButton />
        </div>
      </div>

      <PostsTable posts={posts} />
    </main>
  )
}
