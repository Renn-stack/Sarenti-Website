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
  whatsappDisplay: "222 100 3094",

  instagramHandle: "@drasarenti",
  instagramUrl: "https://instagram.com/drasarenti",

  hours: [
    "Lunes a viernes: 9:00 a.m. – 5:00 p.m.",
    "Sábado: 8:00 a.m. – 3:00 p.m.",
  ],

  address:
    "15 de Mayo 15, Col. Francisco I. Madero, 72130 Heroica Puebla de Zaragoza, Pue.",

  // TODO: replace with Sarenti's own Google Maps reviews link
  // (Google Business Profile → "Compartir" / "Pedir reseñas").
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Sarenti%2C%2015%20de%20Mayo%2015%2C%2072130%20Puebla",

  defaultWhatsAppMessage:
    "Hola, vi la página de Sarenti y quisiera agendar una cita.",

  url: "https://sarenti.example.com", // TODO: replace with the real production domain
} as const;
