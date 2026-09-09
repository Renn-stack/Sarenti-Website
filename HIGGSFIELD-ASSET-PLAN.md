# Higgsfield Asset Plan — Sarenti

This document is the production plan for every AI-generated visual asset
on the Sarenti website. It is meant to be used directly with Higgsfield:
copy a prompt, generate, review against the rules below, export, and drop
the file into the path listed.

Do not generate more than what is listed here. Visual consistency and
restraint matter more than volume — see "Global rules" below.

---

## Global art direction (apply to every asset)

**Base style prompt** (combine with each specific prompt below):

> Feminine premium medical wellness editorial photography. Soft natural
> daylight, immaculate white clinic interiors, subtle blush and plum
> accents, healthy realistic skin texture, elegant cinematography, slow
> controlled camera movements, calm confident atmosphere, sophisticated
> high-end skincare campaign aesthetic, clean medical environment,
> realistic people, refined composition, premium wellness brand.

**Brand color influence:** `#902376` (primary, plum), `#C671A5`
(secondary, dusty rose), `#EED6E8` (light blush). Use these only as
accents — wardrobe details, small props, soft lighting gels, background
tones. White and natural, realistic skin tones must remain dominant in
every frame (roughly 70–80% of the visual weight, matching the site's own
white-dominant UI).

**Do NOT generate:**

