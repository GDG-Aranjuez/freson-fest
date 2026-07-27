import type { ComingSoonPage } from "@/types/coming-soon";

/** Routes linked from nav/footer that are not built yet */
export const comingSoonPages: ComingSoonPage[] = [
  { slug: "ponentes", title: "Ponentes" },
  { slug: "cfp", title: "Call for Papers" },
  { slug: "patrocinadores", title: "Patrocinadores" },
  { slug: "nosotros", title: "Nosotros" },
  { slug: "entradas", title: "Entradas" },
  { slug: "ayuda", title: "Ayuda" },
  { slug: "codigo-conducta", title: "Código de conducta" },
  { slug: "ubicacion", title: "Ubicación" },
  { slug: "ediciones-anteriores", title: "Ediciones anteriores" },
];

export const comingSoonContent = {
  heading: "Próximamente…",
  defaultDescription:
    "Estamos preparando esta sección. Muy pronto tendrás toda la información aquí.",
  backLabel: "Volver al inicio",
  backHref: "/",
} as const;
