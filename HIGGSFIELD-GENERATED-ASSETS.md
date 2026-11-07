# Higgsfield-Generated Assets — Generation Log

This is the record of what was actually generated from
`HIGGSFIELD-ASSET-PLAN.md`, as opposed to that file's forward-looking
plan. Everything below is already wired into the site via
`/data/editorial-media.ts`.

## Self-hosted

All assets below have been downloaded and are served from `/public`
(`/public/images/editorial/*.jpg` and `/public/media/*.mp4`), wired in via
`/data/editorial-media.ts`. The site no longer loads anything from
Higgsfield's CDN (`d8j0ntlcm91z4.cloudfront.net`).

- Images: original PNGs (1536×2048, ~4 MB each) re-encoded to progressive
  JPG at 1200×1600, quality 80 (~160–200 KB each). `next/image` then
  serves AVIF/WebP at the size each layout needs.
- Videos: re-encoded with H.264 + `-movflags +faststart` (so playback
  starts before the file finishes downloading), no audio, plus a
  first-frame WebP poster. Hero: `/media/sarenti-hero.mp4`; hyperbaric
  detail: `/media/hyperbaric-detail.mp4`.

The original CDN URLs are listed below for reference only; they are tied
to the Higgsfield account that generated them and may stop working.

```bash
# Original sources (for re-processing only — not used by the site)
facial-01.jpg   https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_ed17abbc-9494-405a-82c1-25d5fe6e74e0.png
facial-02.jpg   https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_72ecd933-7ccd-4f60-96d5-b9032cede8bf.png
facial-03.jpg   https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120739_ed3daeab-d492-40a8-993e-dee9a939751d.png
body-01.jpg     https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120547_b1b0c99b-59a3-45ff-92ea-5d7e276d2e79.png
body-02.jpg     https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_26dba30b-c3c9-4aca-b31f-349225cdcf83.png
massage-01.jpg  https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120547_bc53383c-6ad2-4991-962b-f9f40c27279f.png
massage-02.jpg  https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_17c589e7-9569-4a67-b540-15b57e03b1e3.png
sarenti-hero.mp4       https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120551_d6372c85-4e54-4366-9aba-1a6a317f53fd.mp4
hyperbaric-detail.mp4  https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120708_280b7d52-2863-45c3-a694-cb3a4fdc61d5.mp4
```

## What was generated

### Hero cinematic loop (video)

- **Model:** `seedance_2_5` (text-to-video), 16:9, 7s, 720p, no audio
- **Wired into:** `components/sections/HeroSection.tsx` via
  `editorialVideos.heroLoop`
- **Prompt used:**
  > Premium feminine medical wellness clinic, clean white interior, soft
  > natural daylight, subtle plum and blush details inspired by hex
  > colors 902376, C671A5 and EED6E8, elegant adult woman in a refined
  > wellness environment, realistic skin texture, sophisticated medical
  > aesthetic campaign, serene atmosphere, premium editorial
  > composition, natural expressions, white dominant palette, luxury
  > healthcare advertising, realistic proportions, no text, no logos, no
  > exaggerated beauty retouching. Camera: slow dolly-in with a very
  > subtle lateral drift, soft natural light shift, seamless loop, no
  > dramatic movement, no quick cuts, no jump cuts.

### Hyperbaric chamber cinematic detail (video)

- **Model:** `seedance_2_5` (`omni_reference` mode, `start_image` =
  Sarenti's real chamber photo, uploaded from
  `public/images/hyperbaric/chamber-wide.jpg`), 1:1, 5s, 720p, no audio
- **Wired into:** `components/sections/HyperbaricSection.tsx` via
  `editorialVideos.hyperbaricDetail`
