import type {
  AboutCollaborator,
  AboutStat,
  AboutTeamGroup,
} from "@/types/about";

const placeholderImage = "/media/about/collaborator-placeholder.jpg";

function placeholderMember(id: string): AboutCollaborator {
  return {
    id,
    name: "Nombre y apellido",
    role: "Rol & Empresa",
    image: placeholderImage,
    socials: {},
  };
}

export const aboutHero = {
  eyebrow: "NOSOTROS",
  title: "Detrás del Fresón Fest",
  subtitle:
    "Un grupo que empezó con una idea y ha ido creciendo con quien decidió quedarse.",
  image: {
    src: "/media/about/hero.jpg",
    alt: "Escenario de Fresón Fest con una persona presentando ante el público",
  },
} as const;

export const aboutStats: AboutStat[] = [
  { value: "3ª", label: "Edición consecutiva" },
  { value: "3", label: "Áreas de equipo" },
  { value: "+13", label: "Personas voluntarias" },
];

export const aboutHistory = {
  eyebrow: "QUIÉNES SOMOS",
  title: "Una comunidad, no solo un evento",
  body: `Fresón Fest nace de GDG Aranjuez, que empezó siendo un grupo de gente sin experiencia organizando nada, dispuesta a intentarlo aunque al principio fueran "cuatro gatos". Desde entonces no hemos dejado de sumar: gente que llegó como público y se quedó al otro lado o gente que entró a echar una mano con algo puntual y acabó formando parte del equipo. Así hemos ido creciendo, persona a persona y evento a evento, seguimos acercando la tecnología a Aranjuez y a todo Madrid Sur sin tener que mirar siempre hacia el centro.`,
} as const;

export const aboutTeam = {
  title: "Las personas que lo hacen posible",
  groups: [
    {
      id: "organization",
      eyebrow: "ORGANIZACIÓN",
      members: [
        placeholderMember("org-1"),
        placeholderMember("org-2"),
        placeholderMember("org-3"),
        placeholderMember("org-4"),
      ],
    },
    {
      id: "design",
      eyebrow: "DISEÑO",
      members: [placeholderMember("design-1"), placeholderMember("design-2")],
    },
    {
      id: "development",
      eyebrow: "DESARROLLO",
      members: [
        placeholderMember("dev-1"),
        placeholderMember("dev-2"),
        placeholderMember("dev-3"),
        placeholderMember("dev-4"),
        placeholderMember("dev-5"),
        placeholderMember("dev-6"),
        placeholderMember("dev-7"),
      ],
    },
  ] satisfies AboutTeamGroup[],
} as const;

export const aboutJoin = {
  eyebrow: "PARTICIPA",
  title: "¿Te gustaría formar parte del equipo de FresON Fest?",
  subtitle:
    "Siempre buscamos manos nuevas para organización, diseño y desarrollo. No hace falta experiencia previa, solo ganas.",
  cta: {
    href: "mailto:gdg.aranjuez@gmail.com",
    label: "Súmate al equipo",
  },
} as const;
