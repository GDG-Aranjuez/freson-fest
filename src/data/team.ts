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
        placeholderMember("org-1"),
        placeholderMember("org-2"),
        placeholderMember("org-3"),
        placeholderMember("org-4"),
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
