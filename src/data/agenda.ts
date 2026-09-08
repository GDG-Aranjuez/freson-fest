import { eventDate } from "@/utils/event-date";

import type { AgendaContent } from "@/types/agenda";

export const agenda: AgendaContent = {
  eyebrow: "AGENDA",

  headline: "El 24 de Octubre en FresON Fest",

  days: [
    {
      date: "24 de Octubre, 2026",

      sessions: [
        {
          id: "session-1",
          startTime: "09:30",
          title: "Intro",
          type: "Networking",
          speaker: "GDG Aranjuez",
          location: "Auditorio",
        },
        {
          id: "session-2",
          startTime: "10:00",
          title: "La primera misión: conseguir tu trabajo en tecnología",
          type: "Charla",
          speaker: "Arantxa Delgado Ruiz",
          location: "Auditorio",
        },
        {
          id: "session-3",
          startTime: "10:45",
          title: "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo",
          type: "Charla",
          speaker: "Máximo Fernández Núñez",
          location: "Auditorio",
        },
        {
          id: "session-4",
          startTime: "11:10",
          title: "Desayuno",
          type: "Networking",
          location: "Por confirmar",
        },
        {
          id: "session-5",
          startTime: "11:35",
          title: "Los caminos del desarrollador son impredecibles",
          type: "Charla",
          speaker: "Oliver Ramírez Cáceres",
          location: "Auditorio",
        },
        {
          id: "session-6",
          startTime: "11:35",
          title: "Workshop CTF + CTF",
          type: "Taller",
          speaker: "Nacho Fernandez Diez y Carlos Bolaños",
          location: "Sala 17",
        },
        {
          id: "session-7",
          startTime: "12:25",
          title:
            "Breaking Facial Recognition Systems with Real-Time Deepfake Injection",
          type: "Charla",
          speaker: "Sergio Mahía",
          location: "Auditorio",
        },
        {
          id: "session-8",
          startTime: "13:10",
          title: "El mito de la productividad tóxica",
          type: "Charla",
          speaker: "Nicolás Patarino",
          location: "Auditorio",
        },
        {
          id: "session-9",
          startTime: "14:00",
          title: "Comida",
          type: "Networking",
          location: "Por confirmar",
        },
        {
          id: "session-10",
          startTime: "15:15",
          title: "Corriente Senior: El arte de volar sin caer",
          type: "Charla",
          speaker: "David Martinez",
          location: "Auditorio",
        },
        {
          id: "session-11",
          startTime: "15:15",
          title: "Coding Dojo: Rescatando webs inaccesibles paso a paso",
          type: "Taller",
          speaker: "Sergi Olives",
          location: "Sala 17",
        },
        {
          id: "session-12",
          startTime: "16:00",
          title: "Mesa redonda",
          type: "Panel",
          speaker: "Por confirmar",
          location: "Auditorio",
        },
        {
          id: "session-13",
          startTime: "16:25",
          title: "Espectáculo",
          type: "Networking",
          location: "Auditorio",
        },
        {
          id: "session-14",
          startTime: "16:50",
          title:
            "Accesibilidad y neurodivergencia: No todo el mundo navega igual",
          type: "Charla",
          speaker: "Mía Salazar",
          location: "Auditorio",
        },
        {
          id: "session-15",
          startTime: "16:50",
          title: "Escuela de HechicerIA",
          type: "Taller",
          speaker: "Laura Morillo-Velarde Rodríguez",
          location: "Sala 17",
        },
        {
          id: "session-16",
          startTime: "17:35",
          title: "Sin managers, sin reuniones, sin problemas",
          type: "Charla",
          speaker: "Sofía Lescano Carroll",
          location: "Auditorio",
        },
        {
          id: "session-17",
          startTime: "18:20",
          title: "Cierre y sorteos",
          type: "Networking",
          speaker: "GDG Aranjuez",
          location: "Auditorio",
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

  heading: "Todo lo que vas a vivir en FresON Fest",

  activities: [
    {
      id: 1,
      time: "10:00",
      title: "La primera misión: conseguir tu trabajo en tecnología",
      speaker: "Arantxa Delgado Ruiz",
      location: "Auditorio",
      type: "talk",
      expandable: false,
      description: "",
    },
    {
      id: 2,
      time: "11:35",
      title: "Workshop CTF + CTF",
      speaker: "Nacho Fernandez Diez y Carlos Bolaños",
      location: "Sala 17",
      type: "workshop",
      expandable: true,
      description: "",
    },
    {
      id: 3,
      time: "15:15",
      title: "Corriente Senior: El arte de volar sin caer",
      speaker: "David Martinez",
      location: "Auditorio",
      type: "talk",
      expandable: false,
      description: "",
    },
    {
      id: 4,
      time: "16:50",
      title: "Escuela de HechicerIA",
      speaker: "Laura Morillo-Velarde Rodríguez",
      location: "Sala 17",
      type: "workshop",
      expandable: true,
      description: "",
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
