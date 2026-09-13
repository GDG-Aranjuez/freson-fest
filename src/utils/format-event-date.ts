/** Calendar parts for event-date eyebrows (day + month / year). */
export type EventDateLabel = {
  dateLead: string;
  dateLeadLower: string;
  dateYear: string;
  dateLong: string;
};

/**
 * Format an ISO calendar date (`YYYY-MM-DD`) for Spanish copy.
 * Parses as a local calendar date so timezone does not shift the day.
 */
export function formatEventDateLabel(isoDate: string): EventDateLabel {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const monthName = new Intl.DateTimeFormat("es-ES", {
    month: "long",
  }).format(date);
  const monthLabel = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const dateLeadLower = `${day} de ${monthName}`;

  return {
    dateLead: `${day} de ${monthLabel}`,
    dateLeadLower,
    dateYear: String(year),
    dateLong: `${dateLeadLower} de ${year}`,
  };
}

/** `HH:mm` from a local ISO datetime (`YYYY-MM-DDTHH:mm[:ss][+offset]`). */
export function formatEventClock(isoDateTime: string): string {
  const match = isoDateTime.match(/T(\d{2}):(\d{2})/);

  if (!match) {
    throw new Error(`Invalid datetime for clock label: ${isoDateTime}`);
  }

  return `${match[1]}:${match[2]}`;
}
