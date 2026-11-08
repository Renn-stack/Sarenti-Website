"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "../ui/buttonStyles";
import {
  categoryLabels,
  categoryOrder,
  getServicesByCategory,
  ServiceCategory,
} from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Full catalogue, organized by category tabs and rendered as a compact
 * list (not big cards) so it reads as a reference, below the featured
 * treatments in the visual hierarchy.
 *
 * Tabs follow the WAI-ARIA tabs pattern: roving tabindex, ←/→, Inicio/Fin.
 */
export default function TreatmentCategories() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("faciales");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeServices = getServicesByCategory(activeCategory);

  function focusTab(index: number) {
    const count = categoryOrder.length;
    const next = (index + count) % count;
    setActiveCategory(categoryOrder[next]);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keyMap: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: categoryOrder.length - 1,
    };
    if (event.key in keyMap) {
      event.preventDefault();
      focusTab(keyMap[event.key]);
    }
  }

  return (
    <section
      id="catalogo"
      aria-labelledby="catalogo-heading"
      className="border-t border-sarenti-line py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="catalogo-heading"
          eyebrow="Catálogo completo"
          title="Todos los tratamientos"
          description="Explora por categoría. Si no sabes cuál elegir, en tu valoración te orientamos."
        />

        <div
          role="tablist"
          aria-label="Categorías de tratamientos"
          className="mt-8 flex flex-wrap gap-2"
        >
          {categoryOrder.map((category, index) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="catalogo-panel"
                id={`tab-${category}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCategory(category)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  "min-h-11 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors sm:px-5",
                  isActive
                    ? "border-sarenti-primary bg-sarenti-primary text-white"
                    : "border-sarenti-line bg-white text-sarenti-ink hover:border-sarenti-primary/40 hover:text-sarenti-primary"
                )}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        <div
          id="catalogo-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          tabIndex={0}
          className="mt-8 rounded-xl2"
        >
          <ul className="grid border-t border-sarenti-line md:grid-cols-2 md:gap-x-12">
            {activeServices.map((service) => (
              <li
                key={service.id}
                className="flex items-start justify-between gap-4 border-b border-sarenti-line py-5"
              >
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug text-sarenti-ink">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-sarenti-muted">
                    {service.shortDescription}
                  </p>
                  {service.price && (
                    <p className="mt-2 text-sm font-semibold text-sarenti-ink">
                      <span className="sr-only">Precio: </span>
                      {service.price}
                    </p>
                  )}
                </div>
                <a
                  href={buildWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar ${service.name} por WhatsApp (se abre en una nueva pestaña)`}
                  className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-sarenti-primary underline-offset-4 hover:underline"
                >
                  Consultar
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
