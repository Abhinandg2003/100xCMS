'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function PostsTable({ posts }) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState(null)

  async function handleDelete(id) {
    if (!confirm('Delete this post? This cannot be undone.')) return

    setDeletingId(id)
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
    setDeletingId(null)
    router.refresh()
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-black/10 p-10 text-center">
        <p className="text-black/50">No posts yet — create your first one.</p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between gap-4 p-4 flex-wrap"
        >
          <div className="min-w-0">
            <p className="font-medium truncate">{post.title}</p>
            <p className="text-black/40 text-sm truncate">/{post.slug}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/blogs/${post.slug}`}
              target="_blank"
              className="text-sm px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 transition-colors"
            >
              View
            </Link>
            <Link
              href={`/admin/edit/${post.id}`}
              className="text-sm px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              disabled={deletingId === post.id}
              className="text-sm px-3 py-1.5 rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 disabled:opacity-50 transition-colors"
            >
              {deletingId === post.id ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
