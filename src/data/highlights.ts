import type { HighlightImage, HighlightItem } from "@/types/highlights";

export const highlights = {
  eyebrow: "Por qué venir",
  title: "¿Qué nos hace especiales?",
  items: [
    {
      number: "01",
      title: "Cara a cara con los referentes",
      description:
        "Puedes hablar con todos los ponentes. Sin fila, sin badge, sin protocolo.",
    },
    {
      number: "02",
      title: "Organizado por la comunidad",
      description:
        "Sin agenda corporativa. Solo gente que ama esto y quiere compartirlo con gente como tú.",
    },
    {
      number: "03",
      title: "Aprende haciendo",
      description:
        "Talleres prácticos además de charlas. Te vas con experiencia y aprendizaje concreto.",
    },
    {
      number: "04",
      title: "Con causa",
      description: [
        {
          type: "text",
          value: "El total de lo recaudado con tu entrada irá destinado a la ",
        },
        {
          type: "link",
          value: "Asociación Brego Ciudad Animal",
          href: "https://www.fundacionbrego.org/",
        },
        {
          type: "text",
          value: ", dedicada a la protección animal.",
        },
      ],
    },
  ] as const satisfies readonly HighlightItem[],
  images: {
    stage: {
      src: "/media/highlights/stage.jpg",
      alt: "Ponente en el escenario de DevFest Aranjuez",
    },
    selfie: {
      src: "/media/highlights/selfie.jpg",
      alt: "Asistentes de DevFest haciéndose una foto juntos",
    },
    audience: {
      src: "/media/highlights/audience.jpg",
      alt: "Público aplaudiendo en el auditorio de DevFest",
    },
  } as const satisfies Record<string, HighlightImage>,
} as const;
