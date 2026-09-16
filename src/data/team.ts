import type { SocialHrefs } from "@/types/social";

export type TeamSocials = SocialHrefs;

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: TeamSocials;
}

export interface TeamGroup {
  id: string;
  eyebrow: string;
  members: TeamMember[];
}

const placeholderImage = "/media/about/collaborator-placeholder.jpg";

function placeholderMember(id: string): TeamMember {
  return {
    id,
    name: "Nombre y apellido",
    role: "Rol & Empresa",
    image: placeholderImage,
    socials: {},
  };
}

export const team = {
  title: "Las personas que lo hacen posible",
  groups: [
    {
      id: "organization",
      eyebrow: "ORGANIZACIÓN",
      members: [
        {
          id: "org-saul-diaz",
          name: "Saúl Díaz González",
          role: "Senior Android Engineer · Veriff",
          image: "/organizers/saul-diaz.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/sefrord/",
          },
        },
        {
          id: "org-patricia-tarazaga",
          name: "Patricia Tarazaga",
          role: "Machine Learning Engineer · Veriff",
          image: "/organizers/patricia-tarazaga.jpg",
          socials: {
            linkedin: "https://www.linkedin.com/in/patricia-tarazaga/",
          },
        },
        {
          id: "org-juanje-cilla",
          name: "Juanje Cilla Ugarte",
          role: "Senior Software Engineer · Revolut",
          image: "/organizers/juanje-cilla.jpg",
          socials: {
            linkedin: "https://www.linkedin.com/in/juanje-cilla/",
          },
        },
        {
          id: "org-daniel-brenzei",
          name: "Daniel Brenzei",
          role: "Senior QA Engineer · Zartis",
          image: "/organizers/daniel-brinzei.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/daniel-brinzei/",
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
      ],
    },
    {
      id: "design",
      eyebrow: "DISEÑO",
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
      ],
    },
    {
      id: "pm",
      eyebrow: "PROJECT MANAGEMENT",
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
      id: "development",
      eyebrow: "DESARROLLO",
      members: [
        {
          id: "dev-luis-octavio-mota",
          name: "Luis Octavio Mota Verdasco",
          role: "Site Reliability Engineering",
          image: "/devs/Lucho.webp",
          socials: {
            linkedin: "https://www.linkedin.com/in/luisoctaviomotaverdasco",
            github: "https://github.com/lucho00cuba",
          },
        },
        {
          id: "dev-lulen",
          name: "Luana Lencina",
          role: "FullStack Developer",
          image: "/devs/luana-lencina.png",
          socials: {
            linkedin: "https://www.linkedin.com/in/luana-lencina-fullstack-developer-%F0%9F%92%BB-qa-engineer-%F0%9F%92%BB-880120216/",
            github: "https://github.com/lulencina",
          },
        },
        {
          id: "dev-belen",
          name: "Belén Suarez",
          role: "QA Tester",
          image: "/devs/belen.jpeg",
          socials: {
            linkedin: "https://www.linkedin.com/in/belen-suarez-42a4331b5/",
            github: "https://github.com/belensuarez477",
          },
        },
      ],
    },
  ] satisfies TeamGroup[],
} as const;
