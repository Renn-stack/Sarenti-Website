import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import HyperbaricSection from "@/components/sections/HyperbaricSection";
import FeaturedServices from "@/components/sections/FeaturedServices";
import TreatmentCategories from "@/components/sections/TreatmentCategories";
import AboutSection from "@/components/sections/AboutSection";
import EditorialGallery from "@/components/sections/EditorialGallery";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <HyperbaricSection />
      <FeaturedServices />
      <TreatmentCategories />
      <AboutSection />
      <EditorialGallery />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
    </>
  );
}
