import type { IconName } from "@/types/icon";

interface SpeakerSocialLink {
  href: string;
  label: string;
  icon: IconName;
}

interface Speaker {
  slug: string;
  name: string;
  role: string;
  description: string;
  experience: number;
  technologies: string[];
  isPlaceholder: boolean;
  talk: {
    title: string;
    description: string;
    duration: number;
  };
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SpeakerSocialLink[];
}

// TODO: Replace this temporary placeholder with final speaker headshots.
const placeholderSpeakerImage = "/og.jpg";

export const speakersSection: {
  label: string;
  heading: string;
  speakers: Speaker[];
} = {
  label: "Speakers",
  heading: "Ponentes",
  speakers: [
    {
      slug: "lucia-romero",
      name: "Lucía Romero",
      role: "Staff Software Engineer en CloudNova",
      description:
        "Especialista en plataformas de datos y arquitecturas resilientes a gran escala.",
      experience: 12,
      technologies: ["Kubernetes", "Python", "Apache Spark", "AWS"],
      isPlaceholder: true,
      talk: {
        title: "Escalando arquitecturas de datos: de monolito a cloud nativo",
        description: "Descubre cómo transformar tu infraestructura de datos para soportar millones de transacciones. Aprenderemos sobre patrones resilientes, auto-scaling y cómo evitar los errores comunes que ralentizan los sistemas distribuidos.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Lucía Romero",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/lucia-romero-tech",
          label: "LinkedIn de Lucía Romero",
          icon: "linkedin",
        },
        {
          href: "https://x.com/luciaromero",
          label: "X de Lucía Romero",
          icon: "x",
        },
      ],
    },
    {
      slug: "carlos-pena",
      name: "Carlos Peña",
      role: "Principal Developer Advocate",
      description:
        "Impulsa comunidades técnicas con foco en DX, IA aplicada y productos abiertos.",
      experience: 10,
      technologies: ["JavaScript", "Node.js", "APIs", "Developer Relations"],
      isPlaceholder: true,
      talk: {
        title: "DX en 2026: APIs modernas y Developer Experience como ventaja competitiva",
        description: "Exploraremos cómo grandes empresas están revolucionando la experiencia de desarrolladores con APIs inteligentes y herramientas modernas. Veremos casos reales y prácticas que puedes implementar hoy.",
        duration: 40,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Carlos Peña",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/carlos-pena-dev",
          label: "LinkedIn de Carlos Peña",
          icon: "linkedin",
        },
        {
          href: "https://x.com/carlospena_dev",
          label: "X de Carlos Peña",
          icon: "x",
        },
      ],
    },
    {
      slug: "marta-alonso",
      name: "Marta Alonso",
      role: "Tech Lead Frontend en Nébula",
      description:
        "Diseña experiencias web accesibles y sistemas de diseño para equipos distribuidos.",
      experience: 9,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
      isPlaceholder: true,
      talk: {
        title: "Design Systems Accesibles: cómo incluir a todos sin sacrificar la belleza",
        description: "Un sistema de diseño no es solo colores y componentes. Aprenderemos cómo construir experiencias que funcionen para todos, desde usuarios videntes hasta aquellos que usan lectores de pantalla.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Marta Alonso",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/marta-alonso-web",
          label: "LinkedIn de Marta Alonso",
          icon: "linkedin",
        },
        {
          href: "https://x.com/martaalonso_dev",
          label: "X de Marta Alonso",
          icon: "x",
        },
      ],
    },
    {
      slug: "diego-serrano",
      name: "Diego Serrano",
      role: "Engineering Manager en Flowbit",
      description:
        "Lidera equipos de producto con cultura de calidad, métricas y entrega continua.",
      experience: 11,
      technologies: ["Team Leadership", "CI/CD", "Metrics", "Agile"],
      isPlaceholder: true,
      talk: {
        title: "Liderando con métricas: cómo medir lo que importa en ingeniería",
        description: "No todo lo que se puede contar, cuenta. Descubre cómo seleccionar KPIs relevantes que guíen decisiones reales de producto sin caer en vanity metrics.",
        duration: 40,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Diego Serrano",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/diego-serrano-eng",
          label: "LinkedIn de Diego Serrano",
          icon: "linkedin",
        },
        {
          href: "https://x.com/dserrano_eng",
          label: "X de Diego Serrano",
          icon: "x",
        },
      ],
    },
    {
      slug: "irene-castillo",
      name: "Irene Castillo",
      role: "Senior Platform Engineer",
      description:
        "Automatiza infraestructura cloud con enfoque en seguridad y observabilidad.",
      experience: 13,
      technologies: ["Terraform", "Docker", "Prometheus", "Security"],
      isPlaceholder: true,
      talk: {
        title: "Infrastructure as Code: automatizar para no arder",
        description: "Veremos cómo Terraform y herramientas modernas permiten gestionar infraestructura con seguridad, auditoría y recuperación automática ante fallos.",
        duration: 50,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Irene Castillo",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/irene-castillo-platform",
          label: "LinkedIn de Irene Castillo",
          icon: "linkedin",
        },
        {
          href: "https://x.com/irenecloudops",
          label: "X de Irene Castillo",
          icon: "x",
        },
      ],
    },
    {
      slug: "alvaro-delgado",
      name: "Álvaro Delgado",
      role: "CTO en Lattice AI",
      description:
        "Construye productos de inteligencia artificial centrados en impacto de negocio.",
      experience: 14,
      technologies: ["Machine Learning", "Python", "LLMs", "Product Strategy"],
      isPlaceholder: true,
      talk: {
        title: "IA Productiva: de las prompts al software empresarial",
        description: "La IA no es un juguete. Veremos cómo llevar LLMs a producción con calidad, costos controlados y sin ser esclavos del hallucination.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Álvaro Delgado",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/alvaro-delgado-cto",
          label: "LinkedIn de Álvaro Delgado",
          icon: "linkedin",
        },
        {
          href: "https://x.com/alvarodelgad0",
          label: "X de Álvaro Delgado",
          icon: "x",
        },
      ],
    },
    {
      slug: "noelia-martin",
      name: "Noelia Martín",
      role: "Product Designer en Orbit",
      description:
        "Convierte investigación de usuarios en experiencias digitales medibles y claras.",
      experience: 8,
      technologies: ["Design Systems", "Figma", "User Research", "UX"],
      isPlaceholder: true,
      talk: {
        title: "Del insight al impacto: cómo el research transforma el diseño",
        description: "No diseñamos para nosotros. Conoce metodologías reales de investigación de usuario y cómo convertir datos en decisiones de diseño que generan valor.",
        duration: 40,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Noelia Martín",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/noelia-martin-design",
          label: "LinkedIn de Noelia Martín",
          icon: "linkedin",
        },
        {
          href: "https://x.com/noeliamartinux",
          label: "X de Noelia Martín",
          icon: "x",
        },
      ],
    },
    {
      slug: "raul-jimenez",
      name: "Raúl Jiménez",
      role: "DevOps Consultant",
      description:
        "Ayuda a escalar pipelines de entrega con prácticas de fiabilidad y coste eficiente.",
      experience: 11,
      technologies: ["GitLab", "Jenkins", "Cost Optimization", "SRE"],
      isPlaceholder: true,
      talk: {
        title: "CI/CD que no arruine tu presupuesto: optimización y velocidad",
        description: "Pipelines rápidos y económicos: la verdadera revolución DevOps. Veremos patrones de optimización que grandes equipos aplican hoy.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Raúl Jiménez",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/raul-jimenez-devops",
          label: "LinkedIn de Raúl Jiménez",
          icon: "linkedin",
        },
        {
          href: "https://x.com/rauldevops",
          label: "X de Raúl Jiménez",
          icon: "x",
        },
      ],
    },
    {
      slug: "sonia-gil",
      name: "Sonia Gil",
      role: "AI Engineer en Synapse",
      description:
        "Diseña asistentes de IA seguros, explicables y listos para entornos regulados.",
      experience: 9,
      technologies: ["RAG", "LangChain", "Compliance", "AI Safety"],
      isPlaceholder: true,
      talk: {
        title: "IA Responsable: cumplimiento, explicabilidad y confianza",
        description: "GDPR, transparencia y regulación: cómo construir sistemas de IA que pasen auditoría y mantengan la confianza de los usuarios.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Sonia Gil",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/sonia-gil-ai",
          label: "LinkedIn de Sonia Gil",
          icon: "linkedin",
        },
        {
          href: "https://x.com/soniagil_ai",
          label: "X de Sonia Gil",
          icon: "x",
        },
      ],
    },
    {
      slug: "pablo-crespo",
      name: "Pablo Crespo",
      role: "Mobile Architect en Vértice",
      description:
        "Optimiza apps multiplataforma con foco en rendimiento, testing y mantenibilidad.",
      experience: 10,
      technologies: ["React Native", "Kotlin", "Swift", "Performance"],
      isPlaceholder: true,
      talk: {
        title: "Apps multiplataforma en 2026: rendimiento sin sacrificar velocidad de desarrollo",
        description: "React Native vs nativo: realidades y mitos. Cómo elegir la mejor estrategia para tu equipo y negocio.",
        duration: 40,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Pablo Crespo",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/pablo-crespo-mobile",
          label: "LinkedIn de Pablo Crespo",
          icon: "linkedin",
        },
        {
          href: "https://x.com/pablocrespo_dev",
          label: "X de Pablo Crespo",
          icon: "x",
        },
      ],
    },
    {
      slug: "ana-beltran",
      name: "Ana Beltrán",
      role: "Data Scientist en Atlas Labs",
      description:
        "Aplica analítica avanzada para resolver decisiones complejas en tiempo real.",
      experience: 8,
      technologies: ["Python", "TensorFlow", "BigQuery", "Data Viz"],
      isPlaceholder: true,
      talk: {
        title: "Data Science en Producción: del Jupyter notebook a la toma de decisiones real",
        description: "El 90% de los modelos nunca llegan a producción. Aprenderemos cómo cerrar esa brecha con pipelines robustos y monitoreo continuo.",
        duration: 45,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Ana Beltrán",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/ana-beltran-data",
          label: "LinkedIn de Ana Beltrán",
          icon: "linkedin",
        },
        {
          href: "https://x.com/anabeltran_ds",
          label: "X de Ana Beltrán",
          icon: "x",
        },
      ],
    },
    {
      slug: "javier-ortega",
      name: "Javier Ortega",
      role: "Cybersecurity Specialist",
      description:
        "Protege aplicaciones modernas mediante threat modeling y hardening continuo.",
      experience: 12,
      technologies: ["OWASP", "Penetration Testing", "SIEM", "Risk Management"],
      isPlaceholder: true,
      talk: {
        title: "Seguridad en Desarrollo: cómo no ser el equipo que sufre el breach",
        description: "OWASP, threat modeling y auditoría: prácticas que transforman la seguridad de 'paranoia' a 'ingeniería' real.",
        duration: 50,
      },
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Javier Ortega",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/javier-ortega-security",
          label: "LinkedIn de Javier Ortega",
          icon: "linkedin",
        },
        {
          href: "https://x.com/jortega_sec",
          label: "X de Javier Ortega",
          icon: "x",
        },
      ],
    },
  ],
};
