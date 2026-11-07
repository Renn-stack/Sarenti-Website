import { categoryLabels, Service } from "@/data/services";
import WhatsAppCTA from "./WhatsAppCTA";

interface ServiceCardProps {
  service: Service;
  showCategory?: boolean;
  showPrice?: boolean;
}

/**
 * Minimal, scannable card: name, one short line, optional category tag
 * and price, and a WhatsApp CTA pre-filled with the treatment name.
 */
export default function ServiceCard({ service, showCategory, showPrice }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl2 border border-sarenti-ink/10 bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1">
      {showCategory && (
        <span className="mb-2 inline-block w-fit rounded-full bg-sarenti-light px-3 py-1 text-xs font-semibold text-sarenti-primary">
          {categoryLabels[service.category]}
        </span>
      )}
      <h3 className="font-serif text-xl text-sarenti-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-sarenti-ink/70">
        {service.shortDescription}
      </p>
      {showPrice && service.price && (
        <p className="mt-4 font-serif text-2xl text-sarenti-primary">
          {service.price}
        </p>
      )}
      <WhatsAppCTA
        message={service.whatsappMessage}
        variant="outline"
        size="md"
        className="mt-5 w-full text-sm"
      >
        Consultar por WhatsApp
      </WhatsAppCTA>
    </div>
  );
}
