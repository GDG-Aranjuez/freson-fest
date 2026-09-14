import { schedule } from "@/data/agenda";
import { previousEditionVideo } from "@/data/media";
import { ticketCtas, ticketsFootnote } from "@/data/tickets";
import { eventDate } from "@/utils/event-date";

const BREGO_URL = "https://www.fundacionbrego.org/";

export type HighlightTextPart = {
  type: "text";
  value: string;
};

export type HighlightLinkPart = {
  type: "link";
  value: string;
  href: string;
};

export type HighlightDescriptionPart = HighlightTextPart | HighlightLinkPart;

export interface HighlightItem {
  number: string;
  title: string;
  description: string | HighlightDescriptionPart[];
}

export interface HighlightImage {
  src: string;
  alt: string;
}

export const hero = {
  ...eventDate,
  titleLead: "Aranjuez tiene algo que decir al",
  titleHighlight: "mundo tech",
  subtitle:
    "Y tú estás invitado. Sin postureo, sin distancia, solo gente real haciendo cosas reales.",
  cta: ticketCtas.primary,
  footnote: ticketsFootnote,
  benefit: {
    label: "Tu entrada ayuda a la Asociación Brego",
    href: BREGO_URL,
  },
} as const;

export const tickerItems = [
  "IA",
  "Cloud",
  "Android",
  "Flutter",
  "Firebase",
  "Web",
  "Open Source",
  "UX",
  "DevOps",
  "ML",
  "Kotlin",
  "Gemini",
  "Maps Platform",
] as const;

export const highlights = {
  eyebrow: "Por qué venir",
  title: "¿Qué nos hace especiales?",
  items: [
    {
      number: "01",
      title: "Cara a cara con los referentes",
      description:
        "Puedes hablar con todos los ponentes. Sin fila, sin badge, sin protocolo.",
    },
    {
      number: "02",
      title: "Organizado por la comunidad",
      description:
        "Sin agenda corporativa. Solo gente que ama esto y quiere compartirlo con gente como tú.",
    },
    {
      number: "03",
      title: "Aprende haciendo",
      description:
        "Talleres prácticos además de charlas. Te vas con experiencia y aprendizaje concreto.",
    },
    {
      number: "04",
      title: "Con causa",
      description: [
        {
          type: "text",
          value: "El total de lo recaudado con tu entrada irá destinado a la ",
        },
        {
          type: "link",
          value: "Asociación Brego Ciudad Animal",
          href: BREGO_URL,
        },
        {
          type: "text",
          value: ", dedicada a la protección animal.",
        },
      ],
    },
  ] as const satisfies readonly HighlightItem[],
  images: {
    stage: {
      src: "/media/highlights/stage.jpg",
      alt: "Ponente en el escenario de DevFest Aranjuez",
    },
    selfie: {
      src: "/media/highlights/selfie.jpg",
      alt: "Asistentes de DevFest haciéndose una foto juntos",
    },
    audience: {
      src: "/media/highlights/audience.jpg",
      alt: "Público aplaudiendo en el auditorio de DevFest",
    },
  } as const satisfies Record<string, HighlightImage>,
} as const;

export const quote = {
  text: "En el devfest de FresON",
  description:
    "Cada edición es una nueva oportunidad para encontrarnos, compartir y seguir creciendo juntos como comunidad.",
  video: previousEditionVideo,
} as const;

export const schedulePreview = {
  eyebrow: schedule.eyebrow,
  heading: schedule.heading,
  cta: schedule.cta,
} as const;
