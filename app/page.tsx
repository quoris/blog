import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section>
        <h1>Absolutely useless</h1>
        <p>
          Nothing to see here. I&apos;ve created another blog for you to scroll it. The same as others, but on a different
          domain.
        </p>
        <button>OK, I want to waste my time</button>
      </section>
      {/* Main */}
      <section>
        {/* Filters bar */}
        <div>
          <div>
            <span>Showing</span>
            <select>
              <option>Latest</option>
              <option>Olders</option>
              <option>Popular</option>
            </select>
          </div>
          <div>
            <span>Categories</span>
            <select>
              <option>Garbage</option>
              <option>Useless</option>
              <option>For show</option>
              <option>Random</option>
              <option>News</option>
            </select>
          </div>
          <div>3 articles</div>
        </div>
        {/* Articles grid */}
        <div>
          <article>
            <Link href="/articles/1">
              <Image src="https://picsum.photos/800/480?random=1" alt="random-pic-1" width={800} height={480}></Image>
            </Link>
            <div>
              <Link href="/articles/1">Why you need to drink a water?</Link>
              <p>Step-by-step guide to drinking a water properly</p>
              <div>
                <div>
                  <Image src="https://i.pravatar.cc/64?img=1" alt="users-avatar-1" width={64} height={64}></Image>
                  <div>
                    <span>Doctor Alban</span>
                    <span>2025-11-08</span>
                  </div>
                </div>
                <div>
                  <Link href="/articles/1">Read</Link>
                </div>
              </div>
            </div>
          </article>
          <article>
            <Link href="/articles/2">
              <Image src="https://picsum.photos/800/480?random=2" alt="random-pic-2" width={800} height={480}></Image>
            </Link>
            <div>
              <Link href="/articles/2">Why you need to breathe?</Link>
              <p>Step-by-step guide to breathe properly</p>
              <div>
                <div>
                  <Image src="https://i.pravatar.cc/64?img=2" alt="users-avatar-2" width={64} height={64}></Image>
                  <div>
                    <span>Nikolas</span>
                    <span>2025-11-09</span>
                  </div>
                </div>
                <div>
                  <Link href="/articles/2">Read</Link>
                </div>
              </div>
            </div>
          </article>
          <article>
            <Link href="/articles/3">
              <Image src="https://picsum.photos/800/480?random=3" alt="random-pic-3" width={800} height={480}></Image>
            </Link>
            <div>
              <Link href="/articles/3">Do you like pineapple pizza?</Link>
              <p>I&apos;m telling you how pizza affects your psychotype.</p>
              <div>
                <div>
                  <Image src="https://i.pravatar.cc/64?img=3" alt="users-avatar-3" width={64} height={64}></Image>
                  <div>
                    <span>Don Francesco</span>
                    <span>2025-11-10</span>
                  </div>
                </div>
                <div>
                  <Link href="/articles/3">Read</Link>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div>
          <Link href="/articles">Show more</Link>
        </div>
      </section>
    </main>
  )
}
