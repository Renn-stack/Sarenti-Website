import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Final CTA + contact — last level of the hierarchy and the one plum
 * block on the page, so it reads as "the next step". Merges the former
 * FinalCTASection and ContactSection (same links, map, address, phone and
 * hours) so the page no longer ends with two consecutive booking blocks.
 */
const infoItems: Array<{
  icon: typeof Clock;
  label: string;
  lines: readonly string[];
  href?: string;
  linkLabel?: string;
}> = [
  {
    icon: MapPin,
    label: "Dirección",
    lines: [siteConfig.address],
    href: siteConfig.googleMapsUrl,
    linkLabel: `${siteConfig.address} — abrir en Google Maps (se abre en una nueva pestaña)`,
  },
  {
    icon: MessageCircle,
    label: "Teléfono / WhatsApp",
    lines: [siteConfig.whatsappDisplay],
    href: buildWhatsAppLink(siteConfig.contactWhatsAppMessage),
    linkLabel: `WhatsApp ${siteConfig.whatsappDisplay} (se abre en una nueva pestaña)`,
  },
  {
    icon: Clock,
    label: "Horario",
    lines: siteConfig.hours,
  },
  {
    icon: Instagram,
    label: "Instagram",
    lines: [siteConfig.instagramHandle],
    href: siteConfig.instagramUrl,
    linkLabel: `Instagram ${siteConfig.instagramHandle} (se abre en una nueva pestaña)`,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="on-dark bg-sarenti-primary py-16 text-white sm:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            id="contacto-heading"
            tone="inverse"
            eyebrow="Agenda tu cita"
            title="Agenda tu valoración"
            description="Escríbenos por WhatsApp y te ayudamos a encontrar el tratamiento adecuado para ti."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA
              message={siteConfig.contactWhatsAppMessage}
              variant="light"
              size="lg"
            >
              Agendar valoración
            </WhatsAppCTA>
          </div>

          <address className="mt-12 grid gap-6 not-italic sm:grid-cols-2">
            {infoItems.map((item) => (
              <div key={item.label} className="flex gap-3">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-sarenti-light"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.linkLabel}
                      className="mt-1 inline-block py-0.5 text-sm leading-relaxed text-white/90 underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {item.lines.join(" ")}
                    </a>
                  ) : (
                    item.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm leading-relaxed text-white/90">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </address>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-xl2 bg-sarenti-primary-dark">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              title="Mapa de ubicación de Sarenti en Puebla"
              className="block h-72 w-full border-0 sm:h-96 lg:h-[30rem]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
