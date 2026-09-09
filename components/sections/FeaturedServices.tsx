import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import FadeIn from "../ui/FadeIn";
import { getFeaturedServices, categoryLabels } from "@/data/services";

/**
 * Homepage highlight grid. Only a curated subset of the full catalogue
 * is shown here — see TreatmentCategories for everything else.
 * The Cámara Hiperbárica tile is intentionally larger, linking back to
 * its full dedicated section rather than duplicating it.
 */
export default function FeaturedServices() {
  const featured = getFeaturedServices();
  const hyperbaric = featured.find((s) => s.id === "camara-hiperbarica");
  const rest = featured.filter((s) => s.id !== "camara-hiperbarica");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tratamientos destacados"
          title="Lo más buscado en Sarenti"
          description="Una selección de nuestros tratamientos principales. Puedes ver el catálogo completo más abajo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hyperbaric && (
            <FadeIn className="sm:col-span-2 lg:col-span-3">
              <a
                href="#camara-hiperbarica"
                className="group relative flex flex-col overflow-hidden rounded-xl2 bg-sarenti-ink shadow-card sm:flex-row"
              >
                <div className="relative h-48 w-full sm:h-auto sm:w-1/2">
                  <Image
                    src="/images/hyperbaric/chamber-wide.jpg"
                    alt="Cámara hiperbárica de Sarenti"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-10">
                  <span className="kicker w-fit text-xs text-sarenti-secondary">
                    Servicio insignia
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    Cámara Hiperbárica
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    Recuperación, oxigenación y bienestar en un ambiente de
                    presión controlada.
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center text-sm font-semibold text-sarenti-secondary underline-offset-4 group-hover:underline">
                    Conocer más →
                  </span>
                </div>
              </a>
            </FadeIn>
          )}

          {rest.map((service, index) => (
            <FadeIn key={service.id} delay={0.05 * (index + 1)}>
              <ServiceCard service={service} showCategory />
            </FadeIn>
          ))}
        </div>

        <p className="sr-only">
          Categorías disponibles: {Object.values(categoryLabels).join(", ")}.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsAppCTA
            message="Hola, me gustaría que me recomienden un tratamiento en Sarenti."
            variant="secondary"
            size="md"
          >
            ¿No sabes cuál elegir? Escríbenos por WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </section>
  );
}
