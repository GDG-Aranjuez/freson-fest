import { site } from "@/data/site";
import {
  formatEventDateLabel,
  type EventDateLabel,
} from "@/utils/format-event-date";

export type { EventDateLabel };
export {
  formatEventClock,
  formatEventDateLabel,
} from "@/utils/format-event-date";

/** Display label for the site event date (`site.event.startDate`). */
export const eventDate = formatEventDateLabel(site.event.startDate);
