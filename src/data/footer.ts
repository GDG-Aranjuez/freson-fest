import { contactMailto, site } from "@/data/site";
import type { FooterSection } from "@/types/footer";
import { eventDate } from "@/utils/event-date";

export const footerMeta = {
  tagline: "Fresón Fest · Comunidad de\ndesarrolladores Google en Aranjuez.",
  collaborationLabel: "Con la colaboración de",
  copyright: `© ${eventDate.dateYear}, ${site.name}`,
  help: { href: "/ayuda", label: "¿Necesitas ayuda?" },
  conduct: {
    href: "https://developers.google.com/events/gdd-europe/code-of-conduct?hl=es-419",
    label: "Código de conducta",
  },
  helpIcon: "/icons/lifebuoy.svg",
  gdg: {
    href: "https://gdg.community.dev/gdg-aranjuez/",
    logo: "/brand/gdg-oficial-negativo.svg",
    alt: "Google Developer Groups",
  },
} as const;

export const footerSections: FooterSection[] = [
  {
    title: "Evento",
    links: [
      { href: "/agenda", label: "Agenda" },
      { href: "/ponentes", label: "Ponentes" },
      { href: "/#ubicacion", label: "Ubicación" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { href: "/nosotros", label: "GDG Aranjuez" },
      { href: "/patrocinadores", label: "Patrocinadores" },
      { href: "/nosotros", label: "Nosotros" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: contactMailto, label: "Correo electrónico" },
      { href: "/patrocinadores#contacto", label: "Hazte patrocinador" },
      // { href: "/cfp", label: "Propón una charla" },
    ],
  },
];
