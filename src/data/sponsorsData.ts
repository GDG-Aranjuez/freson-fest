/* eslint-disable prettier/prettier */
export interface Sponsor {
  image?: string;
  description: string;
}

export interface SponsorCategory {
  categoryName: string;
  sponsors: Sponsor[];
}

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
