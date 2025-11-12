import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
          <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
            <Link className="block" href="/articles/1">
              <Image src="https://picsum.photos/800/400?random=1" alt="random-pic-1" width={800} height={400}></Image>
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
                    <span className="block text-sm">2025-11-08 • 6 min</span>
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
              <Image src="https://picsum.photos/800/400?random=2" alt="random-pic-2" width={800} height={400}></Image>
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
                    <span className="block text-sm">2025-11-09 • 10 min</span>
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
              <Image src="https://picsum.photos/800/400?random=3" alt="random-pic-3" width={800} height={400}></Image>
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
                    <span className="block text-sm">2025-11-10 • 11 min</span>
                  </div>
                </div>
                <Link className="text-indigo-500" href="/articles/3">
                  Read
                </Link>
              </div>
            </div>
          </article>
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
