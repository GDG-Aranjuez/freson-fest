import { venue } from "@/data/location";
import { formatEventDateLabel } from "@/utils/format-event-date";

const startDate = "2026-10-24";
const eventDateLabel = formatEventDateLabel(startDate);
const eventYear = eventDateLabel.dateYear;
const eventName = `FresON Fest ${eventYear}`;

export const site = {
  name: "GDG Aranjuez",
  title: eventName,
  titleSuffix: eventName,
  description: `${eventName} — evento de GDG Aranjuez. ${eventDateLabel.dateLong} en Aranjuez.`,
  locale: "es_ES",
  language: "es",
  twitter: "@gdgaranjuez",
  ogImage: "/og.jpg" as string | undefined,
  themeColor: "#f37d16",
  gtagId: "G-FX7V3LRT2D",
  contactEmail: "gdg.aranjuez@gmail.com",
  brand: {
    imagotipo: "/brand/imagotipo-navbar.svg",
    alt: "FresON fest",
  },
  event: {
    name: eventName,
    startDate,
    endDate: startDate,
    timeZone: "Europe/Madrid",
    /** Local start used by the hero countdown and calendar event. */
    startDateTime: `${startDate}T09:00:00+02:00`,
    /** Approximate close after the last session (cierre 18:20). */
    endDateTime: `${startDate}T19:00:00+02:00`,
    location: `${venue.addressLocality}, España`,
  },
} as const;

export const contactMailto = `mailto:${site.contactEmail}`;
