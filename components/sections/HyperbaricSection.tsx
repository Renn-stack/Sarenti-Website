import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { services } from "@/data/services";
import { editorialVideos } from "@/data/editorial-media";

const hyperbaricService = services.find((s) => s.id === "camara-hiperbarica")!;

const themes = [
  "Bienestar general",
  "Apoyo a la recuperación",
  "Oxigenación",
  "Recuperación deportiva",
  "Apoyo post-operatorio, cuando es médicamente apropiado",
  "Evaluación individual con la Dra. Gabriela Ponce",
];

/**
 * Flagship section — deliberately given more visual weight than any
 * other service section (larger imagery, dedicated background, its own
 * generous spacing).
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
      className="bg-sarenti-ink py-20 sm:py-28"
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
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl2 sm:col-span-1">
                <Image
                  src="/images/hyperbaric/chamber-detail.jpg"
                  alt="Panel de control de la cámara hiperbárica de Sarenti"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              {/*
                Higgsfield-generated cinematic clip, produced using
                chamber-wide.jpg above as the reference/start frame (see
                HIGGSFIELD-GENERATED-ASSETS.md). Same real chamber, no
                fabricated equipment.
              */}
              <div className="hidden overflow-hidden rounded-xl2 bg-sarenti-light/10 sm:col-span-1 sm:block">
                <video
                  className="h-full w-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                >
                  <source src={editorialVideos.hyperbaricDetail} type="video/mp4" />
                </video>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="kicker text-sm text-sarenti-secondary">
              Servicio insignia
            </p>
            <h2
              id="hyperbaric-heading"
              className="mt-3 font-serif text-3xl leading-tight text-white sm:text-5xl"
            >
              Cámara Hiperbárica
            </h2>
            <p className="mt-4 text-lg font-medium text-sarenti-light">
              Recuperación, oxigenación y bienestar.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Sesiones en un ambiente de presión controlada, pensadas como
              apoyo a la recuperación y al bienestar general. Cada caso es
              diferente.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {themes.map((theme) => (
                <li key={theme} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-sarenti-secondary"
                    aria-hidden="true"
                  />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl2 border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/70">
              Cada caso es diferente. Consulta con la Dra. Gabriela Ponce
              para saber si este servicio es adecuado para ti.
            </p>

            <WhatsAppCTA
              message={hyperbaricService.whatsappMessage}
              size="lg"
              className="mt-8"
            >
              Consultar Cámara Hiperbárica por WhatsApp
            </WhatsAppCTA>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
