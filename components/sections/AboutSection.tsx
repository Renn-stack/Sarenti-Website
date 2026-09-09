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
          <p className="mt-5 text-base leading-relaxed text-sarenti-ink/70 sm:text-lg">
            En Sarenti buscamos ofrecer una atención cercana, profesional y
            personalizada, orientada al bienestar y a las necesidades de
            cada persona.
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
            Agendar por WhatsApp
          </WhatsAppCTA>
        </FadeIn>
      </Container>
    </section>
  );
}
