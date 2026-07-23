/**
 * NAYAL — Layout Tokens
 * ---------------------------------
 * Standardised page rhythm: container widths, section padding and the
 * responsive catalogue grid. Pages import these so spacing stays consistent
 * across every route.
 */

/** Max content container widths. */
export const container = {
  /** Standard editorial column. */
  base: "mx-auto w-full max-w-7xl px-6 sm:px-10",
  /** Narrow reading column (about / newsletter copy). */
  narrow: "mx-auto w-full max-w-3xl px-6",
  /** Full-bleed but padded. */
  wide: "mx-auto w-full max-w-[1600px] px-4 sm:px-8",
} as const

/** Vertical section padding scale. */
export const section = {
  sm: "py-12",
  base: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
} as const

/** Responsive product grids. */
export const grid = {
  catalog: "grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
  catalogDense: "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4",
  editorial: "grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16",
} as const

/** Standard aspect ratios for product imagery. */
export const media = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
} as const
