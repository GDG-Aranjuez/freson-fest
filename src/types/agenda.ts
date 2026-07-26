export type SessionType = "Charla" | "Taller" | "Networking" | "Keynote" | "Panel";

export interface AgendaSession {
  id: string;
  startTime: string;
  title: string;
  type: SessionType;
  speaker?: string;
  location?: string;
  isActive?: boolean;
  image?: string;
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
