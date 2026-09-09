import { HeartHandshake, Sparkles, ShieldCheck, Activity } from "lucide-react";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

const items = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cada tratamiento se adapta a tus objetivos y necesidades.",
  },
  {
    icon: Sparkles,
    title: "Tecnología especializada",
    description: "Equipos y técnicas pensados para resultados naturales.",
  },
  {
    icon: ShieldCheck,
    title: "Faciales y corporales",
    description: "Un catálogo completo de tratamientos de bienestar y belleza.",
  },
  {
    icon: Activity,
    title: "Bienestar y recuperación",
    description: "Incluyendo cámara hiperbárica y masajes terapéuticos.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-sarenti-ink/5 bg-sarenti-light/40 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <item.icon
                  className="h-7 w-7 text-sarenti-primary"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm font-semibold text-sarenti-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-sarenti-ink/60">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
