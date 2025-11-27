import { ArticlePreview } from '@/components/ArticlePreview'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Home() {
  const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, take: 3 })

  return (
    <main>
      {/* Hero */}
      <section className="bg-linear-to-r from-indigo-600 to-indigo-500 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold">Absolutely Useless.</h1>
          <p className="mt-4 text-indigo-200">
            Nothing to see here. The same as others, but on a different domain. Don&apos;t waste your time.
          </p>
          <Link
            className="inline-block mt-4 py-2 px-4 bg-white text-indigo-500 rounded-md font-semibold shadow hover:shadow-xl"
            href="/articles/1"
          >
            I want to waste my time
          </Link>
        </div>
      </section>
      {/* Main */}
      <section className="py-8 space-y-8">
        {/* Filters bar */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <div className="space-x-2">
              <span>Showing</span>
              <select className="border rounded-sm bg-white p-1">
                <option>Latest</option>
                <option>Olders</option>
                <option>Popular</option>
              </select>
            </div>
            <div className="space-x-2">
              <span>Categories</span>
              <select className="border rounded-sm bg-white p-1">
                <option>Garbage</option>
                <option>Useless</option>
                <option>For show</option>
                <option>Random</option>
                <option>News</option>
              </select>
            </div>
          </div>
          <div>3 articles</div>
        </div>
        {/* Articles grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <ArticlePreview key={post.id} post={post} mode="preview" />
          ))}
        </div>
        <div className="container mx-auto flex justify-center">
          <Link
            className="inline-block py-2 px-4 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-50 "
            href="/articles"
          >
            Show more
          </Link>
        </div>
      </section>
    </main>
  )
}
