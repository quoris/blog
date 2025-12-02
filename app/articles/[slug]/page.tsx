import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { DEFAULT_AVATAR_ALT, DEFAULT_AVATAR_URL, DEFAULT_COVER_MEDIA_ALT, DEFAULT_COVER_MEDIA_URL } from '@/lib/constants'

export const generateStaticParams = async () => {
  const slugs = await prisma.post.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { publishedAt: 'desc' },
    select: { slug: true },
    take: 6,
  })
  return slugs
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      title: true,
      excerpt: true,
      publishedAt: true,
      coverMedia: { select: { url: true, altText: true } },
      contentHtml: true,
      comments: {
        select: {
          author: {
            select: {
              avatar: { select: { url: true, altText: true } },
              displayName: true,
            },
          },
          content: true,
          createdAt: true,
        },
      },
      author: {
        select: {
          avatar: { select: { url: true, altText: true } },
          displayName: true,
          bio: true,
          _count: { select: { posts: true } },
        },
      },
    },
  })

  const coverMedia = post?.coverMedia
    ? {
        url: post.coverMedia.url,
        altText: post.coverMedia.altText ?? DEFAULT_COVER_MEDIA_ALT,
      }
    : undefined

  const user = {
    displayName: post?.author.displayName ?? 'User',
    avatarUrl: post?.author.avatar?.url ?? DEFAULT_AVATAR_URL,
    avatarAltText: post?.author.avatar?.url ?? DEFAULT_AVATAR_ALT,
    postsCount: post?.author._count,
    bio: post?.author.bio,
  }

  const randomPosts: { title: string; publishedAt: Date | null; slug: string; url: string | null; altText: string | null }[] =
    await prisma.$queryRaw`
    SELECT p.title , p."publishedAt" , p.slug , m.url , m."altText" 
    FROM "Post" p
    join "Media" m on p."coverMediaId" = m.id 
    ORDER BY random()
    LIMIT 3;`

  return (
    <main>
      <div className="container mx-auto pb-8">
        <div className="py-10">
          <Link className="hover:underline" href="/">
            Home
          </Link>{' '}
          ›{' '}
          <Link className="hover:underline" href="/articles">
            Articles
          </Link>{' '}
          › <span className="text-gray-900">{post?.title || 'Not found'}</span>
        </div>
        {post ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <article className="md:col-span-2 space-y-8">
              <header className="bg-white rounded-md shadow p-4 space-y-4">
                <h1 className="text-3xl font-extrabold text-gray-900">{post.title}</h1>
                <p className="text-lg">{post.excerpt}</p>
                <span className="block text-sm">{post.publishedAt?.toDateString()}</span>
              </header>
              {coverMedia && (
                <figure className="overflow-hidden rounded-md shadow">
                  <Image src={coverMedia.url} alt={coverMedia.altText} width={1000} height={400} />
                </figure>
              )}
              <section className="bg-white p-4 space-y-6 rounded-md shadow">
                <h2 className="text-2xl font-semibold text-gray-900">Paragrapho 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, lacus non condimentum interdum,
                  purus velit mollis ligula, quis facilisis erat nisl sed lectus. Cras a tincidunt mi. In varius fringilla dui,
                  vitae viverra augue interdum eu. Aenean molestie leo non magna efficitur, non egestas turpis rhoncus.
                  Vestibulum egestas nisi quis ex ultricies blandit. Donec vestibulum neque odio, at condimentum neque ornare
                  vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Paragrapho 2</h2>
                <p>
                  Etiam tincidunt sagittis arcu ac faucibus. Nam augue dui, consequat non nibh id, dapibus lacinia ante. Nunc
                  non commodo ligula, vitae sollicitudin ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent ullamcorper metus at magna fermentum rhoncus. Nunc vitae elementum
                  massa, a sollicitudin enim. Nullam quis hendrerit odio. Nam vestibulum felis sit amet neque faucibus molestie
                  sodales vel risus. Pellentesque sagittis tincidunt ipsum nec eleifend. Sed varius tempor tempus. Proin ac
                  turpis nec ex fringilla pretium. Sed pharetra vel dui ac ornare. Cras egestas justo quis quam lobortis, a
                  tempor diam fringilla. Aliquam ac vehicula libero. Mauris vel malesuada libero. Integer porttitor dui in dolor
                  tempus, a consectetur nisl placerat.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In mollis massa
                  eu gravida pretium. Maecenas vulputate risus sit amet porta lacinia. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Maecenas et vulputate odio. Phasellus id ex a est
                  dignissim tempor vel sed nisi. Maecenas volutpat eleifend neque vitae feugiat. Sed egestas tempus leo, ut
                  tempus nulla pulvinar sed. Pellentesque risus ligula, tempus non sem nec, iaculis semper ipsum. Phasellus
                  sagittis laoreet eros et sodales. Nam in dolor sed ipsum lobortis condimentum. Integer euismod, ex non lacinia
                  convallis, turpis arcu malesuada dui, eu cursus turpis libero non lorem. Suspendisse sed quam hendrerit,
                  ultrices mi non, accumsan tortor. Vivamus mattis nec mauris ut tincidunt. Fusce vitae mattis magna.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900">Paragrapho 3</h2>
                <p>
                  Nulla commodo nisi eu ex mattis, et iaculis eros suscipit. Nullam ligula mi, porttitor at mi ac, mollis
                  hendrerit magna. Vestibulum et mollis erat. Nulla ac libero elit. Nunc venenatis maximus augue in eleifend. In
                  sed cursus metus. Nunc vulputate odio lacus. Mauris scelerisque consequat vulputate. Pellentesque imperdiet
                  aliquam orci, nec sagittis nibh sagittis a. Aliquam dictum enim mi, tempus posuere lectus cursus vel.
                </p>
                <p>
                  Praesent feugiat vehicula nibh, vel vulputate lorem lobortis sit amet. Quisque nec tincidunt ex. Nam aliquet
                  ligula at ante dictum tincidunt. Aliquam nunc sem, lobortis sed magna blandit, imperdiet tristique nulla.
                  Fusce ac sapien nec metus efficitur dictum vitae ac enim. Vivamus eget odio non purus aliquet pulvinar id in
                  enim. Nullam interdum nunc et eros viverra, feugiat ultrices nisl rutrum. Aenean commodo bibendum mauris sed
                  faucibus. Praesent sed magna fermentum, volutpat eros quis, tincidunt sem. Morbi vitae condimentum magna.
                </p>
              </section>
              <section className="bg-white rounded-md shadow p-4 space-y-6">
                <p className="text-xl font-semibold text-gray-900">Comments</p>
                <div className="space-y-6">
                  {post.comments.length > 0 ? (
                    post.comments.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="relative w-15 h-15 rounded-full overflow-hidden shrink-0">
                          <Image
                            fill
                            className="object-cover"
                            src={item.author.avatar?.url ?? DEFAULT_AVATAR_URL}
                            alt={item.author.avatar?.altText ?? DEFAULT_AVATAR_ALT}
                          />
                        </div>
                        <div>
                          <div className="space-x-6">
                            <span className="font-semibold text-gray-900">{item.author.displayName}</span>
                            <span className="text-sm">{item.createdAt.toDateString()}</span>
                          </div>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No comments yet. Leave a comment first!</p>
                  )}
                </div>
                <form className="flex flex-col space-y-4">
                  <input className="border border-gray-200 py-2 px-4 rounded-md" placeholder="Yout name" />
                  <textarea
                    className="border border-gray-200 py-2 px-4 rounded-md"
                    placeholder="What do you thinking about article?"
                    rows={4}
                  />
                  <div className="flex">
                    <input
                      className="text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-md py-2 px-4"
                      type="submit"
                      title="Submit"
                    />
                  </div>
                </form>
              </section>
            </article>
            <aside className="space-y-8">
              <div className="bg-white rounded-md shadow p-4 space-y-4">
                <p className="text-gray-900 text-lg font-semibold">About author</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-15 h-15 rounded-full overflow-hidden">
                    <Image src={user.avatarUrl} alt={user.avatarAltText} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">{user.displayName}</span>
                    {user.postsCount?.posts && (
                      <span className="block text-sm">{`${user.postsCount.posts} ${
                        user.postsCount.posts > 1 ? 'articles' : 'article'
                      }`}</span>
                    )}
                  </div>
                </div>
                {user.bio && <p>{user.bio}</p>}
                <Link className="text-indigo-600 hover:underline" href="#">
                  Read author →
                </Link>
              </div>
              {randomPosts.length === 3 && (
                <div className="bg-white rounded-md shadow p-4 space-y-6">
                  <p className="text-gray-900 text-lg font-semibold">Other articles</p>
                  {randomPosts.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Link href={`/articles/${item.slug}`}>
                        <div className="relative w-42 aspect-video rounded-md overflow-hidden shrink-0">
                          <Image
                            fill
                            className="object-cover"
                            src={item.url ?? DEFAULT_COVER_MEDIA_URL}
                            alt={item.altText ?? DEFAULT_COVER_MEDIA_ALT}
                          />
                        </div>
                      </Link>
                      <div>
                        <Link className="text-gray-600 font-semibold hover:underline" href={`/articles/${item.slug}`}>
                          {item.title}
                        </Link>
                        <span className="block text-sm">{item.publishedAt?.toDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        ) : (
          notFound()
        )}
      </div>
    </main>
  )
}
