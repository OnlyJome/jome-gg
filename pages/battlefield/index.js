import Link from 'next/link'
import { getCollection } from '../../lib/content'

export async function getStaticProps() {
  const items = getCollection('battlefield-loadouts');
  return { props: { items } };
}

export default function Battlefield6({ items }) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-extrabold text-[var(--brand-dark)]">Battlefield 6 Hub – Updated Weekly</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {items.map(x => (
            <Link href={`/battlefield/${x.slug}/`} key={x.slug} className="card hover:shadow-md">
              <h3 className="font-bold">{x.title}</h3>
              <p className="text-sm opacity-80">{x.description || ''}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}