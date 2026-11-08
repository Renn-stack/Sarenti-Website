/**
 * FAQ content, grouped by topic. Keep answers short (1-3 sentences) and
 * avoid absolute medical claims.
 *
 * Every answer below is based on information already published on the
 * site (siteConfig, service catalogue, existing copy). Do NOT add clinic
 * policies (costs, cancellations, payment methods, contraindications)
 * until Sarenti confirms them — see the pending list at the bottom.
 */
import { siteConfig } from "./site";

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Valoración",
    items: [
      {
        question: "¿Necesito valoración previa?",
        answer:
          "Sí. Antes de iniciar cualquier tratamiento en Sarenti, se recomienda una valoración personalizada.",
      },
      {
        question: "¿Qué pasa en la valoración?",
        answer:
          "La Dra. Gabriela Ponce revisa tus objetivos y necesidades para recomendarte el tratamiento adecuado para ti, o indicarte si alguno no lo es.",
      },
      {
        question: "No sé qué tratamiento elegir, ¿me pueden orientar?",
        answer:
          "Sí. Escríbenos por WhatsApp y te orientamos; la recomendación final se define en tu valoración.",
      },
    ],
  },
  {
    title: "Tratamientos",
    items: [
      {
        question: "¿Qué es una cámara hiperbárica?",
        answer:
          "Es un equipo que permite respirar oxígeno en un ambiente de presión controlada, utilizado como apoyo a la recuperación y el bienestar general.",
      },
      {
        question: "¿Cómo sé si la cámara hiperbárica es adecuada para mí?",
        answer:
          "Cada persona es diferente. Te recomendamos una valoración con la Dra. Gabriela Ponce antes de iniciar cualquier sesión.",
      },
      {
        question: "¿Cuánto dura una sesión?",
        answer:
          "La duración varía según cada caso. La Dra. Gabriela Ponce te indicará el tiempo recomendado en tu valoración.",
      },
      {
        question: "¿Cuántas sesiones puedo necesitar?",
        answer:
          "El número de sesiones depende de cada persona y objetivo. Esto se define junto con la Dra. Gabriela Ponce.",
      },
      {
        question: "¿Qué debo hacer antes de mi sesión?",
        answer:
          "Te compartiremos indicaciones específicas por WhatsApp según el tratamiento que vayas a recibir.",
      },
    ],
  },
  {
    title: "Agendamiento",
    items: [
      {
        question: "¿Cómo puedo agendar una cita?",
        answer:
          "Escríbenos directamente por WhatsApp. Es la forma más rápida de agendar y resolver tus dudas.",
      },
      {
        question: "¿Cuál es el horario de atención?",
        answer: `${siteConfig.hours.join(". ")}.`,
      },
      {
        question: "¿Dónde se encuentra Sarenti?",
        answer: `Estamos en ${siteConfig.address}`,
      },
    ],
  },
];

/** Flat list (used for FAQPage structured data). */
export const faqs: Faq[] = faqGroups.flatMap((group) => group.items);

/*
 * PENDIENTE DE CONFIRMACIÓN por Sarenti antes de publicarse:
 * - ¿La valoración tiene costo? ¿Cuánto?
 * - Formas de pago aceptadas.
 * - Política de cancelación / reagendamiento.
 * - ¿Hay estacionamiento?
 * - Contraindicaciones generales de la cámara hiperbárica (requiere
 *   redacción médica revisada por la doctora).
 */
