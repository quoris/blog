import Image from 'next/image'
import Link from 'next/link'

export default function Articles() {
  return (
    <main>
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
            <Image src="https://picsum.photos/1200/600?random=1" alt="random-pic-1" width={1200} height={600}></Image>
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
            <Image src="https://picsum.photos/1200/600?random=2" alt="random-pic-2" width={1200} height={600}></Image>
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
            <Image src="https://picsum.photos/1200/600?random=3" alt="random-pic-3" width={1200} height={600}></Image>
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
        <article>
          <Link href="/articles/4">
            <Image src="https://picsum.photos/1200/600?random=4" alt="random-pic-4" width={1200} height={600}></Image>
          </Link>
          <div>
            <Link href="/articles/4">Are you human or a corn?</Link>
            <p>I talk about how to distinguish a good person from a bad one</p>
            <div>
              <div>
                <Image src="https://i.pravatar.cc/64?img=4" alt="users-avatar-4" width={64} height={64}></Image>
                <div>
                  <span>Anastasia</span>
                  <span>2025-11-11</span>
                </div>
              </div>
              <div>
                <Link href="/articles/4">Read</Link>
              </div>
            </div>
          </div>
        </article>
        <article>
          <Link href="/articles/5">
            <Image src="https://picsum.photos/1200/600?random=5" alt="random-pic-5" width={1200} height={600}></Image>
          </Link>
          <div>
            <Link href="/articles/5">The earth is shaped like a Choco-Pie</Link>
            <p>They are the same color. What other evidence is needed?</p>
            <div>
              <div>
                <Image src="https://i.pravatar.cc/64?img=5" alt="users-avatar-5" width={64} height={64}></Image>
                <div>
                  <span>Professor Alvarez</span>
                  <span>2025-11-12</span>
                </div>
              </div>
              <div>
                <Link href="/articles/5">Read</Link>
              </div>
            </div>
          </div>
        </article>
        <article>
          <Link href="/articles/6">
            <Image src="https://picsum.photos/1200/600?random=6" alt="random-pic-6" width={1200} height={600}></Image>
          </Link>
          <div>
            <Link href="/articles/6">Do penguins have knees?</Link>
            <p>Finally we find out the answer to this question that worries many.</p>
            <div>
              <div>
                <Image src="https://i.pravatar.cc/64?img=6" alt="users-avatar-6" width={64} height={64}></Image>
                <div>
                  <span>Cody Maverick</span>
                  <span>2025-11-13</span>
                </div>
              </div>
              <div>
                <Link href="/articles/6">Read</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      {/* Pagination */}
      <div>
        <span>1</span>
        <Link href="#">2</Link>
        <Link href="#">...</Link>
        <Link href="#">9</Link>
        <Link href="#">10</Link>
      </div>
    </main>
  )
}
