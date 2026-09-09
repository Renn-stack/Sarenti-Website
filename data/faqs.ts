/**
 * FAQ content. Keep answers short (1-3 sentences) and avoid absolute
 * medical claims — see CLAUDE guidance in HyperbaricSection for tone.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Qué es una cámara hiperbárica?",
    answer:
      "Es un equipo que permite respirar oxígeno en un ambiente de presión controlada, utilizado como apoyo a la recuperación y el bienestar general.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "La duración varía según cada caso. La Dra. Gabriela Ponce te indicará el tiempo recomendado en tu valoración.",
  },
  {
    question: "¿Cómo sé si la cámara hiperbárica es adecuada para mí?",
    answer:
      "Cada persona es diferente. Te recomendamos una valoración con la Dra. Gabriela Ponce antes de iniciar cualquier sesión.",
  },
  {
    question: "¿Necesito valoración previa?",
    answer:
      "Sí. Antes de iniciar cualquier tratamiento en Sarenti, se recomienda una valoración personalizada.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Escríbenos directamente por WhatsApp. Es la forma más rápida de agendar y resolver tus dudas.",
  },
  {
    question: "¿Dónde se encuentra Sarenti?",
    answer:
      "Por seguridad y privacidad, la ubicación exacta se proporciona al confirmar tu cita por WhatsApp.",
  },
  {
    question: "¿Qué debo hacer antes de mi sesión?",
    answer:
      "Te compartiremos indicaciones específicas por WhatsApp según el tratamiento que vayas a recibir.",
  },
  {
    question: "¿Cuántas sesiones puedo necesitar?",
    answer:
      "El número de sesiones depende de cada persona y objetivo. Esto se define junto con la Dra. Gabriela Ponce.",
  },
];
