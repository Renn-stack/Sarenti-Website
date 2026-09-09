import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const items = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="¿Tienes dudas?"
          description="Estas son las preguntas más comunes. Para cualquier otra duda, escríbenos por WhatsApp."
        />
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
