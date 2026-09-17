import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import PostForm from '@/components/admin/PostForm'

export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } })

  if (!post) notFound()

  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">Edit post</h1>
      <PostForm initialPost={post} />
    </main>
  )
}
