"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import WhatsAppCTA from "./ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cámara Hiperbárica", href: "#camara-hiperbarica" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Sobre Sarenti", href: "#sobre-sarenti" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sarenti-ink/5 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/brand/sarenti-icon.png"
            alt={siteConfig.name}
            width={434}
            height={301}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sarenti-ink/80 transition-colors hover:text-sarenti-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCTA message={siteConfig.defaultWhatsAppMessage} size="md">
            Agendar por WhatsApp
          </WhatsAppCTA>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-sarenti-ink lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="border-t border-sarenti-ink/5 bg-white px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-sarenti-ink/5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-lg font-medium text-sarenti-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppCTA
            message={siteConfig.defaultWhatsAppMessage}
            size="lg"
            className="mt-4 w-full"
          >
            Agendar por WhatsApp
          </WhatsAppCTA>
        </nav>
      )}
    </header>
  );
}
