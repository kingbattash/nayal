import Link from "next/link"

/**
 * Versace-inspired PLP SEO banner — centred serif headline, editorial copy,
 * optional inline links. Used on the fragrance collection route.
 */
export function FragrancePageHeader() {
  return (
    <article
      className="border-b border-line bg-canvas"
      aria-labelledby="fragrance-page-title"
    >
      <section className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 sm:py-20">
        <h1
          id="fragrance-page-title"
          className="font-serif text-2xl font-normal uppercase tracking-[0.08em] text-ink sm:text-[1.75rem]"
        >
          Fragrances and Body Care
        </h1>

        <div className="mx-auto mt-6 max-w-[60%] min-w-[280px] text-sm leading-relaxed text-ink sm:text-[15px]">
          <p>
            NAYAL collection of fragrances including eau de toilettes and eau de parfums for{" "}
            <Link
              href="/fragrance?filter=women"
              className="underline underline-offset-4 transition-colors hover:text-subtle"
            >
              women
            </Link>{" "}
            and{" "}
            <Link
              href="/fragrance?filter=men"
              className="underline underline-offset-4 transition-colors hover:text-subtle"
            >
              men
            </Link>{" "}
            as well as botanical oils, parfum extracts and more.
          </p>
        </div>
      </section>
    </article>
  )
}
