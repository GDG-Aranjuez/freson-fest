import type { NavLink } from "@/types/nav";

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Ponentes" },
  { href: "/cfp", label: "CFP" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/nosotros", label: "Nosotros" },
];

export const ticketsCta = {
  href: "/entradas",
  label: "Entradas",
} as const;
