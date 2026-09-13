## Project structure

```
src/
├── pages/            # Routes (filename is the URL). Orchestrate data + blocks.
├── components/
│   ├── ui/           # Primitives (Container, Section, Button, Icon)
│   ├── layout/       # Site chrome (Header, Footer, nav)
│   └── blocks/       # Presentational sections with props (no page folders)
├── data/             # Domain content; types live next to the data
├── layouts/          # BaseLayout.astro
├── lib/              # SEO helpers
├── types/            # Infra only (icon, seo, nav, footer)
├── styles/           # globals.css, variables.css, typography.css
└── utils/            # Pure functions (nav, path, event-date)
```

## Layers

- **`pages/`** import data and pass it into blocks. Spanish filenames (`nosotros.astro`, `ayuda.astro`, …) exist only because they _are_ the public URL.
- **`components/blocks/`** receive props. They must not import values from `@/data/*` (type-only imports are fine). Header/Footer may import nav/footer data.
- **`data/`** is organized by domain (`agenda`, `speakers`, `faqs`, `home`, …), not by page folder. Public hrefs are the Spanish URL (`/ponentes`, `/nosotros`, …).
- User-facing copy stays in Spanish. File names, exports, and keys are English.

## Responsive layout

- **Layout breakpoint:** `lg` (1024px) for nav and hero. Footer uses `md` (768px).
- **Prefer** a single markup with responsive utilities (`flex-col lg:flex-row`, semantic classes in `styles/`).
- **Dual layout** (two DOM trees) only when structure differs radically — use Tailwind visibility classes directly (`md:hidden`, `hidden md:flex`).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
