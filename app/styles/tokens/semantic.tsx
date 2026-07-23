/**
 * NAYAL — Semantic Tokens
 * ---------------------------------
 * Maps core primitives onto UI intent. Components consume these Tailwind class
 * strings (backed by the `@theme` colours in globals.css) instead of hard-coded
 * colours, so the whole maison shares one cohesive palette.
 */

import { tracking } from "./core"

/** Surface / background intents. */
export const surface = {
  page: "bg-canvas text-ink",
  raised: "bg-surface text-ink",
  strong: "bg-surface-strong text-ink",
  inverse: "bg-ink text-canvas",
} as const

/** Text intents. */
export const text = {
  primary: "text-ink",
  muted: "text-subtle",
  inverse: "text-canvas",
  gold: "text-gold",
} as const

/** The luxurious thin borders used throughout the maison. */
export const border = {
  hairline: "border border-line",
  hairlineStrong: "border border-line-strong",
  bottom: "border-b border-line",
  top: "border-t border-line",
} as const

/** Eyebrow / kicker label — the small spaced uppercase text. */
export const eyebrow = `text-[10px] uppercase ${tracking.widest} text-subtle`

/** Primary editorial display heading. */
export const display = "font-serif font-light uppercase tracking-[0.1em]"

/** Structural gothic label used for nav and buttons. */
export const label = `font-sans uppercase ${tracking.wide}`

/** Solid ink call-to-action button. */
export const buttonSolid =
  "inline-flex items-center justify-center bg-ink text-canvas hover:bg-ink/90 transition-colors text-[11px] font-sans uppercase tracking-[0.25em]"

/** Ghost / outlined button. */
export const buttonGhost =
  "inline-flex items-center justify-center border border-line-strong text-ink hover:bg-surface transition-colors text-[11px] font-sans uppercase tracking-[0.25em]"

/** Underlined editorial link (serif italic). */
export const linkEditorial =
  "font-serif italic tracking-wide border-b border-current pb-1 hover:opacity-70 transition-opacity"

export type Surface = typeof surface
