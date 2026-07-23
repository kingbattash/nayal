import { CollectionCatalogue } from "@/components/collection-catalogue"
import {
  collectionMeta,
  getCollectionLines,
  getProductsByCollection,
  type Collection,
} from "@/lib/products"

export function CollectionView({ collection }: { collection: Collection }) {
  const meta = collectionMeta[collection]
  const items = getProductsByCollection(collection)
  const lines = getCollectionLines(collection)

  return (
    <>
      {/* Collection banner */}
      <section className="relative flex h-[52vh] min-h-[380px] items-center justify-center overflow-hidden bg-surface">
        <img
          src={meta.hero || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-ink/25" />
        <div className="relative z-10 max-w-2xl px-6 text-center text-canvas">
          <p className="text-[10px] uppercase tracking-[0.5em] drop-shadow">{meta.kicker}</p>
          <h1 className="mt-4 font-serif text-4xl font-light uppercase tracking-[0.12em] drop-shadow sm:text-6xl">
            {meta.title}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-canvas/90 text-pretty drop-shadow">
            {meta.blurb}
          </p>
        </div>
      </section>

      {/* Category tabs + filter/sort bar + catalogue */}
      <CollectionCatalogue products={items} lines={lines} />
    </>
  )
}
