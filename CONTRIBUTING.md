# Contributing to GDG Aranjuez

Thank you for helping build the official website for **GDG Aranjuez** and **FresON Fest 2026**. This guide explains how to collaborate on the repository.

## Code of conduct

This project follows our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **22.12.0** or newer
- [pnpm](https://pnpm.io/) **9**

### Local setup

```sh
git clone https://github.com/GDG-Aranjuez/freson-fest.git
cd freson-fest
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

### Useful commands

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `pnpm dev`        | Start the development server          |
| `pnpm build`      | Build the production site to `dist/`  |
| `pnpm preview`    | Preview the production build locally  |
| `pnpm lint`       | Lint `.astro`, `.ts`, and `.js` files |
| `pnpm format`     | Check formatting with Prettier        |
| `pnpm format:fix` | Auto-fix formatting with Prettier     |

## Project structure

```
src/
├── components/
│   ├── ui/           # Reusable primitives (Container, Section)
│   ├── layout/       # Site chrome (Header, Footer, nav)
│   ├── home/         # Home page blocks
│   └── shared/       # Cross-page blocks
├── data/             # Static site configuration
├── layouts/          # BaseLayout.astro
├── pages/
├── styles/           # globals.css, variables.css, typography.css
├── types/
└── utils/            # Pure functions (nav, path)
```

- **Content** lives in `src/data/`.
- **Pure helpers** live in `src/utils/`.

See also [AGENTS.md](./AGENTS.md) for layout and responsive conventions.

## Responsive layout

- **Layout breakpoint:** `lg` (1024px) for nav and hero. Footer uses `md` (768px).
- Prefer a single markup with responsive utilities (`flex-col lg:flex-row`).
- For dual layout (two DOM trees), use Tailwind visibility classes directly (`md:hidden`, `hidden md:flex`).

## Workflow

1. **Search [existing issues](https://github.com/GDG-Aranjuez/freson-fest/issues)** to avoid duplicate work.
2. **Open an issue** for larger changes so maintainers can align on scope.
3. **Fork the [repository](https://github.com/GDG-Aranjuez/freson-fest)** and create a branch from `main`.
4. **Make focused changes** with clear commits.
5. **Verify your changes** before opening a pull request:

   ```sh
   pnpm lint
   pnpm format
   pnpm build
   ```

6. **Open a pull request** using the provided template.
7. Wait for review. Maintainers may request changes before merging.

### Branch naming

Use short, descriptive names:

- `fix/mobile-nav-close`
- `feat/speakers-page`
- `content/update-sponsor-copy`

## Pull request guidelines

- Keep PRs small and focused when possible.
- Include screenshots or screen recordings for visual changes.
- Update content in `src/data/` instead of hardcoding copy in components when appropriate.
- Do not commit secrets, `.env` files, or generated build output.

## Content changes

Most pages are driven by data files and shared layouts. Before editing markup, check whether the change belongs in:

- `src/data/` for text, links, and configuration
- `src/pages/` for routes
- `src/components/` for reusable UI

## Deployment

Merging to `main` triggers the GitHub Pages deployment workflow at [gdg-aranjuez.github.io/freson-fest](https://gdg-aranjuez.github.io/freson-fest/). Pull requests run CI only and do not deploy.

## Questions

- **Website or repo questions:** open a [GitHub issue](https://github.com/GDG-Aranjuez/freson-fest/issues).
- **Community or event questions:** contact the organizers at [gdgaranjuez@gmail.com](mailto:gdgaranjuez@gmail.com).
