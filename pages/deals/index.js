import { getCollection } from '../../lib/content'

export async function getStaticProps() {
  const deals = getCollection('deals');
  return { props: { deals } };
}

export default function Deals({ deals }) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-extrabold text-[var(--brand-dark)]">Gear Up & Save</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {deals.map(d => (
            <a key={d.slug} href={d.link} className="card hover:shadow-md">
              <h3 className="font-bold">{d.brand}</h3>
              <p className="text-sm">Code: <strong>{d.code}</strong></p>
              <p className="text-xs opacity-70">{d.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}