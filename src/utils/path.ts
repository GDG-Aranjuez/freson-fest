const ABSOLUTE_URL_PATTERN = /^[a-z][a-z0-9+.-]*:/i;

/** Resolve an app path for links and public assets when deployed with a base URL. */
export function withBase(path: string): string {
  if (path.startsWith("#") || ABSOLUTE_URL_PATTERN.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL;

  if (!path.startsWith("/")) {
    return `${base}${path}`;
  }

  if (path === "/") {
    return base;
  }

  return `${base}${path.slice(1)}`;
}

/** App path, hash, or absolute URL — same rules as `withBase`. */
export function resolveHref(href: string): string {
  return withBase(href);
}

/** Whether a href should open in a new tab (http(s) or explicitly external). */
export function isExternalHref(href: string, external = false): boolean {
  return external || /^https?:/i.test(href);
}

/** Whether the current pathname is the site home (respects Astro base). */
export function isHomePath(pathname: string): boolean {
  const home = withBase("/");
  const normalizedPath =
    pathname.endsWith("/") || pathname === "/" ? pathname : `${pathname}/`;

  return normalizedPath === home || pathname === home.replace(/\/$/, "");
}
