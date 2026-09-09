import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import Container from "./ui/Container";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cámara Hiperbárica", href: "#camara-hiperbarica" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Sobre Sarenti", href: "#sobre-sarenti" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sarenti-ink/10 bg-white pb-24 pt-16 lg:pb-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Image
              src="/images/brand/sarenti-icon.png"
              alt={siteConfig.name}
              width={434}
              height={301}
              className="h-11 w-auto"
            />
            <p className="mt-2 text-sm text-sarenti-ink/70">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Enlaces rápidos">
            <p className="kicker text-xs">Enlaces rápidos</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sarenti-ink/70 hover:text-sarenti-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker text-xs">Contacto</p>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={buildWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sarenti-primary"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sarenti-ink/70 hover:text-sarenti-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sarenti-ink/10 pt-6">
          <p className="text-xs leading-relaxed text-sarenti-ink/50">
            La información presentada en este sitio es de carácter
            informativo y no sustituye una valoración profesional. Los
            tratamientos, recomendaciones y resultados pueden variar según
            cada persona. Sujeto a valoración profesional.
          </p>
          <p className="mt-3 text-xs text-sarenti-ink/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
