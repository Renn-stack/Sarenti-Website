import { Star } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { siteConfig } from "@/data/site";

/**
 * No testimonials are shown yet — the section points visitors to
 * Sarenti's Google reviews instead. Only add real, verified client
 * reviews here; never present placeholder content as genuine feedback.
 *
 * BEFORE / AFTER NOTE (developer):
 * A public before-and-after gallery is intentionally NOT included in
 * this version. If added later, it fits well as a section directly
 * below this one, following the same FadeIn + Container pattern.
 */
export default function TestimonialsSection() {
  return (
    <section className="bg-sarenti-light/30 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen de Sarenti" />

        <FadeIn>
          <div className="mx-auto mt-12 max-w-2xl rounded-xl2 bg-white p-8 text-center shadow-soft">
            <p className="text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
              Estamos construyendo nuestra comunidad de pacientes. Pronto verás
              aquí las experiencias reales de quienes ya han confiado en
              nosotros.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
              Mientras tanto, puedes consultar las reseñas actualizadas en
              Google Maps.
            </p>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 border-sarenti-primary px-6 py-3 text-base font-semibold text-sarenti-primary transition-transform duration-200 hover:bg-sarenti-light focus-visible:outline-2 active:scale-[0.98]"
            >
              <Star className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Ver reseñas en Google</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
