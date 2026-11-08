import HeroSection from "@/components/sections/HeroSection";
import FeaturedServices from "@/components/sections/FeaturedServices";
import HyperbaricSection from "@/components/sections/HyperbaricSection";
import TreatmentCategories from "@/components/sections/TreatmentCategories";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Homepage, ordered by the intended visual hierarchy:
 *   1. Hero — main message + "Agendar valoración"
 *   2. Tratamientos destacados (3) → cámara hiperbárica → catálogo completo
 *   3. Conoce a la doctora
 *   4. Confianza y testimonios
 *   5. Preguntas frecuentes
 *   6. Agenda tu valoración + contacto (final CTA)
 *
 * TrustStrip and EditorialGallery are no longer rendered: the trust copy
 * now lives in TestimonialsSection, and the gallery showed AI-generated
 * people captioned as "en Sarenti". Both components are kept in the repo.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <HyperbaricSection />
      <TreatmentCategories />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
