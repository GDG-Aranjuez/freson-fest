import { eventDate } from "@/utils/event-date";
import type { AgendaContent } from "@/types/agenda";

export const agenda: AgendaContent = {
  eyebrow: "AGENDA",
  headline: "Esto es lo que hemos preparado para ti",
  description:
    "Un día lleno de charlas, talleres y networking con los mejores profesionales tech de España.",
  days: [
    {
      date: "24 de Octubre, 2026",
      sessions: [
        {
          id: "session-1",
          startTime: "09:00",
          title: "Registro e Inauguración",
          type: "Networking",
          location: "Hall Principal",
        },
        {
          id: "session-2",
          startTime: "09:30",
          title: "Keynote: El futuro de la IA en desarrollo",
          type: "Keynote",
          speaker: "María García López",
          location: "Auditorio Principal",
        },
        {
          id: "session-3",
          startTime: "10:30",
          title: "Workshop de Seguridad en Cloud",
          type: "Taller",
          speaker: "Carlos Mendez",
          location: "Sala A",
          isActive: true,
        },
        {
          id: "session-4",
          startTime: "11:30",
          title: "Flutter: más allá de mobile",
          type: "Charla",
          speaker: "Sofia Chen",
          location: "Auditorio Principal",
        },
        {
          id: "session-5",
          startTime: "12:30",
          title: "Pausa para café y networking",
          type: "Networking",
          location: "Áreas comunes",
        },
        {
          id: "session-6",
          startTime: "13:00",
          title: "Panel: Open Source en la empresa",
          type: "Panel",
          speaker: "Moderador: Javier Ruiz",
          location: "Auditorio Principal",
        },
        {
          id: "session-7",
          startTime: "14:00",
          title: "Comida",
          type: "Networking",
          location: "Restaurante",
        },
      ],
    },
  ],
  cta: {
    href: "/entradas",
    label: "Entradas",
  },
  secondaryLink: {
    href: "/agenda",
    label: "DESCUBRE LA AGENDA COMPLETA",
  },
};

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
