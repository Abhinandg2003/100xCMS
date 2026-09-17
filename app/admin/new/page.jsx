import PostForm from '@/components/admin/PostForm'

export default function NewPostPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">New post</h1>
      <PostForm />
    </main>
  )
}
