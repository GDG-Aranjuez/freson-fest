export interface AgendaSession {
  id: string;
  startTime: string;
  title: string;
  type: string;
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
  secondaryLink?: {
    href: string;
    label: string;
  };
}

export const hero = {
  cta: {
    href: "#entradas",
    label: "Reservar plaza",
    footnote: "Plazas disponibles · Aforo limitado",
  },
};

export const homeSchedule = {
  cta: {
    label: "Descubrir la agenda completa",
    href: "/agenda",
  },
};

export const agenda: AgendaContent = {
  eyebrow: "AGENDA",
  headline: "Horarios y actividades",
  description:
    "Descubre todas las charlas y workshops que tenemos preparados para ti.",
  days: [],
  cta: {
    href: "#entradas",
    label: "Reservar plaza",
  },
  secondaryLink: {
    label: "Añadir a mi calendario",
    href: "https://calendar.google.com/calendar",
  },
};
