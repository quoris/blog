import Image from 'next/image'
import Link from 'next/link'

export default function Articles() {
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
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/1">
                <Image src="https://picsum.photos/1280/480?random=1" alt="random-pic-1" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/1">
                  Why you need to drink a water?
                </Link>
                <p>Step-by-step guide to drinking a water properly.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=1"
                      alt="users-avatar-1"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Doctor Alban</span>
                      <span className="block">2025-11-08 • 6 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/1">
                    Read
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/2">
                <Image src="https://picsum.photos/1280/480?random=2" alt="random-pic-2" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/2">
                  Why you need to breathe?
                </Link>
                <p>Step-by-step guide to breathe properly.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=2"
                      alt="users-avatar-2"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Nikolas</span>
                      <span className="block">2025-11-09 • 7 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/2">
                    Read
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/3">
                <Image src="https://picsum.photos/1280/480?random=3" alt="random-pic-3" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/3">
                  Do you like pineapple pizza?
                </Link>
                <p>I&apos;m telling you how pizza affects your psychotype.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=3"
                      alt="users-avatar-3"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Don Francesco</span>
                      <span className="block">2025-11-10 • 8 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/3">
                    Read
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/4">
                <Image src="https://picsum.photos/1280/480?random=4" alt="random-pic-4" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/4">
                  Are you human or a corn?
                </Link>
                <p>I talk about how to distinguish a good person from a bad one.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=4"
                      alt="users-avatar-3"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Anastasia</span>
                      <span className="block">2025-11-11 • 9 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/4">
                    Read
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/5">
                <Image src="https://picsum.photos/1280/480?random=5" alt="random-pic-5" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/5">
                  The Earth is shaped like a Choco-Pie
                </Link>
                <p>They are the same color. What other evidence is needed?</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=5"
                      alt="users-avatar-5"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Professor Alvarez</span>
                      <span className="block">2025-11-12 • 10 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/5">
                    Read
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
              <Link className="block" href="/articles/6">
                <Image src="https://picsum.photos/1280/480?random=6" alt="random-pic-6" width={1280} height={480}></Image>
              </Link>
              <div className="p-4 space-y-2">
                <Link className="inline-block text-gray-800 text-lg font-semibold hover:underline" href="/articles/6">
                  Do penguins have knees?
                </Link>
                <p>Finally we find out the answer to this question that worries many.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src="https://i.pravatar.cc/64?img=6"
                      alt="users-avatar-6"
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-900">Cody Maverick</span>
                      <span className="block">2025-11-13 • 11 min</span>
                    </div>
                  </div>
                  <Link className="text-indigo-500" href="/articles/6">
                    Read
                  </Link>
                </div>
              </div>
            </article>
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
