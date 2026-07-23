/**
 * NAYAL — Core Design Primitives
 * ---------------------------------
 * Raw, unopinionated values. These are the single source of truth that the
 * semantic layer maps onto UI roles. Colour values mirror the CSS custom
 * properties declared in `app/globals.css` so tokens stay in sync with Tailwind.
 */

export const palette = {
  canvas: "#fefefe",
  ink: "#0a0a0a",
  surface: "#f7f7f5",
  surfaceStrong: "#efefec",
  line: "#e6e5e1",
  lineStrong: "#c9c8c2",
  subtle: "#8a8a83",
  gold: "#9c7a45",
} as const

export const shadows = {
  none: "none",
  soft: "0 1px 2px rgba(10, 10, 10, 0.04)",
  card: "0 12px 40px -24px rgba(10, 10, 10, 0.35)",
  drawer: "-24px 0 60px -30px rgba(10, 10, 10, 0.45)",
  float: "0 20px 60px -30px rgba(10, 10, 10, 0.5)",
} as const

/**
 * Font families are loaded via `next/font` in `app/layout.tsx` and exposed as
 * CSS variables (`--font-baskervville`, `--font-jost`). We reference the Tailwind
 * theme utilities that resolve to those variables.
 */
export const fonts = {
  /** Baskervville — editorial serif used for display headlines. */
  serif: {
    className: "font-serif",
    variable: "--font-baskervville",
    role: "Display & editorial headlines",
  },
  /** Jost — an Engravers-Gothic inspired grotesque used for structural UI text. */
  gothic: {
    className: "font-sans",
    variable: "--font-jost",
    role: "Navigation, labels, structural UI",
  },
} as const

export const tracking = {
  tight: "tracking-normal",
  label: "tracking-[0.2em]",
  wide: "tracking-[0.3em]",
  widest: "tracking-[0.4em]",
  emblem: "tracking-[0.5em]",
} as const

export const radii = {
  none: "rounded-none",
  pill: "rounded-full",
} as const

export type Palette = typeof palette
export type Shadows = typeof shadows
