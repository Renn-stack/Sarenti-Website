import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { editorialImages } from "@/data/editorial-media";

/**
 * Purely atmospheric editorial gallery — Higgsfield-generated images (see
 * HIGGSFIELD-GENERATED-ASSETS.md). Captions are deliberately generic
 * category labels rather than specific treatment names: these are
 * representative wellness imagery, not photographs of any particular
 * Sarenti procedure, device, or real patient.
 */
const gallery = [
  { src: editorialImages.facial01, alt: "Ambiente de tratamiento facial en Sarenti", label: "Faciales" },
  { src: editorialImages.body01, alt: "Ambiente de tratamiento corporal en Sarenti", label: "Corporales" },
  { src: editorialImages.massage01, alt: "Ambiente de masaje terapéutico en Sarenti", label: "Masajes" },
  { src: editorialImages.facial02, alt: "Ambiente de cuidado facial en Sarenti", label: "Faciales" },
  { src: editorialImages.body02, alt: "Ambiente de cuidado corporal en Sarenti", label: "Corporales" },
  { src: editorialImages.massage02, alt: "Ambiente de bienestar y relajación en Sarenti", label: "Masajes" },
];

export default function EditorialGallery() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ambiente Sarenti"
          title="Un espacio pensado para tu bienestar"
          description="Imágenes representativas de nuestro ambiente y categorías de tratamiento."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {gallery.map((item, index) => (
            <FadeIn key={item.src} delay={index * 0.05}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 bg-sarenti-light">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 50vw"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sarenti-primary">
                  {item.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
