'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm px-4 py-2 rounded-full border border-black/10 hover:border-black/30 transition-colors"
    >
      Log out
    </button>
  )
}
