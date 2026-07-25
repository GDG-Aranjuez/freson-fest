export const locationSection = {
  eyebrow: "UBICACIÓN",
  heading: "Dónde encontrarnos",
  venue: "Centro Cultural Isabel de Farnesio",
  addressLines: [
    "C. del Capitán Angosto Gómez Castrillón, 39, 28300",
    "Aranjuez, Madrid",
  ],
  map: {
    /** Google Maps embed for the venue. */
    embedSrc:
      "https://www.google.com/maps?q=Centro+Cultural+Isabel+de+Farnesio,+C.+del+Capit%C3%A1n+Angosto+G%C3%B3mez+Castrill%C3%B3n,+39,+28300+Aranjuez&output=embed",
    title: "Mapa del Centro Cultural Isabel de Farnesio",
  },
  cta: {
    label: "Cómo llegar",
    href: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Isabel+de+Farnesio,+C.+del+Capit%C3%A1n+Angosto+G%C3%B3mez+Castrill%C3%B3n,+39,+28300+Aranjuez",
  },
  instructions: [
    {
      label: "Tren — Cercanías C-3 desde Atocha",
      icon: {
        src: "/media/location/tram.svg",
        alt: "",
      },
    },
    {
      label: "Coche — A-4 salida Aranjuez",
      icon: {
        src: "/media/location/car.svg",
        alt: "",
      },
    },
    {
      label: "Parking gratuito disponible",
      letter: "P",
    },
  ],
} as const;
