import { eventDate } from "@/utils/event-date";

export const hero = {
  ...eventDate,
  title: "Una experiencia que no te puedes perder",
  subtitle: "Tech de calle en el corazón de Aranjuez.",
  cta: {
    href: "/entradas",
    label: "Reserva tu plaza",
    footnote: "Plazas disponibles · Aforo limitado",
  },
} as const;

export const faqs = {
  heading: "Preguntas frecuentes",
  subtitle:
    "Encuentra toda la información que necesitas en las siguientes categorías",
  items: [
    {
      question: "Pregunta 1",
      answer:
        "Respuesta provisional. Sustituye este texto por la información real de la FAQ.",
    },
    {
      question: "Pregunta 2",
      answer:
        "Respuesta provisional. Sustituye este texto por la información real de la FAQ.",
    },
    {
      question: "Pregunta 3",
      answer:
        "Respuesta provisional. Sustituye este texto por la información real de la FAQ.",
    },
  ],
  more: {
    href: "/ayuda",
    label: "VER MÁS PREGUNTAS",
  },
} as const;