- Fake patient results or before/after transformations
- Misleading medical devices (any device shown must not misrepresent
  Sarenti's real equipment)
- Fake certificates, diplomas, or doctor credentials
- Unrealistic or exaggerated procedures
- Exaggerated body transformations
- Text, watermarks, or logos inside the image/video
- Approximations or reinterpretations of the Sarenti logo
- A different hyperbaric chamber than Sarenti's real one (see below)

Real Sarenti logo assets are handled separately in code (`components/`)
and must never be recreated by Higgsfield.

---

## Asset inventory

### 1. Hero cinematic loop

- **Used in:** `components/sections/HeroSection.tsx` (full-bleed background)
- **Files:**
  - `/public/media/sarenti-hero.mp4`
  - `/public/media/sarenti-hero.webm`
  - `/public/media/sarenti-hero-poster.webp` (first frame, used as `poster`)
- **Aspect ratio:** 16:9 source, cropped with `object-cover`; must read
  well cropped to both ultra-wide desktop and tall mobile (9:16 safe
  center action)
- **Duration:** 6–8 seconds, seamless loop
- **Desktop/mobile:** same file, responsive crop via CSS `object-cover`
- **Motion direction:** slow dolly-in, very subtle lateral drift, soft
  natural light shift (e.g. a passing cloud). No dramatic movement, no
  quick cuts.
- **Prompt:**

  > Premium feminine medical wellness clinic, clean white interior, soft
  > natural daylight, subtle plum and blush details inspired by #902376
  > #C671A5 #EED6E8, elegant adult woman in a refined wellness
  > environment, realistic skin texture, sophisticated medical aesthetic
  > campaign, serene atmosphere, slow controlled cinematic camera
  > movement, premium editorial composition, natural expressions, white
  > dominant palette, luxury healthcare advertising, realistic
  > proportions, no text, no logos, no exaggerated beauty retouching.

- **Fallback behavior:** `HeroSection.tsx` already renders a brand
  gradient behind the video and hides the `<video>` element on load
  error or `prefers-reduced-motion` — no code changes needed once files
  are added.

---

### 2. Hyperbaric chamber cinematic detail (optional, secondary)

- **Used in:** `components/sections/HyperbaricSection.tsx` (placeholder
  slot next to the real chamber photos)
- **File:** `/public/media/sarenti-hyperbaric-detail.mp4`
- **Aspect ratio:** 1:1 or 4:5 (fits the section's image grid)
- **Duration:** 4–6 seconds, loop
- **Reference image (required):** use Sarenti's own real chamber photos
  (`/public/images/hyperbaric/chamber-wide.jpg` and
  `chamber-detail.jpg`) as the visual/motion reference. **Do not
  generate a different machine.**
- **Motion direction:** subtle camera push on the real chamber, gentle
  light enhancement, no fabricated interior/mechanism shots that aren't
  visible in the reference photos.
- **Prompt (image-to-video, reference-guided):**

  > Cinematic close-up of a real hospital-grade hyperbaric chamber in a
  > bright, clean clinic room, soft daylight through blinds, subtle plum
  > and blush accents in the background, slow gentle camera push-in,
  > realistic reflections on the chamber's acrylic viewport, calm
  > professional atmosphere, no added text, no altered equipment
  > geometry, stay faithful to the reference image.

- **What NOT to do:** do not let the model invent a different chamber
  shape, add extra dials/screens not present in the reference, or change
  the "Rio Grande Valley CH" branding visible on the real unit.

---

### 3. Editorial facial-treatment images (2–3 images)

- **Used in:** `components/sections/FeaturedServices.tsx` cards and/or
  `TreatmentCategories.tsx` facial category (optional visual upgrade —
  cards currently work text-only by design)
- **Files:**
  - `/public/images/editorial/facial-treatment-01.jpg`
  - `/public/images/editorial/facial-treatment-02.jpg`
  - `/public/images/editorial/facial-treatment-03.jpg` (optional third)
- **Aspect ratio:** 4:5 (portrait, matches card proportions)
- **Desktop/mobile:** same image, `object-cover`
- **Prompt:**

  > High-end medical skincare editorial photography, adult female patient
  > receiving a professional facial treatment in a pristine white
  > wellness clinic, healthy realistic skin texture, soft daylight,
  > subtle blush and plum accents, professional hygienic environment,
  > calm relaxed expression, premium aesthetic medicine campaign,
  > realistic equipment, elegant composition, natural beauty, no text, no
  > logos, no exaggerated retouching.

- **Variation notes:** vary the angle (profile vs. three-quarter) and the
  visible tool (e.g. a facial device vs. gloved hands) across the 2–3
  generations to avoid repetition, while keeping lighting and palette
  consistent.

---

### 4. Editorial body-treatment images (2 images)

- **Used in:** `TreatmentCategories.tsx` corporales category (optional
  visual upgrade)
- **Files:**
  - `/public/images/editorial/body-treatment-01.jpg`
  - `/public/images/editorial/body-treatment-02.jpg`
- **Aspect ratio:** 4:5
- **Prompt:**

  > High-end medical wellness editorial photography, adult patient
  > receiving a professional body contouring or skin treatment in a
  > pristine white clinic, realistic body proportions, healthy skin
  > texture, soft daylight, subtle blush and plum accents, respectful and
  > professional framing (no over-exposed or objectifying angles),
  > calm confident atmosphere, premium aesthetic medicine campaign, no
  > text, no logos, no exaggerated body transformation.

---

### 5. Massage / wellness visuals (1–2 images)

- **Used in:** `TreatmentCategories.tsx` masajes category (optional
  visual upgrade)
- **Files:**
  - `/public/images/editorial/massage-wellness-01.jpg`
  - `/public/images/editorial/massage-wellness-02.jpg` (optional second)
- **Aspect ratio:** 4:5
- **Prompt:**

  > Premium wellness editorial photography, professional therapeutic
  > massage in a clean elegant clinic, soft daylight, calm neutral
  > environment, subtle Sarenti-inspired blush and plum accents,
  > realistic skin, professional and respectful framing, relaxed
  > atmosphere, sophisticated wellness campaign, no text, no logos.

---

### 6. Secondary wellness video (optional, 1)

- **Used in:** could accompany the "About Sarenti" section or a future
  wellness-focused moment — not wired into any component by default.
- **File:** `/public/media/sarenti-wellness-secondary.mp4`
- **Aspect ratio:** 4:5 or 1:1
- **Duration:** 5–7 seconds, loop
- **Motion direction:** slow, static-feeling shot with minimal drift —
  a hand smoothing a product, a calm seated moment, soft light change.
- **Prompt:** reuse the massage/wellness prompt above with "subtle
  cinematic motion, slow controlled camera movement" appended.

---

### 7. Decorative premium visual assets (only if needed)

Only generate additional decorative textures/backgrounds (e.g. a soft
abstract blush-toned backdrop) if a specific section genuinely needs one
after real design review — do not pre-generate speculative decoration.
If needed:

- **Files:** `/public/images/editorial/decorative-[name].jpg`
- **Prompt:** append "abstract, out-of-focus, soft bokeh, no
  recognizable objects, purely atmospheric" to the base style prompt.

---

## Summary table

| # | Asset | Type | File(s) | Aspect | Component |
|---|-------|------|---------|--------|-----------|
| 1 | Hero loop | video | `sarenti-hero.{mp4,webm}` + poster | 16:9 | `HeroSection.tsx` |
| 2 | Hyperbaric detail | video | `sarenti-hyperbaric-detail.mp4` | 1:1/4:5 | `HyperbaricSection.tsx` |
| 3 | Facial editorial | image ×2–3 | `facial-treatment-0N.jpg` | 4:5 | `FeaturedServices.tsx` / `TreatmentCategories.tsx` |
| 4 | Body editorial | image ×2 | `body-treatment-0N.jpg` | 4:5 | `TreatmentCategories.tsx` |
| 5 | Massage/wellness | image ×1–2 | `massage-wellness-0N.jpg` | 4:5 | `TreatmentCategories.tsx` |
| 6 | Secondary wellness | video ×1 | `sarenti-wellness-secondary.mp4` | 4:5/1:1 | not wired (optional) |
| 7 | Decorative | image (as needed) | `decorative-[name].jpg` | varies | as needed |

Total planned AI-generated visuals: **6–10 images + 2–3 videos** — enough
to give the site a distinctive, premium feel without generating a visual
for every single one of the 30+ services in the catalogue.
