import type { NavLink } from "@/types/nav";

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/agenda", label: "Agenda" },
  { href: "/ponentes", label: "Ponentes" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/nosotros", label: "Nosotros" },
];

export const mobileNavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/agenda", label: "Agenda" },
  { href: "/ponentes", label: "Ponentes" },
  { href: "/cfp", label: "CFP" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/nosotros", label: "Nosotros" },
];
