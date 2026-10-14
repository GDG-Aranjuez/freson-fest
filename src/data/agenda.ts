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
  speakers?: {
    name: string;
    role?: string;
    company?: string;
    image?: string;
  }[];
  location?: string;
  isActive?: boolean;
  image?: string;
  role?: string;
  company?: string;
  maxCapacity?: string;
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
          role: "FrontEnd Developer",
          company: "@KnitsDigital",
          image: "public/speakers/arantxa-delgado.jpg",
          description:
            "La primera misión de un desarrollador es conseguir su primer trabajo en tecnología. En esta charla, Arantxa Delgado Ruiz nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
          location: "Auditorio",
        },
        {
          id: "session-3",
          startTime: "10:45",
          title: "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo",
          type: "Charla",
          speaker: "Máximo Fernández Núñez",
          role: "Machine Learning Engineer",
          company: "@Ununsuals",
          image: "public/speakers/maximo-fernandez.jpg",
          description:
            "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo. En esta charla, Máximo Fernández Núñez nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
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
          role: "Mobile Developer",
          company: "@Versia",
          image: "public/speakers/oliver-ramirez.jpg",
          description:
            "Los caminos del desarrollador son impredecibles. En esta charla, Oliver Ramírez Cáceres nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
          location: "Auditorio",
        },
        {
          id: "session-6",
          startTime: "11:35",
          title: "Workshop CTF + CTF",
          type: "Taller",
          speakers: [
            {
              name: "Nacho Fernandez Diez",
              role: "Founder & CEO",
              company: "@ThePwnLab",
              image: "public/speakers/nacho-fernandez-diez.webp",
            },
            {
              name: "Carlos Bolaños",
              role: "Pentester",
              company: "@TelefónicaTech",
              image: "public/speakers/carlos-bolanos.jpg",
            },
          ],
          description:
            "Taller práctico de introducción a CTF y resolución de retos de ciberseguridad.",
          maxCapacity: "max 5",
          location: "Sala 17",
        },
        {
          id: "session-7",
          startTime: "12:25",
          title:
            "Breaking Facial Recognition Systems with Real-Time Deepfake Injection",
          type: "Charla",
          speaker: "Sergio Mahía",
          role: "Software Engineer",
          company: "@KPMG",
          image: "public/speakers/sergio-mahia.png",
          description:
            "Breaking Facial Recognition Systems with Real-Time Deepfake Injection",
          maxCapacity: "max 5",
          location: "Auditorio",
        },
        {
          id: "session-8",
          startTime: "13:10",
          title: "El mito de la productividad tóxica",
          type: "Charla",
          speaker: "Nicolás Patarino",
          role: "Staff Software Engineer",
          company: "@Eventbrite",
          image: "public/speakers/nicolas-patarino.jpg",
          description:
            "El mito de la productividad tóxica. En esta charla, Nicolás Patarino nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
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
          role: "CTO",
          company: "@Inforrada",
          image: "public/speakers/david-martinez.jpg",
          description:
            "Corriente Senior: El arte de volar sin caer. En esta charla, David Martinez nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
          location: "Auditorio",
        },
        {
          id: "session-11",
          startTime: "15:15",
          title: "Coding Dojo: Rescatando webs inaccesibles paso a paso",
          type: "Taller",
          speaker: "Sergi Olives",
          role: "Developer Lead",
          company: "@Merkle",
          image: "public/speakers/sergi-olives.jpg",
          description:
            "Conding Dojo: Rescatando webs inaccesibles paso a paso. En este taller, Sergi Olives nos enseñará cómo rescatar webs inaccesibles paso a paso.",
          maxCapacity: "max 5",
          location: "Sala 17",
        },
        {
          id: "session-12",
          startTime: "16:00",
          title: "Café con churros",
          type: "Panel",
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
          role: "Frontend Developer",
          company: "@ServiceClub",
          image: "public/speakers/mia-salazar.jpg",
          description:
            "Accesibilidad y neurodivergencia: No todo el mundo navega igual. En esta charla, Mía Salazar nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
          location: "Auditorio",
        },
        {
          id: "session-15",
          startTime: "16:50",
          title: "Escuela de HechicerIA",
          type: "Taller",
          speaker: "Laura Morillo-Velarde Rodríguez",
          role: "Tech Lead",
          company: "@Seedtag",
          image: "public/speakers/laura-morillo.jpg",
          description:
            "Escuela de HechicerIA. En este taller, Laura Morillo-Velarde Rodríguez nos enseñará los fundamentos de la programación con inteligencia artificial.",
          maxCapacity: "max 5",
          location: "Sala 17",
        },
        {
          id: "session-16",
          startTime: "17:35",
          title: "Sin managers, sin reuniones, sin problemas",
          type: "Charla",
          speaker: "Sofía Lescano Carroll",
          role: "Senior Software Engineer",
          company: "@Alan",
          image: "public/speakers/sofia-lescano.jpg",
          description:
            "Sin managers, sin reuniones, sin problemas. En esta charla, Sofía Lescano Carroll nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          maxCapacity: "max 5",
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
