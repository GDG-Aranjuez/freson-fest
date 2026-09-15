import { contactMailto } from "@/data/site";

export interface AboutStat {
  value: string;
  label: string;
}

export const hero = {
  eyebrow: "NOSOTROS",
  title: "Detrás del FresON Fest",
  subtitle:
    "Un grupo que empezó con una idea y ha ido creciendo con quien decidió quedarse.",
  image: {
    src: "/media/about/hero.jpg",
    alt: "Escenario de Fresón Fest con una persona presentando ante el público",
  },
} as const;

export const stats: AboutStat[] = [
  { value: "3ª", label: "Edición consecutiva" },
  { value: "3", label: "Áreas de equipo" },
  { value: "+13", label: "Personas voluntarias" },
];

export const history = {
  eyebrow: "QUIÉNES SOMOS",
  title: "Una comunidad, no solo un evento",
  body: `Todo comenzó con una idea y muchas ganas de hacerla realidad: acercar la comunidad tecnológica a Aranjuez y a todo Madrid Sur. Lo que empezó entre “cuatro gatos” ha ido creciendo persona a persona, evento a evento, hasta convertirse en un punto de encuentro donde compartir, aprender y conectar. Una comunidad que construimos entre todos y que sigue creciendo con cada encuentro. Y esto no ha hecho más que empezar.`,
} as const;

export const join = {
  eyebrow: "PARTICIPA",
  title: "¿Te gustaría formar parte del equipo de FresON Fest?",
  subtitle:
    "Siempre buscamos manos nuevas para organización, diseño y desarrollo. No hace falta experiencia previa, solo ganas.",
  cta: {
    href: contactMailto,
    label: "Súmate al equipo",
  },
} as const;
