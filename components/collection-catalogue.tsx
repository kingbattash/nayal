"use client"

import { useMemo, useState } from "react"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import { CategoryTabs, type CategoryTab } from "@/components/category-tabs"
import { ProductGrid } from "@/components/product-grid"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

type SortKey = "featured" | "alpha"

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "alpha", label: "Alphabetical" },
]



interface CollectionCatalogueProps {
  products: Product[]
  /** Sub-category line names, e.g. ["Haute Couture", "Tailoring", …] */
  lines: string[]
}

/**
 * Reusable catalogue block: category tab navigator + FILTERS / count / SORT BY
 * bar, driving a filtered + sorted product grid. Shared across all collections.
 */
export function CollectionCatalogue({ products, lines }: CollectionCatalogueProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [sort, setSort] = useState<SortKey>("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [newOnly, setNewOnly] = useState(false)

  const tabs: CategoryTab[] = useMemo(
    () => [
      { value: "all", label: "View All" },
      ...lines.map((line) => ({ value: line, label: line })),
    ],
    [lines],
  )

  const visible = useMemo(() => {
    let list = products
    if (activeTab !== "all") list = list.filter((p) => p.line === activeTab)
    if (newOnly) list = list.filter((p) => p.tag)

    const sorted = [...list]
    if (sort === "alpha") sorted.sort((a, b) => a.name.localeCompare(b.name))
    return sorted
  }, [products, activeTab, newOnly, sort])

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Featured"

  return (
    <div>
      {/* Category tab navigator */}
      <div className="border-b border-line py-6">
        <CategoryTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      {/* Filter / count / sort bar */}
      <div className="relative grid grid-cols-3 items-center border-b border-line px-4 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
          className="flex items-center gap-2 justify-self-start text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:text-gold"
        >
          {filtersOpen ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
          Filters
        </button>

        <span className="justify-self-center text-center text-[11px] uppercase tracking-[0.25em] text-gold">
          {visible.length} {visible.length === 1 ? "Product" : "Products"}
        </span>

        <div className="relative justify-self-end">
          <button
            type="button"
            onClick={() => setSortOpen((v) => !v)}
            aria-expanded={sortOpen}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:text-gold"
          >
            Sort By
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", sortOpen && "rotate-180")}
            />
          </button>
          {sortOpen && (
            <div className="animate-fade-in absolute right-0 top-full z-20 mt-3 w-56 border border-line bg-canvas py-2 shadow-lg">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSort(opt.value)
                    setSortOpen(false)
                  }}
                  className={cn(
                    "block w-full px-5 py-2.5 text-left text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-surface",
                    opt.value === sort ? "text-ink" : "text-subtle",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters panel */}
      {filtersOpen && (
        <div className="animate-fade-in border-b border-line bg-surface/60 px-4 py-8 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">


            <fieldset>
              <legend className="mb-4 text-[10px] uppercase tracking-[0.3em] text-subtle">
                Availability
              </legend>
              <button
                type="button"
                aria-pressed={newOnly}
                onClick={() => setNewOnly((v) => !v)}
                className={cn(
                  "border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors",
                  newOnly
                    ? "border-ink text-ink"
                    : "border-line text-subtle hover:border-ink hover:text-ink",
                )}
              >
                New Arrivals Only
              </button>
            </fieldset>

            {newOnly && (
              <button
                type="button"
                onClick={() => {
                  setNewOnly(false)
                }}
                className="self-end text-[10px] uppercase tracking-[0.25em] text-gold underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="px-4 py-12 sm:px-8 sm:py-16">
        {visible.length > 0 ? (
          <ProductGrid products={visible} />
        ) : (
          <p className="py-24 text-center text-[11px] uppercase tracking-[0.3em] text-subtle">
            No pieces match your selection
          </p>
        )}
      </div>
    </div>
  )
}
