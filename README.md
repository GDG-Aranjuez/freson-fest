# FresON Fest 2026

[![CI](https://github.com/GDG-Aranjuez/freson-fest/actions/workflows/ci.yaml/badge.svg)](https://github.com/GDG-Aranjuez/freson-fest/actions/workflows/ci.yaml)
[![Deploy](https://github.com/GDG-Aranjuez/freson-fest/actions/workflows/deploy.yaml/badge.svg)](https://github.com/GDG-Aranjuez/freson-fest/actions/workflows/deploy.yaml)
[![License: MIT](https://img.shields.io/github/license/GDG-Aranjuez/freson-fest)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Official website for **FresON Fest 2026**, organized by **GDG Aranjuez** — October 24, 2026 in Aranjuez, Spain.

**Live site:** [fresonfest.gdg-aranjuez.com](https://fresonfest.gdg-aranjuez.com/)

**Repository:** [github.com/GDG-Aranjuez/freson-fest](https://github.com/GDG-Aranjuez/freson-fest)

## Stack

- [Astro](https://astro.build/) 7 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) 4 — styling
- [GitHub Pages](https://pages.github.com/) — hosting (deployed from `main`)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **22.12.0** or newer
- [pnpm](https://pnpm.io/) **9**

### Setup

```sh
git clone https://github.com/GDG-Aranjuez/freson-fest.git
cd freson-fest
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command        | Description                           |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start the development server          |
| `pnpm build`   | Build the production site to `dist/`  |
| `pnpm preview` | Preview the production build locally  |
| `pnpm lint`    | Lint `.astro`, `.ts`, and `.js` files |
| `pnpm format`  | Check formatting with Prettier        |

## Project structure

```
src/
├── pages/                         # Filename is the URL; pages orchestrate data + blocks
│   ├── index.astro                # /
│   ├── agenda.astro               # /agenda
│   ├── ponentes.astro             # /ponentes
│   ├── nosotros.astro             # /nosotros
│   ├── patrocinadores.astro       # /patrocinadores
│   ├── ayuda.astro                # /ayuda
│   ├── entradas.astro             # /entradas → Eventbrite (302)
│   ├── [section].astro            # coming-soon slugs
│   └── 404.astro
├── components/
│   ├── ui/                        # Primitives (Button, Container, Section, Icon, ripple)
│   ├── layout/                    # Header, Footer, DesktopNav, MobileNav, LinkList, SocialLinks
│   └── blocks/                    # Presentational sections (props only; no page folders)
├── data/                          # Domain content; types live next to the data
│   ├── site.ts
│   ├── nav.ts
│   ├── footer.ts
│   ├── tickets.ts
│   ├── location.ts
│   ├── agenda.ts
│   ├── speakers.ts
│   ├── team.ts
│   ├── sponsors.ts
│   ├── faqs.ts
│   ├── coming-soon.ts
│   ├── home.ts
│   ├── about.ts
│   ├── help.ts
│   └── media.ts
├── layouts/
│   └── BaseLayout.astro
├── lib/                           # SEO helpers
├── types/                         # Infra (icon, seo, nav, footer)
├── styles/                        # globals.css, variables.css, typography.css
└── utils/                         # path, nav, event-date
```

**Layers**

- **`pages/`** import `src/data/` and pass props into blocks. Spanish filenames (`nosotros.astro`, `ayuda.astro`, …) exist only because they _are_ the public URL.
- **`components/blocks/`** are presentational. They must not import values from `@/data/*` (type-only imports are fine). Header/Footer may import nav/footer data.
- **`data/`** is organized by domain, not by page. Public hrefs are the Spanish URL (`/ponentes`, `/nosotros`, …).
- User-facing copy stays in Spanish. File names, exports, and keys are English.

See [AGENTS.md](./AGENTS.md) for layout and responsive conventions.

## Design system

Tokens and UI conventions (colors, type, buttons, spacing) live in [docs/design-system.md](./docs/design-system.md). Prefer semantic design tokens over raw Tailwind color/spacing scales when building components.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

- [Open an issue](https://github.com/GDG-Aranjuez/freson-fest/issues)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## Contact

- **Email:** [gdgaranjuez@gmail.com](mailto:gdgaranjuez@gmail.com)
- **LinkedIn:** [GDG Aranjuez](https://www.linkedin.com/company/gdg-aranjuez)
- **X:** [@gdgaranjuez](https://twitter.com/gdgaranjuez)
