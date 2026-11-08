"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import WhatsAppCTA from "./ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu with Escape and return focus to the toggle.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sarenti-line/80 bg-sarenti-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <a
          href="#inicio"
          className="flex shrink-0 items-center"
          aria-label={`${siteConfig.name} — ir al inicio`}
        >
          <Image
            src="/images/brand/sarenti-icon.png"
            alt={siteConfig.name}
            width={434}
            height={301}
            className="h-10 w-auto sm:h-11"
            sizes="64px"
            preload
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="py-2 text-sm font-medium text-sarenti-ink transition-colors hover:text-sarenti-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCTA message={siteConfig.defaultWhatsAppMessage} size="md" showIcon={false}>
            Agendar valoración
          </WhatsAppCTA>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-sarenti-ink lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-sarenti-line bg-sarenti-paper px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-sarenti-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 font-serif text-xl text-sarenti-ink"
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
            Agendar valoración
          </WhatsAppCTA>
        </nav>
      )}
    </header>
  );
}