- **Prompt used:**
  > Cinematic close-up of the real hospital-grade hyperbaric chamber
  > shown in the reference image, inside a bright clean clinic room,
  > soft daylight through blinds, subtle plum and blush accents in the
  > background, slow gentle camera push-in, realistic reflections on
  > the chamber's acrylic viewport, calm professional atmosphere, stay
  > faithful to the reference image, no added text, no altered equipment
  > geometry, no dramatic movement.

### Editorial images (7 total)

- **Model:** `soul_2` (Higgsfield Soul 2.0), 3:4, 2K quality
- **Wired into:** `components/sections/AboutSection.tsx` (facial-03) and
  `components/sections/EditorialGallery.tsx` (the other six)

| Constant | Subject | Prompt (appended to the shared style prefix below) |
|---|---|---|
| `facial01` | Facial treatment, gloved hands, 3/4 angle | "adult female patient receiving a professional facial treatment in a pristine white wellness clinic, gloved esthetician hands applying treatment, three-quarter profile angle, calm relaxed expression, professional hygienic environment, realistic equipment, elegant composition, natural beauty, no text, no logos, no exaggerated retouching." |
| `facial02` | Facial device, profile angle | "adult female patient receiving a professional facial treatment, esthetician using a handheld facial device near the cheek in profile angle, soft focus white background, calm relaxed expression, realistic equipment, natural beauty, no text, no logos, no exaggerated retouching." |
| `facial03` | Reclined, overhead, serene (used in About) | "adult female patient reclined on a treatment bed with eyes closed, overhead angle, serene expression, soft daylight through a window, professional hygienic environment, natural beauty, no text, no logos, no exaggerated retouching." |
| `body01` | Body contouring device on leg | "adult patient receiving a professional body contouring treatment in a pristine white clinic, esthetician using a body contouring device on the patient's leg, realistic body proportions, respectful and professional framing, no text, no logos, no exaggerated body transformation." |
| `body02` | Back/shoulders, face-down, draped linen | "adult patient lying face-down on a treatment bed receiving a back and shoulders skin treatment, soft draped white linen, modest and professional framing, realistic skin texture, no text, no logos, no exaggerated body transformation." |
| `massage01` | Shoulder massage | "therapist performing a professional therapeutic massage on a patient's shoulders in a clean elegant clinic, soft daylight, calm neutral environment, realistic skin, professional and respectful framing, relaxed atmosphere, no text, no logos." |
| `massage02` | Close-up hands, back massage | "close-up of therapist hands performing a calming back massage, soft white towels, warm natural light, relaxed atmosphere, sophisticated wellness campaign, no text, no logos." |

Shared style prefix used on every image above:

> Feminine premium medical wellness editorial photography. Soft natural
> daylight, immaculate white clinic interior, subtle blush and plum
> accents, healthy realistic skin texture, calm confident atmosphere,
> sophisticated high-end skincare campaign aesthetic. [+ subject prompt
> from the table, prefixed with "High-end medical skincare/wellness
> editorial photography" or "Premium wellness editorial photography" as
> appropriate]

## Content safety notes (already applied)

- No image depicts a specific named Sarenti treatment (e.g. "this is
  Hydrafacial") — captions in `EditorialGallery.tsx` use generic category
  labels ("Faciales", "Corporales", "Masajes") only, to avoid implying
  any image is a literal photo of a specific procedure or device.
- The About section image (`facial03`) is captioned with neutral alt
  text ("Ambiente cálido y profesional...") — it is not presented as a
  photo of Dra. Gabriela Ponce or any real patient.
- The hyperbaric chamber video was generated in `omni_reference` mode
  from Sarenti's own real chamber photo as the starting frame, per the
  "do not fabricate equipment" rule in `HIGGSFIELD-ASSET-PLAN.md`.
- No text, logos, prices, or credentials appear in any generated asset.

## Not yet generated

The asset plan's optional secondary wellness video (item 6) and any
decorative-only assets (item 7) were not generated — they were marked
optional/only-if-needed in `HIGGSFIELD-ASSET-PLAN.md` and nothing in the
current design calls for them yet.
