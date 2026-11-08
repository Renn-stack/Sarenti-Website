import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels, Service } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: Service;
  showCategory?: boolean;
  showPrice?: boolean;
  /** Heading level for the treatment name (keeps the outline valid). */
  headingLevel?: "h3" | "h4";
}

/**
 * Clean, consistent treatment card: optional authentic photo, category,
 * name, one short line, optional price and a quiet WhatsApp link
 * pre-filled with the treatment name. No shadows or hover lifts — the
 * card relies on spacing and a hairline border.
 */
export default function ServiceCard({
  service,
  showCategory,
  showPrice,
  headingLevel: Heading = "h3",
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-sarenti-line bg-white">
      {service.image && (
        <div className="relative aspect-[16/10] w-full shrink-0 bg-sarenti-blush lg:aspect-auto lg:min-h-[18rem] lg:flex-1">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className={`flex flex-col p-6 sm:p-7 ${service.image ? "" : "flex-1"}`}>
        {showCategory && (
          <p className="kicker">{categoryLabels[service.category]}</p>
        )}
        <Heading className="mt-2 font-serif text-[1.4rem] leading-snug text-sarenti-ink">
          {service.name}
        </Heading>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-sarenti-muted">
          {service.shortDescription}
        </p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-sarenti-line pt-5">
          {showPrice && service.price && service.price !== "Consultar" ? (
            <p className="text-sm text-sarenti-muted">
              <span className="sr-only">Precio: </span>
              <span className="font-serif text-xl text-sarenti-ink">{service.price}</span>
            </p>
          ) : (
            <span />
          )}
          <a
            href={buildWhatsAppLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${service.name} por WhatsApp (se abre en una nueva pestaña)`}
            className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-sarenti-primary underline-offset-4 hover:underline"
          >
            Consultar
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
