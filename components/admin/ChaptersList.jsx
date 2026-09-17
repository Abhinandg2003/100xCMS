'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ChaptersList({ programId, chapters }) {
  const router = useRouter()
  const [busyId, setBusyId] = useState(null)

  async function handleDelete(id) {
    if (!confirm('Delete this chapter? This cannot be undone.')) return
    setBusyId(id)
    await fetch(`/api/admin/chapters/${id}`, { method: 'DELETE' })
    setBusyId(null)
    router.refresh()
  }

  async function swap(indexA, indexB) {
    const a = chapters[indexA]
    const b = chapters[indexB]
    if (!a || !b) return

    setBusyId(a.id)
    await Promise.all([
      fetch(`/api/admin/chapters/${a.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: b.order }),
      }),
      fetch(`/api/admin/chapters/${b.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: a.order }),
      }),
    ])
    setBusyId(null)
    router.refresh()
  }

  if (chapters.length === 0) {
    return (
      <div className="rounded-2xl border border-black/10 p-8 text-center">
        <p className="text-black/50">No chapters yet — add the first one.</p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
      {chapters.map((chapter, index) => (
        <div
          key={chapter.id}
          className="flex items-center justify-between gap-4 p-4 flex-wrap"
        >
          <div className="min-w-0 flex items-center gap-3">
            <span className="text-black/30 text-sm w-6 shrink-0">
              {index + 1}.
            </span>
            <div className="min-w-0">
              <p className="font-medium truncate">{chapter.title}</p>
              <p className="text-black/40 text-sm truncate">
                /{chapter.slug} · {chapter.images?.length ?? 0} images
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => swap(index, index - 1)}
              disabled={index === 0 || busyId === chapter.id}
              className="text-sm px-2.5 py-1.5 rounded-full border border-black/10 hover:border-black/30 disabled:opacity-30 transition-colors"
              title="Move up"
            >
              ↑
            </button>
            <button
              onClick={() => swap(index, index + 1)}
              disabled={index === chapters.length - 1 || busyId === chapter.id}
              className="text-sm px-2.5 py-1.5 rounded-full border border-black/10 hover:border-black/30 disabled:opacity-30 transition-colors"
              title="Move down"
            >
              ↓
            </button>
            <Link
              href={`/admin/programs/${programId}/chapters/${chapter.id}`}
              className="text-sm px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(chapter.id)}
              disabled={busyId === chapter.id}
              className="text-sm px-3 py-1.5 rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 disabled:opacity-50 transition-colors"
            >
              {busyId === chapter.id ? '…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
