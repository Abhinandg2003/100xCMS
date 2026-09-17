'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()

      if (!data.success) {
        setError(data.message || 'Login failed.')
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center bg-[#fefeff] justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-black/[0.03] border border-black/10 rounded-2xl p-8"
      >
        <h1 className="text-xl font-semibold text-black mb-1">Admin login</h1>
        <p className="text-black/40 text-sm mb-6">100x Aura blog CMS</p>

        <label className="block text-sm text-black/60 mb-1">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          className="w-full mb-4 px-4 py-2.5 rounded-xl text-black bg-black/5 border border-black/10 outline-none focus:border-aura/50"
        />

        <label className="block text-sm text-black/60 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2.5 text-black rounded-xl bg-black/5 border border-black/10 outline-none focus:border-aura/50"
        />

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <button
          disabled={loading}
          className="w-full py-2.5 rounded-full bg-aura text-black font-medium disabled:opacity-50"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </main>
  )
}
