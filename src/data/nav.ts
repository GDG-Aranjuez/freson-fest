import { tickets } from "@/data/tickets";
import type { NavLink } from "@/types/nav";

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Ponentes" },
  { href: "/nosotros", label: "Nosotros" },
];

export const ticketsCta = {
  href: tickets.checkoutUrl,
  label: "Entradas",
} as const;
