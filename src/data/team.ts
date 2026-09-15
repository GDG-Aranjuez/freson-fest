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
          },
        },
      ],
    },
    {
      id: "design",
      eyebrow: "DISEÑO",
      members: [placeholderMember("design-1"), placeholderMember("design-2")],
    },
    {
      id: "development",
      eyebrow: "DESARROLLO",
      members: [
        placeholderMember("dev-1"),
        placeholderMember("dev-2"),
        placeholderMember("dev-3"),
        placeholderMember("dev-4"),
        placeholderMember("dev-5"),
        placeholderMember("dev-6"),
        placeholderMember("dev-7"),
      ],
    },
  ] satisfies TeamGroup[],
} as const;
