"use client";

import { useEffect, useState } from "react";
import WhatsAppCTA from "./ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";

/**
 * Sticky bottom CTA bar shown only on mobile (hidden on lg+, where the
 * navbar CTA and floating button already cover conversion). Keeps
 * "Agendar por WhatsApp" one thumb-tap away — except while the hero
 * (#inicio) is on screen, since it already shows the same CTA and the
 * two would appear stacked on top of each other.
 */
export default function StickyMobileCTA() {
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-sarenti-ink/10 bg-white/95 p-3 backdrop-blur transition-[transform,visibility] duration-300 lg:hidden ${
        heroInView ? "invisible translate-y-full" : "visible translate-y-0"
      }`}
    >
      <WhatsAppCTA
        message={siteConfig.defaultWhatsAppMessage}
        size="lg"
        className="w-full"
      >
        Agendar por WhatsApp
      </WhatsAppCTA>
    </div>
  );
}
