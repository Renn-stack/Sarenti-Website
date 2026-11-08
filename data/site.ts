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

  // Sarenti's Google Maps place (address link and "Ver reseñas en Google").
  googleMapsUrl: "https://maps.app.goo.gl/wsDrZ4qvtiUYT1MaA",
  // Map embed shown in the Contacto section (Google Maps → Compartir → Insertar un mapa).
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6237800605218!2d-98.23185242513942!3d19.08027198212531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7a4aefe0983%3A0x39c2f185565685b2!2sSarenti!5e0!3m2!1ses!2smx!4v1794038865314!5m2!1ses!2smx",

  defaultWhatsAppMessage:
    "Hola, vi la página de Sarenti y quisiera agendar una cita.",

  // Used by the Contacto section's WhatsApp button and phone link.
  contactWhatsAppMessage:
    "Hola, vi la página de Sarenti y me gustaría agendar una cita o pedir más información.",

  url: "https://www.sarenti.mx",
} as const;
