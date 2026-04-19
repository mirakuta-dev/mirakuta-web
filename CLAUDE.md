# Mirakuta Website - CLAUDE.md

## Project Overview
- **URL:** mirakuta.dev
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel + Cloudflare DNS

## Pages
- `/` — Main landing page
- `/products` — All Mirakuta products
- `/about` — Brand story + maker intro
- `/docs` — Documentation (per product, future)
- `/changelog` — Release notes (future)

---

## Brand Identity

### Colors
Register brand colors in `app/globals.css` using Tailwind v4 `@theme` directive.
Classes like `bg-brand-primary`, `text-brand-dark`, `border-brand-border` work out of the box.

```css
@import "tailwindcss";

@theme {
  --color-brand-primary:   #4338CA; /* Indigo 600 — main CTA, buttons, links */
  --color-brand-dark:      #1E1B4B; /* Indigo 900 — dark bg, hero section */
  --color-brand-mid:       #818CF8; /* Indigo 400 — symbol on dark bg, accents */
  --color-brand-light:     #E0E7FF; /* Indigo 100 — symbol inner, light accents */
  --color-brand-textDark:  #C7D2FE; /* wordmark on dark backgrounds */
  --color-brand-neutral:   #1F2937; /* Gray 800 — body text */
  --color-brand-muted:     #6B7280; /* Gray 500 — secondary text */
  --color-brand-border:    #E5E7EB; /* Gray 200 — borders */
  --color-brand-surface:   #F9FAFB; /* Gray 50 — background surfaces */
}
```

### Typography
- **Font:** Inter (Google Fonts) — import via `next/font/google`
- **Mono font:** JetBrains Mono — for code blocks and `>_` symbol
- **Heading weight:** 500 (medium) — never 700
- **Body:** 16px / line-height 1.7
- **Letter spacing:** `-0.025em` to `-0.05em` for headings
- **Case:** Always sentence case — never ALL CAPS, never Title Case

### Logo Symbol (SVG)
Use this SVG inline as a React component (`components/Logo.tsx`):

```tsx
// Light mode version
<svg width="40" height="40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(200, 200)">
    <rect x="-120" y="-120" width="240" height="240" rx="24"
      fill="#4338CA" transform="rotate(45)"/>
    <rect x="-72" y="-72" width="144" height="144" rx="14"
      fill="#E0E7FF" transform="rotate(45)"/>
    <text fontFamily="'JetBrains Mono', monospace" fontSize="80"
      fontWeight="700" fill="#4338CA"
      textAnchor="middle" dominantBaseline="middle">&gt;_</text>
  </g>
</svg>

// Dark mode version (swap fills)
// outer: #818CF8, inner: #1E1B4B, text: #C7D2FE
```

### Wordmark
```tsx
<span className="font-sans font-medium tracking-tight text-brand-dark dark:text-brand-textDark">
  mirakuta
</span>
```
Always lowercase. Never uppercase.

---

## Responsive Breakpoints

Use Tailwind's default breakpoints:

| Breakpoint | Width | Layout behavior |
|------------|-------|-----------------|
| default (mobile) | < 768px | Single column, hamburger nav |
| `md` | 768px–1023px | 2-column grids, condensed nav |
| `lg` | 1024px+ | Full desktop layout |

### Responsive rules
- Problem section: `grid-cols-1 md:grid-cols-3`
- Solution section: `grid-cols-1 md:grid-cols-2`
- Products grid: `grid-cols-1` always (card is wide enough)
- Nav: hamburger on mobile (`md:hidden` / `hidden md:flex`)
- Hero headline: `text-3xl md:text-4xl lg:text-5xl`
- Section padding: `px-6 md:px-12 lg:px-24`

---

