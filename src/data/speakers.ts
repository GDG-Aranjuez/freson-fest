import type { SocialHrefs } from "@/types/social";

export type SpeakerSocials = SocialHrefs;

export interface Speaker {
  id: number;
  name: string;
  lastName: string;
  role: string;
  Empresa: string;
  image: string;
  talkTitle?: string;
  talkDescription?: string;
  description?: string;
  socials?: SpeakerSocials;
}

export const hero = {
  eyebrow: "PONENTES",
  title: "Voces que",
  highlightedTitle: "inspiran",
  desktopTitle: "Las voces de quienes están transformando el sector",
  ourSpeakersLabel: "Nuestros ponentes",
} as const;

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Sergi",
    lastName: "Olives",
    role: "Developer Lead",
    Empresa: "Merkle",
    image: "/speakers/sergi-olives.jpg",
    talkDescription:
      "Coding Dojo: Rescatando webs inaccesibles paso a paso. Taller práctico para identificar y solucionar barreras de accesibilidad.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 2,
    name: "Laura",
    lastName: "Morillo-Velarde Rodríguez",
    role: "Tech Lead",
    Empresa: "seedtag",
    image: "/speakers/laura-morillo.jpg",
    talkDescription:
      "Escuela de HechicerIA. Taller práctico sobre cómo integrar herramientas de inteligencia artificial en flujos reales de desarrollo.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 3,
    name: "Sergio",
    lastName: "Mahía",
    role: "Software Engineer",
    Empresa: "KPMG",
    image: "/speakers/sergio-mahia.png",
    talkDescription:
      "Breaking Facial Recognition Systems with Real-Time Deepfake Injection. Análisis de vulnerabilidades y contramedidas en biometría.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 4,
    name: "David",
    lastName: "Martinez",
    role: "CTO",
    Empresa: "Inforrada",
    image: "/speakers/david-martinez.jpg",
    talkDescription:
      "Corriente Senior: El arte de volar sin caer. Claves para evolucionar profesionalmente en tecnología manteniendo el foco y la motivación.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 5,
    name: "Nacho",
    lastName: "Fernandez Diez",
    role: "ThePwnLab",
    Empresa: "ThePwnLab",
    image: "/speakers/nacho-fernandez-diez.webp",
    talkDescription:
      "Workshop CTF + CTF. Taller práctico de ciberseguridad, resolución de retos y hacking ético en tiempo real.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 6,
    name: "Carlos",
    lastName: "Bolaños",
    role: "Pentester",
    Empresa: "Telefónica Tech",
    image: "/speakers/carlos-bolanos.jpg",
    talkDescription:
      "Workshop CTF + CTF. Técnicas ofensivas y defensivas aplicadas al análisis de seguridad en entornos modernos.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 7,
    name: "Arantxa",
    lastName: "Delgado Ruiz",
    role: "Frontend Developer",
    Empresa: "KnitsDigital",
    image: "/speakers/arantxa-delgado.jpg",
    talkDescription:
      "La primera misión: conseguir tu trabajo en tecnología. Consejos prácticos para preparar tu perfil, superar entrevistas y arrancar tu carrera.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 8,
    name: "Oliver",
    lastName: "Ramírez Cáceres",
    role: "Mobile Developer",
    Empresa: "Versia",
    image: "/speakers/oliver-ramirez.jpg",
    talkDescription:
      "Los caminos del desarrollador son impredecibles. Lecciones y giros profesionales construyendo aplicaciones móviles a escala.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 9,
    name: "Nicolás",
    lastName: "Patarino",
    role: "Staff Software Engineer",
    Empresa: "Eventbrite",
    image: "/speakers/nicolas-patarino.jpg",
    talkDescription:
      "El mito de la productividad tóxica. Cómo construir valor técnico y personal con hábitos de trabajo sostenibles.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 10,
    name: "Máximo",
    lastName: "Fernández Núñez",
    role: "Machine Learning Engineer",
    Empresa: "unusuals",
    image: "/speakers/maximo-fernandez.jpg",
    talkDescription:
      "OpenClaw todo el mundo te enseña a usarlo, nadie a hacerlo. Construyendo herramientas de IA desde los cimientos.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 11,
    name: "Mía",
    lastName: "Salazar",
    role: "Frontend Developer",
    Empresa: "Service Club",
    image: "/speakers/mia-salazar.jpg",
    talkDescription:
      "Accesibilidad y neurodivergencia: No todo el mundo navega igual. Pautas de diseño y desarrollo inclusivo para todas las personas.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 12,
    name: "Sofía",
    lastName: "Lescano Carroll",
    role: "Senior Software Engineer",
    Empresa: "Alan",
    image: "/speakers/sofia-lescano.jpg",
    talkDescription:
      "Sin managers, sin reuniones, sin problemas. Metodologías ágiles de alta autonomía y entrega continua.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];
