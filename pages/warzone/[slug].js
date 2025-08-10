import { getCollection, getBySlug } from '../../lib/content'

export async function getStaticPaths() {
  const items = getCollection('warzone-loadouts');
  return {
    paths: items.map(x => ({ params: { slug: x.slug } })),
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const item = getBySlug('warzone-loadouts', params.slug);
  return { props: { item } };
}

export default function Loadout({ item }) {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[var(--brand-dark)]">{item.title}</h1>
        <p className="opacity-80 mt-1">{item.subtitle || ''}</p>
        <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{__html: item.html}} />
        {item.video && (
          <div className="aspect-video mt-6">
            <iframe className="w-full h-full" src={item.video} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        )}
      </div>
    </section>
  )
}