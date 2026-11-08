import { ArrowDown } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import FadeIn from "../ui/FadeIn";
import { getHomepageHighlights, services } from "@/data/services";

/**
 * Second level of the page hierarchy: three highlighted treatments,
 * then a clear path to the full catalogue (#catalogo).
 */
export default function FeaturedServices() {
  const featured = getHomepageHighlights();

  return (
    <section
      id="tratamientos"
      aria-labelledby="tratamientos-heading"
      className="py-16 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="tratamientos-heading"
            eyebrow="Tratamientos"
            title="Tratamientos destacados"
            description="Cada tratamiento inicia con una valoración para confirmar si es adecuado para ti."
          />
          <a
            href="#catalogo"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-sarenti-primary underline-offset-4 hover:underline"
          >
            Ver catálogo completo ({services.length})
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Editorial layout: the flagship card (with an authentic photo)
            on the left, the other two stacked on the right. */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
          {featured.map((service, index) => (
            <li
              key={service.id}
              className={
                index === 0
                  ? "sm:col-span-2 lg:col-span-7 lg:row-span-2"
                  : "lg:col-span-5"
              }
            >
              <FadeIn delay={0.05 * index} className="h-full">
                <ServiceCard service={service} showCategory showPrice />
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
