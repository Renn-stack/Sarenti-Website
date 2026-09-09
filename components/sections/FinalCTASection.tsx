import Container from "../ui/Container";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import FadeIn from "../ui/FadeIn";
import { siteConfig } from "@/data/site";

export default function FinalCTASection() {
  return (
    <section className="bg-sarenti-primary py-20 sm:py-24">
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            ¿Lista para agendar?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Escríbenos por WhatsApp y te ayudamos a encontrar el tratamiento
            adecuado para ti.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA
              message={siteConfig.defaultWhatsAppMessage}
              variant="secondary"
              size="lg"
            >
              Agendar por WhatsApp
            </WhatsAppCTA>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
