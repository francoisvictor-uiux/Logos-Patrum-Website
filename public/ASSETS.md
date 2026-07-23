# Assets manifest

Drop files in the folders below, then add **one line here per asset** so Claude
can identify what each file is and where it should be used. Delete lines when you
remove an asset.

## Where things go
| Type | Folder | Referenced in code as |
|------|--------|------------------------|
| Logos (SVG preferred) | `public/images/logos/` | `/images/logos/<file>` |
| Author / saint photos | `public/images/authors/` | `/images/authors/<file>` |
| Section / feature images | `public/images/sections/` | `/images/sections/<file>` |
| General / hero images | `public/images/` | `/images/<file>` |
| Fonts (.ttf/.otf/.woff2) | `public/fonts/` | registered by Claude |

Naming: kebab-case, no spaces — e.g. `logo-primary.svg`, `author-athanasius.png`.

---

## Logos
- logo-white.svg — Α/Ω open-book emblem, white — header badge + footer (on navy)
- logo-navy.svg — same emblem, navy — for light backgrounds

## Hero
- hero-bg.svg — hero full-bleed background (sunset ruins)
- hero-dashboard.svg — hero tilted "Featured Authors" dashboard panel

## Author photos
<!-- e.g. author-athanasius.png — St. Athanasius, featured-authors card -->

## Section images
<!-- e.g. section-security.png — Security section illustration -->

## Fonts
<!-- filename — font family name — weights — for which locale/use -->
<!-- e.g. Thmanyah-Bold.ttf — "Thmanyah Serif Display" — 700 — Arabic hero headline -->
