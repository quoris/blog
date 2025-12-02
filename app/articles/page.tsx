import { ArticlePreview } from '@/components/ArticlePreview'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Articles() {
  const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, take: 6 })

  return (
    <main>
      <div className="container mx-auto">
        <div className="py-10">
          <Link className="hover:underline" href="/">
            Home
          </Link>{' '}
          › <span className="text-gray-900">Articles</span>
        </div>
        <div className="w-5/6 containter mx-auto pb-8 space-y-8">
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
            <div>6 articles</div>
          </div>
          {/* Articles */}
          <div className="container mx-auto space-y-8">
            {posts.map((post) => (
              <ArticlePreview key={post.id} post={post} mode="full" />
            ))}
          </div>
          {/* Pagination */}
          <div className="w-1/6 container mx-auto flex bg-white border border-gray-200 rounded-md shadow">
            <span className="flex-1 text-center p-1.5 border-r border-gray-200 hover:bg-gray-50">1</span>
            <Link className="flex-1 text-center p-1.5 border-r border-gray-200 hover:bg-gray-50" href="#">
              2
            </Link>
            <Link className="flex-1 text-center p-1.5 border-r border-gray-200 hover:bg-gray-50" href="#">
              ...
            </Link>
            <Link className="flex-1 text-center p-1.5 border-r border-gray-200 hover:bg-gray-50" href="#">
              9
            </Link>
            <Link className="flex-1 text-center p-1.5 hover:bg-gray-50" href="#">
              10
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
