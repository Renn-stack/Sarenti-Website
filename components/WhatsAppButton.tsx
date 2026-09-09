import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Persistent floating WhatsApp button.
 *
 * On mobile/tablet, StickyMobileCTA already pins a full-width WhatsApp
 * bar to the bottom of the screen — a second floating button there would
 * overlap it and duplicate the same action. So this button only appears
 * at the `lg` breakpoint and up, where the sticky bar is hidden.
 */
export default function WhatsAppButton() {
  const href = buildWhatsAppLink(siteConfig.defaultWhatsAppMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-sarenti-primary text-white shadow-soft transition-transform hover:scale-105 lg:flex"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
