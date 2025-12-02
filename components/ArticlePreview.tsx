import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/prisma/generated/client'
import { prisma } from '@/lib/prisma'
import { DEFAULT_AVATAR_ALT, DEFAULT_AVATAR_URL, DEFAULT_COVER_MEDIA_ALT, DEFAULT_COVER_MEDIA_URL } from '@/lib/constants'

export const ArticlePreview = async ({ post, mode }: { post: Post; mode: 'preview' | 'full' }) => {
  const href = `/articles/${post.slug}`
  const aspectRatio = mode === 'preview' ? 'aspect-16/8' : 'aspect-22/8'

  const coverMediaDb = post.coverMediaId
    ? await prisma.media.findUnique({
        where: { id: post.coverMediaId },
        select: { url: true, altText: true },
      })
    : undefined

  const coverMedia = coverMediaDb
    ? { url: coverMediaDb.url, altText: coverMediaDb.altText ?? 'The cover of an article' }
    : { url: DEFAULT_COVER_MEDIA_URL, altText: DEFAULT_COVER_MEDIA_ALT }

  const userDb = await prisma.user.findUnique({
    where: { id: post.authorId },
    select: {
      id: true,
      displayName: true,
      avatar: { select: { url: true, altText: true } },
    },
  })

  // userDb! because there can't be an article without an author.

  const user = {
    displayName: userDb!.displayName ?? 'User',
    avatarUrl: userDb!.avatar?.url ?? DEFAULT_AVATAR_URL,
    avatarAltText: userDb!.avatar?.altText ?? DEFAULT_AVATAR_ALT,
  }

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
      <Link className="block" href={href}>
        <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
          <Image src={coverMedia.url} alt={coverMedia.altText} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href={href}>
          {post.title}
        </Link>
        <p>{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-15 h-15 rounded-full overflow-hidden">
              <Image src={user.avatarUrl} alt={user.avatarAltText} fill className="object-cover" />
            </div>
            <div>
              <span className="block text-gray-900">{user.displayName}</span>
              <span className="block text-sm">{post.publishedAt?.toDateString()}</span>
            </div>
          </div>
          <Link className="text-indigo-500" href={href}>
            Read
          </Link>
        </div>
      </div>
    </article>
  )
}
