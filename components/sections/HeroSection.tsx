"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import Container from "../ui/Container";
import { siteConfig } from "@/data/site";
import { editorialVideos } from "@/data/editorial-media";

/**
 * ============================================================
 * HIGGSFIELD ASSET SLOT — Hero cinematic loop
 * ============================================================
 * Currently playing a Higgsfield-generated clip from
 * /data/editorial-media.ts (hosted on Higgsfield's CDN — see
 * HIGGSFIELD-GENERATED-ASSETS.md to download it locally instead).
 *
 * To swap in a different/self-hosted cut, drop files here and update
 * the constants below:
 *   /public/media/sarenti-hero.mp4
 *   /public/media/sarenti-hero.webm
 *   /public/media/sarenti-hero-poster.webp
 *
 * See HIGGSFIELD-ASSET-PLAN.md for the exact prompt, aspect ratio,
 * and motion direction for this asset.
 *
 * If the video is ever unavailable, this component gracefully falls
 * back to a soft brand gradient so nothing ever appears broken.
 * ============================================================
 */
const HERO_VIDEO_MP4 = editorialVideos.heroLoop || "/media/sarenti-hero.mp4";
const HERO_VIDEO_WEBM = "/media/sarenti-hero.webm";
const HERO_POSTER = "/media/sarenti-hero-poster.webp";

export default function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const showVideo = !videoFailed && !shouldReduceMotion;

  return (
    <section id="inicio" className="relative overflow-hidden bg-sarenti-ink">
      {/* Fallback / underlay gradient — always present so a missing or
          errored video never leaves a blank or broken section. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-sarenti-primary via-[#6d1a5b] to-sarenti-ink"
      />

      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_WEBM} type="video/webm" />
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      )}

      {/* Readability overlay — keeps text legible over any video/image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-sarenti-ink/80 via-sarenti-ink/40 to-sarenti-ink/20"
      />

      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32 sm:min-h-[92vh] sm:justify-center sm:pb-24 sm:pt-40">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="kicker text-sm text-sarenti-light">
            {siteConfig.name} · Medicina estética y bienestar
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-6xl">
            Bienestar que se siente.
            <br />
            Belleza que se nota.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Cámara hiperbárica, medicina estética y tratamientos de
            bienestar en Sarenti, de la mano de la Dra. Gabriela Ponce.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppCTA message={siteConfig.defaultWhatsAppMessage} size="lg">
              Agendar por WhatsApp
            </WhatsAppCTA>
            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver tratamientos
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
