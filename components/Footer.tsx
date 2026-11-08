import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import Container from "./ui/Container";
import { siteConfig } from "@/data/site";
import { navItems } from "@/data/navigation";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-sarenti-paper pb-28 pt-14 lg:pb-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/images/brand/sarenti-icon.png"
              alt={siteConfig.name}
              width={434}
              height={301}
              className="h-11 w-auto"
              sizes="64px"
            />
            <p className="mt-3 text-sm text-sarenti-muted">
              {siteConfig.tagline} con la {siteConfig.doctorName}.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página" className="lg:col-span-3">
            <h2 className="kicker">Sitio</h2>
            <ul className="mt-3 space-y-1">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-sm text-sarenti-ink hover:text-sarenti-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h2 className="kicker">Contacto</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  href={buildWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${siteConfig.whatsappDisplay} (se abre en una nueva pestaña)`}
                  className="inline-flex items-center gap-2 py-1 text-sm font-medium text-sarenti-primary hover:underline"
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
                  aria-label={`Instagram ${siteConfig.instagramHandle} (se abre en una nueva pestaña)`}
                  className="inline-flex items-center gap-2 py-1 text-sm text-sarenti-ink hover:text-sarenti-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li className="pt-2 text-sm leading-relaxed text-sarenti-muted">
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sarenti-line pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-sarenti-muted">
            La información presentada en este sitio es de carácter
            informativo y no sustituye una valoración profesional. Los
            tratamientos, recomendaciones y resultados pueden variar según
            cada persona. Sujeto a valoración profesional.
          </p>
          <p className="mt-3 text-xs text-sarenti-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
