import { locationSection, venueAddress } from "@/data/location";
import { site } from "@/data/site";
import { speakerName, speakers as speakerProfiles } from "@/data/speakers";
import { team } from "@/data/team";
import { ticketCtas } from "@/data/tickets";
import { eventDate } from "@/utils/event-date";
import {
  googleCalendarTemplateUrl,
  toGoogleCalendarStamp,
} from "@/utils/google-calendar";

/** What happens in the slot. Breaks are not talks. */
export type SessionKind = "talk" | "workshop" | "break" | "panel" | "keynote";

/** Which list the slot belongs to. Shared activities appear in both lists. */
export type SessionTrack = "auditorium" | "workshop" | "shared";

/**
 * A slot on the schedule. People are ids from speakers, team, or agendaGuests.
 * Title and description belong to the slot, not to the person.
 */
export interface AgendaSession {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  kind: SessionKind;
  track: SessionTrack;
  speakerIds?: string[];
  location?: string;
  description?: string;
}

/** Person resolved for a session card. Components never look people up. */
export interface AgendaSpeaker {
  id: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  href?: string;
}

export interface AgendaSessionView {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  kind: SessionKind;
  track: SessionTrack;
  location?: string;
  description?: string;
  speakers: AgendaSpeaker[];
}

/** People who appear on the agenda and are not in the speakers directory or the team. */
const agendaGuests: AgendaSpeaker[] = [
  {
    id: "raul-fernandez",
    name: "Raúl Fernández",
    role: "Mago & Mentalista",
    company: "Freelance",
    image: "/speakers/Raul_Fernandez.webp",
  },
];

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
          startTime: "09:00",
          endTime: "09:30",
          title: "Apertura y Registro",
          kind: "break",
          track: "shared",
          location: "Auditorio",
        },
        {
          id: "session-2",
          startTime: "09:30",
          endTime: "10:00",
          title: "Intro y Bienvenida",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["org-saul-diaz"],
          location: "Auditorio",
        },
        {
          id: "session-3",
          startTime: "10:00",
          endTime: "10:45",
          title: "La primera misión: conseguir tu trabajo en tecnología",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["arantxa-delgado-ruiz"],
          description:
            "Descubre cómo afrontar la búsqueda de tu primer empleo tech con estrategia y confianza. Potencia tus habilidades, portfolio, LinkedIn y networking, mientras aprendes a gestionar el síndrome del impostor y los rechazos para avanzar con más foco y recursos.",
          location: "Auditorio",
        },
        {
          id: "session-4",
          startTime: "10:45",
          endTime: "11:10",
          title: "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["maximo-fernandez"],
          description:
            "Descubre qué hay detrás de crear una alternativa a OpenClaw dentro de una app móvil y los desafíos que implica trabajar con sus limitaciones. Una mirada práctica a aspectos clave como la memoria a largo plazo, la ventana de contexto y la personalidad.",
          location: "Auditorio",
        },
        {
          id: "session-5",
          startTime: "11:10",
          endTime: "11:35",
          title: "Café con churros",
          kind: "break",
          track: "shared",
          location: "Auditorio",
        },
        {
          id: "session-6",
          startTime: "11:35",
          endTime: "12:25",
          title: "Los caminos del desarrollador son impredecibles",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["oliver-ramirez"],
          description:
            "Un recorrido por la vida de un desarrollador: desde los primeros bugs y entrevistas hasta el crecimiento, la especialización y el burnout. Entre anécdotas y humor, exploraremos cómo la llegada de la IA está transformando el oficio y cambiando, una vez más, las reglas del juego.",
          location: "Auditorio",
        },
        {
          id: "session-19",
          startTime: "10:00",
          endTime: "11:15",
          title: "El canario en la sala de máquinas",
          kind: "workshop",
          track: "workshop",
          speakerIds: ["javier-tomas-garcia"],
          description:
            "Una IA, una herramienta de consulta, y las claves de vuestra infraestructura en texto plano. Lo veremos en directo, sin guión.",
          location: "Aula 17",
        },
        {
          id: "session-7",
          startTime: "11:35",
          endTime: "14:00",
          title: "Workshop CTF + CTF",
          kind: "workshop",
          track: "workshop",
          speakerIds: ["nacho-fernandez-diez", "carlos-bolanos"],
          description:
            "Aprende los fundamentos de los CTFs de ciberseguridad. Descubre cómo resolver retos, encontrar flags y dar tus primeros pasos en hacking ético de forma práctica.",
          location: "Aula 17",
        },
        {
          id: "session-8",
          startTime: "15:15",
          endTime: "16:40",
          title: "Coding Dojo: Rescatando webs inaccesibles paso a paso",
          kind: "workshop",
          track: "workshop",
          speakerIds: ["sergi-olives"],
          description:
            "Aprende a mejorar la accesibilidad de una web sin empezar desde cero. Trabajarás con código real para detectar barreras, corregir problemas críticos y aplicar soluciones accesibles.\n\nTrae tu portátil: saldrás con componentes accesibles listos para integrar en tu día a día.",
          location: "Aula 17",
        },
        {
          id: "session-9",
          startTime: "16:50",
          endTime: "18:20",
          title: "Escuela de HechicerIA",
          kind: "workshop",
          track: "workshop",
          speakerIds: ["laura-morillo-velarde"],
          description:
            "Un taller práctico donde aprenderás a guiar, estructurar y proteger las respuestas de Gemini y Gemma a través del universo de Harry Potter. Participa en un mini-hackathon por casas, resuelve retos de código y “encantamientos” y compite para llevar a tu casa a la victoria.",
          location: "Aula 17",
        },
        {
          id: "session-10",
          startTime: "12:25",
          endTime: "13:10",
          title:
            "Breaking Facial Recognition Systems with Real-Time Deepfake Injection",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["sergio-mahia"],
          description:
            "Descubre cómo los deepfakes en tiempo real pueden vulnerar sistemas de autenticación facial. A través de casos reales, veremos cómo pueden engañar tanto a sistemas como a personas y analizaremos las limitaciones de las medidas de seguridad actuales.",
          location: "Auditorio",
        },
        {
          id: "session-11",
          startTime: "13:10",
          endTime: "14:00",
          title: "El mito de la productividad tóxica",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["nicolas-patarino"],
          description:
            "¿Si te dijera que tu velocidad para cerrar tickets es exactamente lo que está matando tu impacto? Esta charla cuestiona métricas y dinámicas que nos mantienen en una inercia constante. Descubre cómo dejar de medir el trabajo por velocidad y empezar a enfocarte en generar un impacto real y sostenible.",
          location: "Auditorio",
        },
        {
          id: "session-12",
          startTime: "14:00",
          endTime: "15:15",
          title: "Paella",
          kind: "break",
          track: "shared",
          location: "Auditorio",
        },
        {
          id: "session-13",
          startTime: "15:15",
          endTime: "16:00",
          title: "Corriente Senior: El arte de volar sin caer",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["david-martinez"],
          description:
            "¿Cómo se forja realmente un perfil Senior? Durante más de 25 años de carrera, he constatado una brecha crítica en la industria: el vacío de acompañamiento en el salto del Junior al Senior.",
          location: "Auditorio",
        },
        {
          id: "session-14",
          startTime: "16:00",
          endTime: "16:40",
          title: "Fireside chat sobre IA",
          kind: "panel",
          track: "auditorium",
          speakerIds: [
            "jorge-castano",
            "org-saul-diaz",
            "org-patricia-tarazaga",
          ],
          description:
            "En este Fireside Chat nos sentamos a hablar de lo que todo el mundo piensa pero nadie se atreve a decir sobre el boom de la IA y las nuevas tecnologías. Desde el copy-paste más básico que haces desde tu ChatGPT hasta las predicciones más apocalípticas que salen de vez en cuando por Twitter.\n\n¿De qué vamos a hablar?\nMitos y realidades, ética y locura, mercado laboral, la era de la tecnocracia, escenarios futuristas…\nUn formato sin filtro y 100% dinámico con participación del público donde la única regla es no tomarse demasiado en serio las barbaridades que puedan salir de ahí.\n\nSe prometen risas, debates intensos y factos.\nJunto a Saúl Díaz y Patricia Tarazaga (GDG Aranjuez)",
          location: "Auditorio",
        },
        {
          id: "session-15",
          startTime: "16:40",
          endTime: "17:00",
          title: "Espectáculo",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["raul-fernandez"],
          description:
            "Un momento para dejarse sorprender y disfrutar de un espectáculo de magia y mentalismo. Una experiencia diferente donde la percepción, el misterio y lo inesperado serán los protagonistas.",
          location: "Auditorio",
        },
        {
          id: "session-16",
          startTime: "17:00",
          endTime: "17:45",
          title:
            "Accesibilidad y neurodivergencia: No todo el mundo navega igual",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["mia-salazar"],
          description:
            "No todas las personas experimentan el mundo digital de la misma manera. Descubre cómo diseñar y desarrollar teniendo en cuenta la neurodivergencia, aplicando accesibilidad cognitiva y buenas prácticas para crear experiencias digitales más inclusivas y no dejar a nadie atrás.",
          location: "Auditorio",
        },
        {
          id: "session-17",
          startTime: "17:45",
          endTime: "18:30",
          title: "Sin managers, sin reuniones, sin problemas",
          kind: "talk",
          track: "auditorium",
          speakerIds: ["sofia-lescano"],
          description:
            "Sin managers, sin reuniones, sin problemas. En esta charla, Sofía Lescano Carroll nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          location: "Auditorio",
        },
        {
          id: "session-18",
          startTime: "18:30",
          endTime: "19:00",
          title: "Cierre y sorteos",
          kind: "break",
          track: "shared",
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

const people = new Map<string, AgendaSpeaker>();

for (const speaker of speakerProfiles) {
  people.set(speaker.id, {
    id: speaker.id,
    name: speakerName(speaker),
    role: speaker.role,
    company: speaker.company,
    image: speaker.image,
    href: speaker.socials?.linkedin,
  });
}

for (const group of team.groups) {
  for (const member of group.members) {
    if (people.has(member.id)) continue;
    people.set(member.id, {
      id: member.id,
      name: member.name,
      role: member.role,
      company: "company" in member ? member.company : undefined,
      image: member.image,
      href: member.socials.linkedin ?? member.socials.instagram,
    });
  }
}

for (const guest of agendaGuests) {
  people.set(guest.id, guest);
}

function personById(id: string): AgendaSpeaker {
  const person = people.get(id);
  if (!person) {
    throw new Error(
      `Agenda speaker "${id}" is not in speakers, team, or agenda guests.`
    );
  }
  return person;
}

export function resolveSessions(
  sessions: AgendaSession[]
): AgendaSessionView[] {
  return sessions.map((session) => ({
    id: session.id,
    startTime: session.startTime,
    endTime: session.endTime,
    title: session.title,
    kind: session.kind,
    track: session.track,
    location: session.location,
    description: session.description,
    speakers: (session.speakerIds ?? []).map(personById),
  }));
}

/** Talk linked from a speaker card. The id is the agenda anchor. */
export function talkForSpeaker(speakerId: string) {
  for (const day of agenda.days) {
    for (const session of day.sessions) {
      if (!session.speakerIds?.includes(speakerId)) continue;
      return { id: session.id, title: session.title };
    }
  }
  return undefined;
}

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
