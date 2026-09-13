import { previousEditionVideo } from "@/data/media";
import { site } from "@/data/site";

export interface Sponsor {
  image?: string;
  description: string;
}

export interface SponsorCategory {
  categoryName: string;
  sponsors: Sponsor[];
}

export const hero = {
  titleLead: "Aquí no eres un banner.",
  titleHighlight: "Eres parte de la sala",
  subtitle: "Comunidad cercana, cara a cara, sin intermediarios.",
  cta: {
    href: "#contacto",
    label: "Quiero ser patrocinador",
  },
} as const;

export const highlights = {
  title: "Los datos que respaldan la comunidad",
  items: [
    {
      number: "4k",
      title: "Asistentes comprometidos",
      description: "de toda España ya confían en nosotros.",
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

export const trustedBy = {
  title: "Ya confían en nosotros",
  images: [
    { src: "", alt: "Sponsor 1" },
    { src: "", alt: "Sponsor 2" },
    { src: "", alt: "Sponsor 3" },
    { src: "", alt: "Sponsor 4" },
    { src: "", alt: "Sponsor 5" },
  ],
};

export const quote = {
  text: "Detrás de cada charla y cada conexión hay una comunidad que no deja de crecer. ",
  description:
    "Patrocinar Fresón Fest es apostar por ese esfuerzo colectivo: por la gente que lo hace posible y por un compromiso que va más allá de un logo en una pantalla.",
  video: previousEditionVideo,
} as const;

export const tiers = {
  title: "Elige tu sitio en la sala",
  subtitle: "con el plan que más se ajuste a ti.",
  plans: [
    {
      name: "Max",
      price: "-",
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
      price: "-",
      features: [
        "Entradas incluidas: 3.",
        "Logo mediano en sitio web y en la slide de la introducción del evento.",
        "2 publicaciones personalizadas en redes sociales.",
        "1 página en el Welcome Pack Digital.",
        "Stand durante el evento.",
        "Charla en el track secundario.",
        "Invitación a la cena de ponentes.",
      ],
    },
    {
      name: "Core",
      price: "-",
      features: [
        "Entradas incluidas: 1.",
        "Logo pequeño en sitio web y en la slide de la introducción del evento.",
        "1 publicación personalizada en redes sociales.",
        "Invitación a la cena de ponentes.",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "CONTACTO",
  title: "¿Tienes algo en mente? Hablemos.",
  subtitle:
    "Completa el formulario y nuestro equipo se pondrá en contacto contigo.",
  emailLabel: "Email:",
  email: site.contactEmail,
  form: {
    nameLabel: "Nombre*",
    emailLabel: "Email*",
    companyLabel: "Compañía (opcional)",
    messageLabel: "¿Quieres comentarnos algo? (opcional)",
    submitButton: "Contacta con nosotros",
    requiredFootnote: "* campo obligatorio",
  },
};

export const categories: SponsorCategory[] = [
  {
    categoryName: "Max",
    sponsors: [
      { image: "", description: "Breve descripción del patrocinador" },
    ],
  },
  {
    categoryName: "Plus",
    sponsors: [
      { image: "", description: "Breve descripción del patrocinador" },
    ],
  },
  {
    categoryName: "Core",
    sponsors: [
      { image: "", description: "Breve descripción del patrocinador" },
    ],
  },
];
