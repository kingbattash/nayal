"use client"

import { cn } from "@/lib/utils"

export interface CategoryTab {
  /** Stable value used for filtering. Use "all" for the View All tab. */
  value: string
  /** Display label shown in the tab. */
  label: string
}

interface CategoryTabsProps {
  tabs: CategoryTab[]
  active: string
  onChange: (value: string) => void
  className?: string
}

/**
 * Editorial subcategory tab navigator (VIEW ALL · CLOTHING · BAGS …).
 * Presentational + controlled so it can be reused on any collection page.
 */
export function CategoryTabs({ tabs, active, onChange, className }: CategoryTabsProps) {
  return (
    <nav
      aria-label="Product categories"
      className={cn("flex flex-wrap items-center justify-center gap-2 sm:gap-3", className)}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === active
        return (
          <button
            key={tab.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              "border px-4 py-2.5 text-[10px] uppercase tracking-[0.28em] transition-colors sm:text-[11px]",
              isActive
                ? "border-ink text-ink"
                : "border-transparent text-subtle hover:text-ink",
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
