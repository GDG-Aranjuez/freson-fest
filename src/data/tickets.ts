export const tickets = {
  checkoutUrl:
    "https://www.eventbrite.com/e/devfest-2026-tickets-1992906587250",
} as const;

export const ticketsCta = {
  href: tickets.checkoutUrl,
  label: "Consigue tu entrada",
} as const;
