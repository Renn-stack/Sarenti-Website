/**
 * Central site configuration.
 * Update contact info, hours, and social handles here — nothing else
 * in the codebase should hardcode these values.
 */
export const siteConfig = {
  name: "Sarenti",
  tagline: "Medicina estética y bienestar",
  doctorName: "Dra. Gabriela Ponce",

  // WhatsApp number in international format (digits only, no spaces).
  // To change the number, edit ONLY this line.
  whatsappNumber: "522221003094",
  whatsappDisplay: "+52 222 100 3094",

  instagramHandle: "@drasarenti",
  instagramUrl: "https://instagram.com/drasarenti",

  hours: "8:00 a.m. – 3:00 p.m.",

  // Location is intentionally not public. Shared privately via WhatsApp.
  locationNotice: "Ubicación disponible al agendar por WhatsApp.",

  defaultWhatsAppMessage:
    "Hola, vi la página de Sarenti y quisiera agendar una cita.",

  url: "https://sarenti.example.com", // TODO: replace with the real production domain
} as const;
