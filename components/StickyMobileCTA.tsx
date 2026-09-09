import WhatsAppCTA from "./ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";

/**
 * Sticky bottom CTA bar shown only on mobile (hidden on lg+, where the
 * navbar CTA and floating button already cover conversion). Keeps
 * "Agendar por WhatsApp" one thumb-tap away at all times.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sarenti-ink/10 bg-white/95 p-3 backdrop-blur lg:hidden">
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
