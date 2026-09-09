import { Clock, Instagram, MapPin } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import FadeIn from "../ui/FadeIn";
import { siteConfig } from "@/data/site";

const infoItems = [
  {
    icon: Clock,
    label: "Horario",
    value: siteConfig.hours,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: siteConfig.locationNotice,
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <SectionHeading
          title="Contacto"
          description="La forma más rápida de resolver tus dudas y agendar es por WhatsApp."
        />

        <FadeIn>
          <div className="mt-10 flex justify-center">
            <WhatsAppCTA message={siteConfig.defaultWhatsAppMessage} size="lg">
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
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-sarenti-ink/70">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
