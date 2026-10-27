# Sarenti — Website

Premium, mobile-first website for **Sarenti** (medicina estética y
bienestar), built to make booking an appointment through WhatsApp as easy
as possible.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + Framer
Motion + lucide-react**.

---

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Build for production

```bash
npm run build
npm start
```

---

## Project structure

```
/app                      Routes, layout, global styles, SEO files
/components
  /sections                One component per homepage section
  /ui                       Reusable primitives (buttons, cards, accordion...)
  Navbar.tsx, Footer.tsx, WhatsAppButton.tsx, StickyMobileCTA.tsx
/data                      All editable content lives here (see below)
/lib                        Small shared helpers (WhatsApp link builder)
/public/images/hyperbaric   Real photos of Sarenti's hyperbaric chamber
/public/images/editorial    Higgsfield-generated editorial images go here
/public/media               Hero video and other video assets go here
HIGGSFIELD-ASSET-PLAN.md    Exact prompts/specs for every AI-generated asset
```

The site is currently a single page (`app/page.tsx` composing every
section), but content lives in typed data files and components are
already split by concern, so it can grow into routes such as
`/tratamientos` or `/tratamientos/hydrafacial` later without a rewrite.

---

## How to update things

Everything you'll want to change regularly lives in `/data`, not spread
across components.

### Update the WhatsApp number

Edit `data/site.ts`:

```ts
whatsappNumber: "522221003094", // digits only, international format
whatsappDisplay: "222 100 3094", // what's shown to users
```

Every WhatsApp button on the site (nav, floating button, sticky mobile
bar, every service card, hero, final CTA) reads from this one value via
`lib/whatsapp.ts` — there is nothing else to update.

### Update Instagram, hours, address, or the default WhatsApp message

Also in `data/site.ts`:

```ts
instagramHandle: "@drasarenti",
instagramUrl: "https://instagram.com/drasarenti",
hours: [
  "Lunes a viernes: 9:00 a.m. – 5:00 p.m.",
  "Sábado: 8:00 a.m. – 3:00 p.m.",
],
address: "15 de Mayo 15, Col. Francisco I. Madero, 72130 Heroica Puebla de Zaragoza, Pue.",
defaultWhatsAppMessage: "Hola, vi la página de Sarenti y quisiera agendar una cita.",
```

### Add, remove, or edit a treatment

Edit `data/services.ts`. Each service is a plain object:

```ts
{
  id: "hydrafacial",
  slug: "hydrafacial",
  name: "Hydrafacial",
  category: "faciales",
  shortDescription: "En una sola sesión se limpia, exfolia e hidrata la piel.",
  featured: true, // shows on the homepage highlight grid
  whatsappMessage: "Hola, quisiera información sobre Hydrafacial.",
}
```

- `category` must be one of: `camara-hiperbarica`, `faciales`,
  `corporales`, `especializados`, `masajes`.
- **Never add a `price` field.** Prices are intentionally not shown
  anywhere on the site.
- `slug` is reserved for a future dedicated route
  (`/tratamientos/[slug]`) — not wired up yet, but keeps the data ready.

### Update FAQs

Edit `data/faqs.ts` — a simple array of `{ question, answer }`.

### Testimonials

The Testimonios section (`components/sections/TestimonialsSection.tsx`)
currently shows a short message and a link to Sarenti's Google reviews
instead of individual testimonials. Update the link via
`googleReviewsUrl` in `data/site.ts`. Only add real, verified client
reviews if testimonials are shown on the page again.

### Update the "Sobre Sarenti" / doctor bio section

Edit `components/sections/AboutSection.tsx`. The `credentials` array at
the top is intentionally empty — add real, verified credentials there
once provided. Do not invent degrees, certifications, or specialties.

---

## Replacing visual assets

### Hero video, hyperbaric detail clip, and editorial images — already generated

The hero video, the hyperbaric chamber's secondary cinematic clip, and 7
editorial images (facial/body/massage) have already been generated with
Higgsfield and are wired in via `/data/editorial-media.ts`, used by
`HeroSection.tsx`, `HyperbaricSection.tsx`, `AboutSection.tsx`, and the
new `EditorialGallery.tsx` section.

