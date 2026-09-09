/**
 * Service catalogue for Sarenti.
 *
 * This is the single source of truth for every treatment shown on the
 * site. Adding, renaming, or re-categorizing a service only requires
 * editing this file — no JSX changes needed.
 *
 * NOTE: Prices are intentionally never included. Do not add a `price`
 * field to this data structure.
 *
 * `slug` values are reserved for future routes such as
 * /tratamientos/hydrafacial — not wired up yet, but present so the
 * information architecture can grow without renaming anything.
 */

export type ServiceCategory =
  | "camara-hiperbarica"
  | "faciales"
  | "corporales"
  | "especializados"
  | "masajes";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  featured?: boolean;
  /** Message pre-filled into the WhatsApp chat when this service's CTA is used. */
  whatsappMessage: string;
}

export const categoryLabels: Record<ServiceCategory, string> = {
  "camara-hiperbarica": "Cámara Hiperbárica",
  faciales: "Faciales",
  corporales: "Corporales",
  especializados: "Recuperación y tratamientos especializados",
  masajes: "Masajes",
};

export const categoryOrder: ServiceCategory[] = [
  "camara-hiperbarica",
  "faciales",
  "corporales",
  "especializados",
  "masajes",
];

export const services: Service[] = [
  // ---- Cámara Hiperbárica (flagship) ----
  {
    id: "camara-hiperbarica",
    slug: "camara-hiperbarica",
    name: "Cámara Hiperbárica",
    category: "camara-hiperbarica",
    shortDescription:
      "Sesiones de oxigenación pensadas para apoyar la recuperación y el bienestar general.",
    featured: true,
    whatsappMessage:
      "Hola, vi la página de Sarenti y quisiera información sobre la Cámara Hiperbárica.",
  },

  // ---- Faciales ----
  {
    id: "limpieza-facial-profunda",
    slug: "limpieza-facial-profunda",
    name: "Limpieza Facial Profunda",
    category: "faciales",
    shortDescription: "Limpieza a fondo para una piel visiblemente más fresca.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre Limpieza Facial Profunda.",
  },
  {
    id: "mlg-anti-manchas",
    slug: "mlg-anti-manchas",
    name: "Aplicación de MLG (Anti manchas)",
    category: "faciales",
    shortDescription: "Tratamiento dirigido a la apariencia de manchas en la piel.",
    whatsappMessage: "Hola, quisiera información sobre MLG (Anti manchas).",
  },
  {
    id: "bb-blush",
    slug: "bb-blush",
    name: "BB Blush",
    category: "faciales",
    shortDescription: "Técnica para un rubor natural y de aspecto saludable.",
    whatsappMessage: "Hola, quisiera información sobre BB Blush.",
  },
  {
    id: "bb-lips",
    slug: "bb-lips",
    name: "BB Lips",
    category: "faciales",
    shortDescription: "Tratamiento enfocado en realzar el color y aspecto de los labios.",
    whatsappMessage: "Hola, quisiera información sobre BB Lips.",
  },
  {
    id: "bb-glow",
    slug: "bb-glow",
    name: "BB Glow",
    category: "faciales",
    shortDescription: "Técnica para una piel con aspecto uniforme y luminoso.",
    whatsappMessage: "Hola, quisiera información sobre BB Glow.",
  },
  {
    id: "hidratacion-acido-hialuronico",
    slug: "hidratacion-acido-hialuronico",
    name: "Hidratación con Ácido Hialurónico",
    category: "faciales",
    shortDescription: "Hidratación profunda para una piel con mejor aspecto.",
    whatsappMessage:
      "Hola, quisiera información sobre Hidratación con Ácido Hialurónico.",
  },
  {
    id: "resurfacing-parpados",
    slug: "resurfacing-parpados",
    name: "Resurfacing Párpados",
    category: "faciales",
    shortDescription: "Láser ablativo aplicado en la zona de los párpados.",
    whatsappMessage: "Hola, quisiera información sobre Resurfacing de Párpados.",
  },
  {
    id: "resurfacing-facial-co2",
    slug: "resurfacing-facial-co2",
    name: "Resurfacing Facial (Láser CO2)",
    category: "faciales",
    shortDescription: "Tratamiento facial con láser CO2 para renovar la piel.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre Resurfacing Facial (Láser CO2).",
  },
  {
    id: "hifu-morpheus",
    slug: "hifu-morpheus",
    name: "HIFU o Morpheus",
    category: "faciales",
    shortDescription: "Aplicación de calor en tejido profundo con tecnología especializada.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre HIFU o Morpheus.",
  },
  {
    id: "hydrafacial",
    slug: "hydrafacial",
    name: "Hydrafacial",
    category: "faciales",
    shortDescription: "En una sola sesión se limpia, exfolia e hidrata la piel.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre Hydrafacial.",
  },
  {
    id: "hollywood-peeling",
    slug: "hollywood-peeling",
    name: "Hollywood Peeling",
    category: "faciales",
    shortDescription: "Limpieza y aplicación de láser para un aspecto renovado.",
    whatsappMessage: "Hola, quisiera información sobre Hollywood Peeling.",
  },
  {
    id: "facial-anti-acne",
    slug: "facial-anti-acne",
    name: "Facial Anti-Acné",
    category: "faciales",
    shortDescription: "Limpieza, exfoliación y láser enfocados en piel con acné.",
    whatsappMessage: "Hola, quisiera información sobre el Facial Anti-Acné.",
  },
  {
    id: "radiofrecuencia-facial",
    slug: "radiofrecuencia-facial",
    name: "Radiofrecuencia Facial R&A",
    category: "faciales",
    shortDescription: "Limpieza y radiofrecuencia para firmeza facial.",
    whatsappMessage: "Hola, quisiera información sobre Radiofrecuencia Facial R&A.",
  },
  {
    id: "limpieza-facial-hidratante",
    slug: "limpieza-facial-hidratante",
    name: "Limpieza Facial Hidratante",
    category: "faciales",
    shortDescription: "Método de hidratación combinado con limpieza facial.",
    whatsappMessage: "Hola, quisiera información sobre Limpieza Facial Hidratante.",
  },

  // ---- Corporales ----
  {
    id: "anti-papada",
    slug: "anti-papada",
    name: "Anti-papada",
    category: "corporales",
    shortDescription: "Tratamiento dirigido a la zona de la papada.",
    whatsappMessage: "Hola, quisiera información sobre el tratamiento Anti-papada.",
  },
  {
    id: "sarenti-paquete-corporal",
    slug: "paquete-corporal",
    name: "SARENTI Paquete Corporal",
    category: "corporales",
    shortDescription: "Paquete de tratamientos corporales de Sarenti.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre el Paquete Corporal SARENTI.",
  },
  {
    id: "levantamiento-gluteo",
    slug: "levantamiento-de-gluteo",
    name: "Levantamiento de Glúteo",
    category: "corporales",
    shortDescription: "Tratamiento corporal enfocado en la zona glútea.",
    whatsappMessage: "Hola, quisiera información sobre Levantamiento de Glúteo.",
  },
  {
    id: "anti-estrias",
    slug: "anti-estrias",
    name: "Anti-estrías",
    category: "corporales",
    shortDescription: "Tratamiento dirigido a la apariencia de estrías.",
    whatsappMessage: "Hola, quisiera información sobre el tratamiento Anti-estrías.",
  },
  {
    id: "lipolaser",
    slug: "lipolaser",
    name: "Lipoláser",
    category: "corporales",
    shortDescription: "Tecnología láser aplicada a la reducción de medidas localizadas.",
    whatsappMessage: "Hola, quisiera información sobre Lipoláser.",
  },
  {
    id: "radio-cav-vacc-corporal",
    slug: "radio-cav-vacc-corporal",
    name: "Radio-Cav-Vacc Corporal",
    category: "corporales",
    shortDescription: "Combinación de tecnologías corporales especializadas.",
    whatsappMessage: "Hola, quisiera información sobre Radio-Cav-Vacc Corporal.",
  },
  {
    id: "anti-celulitis-carboxiterapia",
    slug: "anti-celulitis-carboxiterapia",
    name: "Anti-Celulitis (Carboxiterapia)",
    category: "corporales",
    shortDescription: "Carboxiterapia enfocada en la apariencia de la celulitis.",
    whatsappMessage: "Hola, quisiera información sobre Anti-Celulitis (Carboxiterapia).",
  },
  {
    id: "cavitacion",
    slug: "cavitacion",
    name: "Cavitación",
    category: "corporales",
    shortDescription: "Tecnología corporal para el contorno de la figura.",
    whatsappMessage: "Hola, quisiera información sobre Cavitación.",
  },

  // ---- Recuperación y tratamientos especializados ----
  {
    id: "tratamiento-cicatrices",
    slug: "tratamiento-de-cicatrices",
    name: "Tratamiento de Cicatrices",
    category: "especializados",
    shortDescription: "Enfocado en mejorar la apariencia de cicatrices.",
    whatsappMessage: "Hola, quisiera información sobre el Tratamiento de Cicatrices.",
  },
  {
    id: "post-parto-post-operatorio",
    slug: "post-parto-post-operatorio",
    name: "Post-parto o Post-operatorio",
    category: "especializados",
    shortDescription: "Acompañamiento estético en etapa post-parto o post-operatoria.",
    whatsappMessage: "Hola, quisiera información sobre tratamientos Post-parto o Post-operatorio.",
  },
  {
    id: "aranitas-vasculares",
    slug: "aranitas-vasculares",
    name: "Arañitas Vasculares",
    category: "especializados",
    shortDescription: "Tratamiento dirigido a la apariencia de arañitas vasculares.",
    whatsappMessage: "Hola, quisiera información sobre Arañitas Vasculares.",
  },

  // ---- Masajes ----
  {
    id: "masaje-deportivo",
    slug: "masaje-deportivo",
    name: "Masaje Deportivo",
    category: "masajes",
    shortDescription: "Enfocado en la recuperación muscular de deportistas.",
    featured: true,
    whatsappMessage: "Hola, quisiera información sobre el Masaje Deportivo.",
  },
  {
    id: "masaje-descontracturante",
    slug: "masaje-descontracturante",
    name: "Masaje Descontracturante",
    category: "masajes",
    shortDescription: "Dirigido a liberar tensión muscular acumulada.",
    whatsappMessage: "Hola, quisiera información sobre el Masaje Descontracturante.",
  },
  {
    id: "masaje-relajante",
    slug: "masaje-relajante",
    name: "Masaje Relajante",
    category: "masajes",
    shortDescription: "Una experiencia de bienestar y relajación.",
    whatsappMessage: "Hola, quisiera información sobre el Masaje Relajante.",
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}
