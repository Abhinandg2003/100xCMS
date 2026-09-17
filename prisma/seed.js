const { PrismaClient } = require('@prisma/client')
const programsData = require('./seed-data/programs')

const prisma = new PrismaClient()

function cleanTitle(title) {
  return title.replace(/\s*\n\s*/g, ' ').trim()
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// Legacy-HTML fallback, kept only for chapters that somehow have no
// structured subjects at all. Handles both the old string[] shape and
// the new { name, content, keyPoints }[] shape so it never prints
// "[object Object]" again.
function subjectsToHtml(subjects) {
  const items = subjects
    .map((s) => `  <li>${typeof s === 'string' ? s : s.name}</li>`)
    .join('\n')
  return `<ul>\n${items}\n</ul>`
}

async function main() {
  for (const p of programsData) {
    const slug = p.id // "ai", "webdev", "dsa" etc. are already clean slugs

    const metadata = {
      emoji: p.emoji,
      icon: p.icon,
      pastel: p.pastel,
      pastelbg: p.pastelbg,
      pastelborder: p.pastelborder,
      glowColor: p.glowColor,
      iconBg: p.iconBg,
      iconColor: p.iconColor,
      tag: p.tag,
      tagColor: p.tagColor,
      tagText: p.tagText,
      color: p.color,
      bgimg: p.bgimg || null,
    }

    const program = await prisma.program.upsert({
      where: { slug },
      update: {
        title: cleanTitle(p.title),
        description: p.description || '',
        coverImage: p.image || null,
        duration: p.duration || null,
        level: p.level || null,
        published: true,
        metadata,
      },
      create: {
        slug,
        title: cleanTitle(p.title),
        description: p.description || '',
        coverImage: p.image || null,
        duration: p.duration || null,
        level: p.level || null,
        published: true,
        metadata,
      },
    })

    console.log(`Program: ${program.title} (${program.slug})`)

    const categories = p.categories || []

    for (let i = 0; i < categories.length; i += 1) {
      const cat = categories[i]
      const chapterSlug = slugify(cat.category)
      const subjects = cat.subjects || []

      const chapter = await prisma.chapter.upsert({
        where: {
          programId_slug: { programId: program.id, slug: chapterSlug },
        },
        update: {
          title: cat.category,
          subjects,
          content: subjectsToHtml(subjects),
          order: i,
        },
        create: {
          programId: program.id,
          slug: chapterSlug,
          title: cat.category,
          subjects,
          content: subjectsToHtml(subjects),
          images: [],
          order: i,
        },
      })

      console.log(`  Chapter: ${chapter.title} (${subjects.length} subjects)`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })