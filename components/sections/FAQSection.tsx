import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import WhatsAppCTA from "../ui/WhatsAppCTA";
import { faqGroups, faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="faq-heading"
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas"
              description="¿No encuentras tu pregunta? Escríbenos y te respondemos."
            />
            <WhatsAppCTA
              message={siteConfig.defaultWhatsAppMessage}
              variant="outline"
              className="mt-6"
              ariaLabel="Hacer una pregunta por WhatsApp (se abre en una nueva pestaña)"
            >
              Hacer una pregunta
            </WhatsAppCTA>
          </div>
        </div>

        <div className="space-y-10 lg:col-span-8">
          {faqGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="kicker">{group.title}</h3>
              <div className="mt-3">
                <Accordion
                  headingLevel="h4"
                  items={group.items.map((faq, index) => ({
                    id: `faq-${groupIndex}-${index}`,
                    title: faq.question,
                    content: <p>{faq.answer}</p>,
                  }))}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