## Component Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout, font setup, metadata
│   ├── page.tsx            # Landing page (/)
│   ├── products/
│   │   └── page.tsx        # /products
│   ├── about/
│   │   └── page.tsx        # /about
│   └── globals.css         # Tailwind base + custom vars
├── components/
│   ├── Logo.tsx            # SVG logo component (light/dark aware)
│   ├── Nav.tsx             # Top navigation + mobile hamburger
│   ├── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── SocialProof.tsx # Placeholder until v1.0
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx      # Primary / secondary variants
│       ├── Badge.tsx       # Status badges (active, beta, etc.)
│       └── ProductCard.tsx # Card for /products page
├── lib/
│   └── products.ts         # Product data (name, desc, status, tags, url)
├── public/
│   └── og-image.png        # Open Graph image
├── next.config.ts
└── CLAUDE.md               # This file
```

> Tailwind v4 (CSS-based config) — no `tailwind.config.ts`; brand tokens live in `app/globals.css`.

---

## Design Rules

### General
- No gradients, no drop shadows, no blur effects
- Borders: `border border-brand-border` (0.5px equivalent via `border`)
- Corner radius: `rounded-lg` for cards, `rounded-md` for buttons/badges
- Background: transparent or `bg-brand-surface` — never hardcoded white

### Dark mode
- Use `dark:` variants for all color classes
- Nav + hero section uses dark bg (`bg-brand-dark`)
- CTA section: always dark bg regardless of mode
- Test every component in both light and dark mode

### Cards
```tsx
<div className="bg-white dark:bg-gray-900 border border-brand-border rounded-lg p-5">
```

### Buttons
```tsx
// Primary
<button className="bg-brand-primary text-brand-light text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity">

// Secondary
<button className="border border-brand-border text-brand-neutral dark:text-white text-sm px-5 py-2.5 rounded-md hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors">
```

### Section spacing
```tsx
<section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
```

---

## Landing Page Section Flow

1. **Nav** — Logo + links (products, docs, changelog, about) + GitHub CTA button
2. **Hero** — Headline + subline + primary CTA + secondary CTA
3. **Problem** — 3 quote cards showing user pain points
4. **Solution** — 4 feature cards
5. **Social Proof** — Placeholder (GitHub stars, future)
6. **CTA** — Dark bg, closing headline + GitHub button
7. **Footer** — MIT license + email

---

## Copy (use exactly as written)

### Hero
```
Headline:  Windows dev setup, done right.
Subline:   One command. Everything you need. Nothing you don't.
CTA:       View on GitHub →
Secondary: See what it does
```

### Problem section
```
Heading: Setting up a Windows dev environment shouldn't take an afternoon.
Quote 1: "Which PowerShell version? Do I need WSL? What's winget?"
Quote 2: "Spent 3 hours on fonts alone. Still not sure if it's right."
Quote 3: "My Mac just works. Why is Windows like this."
```

### Solution section
```
Heading: Everything sorted. In one command.
Card 1:  Go, Git, Node — installed / The tools you actually need, nothing else.
Card 2:  WSL + Ubuntu — ready / Linux on Windows, configured properly.
Card 3:  Fonts + terminal — configured / JetBrains Mono. Looks good. Works great.
Card 4:  Presets — pick your stack / Minimal, full-stack, data science. You choose.
```

### CTA section
```
Headline: Ready to stop configuring?
Subline:  Go build something.
CTA:      View on GitHub →
```

### Footer
```
Left:  mirakuta · MIT License
Right: GitHub  |  help@mirakuta.dev
```

---

## Product Data Structure

```typescript
// lib/products.ts
export type ProductStatus = 'active' | 'beta' | 'archived' | 'coming-soon'

export interface Product {
  name: string
  description: string
  status: ProductStatus
  tags: string[]
  url: string
  github: string
}

export const products: Product[] = [
  {
    name: 'mirakuta CLI',
    description: 'Modern dev environment for Windows, one line away.',
    status: 'active',
    tags: ['Go', 'CLI', 'Windows'],
    url: 'https://mirakuta.dev',
    github: 'https://github.com/mirakuta-dev/mirakuta',
  }
]
```

---

## About Page Structure

```
1. Short intro (2-3 lines) — who, where, what
2. Tech stack — language/framework tags
3. Built with Mirakuta → links to /products
4. Contact — GitHub + email
5. (Optional, add later) Career timeline
```

---

## SEO & Metadata

Set in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'mirakuta — Windows dev setup, done right.',
  description: 'One command. Everything you need. Nothing you don\'t.',
  openGraph: {
    title: 'mirakuta',
    description: 'Modern dev environment for Windows, one line away.',
    url: 'https://mirakuta.dev',
    siteName: 'mirakuta',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mirakuta',
    description: 'Modern dev environment for Windows, one line away.',
  }
}
```

---

## Related
- Shared org-level config: `D:\Projects\mirakuta-dev\CLAUDE.md`
- CLI repo: `mirakuta` (see parent CLAUDE.md for details)

## Branch Strategy
- Work on `feature/website-init` branched from `dev`
- Merge to `dev` after human review
- Commit process and prohibited actions defined in global `~/.claude/CLAUDE.md`
