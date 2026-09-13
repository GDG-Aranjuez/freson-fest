export const venue = {
  name: "Centro Cultural Isabel de Farnesio",
  streetAddress: "C. del Capitán Angosto Gómez Castrillón, 39",
  postalCode: "28300",
  addressLocality: "Aranjuez",
  addressRegion: "Madrid",
  addressCountry: "ES",
} as const;

export const venueAddress = [
  venue.name,
  `${venue.streetAddress}, ${venue.postalCode}`,
  `${venue.addressLocality}, ${venue.addressRegion}`,
].join(", ");

const mapsQuery =
  "Centro+Cultural+Isabel+de+Farnesio,+C.+del+Capit%C3%A1n+Angosto+G%C3%B3mez+Castrill%C3%B3n,+39,+28300+Aranjuez";

export const locationSection = {
  eyebrow: "UBICACIÓN",
  heading: "Dónde encontrarnos",
  venue: venue.name,
  addressLines: [
    `${venue.streetAddress}, ${venue.postalCode}`,
    `${venue.addressLocality}, ${venue.addressRegion}`,
  ],
  map: {
    /** Google Maps embed for the venue. */
    embedSrc: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
    title: `Mapa del ${venue.name}`,
  },
  cta: {
    label: "Cómo llegar",
    href: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
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
