import { createClient } from '@supabase/supabase-js'

export const BLOG_IMAGE_BUCKET = 'blog-images'

// Server-only client. Uses the service role key, so this must never be
// imported into a client component — only inside API route handlers.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    throw new Error(
      'SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set. Add them to .env.'
    )
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  })
}
