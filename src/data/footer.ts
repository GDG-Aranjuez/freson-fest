import type { FooterSection } from "@/types/footer";
import type { IconName } from "@/types/icon";

export const footerMeta = {
  tagline: "Fresón Fest · Comunidad de\ndesarrolladores Google en Aranjuez.",
  collaborationLabel: "Con la colaboración de",
  copyright: "© 2026, GDG Aranjuez",
  help: { href: "/ayuda", label: "¿Necesitas ayuda?" },
  conduct: { href: "/codigo-conducta", label: "Código de conducta" },
  gdg: {
    href: "https://gdg.community.dev/gdg-aranjuez/",
    logo: "/brand/gdg-oficial-negativo.svg",
    alt: "Google Developer Groups",
  },
} as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/gdg-aranjuez",
    label: "LinkedIn",
    icon: "linkedin" satisfies IconName,
  },
  {
    href: "https://twitter.com/gdgaranjuez",
    label: "X (Twitter)",
    icon: "x" satisfies IconName,
  },
  {
    href: "https://www.instagram.com/gdgaranjuez/",
    label: "Instagram",
    icon: "instagram" satisfies IconName,
  },
] as const;

export const footerSections: FooterSection[] = [
  {
    title: "Evento",
    links: [
      { href: "/agenda", label: "Agenda" },
      { href: "/ponentes", label: "Ponentes" },
      { href: "/ubicacion", label: "Ubicación" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { href: "/nosotros", label: "GDG Aranjuez" },
      { href: "/patrocinadores", label: "Patrocinadores" },
      { href: "/ediciones-anteriores", label: "Ediciones anteriores" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "mailto:gdgaranjuez@gmail.com", label: "Correo electrónico" },
      { href: "/patrocinadores", label: "Hazte patrocinador" },
      { href: "/cfp", label: "Propón una charla" },
    ],
  },
];
