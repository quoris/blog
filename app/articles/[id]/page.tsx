import Link from 'next/link'
import Image from 'next/image'

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id)

  return (
    <main>
      <div>
        <article>
          <div>
            <Link href="/">Home</Link> › <Link href="/articles">Articles</Link> › <span>Article № {id}</span>
          </div>
          <header>
            <h1>Article № {id}</h1>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...&quot;</p>
            <div>
              <Image src="https://i.pravatar.cc/64?img=1" alt="users-avatar-1" width={64} height={64}></Image>
              <div>
                <span>Damian de Vester</span>
                <span>2025-11-12</span>
              </div>
            </div>
          </header>
          <figure>
            <Image src={`https://picsum.photos/1200/600?random=${id}`} alt="random-pic-2" width={1200} height={600}></Image>
          </figure>
          <section>
            <h2>Paragrapho 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, lacus non condimentum interdum, purus
              velit mollis ligula, quis facilisis erat nisl sed lectus. Cras a tincidunt mi. In varius fringilla dui, vitae
              viverra augue interdum eu. Aenean molestie leo non magna efficitur, non egestas turpis rhoncus. Vestibulum egestas
              nisi quis ex ultricies blandit. Donec vestibulum neque odio, at condimentum neque ornare vitae. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <h2>Paragrapho 2</h2>
            <p>
              Etiam tincidunt sagittis arcu ac faucibus. Nam augue dui, consequat non nibh id, dapibus lacinia ante. Nunc non
              commodo ligula, vitae sollicitudin ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent ullamcorper metus at magna fermentum rhoncus. Nunc vitae elementum massa, a
              sollicitudin enim. Nullam quis hendrerit odio. Nam vestibulum felis sit amet neque faucibus molestie sodales vel
              risus. Pellentesque sagittis tincidunt ipsum nec eleifend. Sed varius tempor tempus. Proin ac turpis nec ex
              fringilla pretium. Sed pharetra vel dui ac ornare. Cras egestas justo quis quam lobortis, a tempor diam fringilla.
              Aliquam ac vehicula libero. Mauris vel malesuada libero. Integer porttitor dui in dolor tempus, a consectetur nisl
              placerat.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In mollis massa eu
              gravida pretium. Maecenas vulputate risus sit amet porta lacinia. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas et vulputate odio. Phasellus id ex a est dignissim tempor
              vel sed nisi. Maecenas volutpat eleifend neque vitae feugiat. Sed egestas tempus leo, ut tempus nulla pulvinar
              sed. Pellentesque risus ligula, tempus non sem nec, iaculis semper ipsum. Phasellus sagittis laoreet eros et
              sodales. Nam in dolor sed ipsum lobortis condimentum. Integer euismod, ex non lacinia convallis, turpis arcu
              malesuada dui, eu cursus turpis libero non lorem. Suspendisse sed quam hendrerit, ultrices mi non, accumsan
              tortor. Vivamus mattis nec mauris ut tincidunt. Fusce vitae mattis magna.
            </p>
            <h2>Paragrapho 3</h2>
            <p>
              Nulla commodo nisi eu ex mattis, et iaculis eros suscipit. Nullam ligula mi, porttitor at mi ac, mollis hendrerit
              magna. Vestibulum et mollis erat. Nulla ac libero elit. Nunc venenatis maximus augue in eleifend. In sed cursus
              metus. Nunc vulputate odio lacus. Mauris scelerisque consequat vulputate. Pellentesque imperdiet aliquam orci, nec
              sagittis nibh sagittis a. Aliquam dictum enim mi, tempus posuere lectus cursus vel.
            </p>
            <p>
              Praesent feugiat vehicula nibh, vel vulputate lorem lobortis sit amet. Quisque nec tincidunt ex. Nam aliquet
              ligula at ante dictum tincidunt. Aliquam nunc sem, lobortis sed magna blandit, imperdiet tristique nulla. Fusce ac
              sapien nec metus efficitur dictum vitae ac enim. Vivamus eget odio non purus aliquet pulvinar id in enim. Nullam
              interdum nunc et eros viverra, feugiat ultrices nisl rutrum. Aenean commodo bibendum mauris sed faucibus. Praesent
              sed magna fermentum, volutpat eros quis, tincidunt sem. Morbi vitae condimentum magna.
            </p>
          </section>
          <section>
            <h3>Comments</h3>
            <div>
              <div>
                <Image src="https://i.pravatar.cc/48?img=3" alt="users-avatar-3" width={48} height={48}></Image>
                <div>
                  <div>
                    <span>Eduardo</span>
                    <span>October 3, 2025</span>
                  </div>
                  <p>Pls translate in english</p>
                </div>
              </div>
              <div>
                <Image src="https://i.pravatar.cc/48?img=3" alt="users-avatar-3" width={64} height={64}></Image>
                <div>
                  <div>
                    <span>Jessica</span>
                    <span>October 4, 2025</span>
                  </div>
                  <p>Not unique!!! You grabbed text from the other website</p>
                </div>
              </div>
              <div>
                <Image src="https://i.pravatar.cc/48?img=4" alt="users-avatar-4" width={64} height={64}></Image>
                <div>
                  <div>
                    <span>Spider-Man</span>
                    <span>October 5, 2025</span>
                  </div>
                  <p>Mary Jane is whore</p>
                </div>
              </div>
            </div>
            <form>
              <input placeholder="Yout name"></input>
              <textarea placeholder="What do you thinking about article?"></textarea>
              <button>Sumbit</button>
            </form>
          </section>
        </article>
        <aside>
          <div>
            <h3>About author</h3>
            <div>
              <Image src="https://i.pravatar.cc/64?img=3" alt="users-avatar-3" width={64} height={64}></Image>
              <div>
                <span>Damian de Vester</span>
                <span>Monk in northern Scotland • 1 article</span>
              </div>
            </div>
            <p>Damian de Vester writes about fun, sex and rock-n-roll</p>
            <Link href="#">Read author →</Link>
          </div>
          <div>
            <div>
              <Image src="https://picsum.photos/120/80?random=1" alt="article-img-preview-1" width={120} height={80}></Image>
              <div>
                <Link href="/articles/4">Are you human or a corn?</Link>
                <span>Anastasia • Nov 11, 2025</span>
              </div>
            </div>
            <div>
              <Image src="https://picsum.photos/120/80?random=2" alt="article-img-preview-2" width={120} height={80}></Image>
              <div>
                <Link href="/articles/5">The earth is shaped like a Choco-Pie</Link>
                <span>Professor Alvarez • Nov 12, 2025</span>
              </div>
            </div>
            <div>
              <Image src="https://picsum.photos/120/80?random=3" alt="article-img-preview-3" width={120} height={80}></Image>
              <div>
                <Link href="/articles/6">Do penguins have knees?</Link>
                <span>Cody Maverick • Nov 13, 2025</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
