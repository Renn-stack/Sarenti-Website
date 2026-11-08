import { HeartHandshake, ShieldCheck, Sparkles, Activity, Star, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { buttonClass } from "../ui/buttonStyles";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";

/**
 * Trust + testimonials — fourth level of the hierarchy.
 *
 * The trust pillars come from the former TrustStrip (same copy), moved
 * here so they support the decision instead of interrupting the hero.
 * Testimonials render only from /data/testimonials.ts (real, authorized
 * reviews). While it is empty, visitors are sent to Sarenti's Google
 * reviews — no placeholder quotes are ever shown as real feedback.
 *
 * BEFORE / AFTER NOTE (developer):
 * A public before-and-after gallery is intentionally NOT included.
 */
const pillars = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cada tratamiento se adapta a tus objetivos y necesidades.",
  },
  {
    icon: Sparkles,
    title: "Tecnología especializada",
    description: "Equipos y técnicas pensados para resultados naturales.",
  },
  {
    icon: ShieldCheck,
    title: "Valoración previa",
    description: "La doctora evalúa si un tratamiento es adecuado para ti.",
  },
  {
    icon: Activity,
    title: "Bienestar y recuperación",
    description: "Incluyendo cámara hiperbárica y masajes terapéuticos.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="confianza"
      aria-labelledby="confianza-heading"
      className="bg-sarenti-blush py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="confianza-heading"
          eyebrow="Confianza"
          title="Por qué elegir Sarenti"
        />

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <li key={item.title} className="border-t border-sarenti-primary/20 pt-5">
              <item.icon className="h-6 w-6 text-sarenti-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-sarenti-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-sarenti-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <FadeIn>
          <div className="mt-14 rounded-xl2 bg-white p-6 sm:p-10">
            <h3 className="kicker">Testimonios</h3>

            {testimonials.length > 0 ? (
              <ul className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <li key={t.quote}>
                    <figure>
                      <blockquote className="font-serif text-lg leading-snug text-sarenti-ink">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-3 text-sm text-sarenti-muted">
                        {t.author}
                        {t.source ? ` · ${t.source}` : ""}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl font-serif text-xl leading-snug text-sarenti-ink sm:text-2xl">
                  Conoce las experiencias reales de nuestros pacientes en
                  nuestras reseñas de Google.
                </p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver reseñas de Sarenti en Google (se abre en una nueva pestaña)"
                  className={buttonClass("outline", "md", "shrink-0")}
                >
                  <Star className="h-5 w-5" aria-hidden="true" />
                  Ver reseñas en Google
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
