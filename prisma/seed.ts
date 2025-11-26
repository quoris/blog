import 'dotenv/config'
import { Role, PostStatus, CommentStatus } from './generated/enums'
import { faker } from '@faker-js/faker'
import { prisma } from '../lib/prisma'

// ---------- Настройки генерации (подгони под себя) ----------
const USERS_COUNT = 12
const TAGS = ['tech', 'js', 'prisma', 'life', 'tutorials', 'travel', 'news']
const CATEGORIES = [
  { name: 'Development', slug: 'development' },
  { name: 'Life', slug: 'life' },
  { name: 'Travel', slug: 'travel' },
]
const POSTS_COUNT = 40
const MAX_COMMENTS_PER_POST = 5
const MAX_MEDIA_PER_POST = 2
// ------------------------------------------------------------

function randomEnum<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function main() {
  console.log('Start seeding...')

  // ========== Очистка базы ==========
  // ВНИМАНИЕ: в dev можно удалять всё, в продакшене так не делай
  await prisma.postRevision.deleteMany()
  await prisma.auditLog.deleteMany()
  await prisma.report.deleteMany()
  await prisma.session.deleteMany()
  await prisma.subscription.deleteMany()
  await prisma.bookmark.deleteMany()
  await prisma.reaction.deleteMany()
  await prisma.comment.deleteMany()
  await prisma.postMedia.deleteMany()
  await prisma.postTag.deleteMany()
  await prisma.post.deleteMany()
  await prisma.tag.deleteMany()
  await prisma.media.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()

  // ========== Пользователи ==========
  const users: { id: string; email: string; username?: string }[] = []
  for (let i = 0; i < USERS_COUNT; i++) {
    const email = faker.internet.email().toLowerCase()
    const username = faker.internet.username().toLowerCase() + (i < 3 ? '' : `_${i}`)
    const displayName = faker.person.fullName()
    const role = i === 0 ? Role.ADMIN : i < 3 ? Role.MODERATOR : i < 6 ? Role.AUTHOR : Role.MEMBER

    const user = await prisma.user.create({
      data: {
        email,
        username,
        displayName,
        role,
        bio: faker.lorem.sentences({ min: 1, max: 3 }),
        passwordHash: faker.string.alphanumeric(60),
        emailVerifiedAt: faker.datatype.boolean() ? faker.date.past({ years: 2 }) : null,
        isActive: true,
      },
    })

    users.push({ id: user.id, email, username })
  }

  // ========== Медиа ==========
  const mediaItems = []
  for (let i = 0; i < USERS_COUNT; i++) {
    const m = await prisma.media.create({
      data: {
        url: faker.image.urlPicsumPhotos({ width: 1200, height: 800 }),
        type: 'IMAGE',
        mimeType: 'image/jpeg',
        size: faker.number.int({ min: 50_000, max: 2_000_000 }),
        width: 1200,
        height: 800,
        altText: faker.lorem.sentence(),
        title: faker.lorem.words(3),
        uploadedBy: users[i].id,
      },
    })
    mediaItems.push(m)
  }

  // ========== Теги ==========
  const tags = []
  for (const name of TAGS) {
    const t = await prisma.tag.create({
      data: {
        name,
        slug: name,
      },
    })
    tags.push(t)
  }

  // ========== Категории ==========
  const categories = []
  for (const cat of CATEGORIES) {
    const c = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        description: faker.lorem.sentence(),
      },
    })
    categories.push(c)
  }

  // ========== Посты ==========
  const posts: { id: string; authorId: string }[] = []
  for (let i = 0; i < POSTS_COUNT; i++) {
    const author = users[Math.floor(Math.random() * users.length)]
    const title = faker.lorem.sentence()
    const slugBase = faker.lorem.slug()
    const slug = `${slugBase}-${i}-${Date.now().toString().slice(-4)}` // уникальный

    // случайный статус и даты
    const status = Math.random() < 0.6 ? PostStatus.PUBLISHED : Math.random() < 0.5 ? PostStatus.DRAFT : PostStatus.PENDING
    const publishedAt = status === PostStatus.PUBLISHED ? faker.date.recent({ days: 365 }) : null

    // случайный набор тегов
    const selectedTags = faker.helpers.arrayElements(tags, faker.number.int({ min: 0, max: 3 }))

    const cover = Math.random() < 0.5 ? mediaItems[Math.floor(Math.random() * mediaItems.length)] : null
    const category = Math.random() < 0.6 ? categories[Math.floor(Math.random() * categories.length)] : null

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: faker.lorem.sentences({ min: 1, max: 3 }),
        contentMarkdown: faker.lorem.paragraphs({ min: 2, max: 6 }),
        contentHtml: null,
        status,
        publishedAt,
        authorId: author.id,
        coverMediaId: cover?.id ?? null,
        categoryId: category?.id ?? null,
        // connect tags через PostTag (нужна отдельная таблица PostTag) - создаём через create в PostTag ниже
      },
    })

    // Связываем теги через PostTag
    for (const t of selectedTags) {
      await prisma.postTag.create({
        data: {
          postId: post.id,
          tagId: t.id,
        },
      })
    }

    // создаём медиa для поста (PostMedia)
    const mediaCount = faker.number.int({ min: 0, max: MAX_MEDIA_PER_POST })
    const chosenMedia = faker.helpers.arrayElements(mediaItems, mediaCount)
    for (let order = 0; order < chosenMedia.length; order++) {
      const m = chosenMedia[order]
      await prisma.postMedia.create({
        data: {
          postId: post.id,
          mediaId: m.id,
          caption: faker.lorem.sentence(),
          order,
        },
      })
    }

    posts.push({ id: post.id, authorId: author.id })

    // Комментарии для поста
    const commentsCount = faker.number.int({ min: 0, max: MAX_COMMENTS_PER_POST })
    const createdComments: { id: string; authorId: string }[] = []
    for (let c = 0; c < commentsCount; c++) {
      const commenter = users[Math.floor(Math.random() * users.length)]
      const parent = Math.random() < 0.3 && createdComments.length > 0 ? faker.helpers.arrayElement(createdComments) : null

      const comment = await prisma.comment.create({
        data: {
          postId: post.id,
          authorId: commenter.id,
          parentCommentId: parent?.id ?? null,
          content: faker.lorem.sentences({ min: 1, max: 3 }),
          status: Math.random() < 0.8 ? CommentStatus.PUBLISHED : CommentStatus.PENDING,
          ip: faker.internet.ip(),
          userAgent: faker.internet.userAgent(),
        },
      })

      createdComments.push({ id: comment.id, authorId: commenter.id })

      // реакции на комментарий
      if (Math.random() < 0.4) {
        await prisma.reaction.create({
          data: {
            type: 'LIKE',
            userId: commenter.id,
            commentId: comment.id,
          },
        })
      }
    }

    // реакции на пост
    const shouldReact = Math.random() < 0.6
    if (shouldReact) {
      // несколько разных пользователей
      const reactors = faker.helpers.arrayElements(users, faker.number.int({ min: 1, max: 5 }))
      for (const r of reactors) {
        try {
          await prisma.reaction.create({
            data: {
              type: 'LIKE',
              userId: r.id,
              postId: post.id,
            },
          })
        } catch (e) {
          // игнорируем уникальные ограничения если реакция уже есть
        }
      }
    }

    // bookmarks
    if (Math.random() < 0.15) {
      const bmUser = faker.helpers.arrayElement(users)
      try {
        await prisma.bookmark.create({
          data: {
            userId: bmUser.id,
            postId: post.id,
          },
        })
      } catch (e) {
        // игнорируем уникальные ограничения если реакция уже есть
      }
    }

    // post revision (редко)
    if (Math.random() < 0.15) {
      await prisma.postRevision.create({
        data: {
          postId: post.id,
          titleSnapshot: post.title,
          markdownSnapshot: post.contentMarkdown.slice(0, 1000),
          authorId: post.authorId,
        },
      })
    }
  } // конец генерации постов

  // ========== Подписки, сессии, отчёты, логи ==========
  // Сессии
  for (const u of users.slice(0, 6)) {
    await prisma.session.create({
      data: {
        userId: u.id,
        provider: 'local',
        accessToken: faker.string.uuid(),
        refreshToken: faker.string.uuid(),
        expiresAt: faker.date.future(),
      },
    })
  }

  // Подписки
  for (let i = 0; i < 8; i++) {
    const author = faker.helpers.arrayElement(users)
    await prisma.subscription.create({
      data: {
        userId: null,
        authorId: author.id,
        email: faker.internet.email().toLowerCase(),
        isConfirmed: faker.datatype.boolean(),
        createdAt: faker.date.past({ years: 1 }),
      },
    })
  }

  // Reports (отчеты)
  for (let i = 0; i < 5; i++) {
    const reporter = faker.helpers.arrayElement(users)
    const targetPost = faker.helpers.arrayElement(posts)
    await prisma.report.create({
      data: {
        reporterId: reporter.id,
        entityType: 'POST',
        entityId: targetPost.id,
        reasonCode: 'SPAM',
        description: faker.lorem.sentence(),
        status: 'OPEN',
        createdAt: faker.date.recent({ days: 90 }),
      },
    })
  }

  // Audit logs
  await prisma.auditLog.createMany({
    data: [
      {
        userId: users[0].id,
        action: 'SEED',
        entity: 'DATABASE',
        entityId: 'seed-run',
        payload: { message: 'seed ran' } as any,
      } as any,
    ],
  })

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error('Seed error', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
