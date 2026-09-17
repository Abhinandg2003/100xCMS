'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProgramsTable({ programs }) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState(null)

  async function handleDelete(id) {
    if (
      !confirm(
        'Delete this program? Its chapters will be deleted too. This cannot be undone.'
      )
    )
      return

    setDeletingId(id)
    await fetch(`/api/admin/programs/${id}`, { method: 'DELETE' })
    setDeletingId(null)
    router.refresh()
  }

  if (programs.length === 0) {
    return (
      <div className="rounded-2xl border border-black/10 p-10 text-center">
        <p className="text-black/50">
          No programs yet — create your first one.
        </p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
      {programs.map((program) => (
        <div
          key={program.id}
          className="flex items-center justify-between gap-4 p-4 flex-wrap"
        >
          <div className="min-w-0">
            <p className="font-medium truncate">
              {program.title}
              {!program.published && (
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-black/10 text-black/50">
                  Draft
                </span>
              )}
            </p>
            <p className="text-black/40 text-sm truncate">
              /{program.slug} · {program._count?.chapters ?? 0} chapters
              {program.duration && <> · {program.duration}</>}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/programs/${program.slug}`}
              target="_blank"
              className="text-sm px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 transition-colors"
            >
              View
            </Link>
            <Link
              href={`/admin/programs/${program.id}`}
              className="text-sm px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 transition-colors"
            >
              Manage
            </Link>
            <button
              onClick={() => handleDelete(program.id)}
              disabled={deletingId === program.id}
              className="text-sm px-3 py-1.5 rounded-full border border-red-400/30 text-red-400 hover:bg-red-400/10 disabled:opacity-50 transition-colors"
            >
              {deletingId === program.id ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
