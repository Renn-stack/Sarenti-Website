import Image from "next/image";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { siteConfig } from "@/data/site";

/**
 * "Conoce a la doctora" — third level of the hierarchy.
 *
 * PHOTO: no authentic photo of Dra. Gabriela Ponce exists in the repo
 * yet. The previous version used an AI-generated woman next to her name,
 * which visitors could mistake for the doctor — so it was replaced by a
 * brand panel. To add the real portrait, drop it at
 * /public/images/brand/dra-gabriela-ponce.jpg and set DOCTOR_PHOTO below.
 *
 * CREDENTIALS: only add VERIFIED items supplied by Sarenti (cédula
 * profesional, especialidad, certificaciones). Nothing is rendered while
 * the list is empty — never invent credentials.
 */
const DOCTOR_PHOTO: { src: string; alt: string } | null = null;
// e.g. { src: "/images/brand/dra-gabriela-ponce.jpg", alt: "Dra. Gabriela Ponce en su consultorio de Sarenti" }

const credentials: string[] = [
  // TODO (pendiente de confirmación): "Cédula profesional ..."
  // TODO (pendiente de confirmación): "Especialidad / certificación en ..."
];

// Principles taken from the doctor's own existing copy below.
const principles = [
  { title: "Valoración clara", text: "Personalizada según tus objetivos." },
  { title: "Seguridad", text: "Cada caso se evalúa antes de tratar." },
  { title: "Trato cercano", text: "Acompañamiento durante tu proceso." },
];

export default function AboutSection() {
  return (
    <section
      id="sobre-sarenti"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] bg-sarenti-blush lg:max-w-none">
            {DOCTOR_PHOTO ? (
              <Image
                src={DOCTOR_PHOTO.src}
                alt={DOCTOR_PHOTO.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
                <Image
                  src="/images/brand/sarenti-logo.png"
                  alt=""
                  width={531}
                  height={490}
                  className="h-auto w-40 sm:w-48"
                  sizes="192px"
                />
                <p className="font-serif text-xl text-sarenti-primary-dark">
                  {siteConfig.doctorName}
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-7">
          <p className="kicker">Conoce a la doctora</p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-[2rem] leading-[1.15] tracking-[-0.01em] text-sarenti-ink sm:text-[2.6rem]"
          >
            {siteConfig.doctorName}
          </h2>
          <p className="mt-2 text-base font-medium text-sarenti-primary-dark sm:text-lg">
            Fundadora de Sarenti · Medicina estética y bienestar
          </p>

          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-sarenti-muted sm:text-lg">
            <p>
              Soy la Dra. Gabriela Ponce, fundadora de Sarenti. Mi enfoque
              combina medicina estética, tecnología y un trato cercano para que
              cada persona se sienta acompañada durante su proceso.
            </p>
            <p>
              En Sarenti priorizamos resultados naturales, seguridad y una
              experiencia cómoda. Ya sea que busques tratamientos faciales,
              corporales o el apoyo de la cámara hiperbárica, te brindo una
              valoración clara y personalizada según tus objetivos.
            </p>
          </div>

          <blockquote className="mt-8 max-w-xl border-l-2 border-sarenti-primary pl-5 font-serif text-xl leading-snug text-sarenti-ink sm:text-2xl">
            “Estoy aquí para ayudarte a sentirte y verte mejor, con honestidad y
            profesionalismo.”
          </blockquote>

          {credentials.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-sarenti-ink">
                Formación y credenciales
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-sarenti-muted">
                {credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
          )}

          <dl className="mt-8 grid max-w-xl gap-5 border-t border-sarenti-line pt-6 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-semibold text-sarenti-ink">{item.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-sarenti-muted">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>

          <WhatsAppCTA
            message={siteConfig.defaultWhatsAppMessage}
            size="lg"
            className="mt-8 w-full sm:w-auto"
          >
            Agendar valoración con la doctora
          </WhatsAppCTA>
        </FadeIn>
      </Container>
    </section>
  );
}
