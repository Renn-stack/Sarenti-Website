import Image from "next/image";
import { Check } from "lucide-react";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { services } from "@/data/services";
import { editorialVideos } from "@/data/editorial-media";

const hyperbaricService = services.find((s) => s.id === "camara-hiperbarica")!;

const themes = [
  "Recuperarse mejor después de un procedimiento o cirugía",
  "Reducir inflamación y acelerar la cicatrización",
  "Mejorar su energía y sensación de bienestar",
  "Apoyar procesos de recuperación deportiva",
  "Complementar tratamientos estéticos",
];

/**
 * Flagship service deep-dive. Sits right after the three highlighted
 * treatments on a soft blush background (previously a full dark block
 * that competed with the hero) so it reads as "more detail", not as a
 * second hero.
 *
 * Photos below are REAL photographs of Sarenti's hyperbaric chamber.
 * Do not replace them with AI-generated equipment. If Higgsfield is
 * used to enhance this section, it must use these images as reference
 * only (cinematic motion / light / framing) — see HIGGSFIELD-ASSET-PLAN.md.
 */
export default function HyperbaricSection() {
  return (
    <section
      id="camara-hiperbarica"
      className="bg-sarenti-blush py-16 sm:py-24"
      aria-labelledby="hyperbaric-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-xl2">
                <Image
                  src="/images/hyperbaric/chamber-wide.jpg"
                  alt="Cámara hiperbárica de Sarenti en sala de tratamiento"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl2 sm:col-span-1">
                <Image
                  src="/images/hyperbaric/chamber-detail.jpg"
                  alt="Panel de control de la cámara hiperbárica de Sarenti"
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              {/*
                Higgsfield-generated cinematic clip, produced using
                chamber-wide.jpg above as the reference/start frame (see
                HIGGSFIELD-GENERATED-ASSETS.md). Same real chamber, no
                fabricated equipment. Self-hosted and re-encoded with
                "faststart" so it plays before fully downloading.
              */}
              <div className="hidden overflow-hidden rounded-xl2 bg-sarenti-light sm:col-span-1 sm:block">
                <video
                  className="h-full w-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/media/hyperbaric-detail-poster.webp"
                  aria-hidden="true"
                >
                  <source src={editorialVideos.hyperbaricDetail} type="video/mp4" />
                </video>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="kicker">Servicio insignia</p>
            <h2
              id="hyperbaric-heading"
              className="mt-3 font-serif text-[2rem] leading-[1.15] tracking-[-0.01em] text-sarenti-ink sm:text-[2.6rem]"
            >
              Cámara Hiperbárica
            </h2>
            <p className="mt-4 text-lg font-medium text-sarenti-primary-dark">
              Oxigenación profunda para recuperar tu cuerpo y sentirte mejor.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-sarenti-muted">
              En Sarenti contamos con cámara hiperbárica, un tratamiento que
              permite respirar oxígeno puro en un ambiente de presión
              controlada. Esto ayuda a que el oxígeno llegue con mayor
              eficiencia a tus tejidos, apoyando la recuperación y el
              bienestar general.
            </p>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-sarenti-ink">
              Es un servicio buscado por personas que quieren:
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {themes.map((theme) => (
                <li key={theme} className="flex items-start gap-2 text-sm leading-relaxed text-sarenti-ink">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-sarenti-primary"
                    aria-hidden="true"
                  />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-l-2 border-sarenti-primary pl-4 text-sm leading-relaxed text-sarenti-muted">
              Cada caso es diferente. Por eso la Dra. Gabriela Ponce evalúa si
              este tratamiento es adecuado para ti.
            </p>

            <WhatsAppCTA
              message={hyperbaricService.whatsappMessage}
              variant="outline"
              size="lg"
              className="mt-8 w-full sm:w-auto"
            >
              Consultar cámara hiperbárica
            </WhatsAppCTA>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
