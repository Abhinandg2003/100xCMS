'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputClass =
  'w-full px-4 py-2.5 rounded-xl text-black bg-black/5 border border-black/10 outline-none focus:border-aura-dark/50'

export default function ChapterForm({ programId, initialChapter }) {
  const router = useRouter()
  const isEditing = Boolean(initialChapter)

  const [title, setTitle] = useState(initialChapter?.title || '')
  const [content, setContent] = useState(initialChapter?.content || '')
  const [images, setImages] = useState(initialChapter?.images || [])
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleImagesChange(e) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setUploading(true)
    setError('')

    try {
      const uploaded = []
      // eslint-disable-next-line no-restricted-syntax
      for (const file of files) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('bucket', 'program')

        // eslint-disable-next-line no-await-in-loop
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        })
        // eslint-disable-next-line no-await-in-loop
        const data = await res.json()
        if (!data.success) throw new Error(data.message)
        uploaded.push(data.url)
      }
      setImages((prev) => [...prev, ...uploaded])
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  function removeImage(url) {
    setImages((prev) => prev.filter((img) => img !== url))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = { title, content, images }

    try {
      const res = await fetch(
        isEditing
          ? `/api/admin/chapters/${initialChapter.id}`
          : `/api/admin/programs/${programId}/chapters`,
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
      const data = await res.json()
      if (!data.success) throw new Error(data.message)

      router.push(`/admin/programs/${programId}`)
      router.refresh()
    } catch (err) {
      setError(err.message)
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div>
        <label className="block text-sm text-black/60 mb-1">Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClass}
          placeholder="Chapter 1: Getting started"
        />
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">
          Content (HTML)
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          className={`${inputClass} font-mono text-sm`}
          placeholder="<p>Write the chapter here…</p>"
        />
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImagesChange}
          className="text-sm text-black/60"
        />
        {uploading && (
          <p className="text-xs text-black/40 mt-1">Uploading…</p>
        )}
        {images.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {images.map((url) => (
              <div key={url} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt=""
                  className="w-full h-28 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="absolute top-1 right-1 text-xs px-2 py-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        disabled={saving || uploading}
        className="px-6 py-2.5 rounded-full bg-aura text-black font-medium disabled:opacity-50"
      >
        {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Add chapter'}
      </button>
    </form>
  )
}
