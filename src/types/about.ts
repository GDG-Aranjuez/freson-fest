export interface AboutSocials {
  linkedin?: string;
  x?: string;
  instagram?: string;
}

export interface AboutCollaborator {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: AboutSocials;
}

export interface AboutTeamGroup {
  id: string;
  eyebrow: string;
  members: AboutCollaborator[];
}

export interface AboutStat {
  value: string;
  label: string;
}
