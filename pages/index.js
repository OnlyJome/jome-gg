import Link from 'next/link'
import { getCollection } from '../lib/content'

export async function getStaticProps() {
  const wz = getCollection('warzone-loadouts').slice(0,4);
  return { props: { wz } };
}

export default function Home({ wz }) {
  return (
    <>
      <section className="section bg-[var(--brand-light)]">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--brand-dark)]">Warzone & Battlefield — Get the Meta. Get the W.</h1>
          <div className="mt-6 flex gap-3 justify-center">
            <a className="btn btn-primary" href="https://twitch.tv" target="_blank" rel="noreferrer">Watch Live</a>
            <Link className="btn btn-secondary" href="/warzone/">See Latest Loadouts</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Featured Content</h3>
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">Embed Latest YouTube/TikTok</div>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-3">This Week’s Top Loadouts</h3>
            <ul className="space-y-2">
              {wz.map(item=> (
                <li key={item.slug} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <Link className="btn btn-secondary" href={`/warzone/${item.slug}/`}>View</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="text-xl font-bold mb-4">Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card flex items-center justify-center">LOGO</div>
            <div className="card flex items-center justify-center">LOGO</div>
            <div className="card flex items-center justify-center">LOGO</div>
            <div className="card flex items-center justify-center">LOGO</div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--brand-light)]/40">
        <div className="container grid md:grid-cols-2 gap-6 items-center">
          <div className="card aspect-video flex items-center justify-center">Twitch Live Embed</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Get My Meta Loadouts in Your Inbox Weekly</h3>
            <form action="https://app.convertkit.com/forms/placeholder/subscriptions" method="post" className="flex gap-2">
              <input type="email" name="email_address" required placeholder="Email Address" className="flex-1 border rounded px-3" />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
            <p className="text-xs mt-2">Replace the ConvertKit form URL with your Form ID.</p>
          </div>
        </div>
      </section>
    </>
  )
}