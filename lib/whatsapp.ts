import { siteConfig } from "@/data/site";

/**
 * Builds a properly encoded wa.me link.
 * Centralizing this means the WhatsApp number only ever needs to change
 * in one place: /data/site.ts.
 */
export function buildWhatsAppLink(message: string): string {
  const phone = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
