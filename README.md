# 100x Aura — Blog CMS

A standalone Next.js app: public blog pages (`/blogs`, `/blogs/[slug]`) and
an admin panel (`/admin`) to create/edit/delete posts, all in one deploy.
Built with Prisma + Supabase Postgres, Supabase Storage for images, and a
single hardcoded admin login (no user table, no signup flow).

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. **Database → Connection string**: copy the pooled connection string
   (port 6543) into `DATABASE_URL`, and the direct connection string
   (port 5432) into `DIRECT_URL`.
3. **Project Settings → API**: copy the Project URL into `SUPABASE_URL`,
   and the `service_role` key (not the `anon` key — this one is secret)
   into `SUPABASE_SERVICE_ROLE_KEY`.
4. **Storage**: create a new bucket named exactly `blog-images` and mark
   it **Public** (so cover images are viewable without auth).

## 2. Configure environment variables

```bash
cp .env.example .env
```

Fill in the Supabase values from step 1, then set your own:

```
ADMIN_USERNAME="whatever you want"
ADMIN_PASSWORD="a real password"
JWT_SECRET="output of: openssl rand -base64 32"
```

This is intentionally simple — one username/password pair checked
against env vars, no database table for users. Good enough for a single
editor; if you ever need multiple editors with different permissions,
that's a bigger change.

## 3. Install and set up the database

```bash
npm install
npx prisma migrate dev --name init
```

This creates the `Post` table in your Supabase database.

## 4. Run locally

```bash
npm run dev
```

- Public blog: http://localhost:3000/blogs
- Admin: http://localhost:3000/admin (redirects to `/admin/login` first)

## 5. Deploy to Vercel

1. Push this project to a GitHub repo (or `vercel deploy` directly from
   this folder with the Vercel CLI).
2. Import the repo in Vercel.
3. Add all the variables from `.env` in **Project Settings → Environment
   Variables** on Vercel.
4. Deploy. `prisma generate` runs automatically via the `postinstall`
   script, so no extra build config needed. If your Supabase table isn't
   created yet, run `npx prisma migrate deploy` once (locally, pointed at
   the production `DATABASE_URL`/`DIRECT_URL`, or via a one-off Vercel
   deploy hook).

## 6. Connect the marketing site

Your marketing site already has a `src/lib/cms.js` that expects:

- `GET {VITE_CMS_API_URL}/posts` → `{ posts: [...] }`
- `GET {VITE_CMS_API_URL}/posts/:slug` → a single post object

This CMS's public API matches that shape exactly (`slug`, `title`,
`excerpt`, `coverImage`, `author`, `publishedAt`, `content`, `tags`), so
you just need to set, in the marketing site's `.env`:

```
VITE_CMS_API_URL="https://your-cms-app.vercel.app/api"
```

An "Add blog" button has also been added to the marketing site's
`/blogs` page, linking to `VITE_CMS_ADMIN_URL` (set that to
`https://your-cms-app.vercel.app/admin/new`).

## Notes

- Slugs are generated from the title on creation and don't change on
  edit, so published links stay stable.
- Post content is stored and rendered as raw HTML. If you'd rather write
  in markdown, swap the content textarea for a markdown editor and
  render with a library like `react-markdown` on the public post page.
- There's no draft/published distinction — every post you create is
  immediately live on `/blogs`. If you want drafts later, that's a small
  addition to the Prisma schema (`status` field) and a filter on the
  public API route.
