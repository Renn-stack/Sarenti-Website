import Image from "next/image";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";
import { editorialImages } from "@/data/editorial-media";

/**
 * TODO: Replace this placeholder content with verified professional
 * information provided by Sarenti (training, certifications, areas of
 * expertise). Do NOT invent credentials, degrees, or specialties beyond
 * "Dra. Gabriela Ponce" in the meantime.
 *
 * The `credentials` array below is intentionally empty/generic so real
 * items can be dropped in later without restructuring the component.
 */
const credentials: string[] = [
  // TODO: e.g. "Cédula profesional #XXXXXX"
  // TODO: e.g. "Especialidad en ..."
  // TODO: e.g. "Certificación en ..."
];

export default function AboutSection() {
  return (
    <section id="sobre-sarenti" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          {/*
            Higgsfield-generated editorial image (see
            HIGGSFIELD-GENERATED-ASSETS.md). This is a generic,
            non-identifiable wellness image used for atmosphere only —
            it does not depict Dra. Gabriela Ponce or any real patient,
            hence the neutral alt text below.
          */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-sarenti-light">
            <Image
              src={editorialImages.facial03}
              alt="Ambiente cálido y profesional en la clínica Sarenti"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="kicker text-sm">Sobre Sarenti</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-sarenti-ink sm:text-4xl">
            {siteConfig.doctorName}
          </h2>
          <p className="mt-4 text-lg font-medium text-sarenti-ink/80">
            Medicina estética y bienestar con atención personalizada
          </p>
          <p className="mt-5 text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
            Soy la Dra. Gabriela Ponce, fundadora de Sarenti. Mi enfoque
            combina medicina estética, tecnología y un trato cercano para que
            cada persona se sienta acompañada durante su proceso.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
            En Sarenti priorizamos resultados naturales, seguridad y una
            experiencia cómoda. Ya sea que busques tratamientos faciales,
            corporales o el apoyo de la cámara hiperbárica, te brindo una
            valoración clara y personalizada según tus objetivos.
          </p>
          <p className="mt-6 font-serif text-xl leading-snug text-sarenti-ink">
            Estoy aquí para ayudarte a sentirte y verte mejor, con honestidad
            y profesionalismo.
          </p>

          {credentials.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm text-sarenti-ink/70">
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          )}

          <WhatsAppCTA
            message={siteConfig.defaultWhatsAppMessage}
            variant="outline"
            className="mt-8"
          >
            Agendar valoración por WhatsApp
          </WhatsAppCTA>
        </FadeIn>
      </Container>
    </section>
  );
}
