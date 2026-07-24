"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export type FragranceFilter = "all" | "women" | "men"

const FILTERS: {
  value: FragranceFilter
  label: string
  image: string
  href: string
}[] = [
  {
    value: "women",
    label: "Women",
    image: "/paris-corner-taskeen-caramel-.jpg",
    href: "/fragrance?filter=women",
  },
  {
    value: "men",
    label: "Men",
    image: "/s-l400.jpg",
    href: "/fragrance?filter=men",
  },
]

interface FragranceEditorialFiltersProps {
  active?: FragranceFilter
  onSelect?: (filter: FragranceFilter) => void
}

/**
 * Versace-style editorial filter tiles — large lifestyle/product imagery
 * with centred white overlay labels.
 */
export function FragranceEditorialFilters({
  active = "all",
  onSelect,
}: FragranceEditorialFiltersProps) {
  return (
    <section className="border-b border-line" aria-label="Fragrance collections">
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {FILTERS.map((filter) => {
          const selected = active === filter.value
          const content = (
            <>
              <img
                src={filter.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/20 to-ink/30" />
              <span className="relative z-10 font-sans text-lg font-normal uppercase tracking-[0.35em] text-canvas drop-shadow-sm sm:text-xl">
                {filter.label}
              </span>
            </>
          )

          const className = cn(
            "group relative flex aspect-[2.2/1] items-center justify-center overflow-hidden bg-surface md:aspect-[2.8/1]",
            selected && "ring-2 ring-inset ring-ink/80",
          )

          if (onSelect) {
            return (
              <li key={filter.value}>
                <button
                  type="button"
                  onClick={() => onSelect(filter.value)}
                  aria-pressed={selected}
                  className={cn(className, "w-full cursor-pointer")}
                >
                  {content}
                </button>
              </li>
            )
          }

          return (
            <li key={filter.value}>
              <Link href={filter.href} className={className}>
                {content}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
