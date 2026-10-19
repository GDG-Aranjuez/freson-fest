import type { SocialHrefs } from "@/types/social";

export type SpeakerSocials = SocialHrefs;

/** Person shown on the speakers page. Talk content lives on the agenda session. */
export interface Speaker {
  id: string;
  name: string;
  lastName: string;
  role: string;
  company: string;
  image: string;
  socials?: SpeakerSocials;
  biography?: string;
}

export function speakerName(speaker: Pick<Speaker, "name" | "lastName">) {
  return `${speaker.name} ${speaker.lastName}`.trim();
}

export const hero = {
  eyebrow: "PONENTES",
  title: "Voces que",
  highlightedTitle: "inspiran",
  ourSpeakersLabel: "El talento de esta edición:",
} as const;

export const speakers: Speaker[] = [
  {
    id: "sergi-olives",
    name: "Sergi",
    lastName: "Olives",
    role: "Lead Developer",
    company: "Merkle EMEA",
    image: "/speakers/sergi-olives.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/sergiolives",
    },
    biography:
      "Graduado en Ingeniería Informática en la UPF, hace seis años que trabajo en Merkle, desarrollando software para Sky, la empresa de Telecomunicaciones del Reino Unido. Empecé como Java Developer recién graduado y ahora mismo soy Developer Lead desarrollando software en los productos móbiles.",
  },
  {
    id: "laura-morillo-velarde",
    name: "Laura",
    lastName: "Morillo-Velarde Rodríguez",
    role: "Developer & Platform Engineer",
    company: "Seedtag",
    image: "/speakers/laura-morillo.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/lauramorillovelarderodriguez",
    },
    biography:
      "Tech Lead at seedtag. She has worked with several technologies from C++ tp Javascript and learnt how to create a Kubernetes infrastructure along the way. She is a Google Cloud GDE and an organiser of different meetups like GDG Madrid and others like AgileGirls and Tech&Ladies to promote an increase in the participation of women in technology.",
  },
  {
    id: "sergio-mahia",
    name: "Sergio",
    lastName: "Mahía",
    role: "Penetration Tester",
    company: "KPMG",
    image: "/speakers/sergio-mahia.png",
    socials: {
      linkedin: "https://es.linkedin.com/in/sergio-mahia",
    },
    biography:
      "Sergio Mahía, a Software Engineer specializing in cybersecurity, with a clear mindset: to truly protect systems, you first have to think like someone trying to break them.\n\nMy career began by founding my own web development and security startup, where I went from zero to building a portfolio of over 20 clients in less than a year. In that process, I not only developed solutions but also focused on something I consider critical: protecting users from real-world threats. I worked with advanced techniques such as Web Application Firewalls (WAFs) and continuous auditing, identifying and exploiting vulnerabilities like XSS and SQL Injection to understand and mitigate them at their root.\n\nCurrently, I work at KPMG as a Software Engineer and Ethical Hacker, where I tackle complex security challenges in real-world environments. I've designed and developed ambitious projects, from automated vulnerability analyzers to educational platforms for CTF training, always with a practical and results-oriented approach.\n\nI consider myself an ambitious, resourceful person with a great capacity for learning. I enjoy tackling difficult problems, learning from my mistakes, and transforming those errors into robust solutions. I'm also an active communicator on social media and blogs, where I translate complex cybersecurity concepts into accessible ideas, aiming to raise awareness among both businesses and users.\n\nI firmly believe that the best defense against an attacker is to anticipate them. That's why I don't just build secure systems; I constantly test them, pushing their boundaries before others do.",
  },
  {
    id: "david-martinez",
    name: "David",
    lastName: "Martínez",
    role: "CTO",
    company: "Inforrada",
    image: "/speakers/david-martinez.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dmartinezmartinez/?locale=es",
    },
    biography:
      "Hi! I'm David. Sometimes a speaker, sometimes a listener, and always interested in web technologies. I work on complex projects involving anything related to PHP and JavaScript.\n\nAlso, I am a co-organizer of GDG Ponferrada and Global AI Ponferrada.",
  },
  {
    id: "nacho-fernandez-diez",
    name: "Nacho",
    lastName: "Fernandez Diez",
    role: "Founder & CEO",
    company: "ThePwnLab",
    image: "/speakers/nacho-fernandez-diez.webp",
    socials: {
      linkedin: "https://es.linkedin.com/in/nacho-fernandez-diez-94763974",
    },
    biography:
      "+ de 16 años de experiencia dentro del mundo de la tecnología trabajando para clientes del sector Telco y siempre vinculado a soluciones, arquitecturas y tecnologías punteras.\n\nDesde hace unos meses estoy lanzando mi plataforma de eventos CTF y formación de Hacking Ético sobre infraestructura GCP.",
  },
  {
    id: "carlos-bolanos",
    name: "Carlos",
    lastName: "Bolaños",
    role: "Pentester",
    company: "Telefónica Tech",
    image: "/speakers/carlos-bolanos.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/charliedbadger",
    },
    biography:
      "Carlos es profesional del ámbito tecnológico con experiencia en ciberseguridad, QA y seguridad ofensiva, especializado en pentesting, evaluación y gestión de vulnerabilidades sobre diversos entornos (Web, móviles, redes y directorio activo). Su enfoque se centra en acercar la ciberseguridad ofensiva a perfiles técnicos, personas en formación y a perfiles no tan técnicos, esto mediante explicaciones claras, metodologías estructuradas y un enfoque práctico orientado a la resolución de problemas y al razonamiento técnico.",
  },
  {
    id: "arantxa-delgado-ruiz",
    name: "Arantxa",
    lastName: "Delgado Ruiz",
    role: "Front-End Developer",
    company: "KnitsDigital",
    image: "/speakers/arantxa-delgado.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/arantxadelgadoruiz/",
    },
    biography:
      "Soy desarrolladora frontend y me encanta crear experiencias digitales que sean cercanas y fáciles de usar. Haber trabajado como librera me enseñó a escuchar, cuidar los detalles y disfrutar ayudando a las personas a encontrar lo que buscan—algo que ahora aplico en cada proyecto. Me gusta trabajar en equipo, aprender cosas nuevas y transformar ideas en interfaces que hagan la vida un poco más sencilla y agradable para todas.",
  },
  {
    id: "oliver-ramirez",
    name: "Oliver",
    lastName: "Ramírez Cáceres",
    role: "Analista Programador Mobile",
    company: "Versia",
    image: "/speakers/oliver-ramirez.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/oliver-ramirez-caceres",
    },
    biography:
      "Ingeniero técnico reinventado en el mundo del desarrollo software mobile.\n\nParticipante y presidente (quien me manda a mi…🤣) activo en la comunidad de AdoptaUnJunior, donde siempre que puedo me gusta ayudar a todos los junior y no tanto en lo que puedo.",
  },
  {
    id: "nicolas-patarino",
    name: "Nicolás",
    lastName: "Patarino",
    role: "Software Engineer",
    company: "Eventbrite",
    image: "/speakers/nicolas-patarino.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/npatarino/es",
    },
    biography:
      "👊 @rockndroid disorganizer.\ndroidcon Madrid organizer.\n🇦🇷 120%. Porteño 120%",
  },
  {
    id: "maximo-fernandez",
    name: "Máximo",
    lastName: "Fernández Núñez",
    role: "AI Engineer",
    company: "MaximoFN",
    image: "/speakers/maximo-fernandez.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/maximofn",
    },
    biography:
      "Machine learning engineer obsessed with the basics for making the best product.",
  },
  {
    id: "mia-salazar",
    name: "Mía",
    lastName: "Salazar",
    role: "Front-End Developer",
    company: "Service Club",
    image: "/speakers/mia-salazar.jpg",
    socials: {
      linkedin: "https://es.linkedin.com/in/miasalazar",
    },
    biography:
      "I started working in IT in 2018, and I've been passionate about it ever since. Currently, I'm a front-end developer specializing in accessibility, a topic I'm deeply enthusiastic about. I'm a curious person who enjoys trying new things and learning about different subjects. A geek by nature, I love watching TV shows, playing board or role-playing games, and going to the cinema in my free time, when I'm not programming, mentoring, or writing articles.",
  },
  {
    id: "sofia-lescano",
    name: "Sofía",
    lastName: "Lescano Carroll",
    role: "Senior Software Developer",
    company: "Alan",
    image: "/speakers/sofia-lescano.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sofialescanocarroll/",
    },
    biography:
      "Passionate about mathematics and logic, I am a backend developer with a Computer Science Engineering degree and international speaker since 2020. Argentinian and Spanish, I lived in many countries and speak five languages. I strongly believe in diversity in tech and started giving conferences to act as a role model for women. Outside work, I love dancing, and travelling and have two wonderful cats.\n\nI have been giving conferences since 2020 in French and English (but also speak Spanish and Portuguese).\n\nI have been to major events like SymfonyCon, SymfonyLive, ForumPHP among others.\n\nCheck my personal blog for full references https://soflesc.github.io/",
  },
  {
    id: "javier-tomas-garcia",
    name: "Javier",
    lastName: "Tomás García",
    role: "Tech Lead Ciberseguridad",
    company: "The Bridge",
    image: "/speakers/javier-tomas-garcia.png",
    socials: {
      linkedin: "https://lnkd.in/p/e_pDj7x2",
    },
    biography:
      "Como Tech Lead en ciberseguridad, con nueve años de trayectoria entre consultoría de seguridad y formación, mi enfoque se mueve entre dos mundos que se retroalimentan: la estrategia técnica y la capacitación de personas.\n\nLidero el diseño y calidad de varios programas formativos, alineados con las necesidades reales de empresas y las amenazas del ecosistema digital. Hasta la fecha, más de 200 profesionales formados en ciberseguridad de los cuales un número elevado está trabajando en el sector.\n\nNo concibo el liderazgo sin contacto directo: mantengo mi rol de formador para guiar de cerca el progreso de cada alumno.\n\nMi base en consultoría (pentesting, compliance ENS/CCN-STIC) aporta una perspectiva técnica real a todo lo que diseño.",
  },
  {
    id: "jorge-castano",
    name: "Jorge",
    lastName: "Castaño",
    role: "Lead Front-End Engineer",
    company: "Kepler Cheuvreux",
    image: "/speakers/jorge-castaño.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jorge-castaño/",
    },
    biography:
      "I'm a Senior Developer, currently a Tech Lead, with more than 12 years of experience. I have worked in many JavaScript projects like BBVA’s clients app, awarded world’s best bank app in 2017 and 2018 by Forrester; Inditex Pull&Bear’s online shopping app; Peugeot & Citroën’s mobile car configurator; and Movistar+ FootballApp, a second screen for reviewing LaLiga’s highlights.",
  },
];
