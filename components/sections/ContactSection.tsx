import { Clock, MapPin, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import FadeIn from "../ui/FadeIn";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const infoItems: Array<{
  icon: typeof Clock;
  label: string;
  value: readonly string[];
  href?: string;
}> = [
  {
    icon: MapPin,
    label: "Dirección",
    value: [siteConfig.address],
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: MessageCircle,
    label: "Teléfono / WhatsApp",
    value: [siteConfig.whatsappDisplay],
    href: buildWhatsAppLink(siteConfig.contactWhatsAppMessage),
  },
  {
    icon: Clock,
    label: "Horario",
    value: siteConfig.hours,
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          title="Contacto"
          description="La forma más rápida de agendar o resolver tus dudas es por WhatsApp."
        />

        <FadeIn>
          <div className="mt-10 flex justify-center">
            <WhatsAppCTA message={siteConfig.contactWhatsAppMessage} size="lg">
              Agendar por WhatsApp
            </WhatsAppCTA>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {infoItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <item.icon className="h-6 w-6 text-sarenti-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-sarenti-ink">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sarenti-ink/70 hover:text-sarenti-primary"
                >
                  {item.value.join(" ")}
                </a>
              ) : (
                item.value.map((line) => (
                  <p key={line} className="text-sm text-sarenti-ink/70">
                    {line}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
