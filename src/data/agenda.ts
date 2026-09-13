import { locationSection, venueAddress } from "@/data/location";
import { site } from "@/data/site";
import { ticketCtas } from "@/data/tickets";
import { eventDate } from "@/utils/event-date";
import {
  googleCalendarTemplateUrl,
  toGoogleCalendarStamp,
} from "@/utils/google-calendar";

export type SessionType =
  "Charla" | "Taller" | "Networking" | "Keynote" | "Panel";

export interface AgendaSession {
  id: string;
  startTime: string;
  title: string;
  type: SessionType;
  speaker?: string;
  location?: string;
  isActive?: boolean;
  image?: string;
  expandable?: boolean;
  description?: string;
}

export interface AgendaDay {
  date: string;
  sessions: AgendaSession[];
}

export interface AgendaContent {
  eyebrow: string;
  headline: string;
  description?: string;
  days: AgendaDay[];
  cta: {
    href: string;
    label: string;
  };
  secondaryLink: {
    href: string;
    label: string;
  };
}

export const agenda: AgendaContent = {
  eyebrow: "AGENDA",

  headline: `El ${eventDate.dateLead} en FresON Fest`,

  days: [
    {
      date: `${eventDate.dateLead}, ${eventDate.dateYear}`,

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
    href: ticketCtas.reserve.href,
    label: ticketCtas.reserve.label,
  },

  // Se eliminará cuando adaptemos el componente al diseño.
  secondaryLink: {
    href: "/agenda",
    label: "DESCUBRE LA AGENDA COMPLETA",
  },
};

function calendarEventDetails(): string {
  const siteUrl = String(import.meta.env.SITE ?? "").replace(/\/$/, "");

  const howTo = locationSection.instructions
    .map((item) => `· ${item.label}`)
    .join("\n");

  return [
    site.description,
    "",
    `Organiza: ${site.name}`,
    `Sede: ${venueAddress}`,
    "",
    siteUrl ? `Web: ${siteUrl}` : null,
    siteUrl ? `Agenda: ${siteUrl}/agenda` : null,
    `Entradas: ${ticketCtas.primary.href}`,
    "",
    "Cómo llegar:",
    howTo,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export const schedule = {
  eyebrow: "Agenda",
  heading: "Lo que vas a vivir",
  cta: {
    href: "/agenda",
    label: "Descubre la agenda completa",
  },
  calendarCta: {
    href: googleCalendarTemplateUrl({
      title: site.event.name,
      start: toGoogleCalendarStamp(site.event.startDateTime),
      end: toGoogleCalendarStamp(site.event.endDateTime),
      timeZone: site.event.timeZone,
      details: calendarEventDetails(),
      location: venueAddress,
    }),
    label: "AÑADIR A MI CALENDARIO",
  },
} as const;

export const hero = {
  ...eventDate,
  titleLead: "El próximo",
  titleHighlight: eventDate.dateLeadLower,
  cta: ticketCtas.reserve,
} as const;
