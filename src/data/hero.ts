import { eventDate } from "@/utils/event-date";

export const hero = {
  ...eventDate,
  titleLead: "Aranjuez tiene algo que decir al ",
  titleHighlight: "mundo tech",
  subtitle:
    "Y tú estás invitado. Sin postureo, sin distancia, solo gente real haciendo cosas reales.",
  cta: {
    href: "/entradas",
    label: "Consigue tu entrada",
  },
  footnote: "Plazas disponibles · Aforo limitado",
  benefit: {
    label: "Tu entrada ayuda a la Asociación Brego",
    href: "https://www.fundacionbrego.org/",
  },
} as const;
