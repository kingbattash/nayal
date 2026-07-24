"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import {
  FragranceEditorialFilters,
  type FragranceFilter,
} from "@/components/fragrance-editorial-filters"
import { ProductGrid } from "@/components/product-grid"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"

type SortKey = "featured" | "price-asc" | "price-desc" | "alpha"

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "alpha", label: "Alphabetical" },
]

function parseFilter(value: string | null): FragranceFilter {
  if (value === "lattafa-pride" || value === "ahmed-al-maghribi") return value
  return "all"
}

interface FragranceCatalogueProps {
  products: Product[]
}

export function FragranceCatalogue({ products }: FragranceCatalogueProps) {
  const searchParams = useSearchParams()
  const initialFilter = parseFilter(searchParams.get("filter"))
  const [activeFilter, setActiveFilter] = useState<FragranceFilter>(initialFilter)
  const [sort, setSort] = useState<SortKey>("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [newOnly, setNewOnly] = useState(false)

  const visible = useMemo(() => {
    let list = products

    if (activeFilter === "lattafa-pride") {
      list = list.filter((p) => p.brand === "Lattafa Pride")
    } else if (activeFilter === "ahmed-al-maghribi") {
      list = list.filter((p) => p.brand === "Ahmed Al Maghribi")
    }

    if (newOnly) list = list.filter((p) => p.tag)

    const sorted = [...list]
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price)
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price)
    else if (sort === "alpha") sorted.sort((a, b) => a.name.localeCompare(b.name))
    return sorted
  }, [products, activeFilter, newOnly, sort])

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Featured"

  return (
    <div>
      <FragranceEditorialFilters active={activeFilter} onSelect={setActiveFilter} />

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

      {filtersOpen && (
        <div className="animate-fade-in border-b border-line bg-surface/60 px-4 py-8 sm:px-8">
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

          {activeFilter !== "all" && (
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-6 text-[10px] uppercase tracking-[0.25em] text-gold underline underline-offset-4"
            >
              View all fragrances
            </button>
          )}
        </div>
      )}

      {visible.length > 0 ? (
        <ProductGrid products={visible} variant="tile" />
      ) : (
        <p className="py-24 text-center text-[11px] uppercase tracking-[0.3em] text-subtle">
          No fragrances match your selection
        </p>
      )}
    </div>
  )
}
