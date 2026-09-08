import { eventDate } from "@/utils/event-date";

import type { AgendaContent } from "@/types/agenda";

export const agenda: AgendaContent = {
  eyebrow: "AGENDA",

  headline: "El 26 de Octubre en FresON Fest",

  days: [
    {
      date: "26 de Octubre, 2026",

      sessions: [
        {
          id: "session-1",
          startTime: "09:00",
          title: "Apertura y registro",
          type: "Charla",
          speaker: "Nombre del ponente",
          location: "Hall Central",
        },
        {
          id: "session-2",
          startTime: "10:00",
          title: "Presentación",
          type: "Charla",
          speaker: "Nombre del ponente",
          location: "Lugar a desarrollar",
        },
        {
          id: "session-3",
          startTime: "10:30",
          title: "Conceptualización del sonido para narrar historias",
          type: "Charla",
          speaker: "Nombre del ponente",
          location: "Lugar a desarrollar",
          expandable: true,
          description: "Descripción pendiente.",
        },
        {
          id: "session-4",
          startTime: "11:00",
          title: "Workshop de Seguridad: CTF DevFest Aranjuez",
          type: "Taller",
          speaker: "Nombre del ponente",
          location: "Lugar a desarrollar",
          expandable: true,
        },
      ],
    },
  ],

  cta: {
    href: "/entradas",
    label: "Reserva tu plaza",
  },

  // Se eliminará cuando adaptemos el componente al diseño.
  secondaryLink: {
    href: "/agenda",
    label: "DESCUBRE LA AGENDA COMPLETA",
  },
};

export const homeSchedule = {
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

  title: "No te puedes perder esta experiencia.",

  cta: {
    href: "/entradas",
    label: "Reserva tu plaza",
    footnote: "Plazas disponibles · Aforo limitado.",
  },
} as const;

export const faqs = {
  heading: "Preguntas frecuentes",
  subtitle: "Encuentra toda la información que necesitas",
  items: [
    {
      question: "¿Qué es FresON Fest?",
      answer:
        "FresON Fest es un DevFest organizado por GDG Aranjuez para aprender, compartir conocimiento y conectar con la comunidad. Durante el día podrás disfrutar de charlas y talleres sobre desarrollo de software, IA, cloud y otras tecnologías, de la mano de profesionales de la comunidad.",
    },
    {
      question: "¿Necesito ser desarrollador/a para asistir?",
      answer:
        "Para nada. FresON Fest está abierto a cualquier persona interesada en la tecnología, independientemente de su nivel de experiencia. Tanto si eres profesional, estudiante, estás empezando en el sector o simplemente tienes curiosidad por la tecnología, eres bienvenido/a.",
    },
    {
      question: "¿En qué idioma serán las sesiones?",
      answer:
        "La mayoría de las sesiones serán en español. En caso de que alguna charla o taller se imparta en inglés, estará indicado en la agenda.",
    },
  ],

  more: {
    href: "/ayuda",
    label: "VER MÁS PREGUNTAS",
  },
} as const;
