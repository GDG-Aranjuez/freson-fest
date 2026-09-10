export interface Sponsor {
  image?: string;
  description: string;
}

export interface SponsorCategory {
  categoryName: string;
  sponsors: Sponsor[];
}

export const sponsorsHero = {
  titleLead: "Aquí no eres un banner.",
  titleHighlight: "Eres parte de la sala",
  subtitle: "Comunidad cercana, cara a cara, sin intermediarios.",
  cta: {
    href: "/contacto",
    label: "Quiero ser patrocinador",
  },
} as const;
export const sponsorsHighlights = {
  title: "Los datos que respaldan la comunidad",
  items: [
    {
      number: "4k",
      title: "Asistentes comprometidos",
      description: "de toda españa ya confían en nosotros.",
    },
    {
      number: "+10",
      title: "Speakers anuales",
      description: "que valoran la cercanía como tú.",
    },
    {
      number: "3ª",
      title: "Edición consecutiva",
      description:
        "Cada año, más fuerte gracias a quienes creen en el proyecto.",
    },
    {
      number: "100%",
      title: "Comunidad",
      description: "Organizado por y para quienes hacen posible este evento.",
    },
  ],
};
export const trustedByData = {
  title: "Ya confían en nosotros",
  images: [
    { src: "", alt: "Sponsor 1" },
    { src: "", alt: "Sponsor 2" },
    { src: "", alt: "Sponsor 3" },
    { src: "", alt: "Sponsor 4" },
    { src: "", alt: "Sponsor 5" },
  ],
};
export const quoteSponsors = {
  text: "Detrás de cada charla y cada conexión hay una comunidad que no deja de crecer. ",
  subtitle:
    "Patrocinar Fresón Fest es apostar por ese esfuerzo colectivo: por la gente que lo hace posible y por un compromiso que va más allá de un logo en una pantalla.",
  video: {
    poster: "/media/video/poster.webp",
    playIcon: "/media/video/play.svg",
    embedSrc: "https://www.youtube.com/embed/jW-Wcb7rQ5U",
    title: "Vídeo de ediciones anteriores",
    playLabel: "Reproducir vídeo de ediciones anteriores",
  },
} as const;

export const sponsorTiers = {
  title: "Elige tu sitio en la sala",
  subtitle: "con el plan que más se ajuste a ti.",
  plans: [
    {
      name: "Max",
      price: "1.000€",
      icon: "/icons/rocket.svg",
      features: [
        "Entradas incluidas: 5.",
        "Logo grande en sitio web, publicaciones y banners durante el evento.",
        "3 publicaciones personalizadas en redes sociales.",
        "3 páginas en el Welcome Pack Digital.",
        "Stand durante el evento.",
        "Charla en el escenario principal.",
        "Invitación a la cena de ponentes.",
      ],
    },
    {
      name: "Plus",
      price: "500€",
      icon: "/icons/star.svg",
      features: [
        "Entradas incluidas: 3.",
        "Logo mediano en sitio web y en la slide de la introducción del evento.",
        "2 publicaciones personalizadas en redes sociales.",
        "1 páginas en el Welcome Pack Digital.",
        "Stand durante el evento.",
        "Charla en el track secundario.",
        "Invitación a la cena de ponentes.",
      ],
    },
    {
      name: "Core",
      price: "250€",
      icon: "/icons/atom.svg",
      features: [
        "Entradas incluidas: 1.",
        "Logo pequeño en sitio web y en la slide de la introducción del evento.",
        "1 publicación personalizada en redes sociales.",
        "Invitación a la cena de ponentes.",
      ],
    },
  ],
};
export const sponsorContact = {
  eyebrow: "CONTACTO",
  title: "¿Tienes algo en mente? Hablemos.",
  subtitle:
    "Completa el formulario y nuestro equipo se pondrá en contacto contigo.",
  emailLabel: "Email:",
  email: "contacto@gdgaranjuez.com",
  form: {
    nameLabel: "Nombre*",
    emailLabel: "Email*",
    companyLabel: "Compañía (opcional)",
    messageLabel: "¿Quieres comentarnos algo? (opcional)",
    submitButton: "Contacta con nosotros",
    requiredFootnote: "* campo obligatorio",
  },
};

export const sponsorCategories: SponsorCategory[] = [
  {
    categoryName: "Patrocinador Nombre",
    sponsors: [
      {
        image: "",
        description: "Breve descripción del patrocinador 1",
      },
      {
        image: "",
        description: "Breve descripción con microcopy del patrocinador",
      },
    ],
  },
  {
    categoryName: "Patrocinador Nombre 2",
    sponsors: [
      {
        image: "",
        description: "Breve descripción del patrocinador 2",
      },
      {
        image: "",
        description: "Breve descripción con microcopy del patrocinador",
      },
    ],
  },
  {
    categoryName: "Patrocinador Nombre 3",
    sponsors: [
      {
        image: "",
        description: "Breve descripción del patrocinador 3",
      },
      {
        image: "",
        description: "Breve descripción con microcopy del patrocinador",
      },
    ],
  },
];
