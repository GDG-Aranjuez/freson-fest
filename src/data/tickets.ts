export const tickets = {
  checkoutUrl:
    "https://www.eventbrite.com/e/devfest-2026-tickets-1992906587250",
} as const;

export const ticketsFootnote = "Plazas disponibles · Aforo limitado";

const href = tickets.checkoutUrl;

export const ticketCtas = {
  nav: { href, label: "Entradas" },
  primary: { href, label: "Consigue tu entrada", footnote: ticketsFootnote },
  reserve: { href, label: "Reserva tu plaza", footnote: ticketsFootnote },
} as const;
