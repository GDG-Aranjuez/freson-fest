/** Google Calendar “create event” template (pre-filled, not a subscribed calendar). */

export type GoogleCalendarTemplate = {
  title: string;
  /** Local wall-clock stamp `YYYYMMDDTHHMMSS` (no `Z`). Pair with `timeZone`. */
  start: string;
  end: string;
  timeZone: string;
  details: string;
  location: string;
};

/**
 * Convert `YYYY-MM-DDTHH:mm[:ss][+offset]` to a Google Calendar local stamp.
 * Do not pass a `Z` UTC value — use `timeZone` on the template URL instead.
 */
export function toGoogleCalendarStamp(isoDateTime: string): string {
  const match = isoDateTime.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/
  );

  if (!match) {
    throw new Error(`Invalid datetime for calendar stamp: ${isoDateTime}`);
  }

  const [, year, month, day, hour, minute, second = "00"] = match;
  return `${year}${month}${day}T${hour}${minute}${second}`;
}

/** Build a Google Calendar template URL with timezone-aware local times. */
export function googleCalendarTemplateUrl(
  input: GoogleCalendarTemplate
): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: input.title,
    dates: `${input.start}/${input.end}`,
    ctz: input.timeZone,
    details: input.details,
    location: input.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
