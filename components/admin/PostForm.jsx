'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputClass =
  'w-full px-4 py-2.5 rounded-xl text-black bg-black/5 border border-black/10 outline-none focus:border-aura-dark/50'

export default function PostForm({ initialPost }) {
  const router = useRouter()
  const isEditing = Boolean(initialPost)

  const [title, setTitle] = useState(initialPost?.title || '')
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || '')
  const [content, setContent] = useState(initialPost?.content || '')
  const [author, setAuthor] = useState(initialPost?.author || '')
  const [tags, setTags] = useState((initialPost?.tags || []).join(', '))
  const [readTime, setReadTime] = useState(initialPost?.readTime || 5)
  const [coverImage, setCoverImage] = useState(initialPost?.coverImage || '')
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
      excerpt,
      content,
      author,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      readTime: Number(readTime) || 5,
      coverImage: coverImage || null,
    }

    try {
      const res = await fetch(
        isEditing ? `/api/admin/posts/${initialPost.id}` : '/api/admin/posts',
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
      const data = await res.json()
      if (!data.success) throw new Error(data.message)

      router.push('/admin')
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
        />
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className={inputClass}
          placeholder="Short summary shown on the blog listing"
        />
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">
          Content (HTML)
        </label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          className={`${inputClass} font-mono text-sm`}
          placeholder="<p>Write your post here…</p>"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-black/60 mb-1">Author</label>
          <input
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm text-black/60 mb-1">
            Read time (min)
          </label>
          <input
            type="number"
            min={1}
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-black/60 mb-1">
          Tags (comma separated)
        </label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={inputClass}
          placeholder="Design Guide, Trends"
        />
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
        {uploading && (
          <p className="text-xs text-black/40 mt-1">Uploading…</p>
        )}
        {coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverImage}
            alt="Cover preview"
            className="mt-3 rounded-xl max-h-48 object-cover"
          />
        )}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        disabled={saving || uploading}
        className="px-6 py-2.5 rounded-full bg-aura text-black font-medium disabled:opacity-50"
      >
        {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Publish post'}
      </button>
    </form>
  )
}