**They currently point at Higgsfield's CDN, not local files.** See
`HIGGSFIELD-GENERATED-ASSETS.md` for exactly what was generated (prompts,
models, settings) and the `curl` commands to download each one locally.
After downloading, update the matching constant in
`/data/editorial-media.ts` to a local `/images/...` or `/media/...` path,
and remove the now-unnecessary `images.remotePatterns` entry from
`next.config.mjs`.

If you regenerate the hero video and want to fall back to local files
under the original naming from the asset plan instead, drop these in and
point `editorialVideos.heroLoop` at the mp4 path (the hero component
falls back to a brand gradient if the video is ever unavailable):

```
/public/media/sarenti-hero.mp4
/public/media/sarenti-hero.webm
/public/media/sarenti-hero-poster.webp
```

### Hyperbaric chamber photos

Real photos already live in `/public/images/hyperbaric/`
(`chamber-wide.jpg`, `chamber-detail.jpg`) and are used in
`components/sections/HyperbaricSection.tsx`. Replace these files directly
with newer/better photos of the **same real chamber** — do not swap in a
different machine. (The chamber's cinematic detail video was generated
using `chamber-wide.jpg` as the reference frame — see
`HIGGSFIELD-GENERATED-ASSETS.md`.)

### Generating more editorial images

See `HIGGSFIELD-ASSET-PLAN.md` for the full plan (prompts, aspect ratios,
what's still optional) and `HIGGSFIELD-GENERATED-ASSETS.md` for what's
already done.

### Logo

The real Sarenti logo (provided directly, not AI-generated) lives at:

```
/public/images/brand/sarenti-logo.png   — full lockup (icon + wordmark + tagline)
/public/images/brand/sarenti-icon.png   — icon mark only, background removed
```

The icon mark is used next to the "Sarenti" text in `Navbar.tsx` and
`Footer.tsx`, and `app/icon.png` (a padded, squared copy of the icon) is
Next.js's App Router favicon convention — replace any of these three
files directly to update the mark everywhere it appears.

---

## Design tokens / brand colors

Defined once in `tailwind.config.ts` and mirrored as CSS variables in
`app/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `sarenti-primary` | `#902376` | Primary CTAs, headings accents |
| `sarenti-secondary` | `#C671A5` | Secondary accents |
| `sarenti-light` | `#EED6E8` | Backgrounds, subtle tags |
| `sarenti-ink` | `#221B20` | Body text (near-black for contrast) |
| `sarenti-paper` | `#FFFFFF` | Dominant background |

White is deliberately dominant across the UI — pink/purple are accents,
not the base palette.

---

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `footer`, proper heading order)
- Visible focus states on every interactive element
- Accessible accordion (FAQ + treatment tabs) using proper `aria-*`
  attributes, not just visual state
- Descriptive `alt` text on all real images
- `prefers-reduced-motion` respected in the hero video and all Framer
  Motion animations
- A "skip to content" link for keyboard users
- Large, thumb-friendly tap targets throughout (mobile-first)

## SEO

- Metadata + Open Graph + Twitter card in `app/layout.tsx`
- `app/robots.ts` and `app/sitemap.ts`
- Basic `MedicalBusiness` JSON-LD structured data (address, phone and
  opening hours — keep them in sync with `data/site.ts`)

## Medical & content safety notes

- No prices are shown anywhere — do not add any.
- No credentials beyond "Dra. Gabriela Ponce" are stated anywhere; the
  About section has a clear `TODO` for adding verified credentials later.
- Hyperbaric chamber copy avoids absolute medical claims ("cura",
  "garantiza", etc.) and includes an explicit notice to consult the
  doctor before booking.
- No testimonials are invented; the Testimonios section links to
  Sarenti's Google reviews instead.

---

## Notes for future expansion

- Routes like `/tratamientos`, `/camara-hiperbarica`, and
  `/tratamientos/[slug]` can be added under `/app` reusing the existing
  `data/services.ts` and section components — nothing needs to be
  restructured first.
- A public before/after gallery was intentionally left out of this
  version. If added later, it fits as its own section directly below
  `TestimonialsSection` on the homepage.
