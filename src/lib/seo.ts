import { venue } from "@/data/location";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";
import type { StructuredData } from "@/types/seo";
import { withBase } from "@/utils/path";

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === site.title) {
    return site.title;
  }

  if (pageTitle.includes(site.titleSuffix)) {
    return pageTitle;
  }

  return `${pageTitle} | ${site.titleSuffix}`;
}

export function sectionDescription(
  title: string,
  description?: string
): string {
  return (
    description ??
    `${title} de ${site.title} (${site.name}). Información disponible próximamente.`
  );
}

export function siteRootUrl(siteUrl: string | URL): string {
  return new URL(withBase("/"), siteUrl).href;
}

export function organizationSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url,
    description: site.description,
    sameAs: socialLinks.map(({ href }) => href),
  };
}

export function websiteSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url,
    inLanguage: site.language,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function eventSchema(siteUrl: string | URL): StructuredData {
  const url = siteRootUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.event.name,
    description: site.description,
    startDate: site.event.startDateTime,
    endDate: site.event.endDateTime,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.streetAddress,
        postalCode: venue.postalCode,
        addressLocality: venue.addressLocality,
        addressRegion: venue.addressRegion,
        addressCountry: venue.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.name,
      url,
    },
  };
}

export function mergeStructuredData(
  siteUrl: string | URL,
  extra?: StructuredData | StructuredData[]
): StructuredData[] {
  const base = [organizationSchema(siteUrl), websiteSchema(siteUrl)];

  if (!extra) {
    return base;
  }

  return base.concat(extra);
}
