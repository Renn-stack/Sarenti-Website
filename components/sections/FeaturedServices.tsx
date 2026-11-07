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
 * The Cámara Hiperbárica tile is intentionally larger (two columns),
 * linking back to its full dedicated section. With 8 featured services
 * it plus the 7 regular cards fill the 3-column grid exactly.
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
            <FadeIn className="sm:col-span-2">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-xl2 bg-sarenti-ink shadow-card sm:flex-row">
                <a
                  href="#camara-hiperbarica"
                  className="relative block h-48 w-full overflow-hidden sm:h-auto sm:w-1/2"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hyperbaric/chamber-wide.jpg"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <span className="kicker w-fit text-xs text-sarenti-secondary">
                    Servicio insignia
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {hyperbaric.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    {hyperbaric.shortDescription}
                  </p>
                  <p className="mt-4 font-serif text-2xl text-sarenti-secondary">
                    {hyperbaric.price}
                  </p>
                  <a
                    href="#camara-hiperbarica"
                    className="mt-2 inline-flex w-fit items-center text-sm font-semibold text-sarenti-secondary underline-offset-4 hover:underline"
                  >
                    Conocer más →
                  </a>
                  <WhatsAppCTA
                    message={hyperbaric.whatsappMessage}
                    variant="secondary"
                    size="md"
                    className="mt-5 w-full text-sm sm:w-fit"
                  >
                    Consultar por WhatsApp
                  </WhatsAppCTA>
                </div>
              </div>
            </FadeIn>
          )}

          {rest.map((service, index) => (
            <FadeIn key={service.id} delay={0.05 * (index + 1)}>
              <ServiceCard service={service} showCategory showPrice />
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
