"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import {
  categoryLabels,
  categoryOrder,
  getServicesByCategory,
  ServiceCategory,
} from "@/data/services";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Full catalogue, organized by category tabs. Tabs (rather than one long
 * list) keep each screen short and scannable, especially on mobile.
 */
export default function TreatmentCategories() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(
    categoryOrder[0]
  );

  const activeServices = getServicesByCategory(activeCategory);

  return (
    <section id="tratamientos" className="bg-sarenti-light/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catálogo completo"
          title="Tratamientos en Sarenti"
          description="Explora por categoría. Escríbenos por WhatsApp para resolver cualquier duda sobre un tratamiento."
        />

        <div
          role="tablist"
          aria-label="Categorías de tratamientos"
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categoryOrder.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category}`}
                id={`tab-${category}`}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:text-base",
                  isActive
                    ? "bg-sarenti-primary text-white"
                    : "bg-white text-sarenti-ink/70 hover:bg-sarenti-light"
                )}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
