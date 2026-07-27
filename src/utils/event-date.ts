import { site } from "@/data/site";

/** Calendar parts for event-date eyebrows (day + month / year). */
export type EventDateLabel = {
  dateLead: string;
  dateYear: string;
};

/**
 * Format an ISO calendar date (`YYYY-MM-DD`) for Spanish eyebrows.
 * Parses as a local calendar date so timezone does not shift the day.
 */
export function formatEventDateLabel(isoDate: string): EventDateLabel {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const monthName = new Intl.DateTimeFormat("es-ES", {
    month: "long",
  }).format(date);
  const monthLabel = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return {
    dateLead: `${day} de ${monthLabel}`,
    dateYear: String(year),
  };
}

/** Display label for the site event date (`site.event.startDate`). */
export const eventDate = formatEventDateLabel(site.event.startDate);
