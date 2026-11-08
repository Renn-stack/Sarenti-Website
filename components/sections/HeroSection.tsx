"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import Container from "../ui/Container";
import { buttonClass } from "../ui/buttonStyles";
import { siteConfig } from "@/data/site";
import { editorialVideos } from "@/data/editorial-media";

/**
 * Hero — first level of the hierarchy: one message, one primary action.
 *
 * Layout: warm-white split hero (text left, framed media right on
 * desktop; text first, media below on mobile) instead of text over a
 * darkened full-bleed video. This keeps the headline at full contrast and
 * the media calm.
 *
 * Media: the poster frame is a regular <Image preload> (fast LCP, also
 * the fallback). The self-hosted loop (/public/media/sarenti-hero.mp4,
 * see HIGGSFIELD-ASSET-PLAN.md) only plays on top of it when the visitor
 * has not asked for reduced motion and the file loads correctly.
 * The headline is NOT animated in, so it paints immediately.
 */
const HERO_VIDEO_MP4 = editorialVideos.heroLoop;
const HERO_POSTER = "/media/sarenti-hero-poster.webp";

const highlights = [
  "Valoración personalizada",
  "Cámara hiperbárica",
  "Tratamientos faciales y corporales",
];

export default function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  // Decided after mount so server and client render the same markup.
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const showVideo = allowMotion && !videoFailed;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-sarenti-paper"
    >
      <Container className="grid items-center gap-10 pb-14 pt-10 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-12">
        <div className="lg:col-span-7">
          <p className="kicker">Medicina estética y bienestar · Puebla</p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance font-serif text-[2.5rem] leading-[1.06] tracking-[-0.02em] text-sarenti-ink sm:text-[3.4rem] lg:text-[3.1rem] xl:text-[3.5rem]"
          >
            <span className="block">Bienestar que se siente.</span>{" "}
            <span className="block text-sarenti-primary">Belleza que se nota.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sarenti-muted sm:text-xl">
            Atención personalizada en medicina estética con la{" "}
            {siteConfig.doctorName}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA message={siteConfig.defaultWhatsAppMessage} size="lg">
              Agendar valoración
            </WhatsAppCTA>
            <a href="#tratamientos" className={buttonClass("outline", "lg")}>
              Explorar tratamientos
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-sarenti-line pt-6 text-sm text-sarenti-muted">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-sarenti-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-sarenti-blush sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[78svh]">
            <Image
              src={HERO_POSTER}
              alt=""
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {showVideo && (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_POSTER}
                onError={() => setVideoFailed(true)}
                aria-hidden="true"
                tabIndex={-1}
              >
                <source
                  src={HERO_VIDEO_MP4}
                  type="video/mp4"
                  onError={() => setVideoFailed(true)}
                />
              </video>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
