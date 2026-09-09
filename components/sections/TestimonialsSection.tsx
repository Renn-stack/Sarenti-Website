import { Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { testimonials } from "@/data/testimonials";

/**
 * IMPORTANT: `testimonials` currently contains PLACEHOLDER TESTIMONIAL
 * entries only (see /data/testimonials.ts). Replace them with real,
 * verified client reviews before launch — never present placeholder
 * content as genuine feedback.
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

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-xl2 bg-white p-6 shadow-soft">
                <Quote
                  className="h-6 w-6 text-sarenti-secondary"
                  aria-hidden="true"
                />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-sarenti-ink/70">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-sarenti-ink">
                  {testimonial.author}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
