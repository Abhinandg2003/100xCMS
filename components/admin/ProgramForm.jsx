'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputClass =
  'w-full px-4 py-2.5 rounded-xl text-black bg-black/5 border border-black/10 outline-none focus:border-aura-dark/50'

export default function ProgramForm({ initialProgram }) {
  const router = useRouter()
  const isEditing = Boolean(initialProgram)

  const [title, setTitle] = useState(initialProgram?.title || '')
  const [description, setDescription] = useState(
    initialProgram?.description || ''
  )
  const [duration, setDuration] = useState(initialProgram?.duration || '')
  const [level, setLevel] = useState(initialProgram?.level || '')
  const [published, setPublished] = useState(
    initialProgram?.published ?? true
  )
  const [coverImage, setCoverImage] = useState(
    initialProgram?.coverImage || ''
  )
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleImageChange(e) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('bucket', 'program')

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setCoverImage(data.url)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = {
      title,
      description,
      duration: duration || null,
      level: level || null,
      coverImage: coverImage || null,
      published,
    }

    try {
      const res = await fetch(
        isEditing
          ? `/api/admin/programs/${initialProgram.id}`
          : '/api/admin/programs',
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
      const data = await res.json()
      if (!data.success) throw new Error(data.message)

      if (isEditing) {
        router.push(`/admin/programs/${initialProgram.id}`)
      } else {
        router.push(`/admin/programs/${data.program.id}`)
      }
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
          placeholder="Web Development"
        />
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={inputClass}
          placeholder="What this course covers"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-black/60 mb-1">Duration</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={inputClass}
            placeholder="16 Weeks"
          />
        </div>
        <div>
          <label className="block text-sm text-black/60 mb-1">Level</label>
          <input
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className={inputClass}
            placeholder="Beginner → Advanced"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">
          Cover image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm text-black/60"
        />
        {uploading && <p className="text-xs text-black/40 mt-1">Uploading…</p>}
        {coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverImage}
            alt="Cover preview"
            className="mt-3 rounded-xl max-h-48 object-cover"
          />
        )}
      </div>

      <label className="flex items-center gap-2 text-sm text-black/70">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        Published (visible on the public site)
      </label>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        disabled={saving || uploading}
        className="px-6 py-2.5 rounded-full bg-aura text-black font-medium disabled:opacity-50"
      >
        {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Create program'}
      </button>
    </form>
  )
}
