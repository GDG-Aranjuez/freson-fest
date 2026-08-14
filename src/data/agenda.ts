import { eventDate } from "@/utils/event-date";

export const agenda = {
  eyebrow: "Agenda",
  heading: "Todo lo que vas a vivir en este DevFest",
  activities: [
    {
      id: 1,
      time: "09:00",
      title: "Título",
      speaker: "Nombre del ponente",
      location: "Lugar a desarrollar",
      type: "talk",
      expandable: false,
      description: "",
    },
    {
      id: 2,
      time: "10:00",
      title: "Título",
      speaker: "Nombre del ponente",
      location: "Lugar a desarrollar",
      type: "talk",
      expandable: false,
      description: "",
    },
    {
      id: 3,
      time: "10:30",
      title: "Título",
      speaker: "Nombre del ponente",
      location: "Lugar a desarrollar",
      type: "talk",
      expandable: true,
      description: "Descripción de la charla.",
    },
    {
      id: 4,
      time: "10:30",
      title: "Título",
      speaker: "Nombre del ponente",
      location: "Lugar a desarrollar",
      type: "workshop",
      expandable: true,
      description: "Descripción del taller.",
    },
  ],
  cta: {
    href: "/agenda",
    label: "Descubre la agenda completa",
  },
} as const;

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
