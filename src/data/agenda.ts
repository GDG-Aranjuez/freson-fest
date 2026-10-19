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
  endTime: string;
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
          startTime: "09:00",
          endTime: "09:30",
          title: "Apertura y Registro",
          type: "Panel",
          location: "Auditorio",
        },
        {
          id: "session-2",
          startTime: "09:30",
          endTime: "10:00",
          title: "Intro y Bienvenida",
          type: "Charla",
          speaker: "Saúl Díaz González",
          role: "Senior Android Engineer",
          company: "@Veriff",
          image: "/organizers/saul-diaz.webp",
          location: "Auditorio",
        },
        {
          id: "session-3",
          startTime: "10:00",
          endTime: "10:45",
          title: "La primera misión: conseguir tu trabajo en tecnología",
          type: "Charla",
          speaker: "Arantxa Delgado Ruiz",
          role: "Front-End Developer",
          company: "@KnitsDigital",
          image: "/speakers/arantxa-delgado.jpg",
          description:
            "Descubre cómo afrontar la búsqueda de tu primer empleo tech con estrategia y confianza. Potencia tus habilidades, portfolio, LinkedIn y networking, mientras aprendes a gestionar el síndrome del impostor y los rechazos para avanzar con más foco y recursos.",
          location: "Auditorio",
        },
        {
          id: "session-4",
          startTime: "10:45",
          endTime: "11:10",
          title: "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo",
          type: "Charla",
          speaker: "Máximo Fernández Núñez",
          role: "AI Engineer",
          company: "@MaximoFN",
          image: "/speakers/maximo-fernandez.jpg",
          description:
            "Descubre qué hay detrás de crear una alternativa a OpenClaw dentro de una app móvil y los desafíos que implica trabajar con sus limitaciones. Una mirada práctica a aspectos clave como la memoria a largo plazo, la ventana de contexto y la personalidad.",
          location: "Auditorio",
        },
        {
          id: "session-5",
          startTime: "11:10",
          endTime: "11:35",
          title: "Café con churros",
          type: "Panel",
          location: "Auditorio",
        },
        {
          id: "session-6",
          startTime: "11:35",
          endTime: "12:25",
          title: "Los caminos del desarrollador son impredecibles",
          type: "Charla",
          speaker: "Oliver Ramírez Cáceres",
          role: "Mobile Developer",
          company: "@Versia",
          image: "/speakers/oliver-ramirez.jpg",
          description:
            "Un recorrido por la vida de un desarrollador: desde los primeros bugs y entrevistas hasta el crecimiento, la especialización y el burnout. Entre anécdotas y humor, exploraremos cómo la llegada de la IA está transformando el oficio y cambiando, una vez más, las reglas del juego.",
          location: "Auditorio",
        },
        {
          id: "session-7",
          startTime: "11:35",
          endTime: "14:00",
          title: "Workshop CTF + CTF",
          type: "Taller",
          speakers: [
            {
              name: "Nacho Fernandez Diez",
              role: "Founder & CEO",
              company: "@ThePwnLab",
              image: "/speakers/nacho-fernandez-diez.webp",
            },
            {
              name: "Carlos Bolaños",
              role: "Pentester",
              company: "@Telefónica Tech",
              image: "/speakers/carlos-bolanos.jpg",
            },
          ],
          description:
            "Aprende los fundamentos de los CTFs de ciberseguridad. Descubre cómo resolver retos, encontrar flags y dar tus primeros pasos en hacking ético de forma práctica.",
          location: "Sala 17",
        },
        {
          id: "session-8",
          startTime: "15:15",
          endTime: "16:40",
          title: "Coding Dojo: Rescatando webs inaccesibles paso a paso",
          type: "Taller",
          speaker: "Sergi Olives",
          role: "Lead Developer",
          company: "@Merkle",
          image: "/speakers/sergi-olives.jpg",
          description:
            "Aprende a mejorar la accesibilidad de una web sin empezar desde cero. Trabajarás con código real para detectar barreras, corregir problemas críticos y aplicar soluciones accesibles.Trae tu portátil: saldrás con componentes accesibles listos para integrar en tu día a día.",
          location: "Sala 17",
        },
        {
          id: "session-9",
          startTime: "16:50",
          endTime: "18:20",
          title: "Escuela de HechicerIA",
          type: "Taller",
          speaker: "Laura Morillo-Velarde Rodríguez",
          role: "Tech Lead",
          company: "@Seedtag",
          image: "/speakers/laura-morillo.jpg",
          description:
            "Un taller práctico donde aprenderás a guiar, estructurar y proteger las respuestas de Gemini y Gemma a través del universo de Harry Potter. Participa en un mini-hackathon por casas, resuelve retos de código y “encantamientos” y compite para llevar a tu casa a la victoria.",
          location: "Sala 17",
        },
        {
          id: "session-10",
          startTime: "12:25",
          endTime: "13:10",
          title:
            "Breaking Facial Recognition Systems with Real-Time Deepfake Injection",
          type: "Charla",
          speaker: "Sergio Mahía",
          role: "Penetration Tester",
          company: "@KPMG",
          image: "/speakers/sergio-mahia.png",
          description:
            "Descubre cómo los deepfakes en tiempo real pueden vulnerar sistemas de autenticación facial. A través de casos reales, veremos cómo pueden engañar tanto a sistemas como a personas y analizaremos las limitaciones de las medidas de seguridad actuales.",
          location: "Auditorio",
        },
        {
          id: "session-11",
          startTime: "13:10",
          endTime: "14:00",
          title: "El mito de la productividad tóxica",
          type: "Charla",
          speaker: "Nicolás Patarino",
          role: "Software Engineer",
          company: "@Eventbrite",
          image: "/speakers/nicolas-patarino.jpg",
          description:
            "¿Si te dijera que tu velocidad para cerrar tickets es exactamente lo que está matando tu impacto? Esta charla cuestiona métricas y dinámicas que nos mantienen en una inercia constante. Descubre cómo dejar de medir el trabajo por velocidad y empezar a enfocarte en generar un impacto real y sostenible.",
          location: "Auditorio",
        },
        {
          id: "session-12",
          startTime: "14:00",
          endTime: "15:15",
          title: "Paella",
          type: "Panel",
          location: "Auditorio",
        },
        {
          id: "session-13",
          startTime: "15:15",
          endTime: "16:00",
          title: "Corriente Senior: El arte de volar sin caer",
          type: "Charla",
          speaker: "David Martinez",
          role: "CTO",
          company: "@Inforrada",
          image: "/speakers/david-martinez.jpg",
          description:
            "¿Cómo se forja realmente un perfil Senior? Durante más de 25 años de carrera, he constatado una brecha crítica en la industria: el vacío de acompañamiento en el salto del Junior al Senior.",
          location: "Auditorio",
        },
        {
          id: "session-14",
          startTime: "16:00",
          endTime: "16:40",
          title: "Fireside chat sobre IA",
          type: "Charla",
          speakers: [
            {
              name: "Jorge Castaño",
              role: "Lead Front-End Engineer",
              company: "@Kepler Cheuvreux",
              image: "/speakers/jorge-castaño.jpeg",
            },
            {
              name: "Saúl Díaz González",
              role: "Senior Android Engineer",
              company: "@Veriff",
              image: "/organizers/saul-diaz.webp",
            },
            {
              name: "Patricia Tarazaga",
              role: "Machine Learning Engineer",
              company: "@Veriff",
              image: "/organizers/patricia-tarazaga.jpg",
            },
          ],
          description:
            "En este Fireside Chat nos sentamos a hablar de lo que todo el mundo piensa pero nadie se atreve a decir sobre el boom de la IA y las nuevas tecnologías. Desde el copy-paste más básico que haces desde tu ChatGPT hasta las predicciones más apocalípticas que salen de vez en cuando por Twitter.\n\n¿De qué vamos a hablar?\nMitos y realidades, ética y locura, mercado laboral, la era de la tecnocracia, escenarios futuristas… \nUn formato sin filtro y 100% dinámico con participación del público donde la única regla es no tomarse demasiado en serio las barbaridades que puedan salir de ahí.\n\nSe prometen risas, debates intensos y factos.\nJunto a Saúl Díaz y Patricia Tarazaga (GDG Aranjuez)",
          location: "Auditorio",
        },
        {
          id: "session-15",
          startTime: "16:40",
          endTime: "17:00",
          title: "Espectáculo",
          type: "Charla",
          speaker: "Raúl Fernandez",
          role: "Mago & Mentalista",
          company: "@Freelance",
          image: "/speakers/Raul_Fernandez.webp",
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
          type: "Charla",
          speaker: "Mía Salazar",
          role: "Frontend Developer",
          company: "@Service Club",
          image: "/speakers/mia-salazar.jpg",
          description:
            "No todas las personas experimentan el mundo digital de la misma manera. Descubre cómo diseñar y desarrollar teniendo en cuenta la neurodivergencia, aplicando accesibilidad cognitiva y buenas prácticas para crear experiencias digitales más inclusivas y no dejar a nadie atrás.",
          location: "Auditorio",
        },
        {
          id: "session-17",
          startTime: "17:45",
          endTime: "18:30",
          title: "Sin managers, sin reuniones, sin problemas",
          type: "Charla",
          speaker: "Sofía Lescano Carroll",
          role: "Senior Software Engineer",
          company: "@Alan",
          image: "/speakers/sofia-lescano.jpg",
          description:
            "Sin managers, sin reuniones, sin problemas. En esta charla, Sofía Lescano Carroll nos contará su experiencia y nos dará consejos para superar esta misión con éxito.",
          location: "Auditorio",
        },
        {
          id: "session-18",
          startTime: "18:30",
          endTime: "19:00",
          title: "Cierre y sorteos",
          type: "Panel",
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
