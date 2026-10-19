import type { SocialHrefs } from "@/types/social";

export type TeamSocials = SocialHrefs;

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  company?: string;
  projectRole?: string;
  image: string;
  imageAlt?: string;
  socials: TeamSocials;
}

export interface TeamGroup {
  id: string;
  eyebrow: string;
  members: TeamMember[];
}

export const team = {
  title: "Líderes y Organización",
  groups: [
    {
      id: "organization",
      eyebrow: "ORGANIZACIÓN",
      members: [
        {
          id: "org-saul-diaz",
          name: "Saúl Díaz González",
          role: "Senior Android Engineer",
          company: "Veriff",
          image: "/organizers/saul-diaz.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/sefford/",
          },
        },
        {
          id: "org-patricia-tarazaga",
          name: "Patricia Tarazaga",
          role: "Machine Learning Engineer",
          company: "Veriff",
          image: "/organizers/patricia-tarazaga.jpg",
          socials: {
            linkedin: "https://www.linkedin.com/in/patricia-tarazaga/",
          },
        },
        {
          id: "org-dani-brinzei",
          name: "Daniel Brinzei",
          role: "Senior QA Engineer",
          company: "Zartis",
          image: "/organizers/daniel-brinzei.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/daniel-brinzei/",
          },
        },
        {
          id: "org-juanje-cilla",
          name: "Juanje Cilla Ugarte",
          role: "Senior Software Engineer",
          company: "Revolut",
          image: "/organizers/juanje-cilla.jpg",
          socials: {
            linkedin: "https://www.linkedin.com/in/juanje-cilla/",
          },
        },
        {
          id: "org-nicolas-moreno",
          name: "Nicolás Moreno",
          role: "Junior Software Developer",
          image: "/organizers/nicolas-moreno.jpg",
          socials: {
            linkedin: "https://www.linkedin.com/in/nicolasmorenog/",
            github: "https://github.com/nicolasmorenog",
          },
        },
        {
          id: "org-javier-munoz",
          name: "Javier Muñoz Muñoz",
          role: "iOS Engineer",
          company: "NTT Data",
          image: "/organizers/javier.jpg",
          imageAlt: "Fotografía de Javier Muñoz Muñoz",
          socials: {
            linkedin:
              "https://www.linkedin.com/in/javier-mu%C3%B1oz-mu%C3%B1oz-1ab43b383/",
          },
        },
      ],
    },
    {
      id: "live-production",
      eyebrow: "Producción y Experiencia en Vivo",
      members: [
        {
          id: "live-sahily-garcia-sosa",
          name: "Sahily García Sosa",
          role: "Producción Audiovisual",
          image: "/Production and Live Experience/sahily.jpg",
          imageAlt: "Fotografía de Sahily García Sosa",
          socials: {
            linkedin: "https://www.linkedin.com/in/sahilygarciasosa/",
            behance:
              "https://www.behance.net/gallery/254558789/PORTAFOLIO_SAHILY-GARCIA_EDITORA-DE-VIDEO",
          },
        },
        {
          id: "live-irene-ruiz-pozo",
          name: "Irene Ruiz Pozo",
          role: "Presentadora",
          image: "/Production and Live Experience/1576055966928.jpeg",
          imageAlt: "Fotografía de Irene Ruiz Pozo",
          socials: {
            linkedin: "https://www.linkedin.com/in/ireneruizpozo/",
          },
        },
        {
          id: "live-raul-fernandez",
          name: "Raúl Fernández",
          role: "Magia y Mentalismo",
          image:
            "/Production and Live Experience/photo_2026-10-02_12-38-37.jpg",
          imageAlt: "Fotografía de Raúl Fernández haciendo magia",
          socials: {
            instagram: "https://www.instagram.com/magicraulin",
          },
        },
      ],
    },
    {
      id: "pm",
      eyebrow: "Project Management",
      members: [
        {
          id: "pm-raul",
          name: "Raúl Gambalonga",
          role: "Scrum Master & PO",
          image: "/pm/raul-gambalonga.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/raul-gambalonga",
            github: "https://github.com/raulgambalonga",
          },
        },
      ],
    },
    {
      id: "design",
      eyebrow: "Diseño y Experiencia Digital",
      members: [
        {
          id: "design-xiada-venn",
          name: "Xiada Venn",
          role: "Product & UX/UI designer",
          image: "/design/xiada-venn.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/xiadavenn/",
            behance: "https://www.behance.net/xiadavenn",
          },
        },
        {
          id: "design-josefina-nieto",
          name: "Josefina Nieto",
          role: "Industrial designer & UX/UI",
          image: "/design/josefina-nieto.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/josefina-nieto/",
            behance: "https://www.behance.net/josefinanieto1",
          },
        },
        {
          id: "design-cristina-lizaur",
          name: "Cristina Lizaur",
          role: "Ilustradora",
          image: "/design/image.webp",
          imageAlt: "Fotografía de Cristina Lizaur",
          socials: {
            linkedin:
              "https://www.linkedin.com/in/cristina-plizaur-design-ux-ui/?isSelfProfile=false",
          },
        },
      ],
    },
    {
      id: "development",
      eyebrow: "Desarrollo y soporte web",
      members: [
        {
          id: "dev-luis-octavio-mota",
          name: "Luis Octavio Mota Verdasco",
          role: "Site Reliability Engineering",
          projectRole: "Tech Lead",
          image: "/devs/lucho.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/luisoctaviomotaverdasco",
            github: "https://github.com/lucho00cuba",
          },
        },
        {
          id: "dev-lulen",
          name: "Luana Lencina",
          role: "FullStack Developer",
          image: "/devs/lulen.png",
          socials: {
            linkedin:
              "https://www.linkedin.com/in/luana-lencina-fullstack-developer-%F0%9F%92%BB-qa-engineer-%F0%9F%92%BB-880120216/",
            github: "https://github.com/lulencina",
          },
        },
        {
          id: "dev-belen",
          name: "Belén Suarez",
          role: "FullStack Developer",
          image: "/devs/belen.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/belen-suarez-42a4331b5/",
            github: "https://github.com/belensuarez477",
          },
        },
        {
          id: "dev-carmen",
          name: "Carmen Tajuelo",
          role: "Fullstack Web Developer",
          company: "ActioGlobal",
          image: "/devs/Foto_Linkedin_maricarmen.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/carmentajuelo/",
          },
        },
      ],
    },
  ] satisfies TeamGroup[],
} as const;
