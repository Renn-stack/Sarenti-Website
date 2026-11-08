"use client";

import { useEffect, useState } from "react";
import WhatsAppCTA from "./ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";

/**
 * Sticky bottom CTA bar shown only on mobile (hidden on lg+, where the
 * navbar CTA and floating button already cover conversion). Keeps
 * "Agendar valoración" one thumb-tap away — except while the hero
 * (#inicio) is on screen, since it already shows the same CTA and the
 * two would appear stacked on top of each other.
 */
export default function StickyMobileCTA() {
  const [heroInView, setHeroInView] = useState(true);
  const [contactInView, setContactInView] = useState(false);
  const hidden = heroInView || contactInView;

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);

    // Also hide the bar over the final contact block, which already
    // shows the same CTA prominently.
    const contact = document.getElementById("contacto");
    const contactObserver = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (contact) contactObserver.observe(contact);
    return () => {
      observer.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={hidden || undefined}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-sarenti-line bg-sarenti-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-[transform,visibility] duration-300 lg:hidden ${
        hidden ? "invisible translate-y-full" : "visible translate-y-0"
      }`}
    >
      <WhatsAppCTA
        message={siteConfig.defaultWhatsAppMessage}
        size="lg"
        className="w-full"
      >
        Agendar valoración
      </WhatsAppCTA>
    </div>
  );
}
