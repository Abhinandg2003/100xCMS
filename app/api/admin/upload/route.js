import { NextResponse } from 'next/server'
import { getSupabaseAdmin, BLOG_IMAGE_BUCKET } from '@/lib/supabase'

// Protected by middleware.js (matches /api/admin/:path*).

export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')

  if (!file) {
    return NextResponse.json(
      { success: false, message: 'No file provided.' },
      { status: 400 }
    )
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const ext = file.name.includes('.') ? file.name.split('.').pop() : 'jpg'
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  try {
    const supabase = getSupabaseAdmin()

    const { error } = await supabase.storage
      .from(BLOG_IMAGE_BUCKET)
      .upload(fileName, buffer, {
        contentType: file.type || 'image/jpeg',
        upsert: false,
      })

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      )
    }

    const { data } = supabase.storage
      .from(BLOG_IMAGE_BUCKET)
      .getPublicUrl(fileName)

    return NextResponse.json({ success: true, url: data.publicUrl })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
