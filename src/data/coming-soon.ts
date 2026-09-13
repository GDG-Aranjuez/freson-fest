export interface ComingSoonPage {
  slug: string;
  title: string;
  description?: string;
}

export const comingSoonPages: ComingSoonPage[] = [
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
