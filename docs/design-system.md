# Design system — FresON Fest 2026

Cómo pintar UI en este repo sin pelearte con Figma ni con Tailwind.

Fuente de verdad: archivo Figma `GDG_ARANJUEZ_2026` (modo Dark). Aquí solo hay dark.

Código:

- `src/styles/variables.css` — colores, spacing, radius
- `src/styles/typography.css` — `.type-*`, botones, links
- `src/styles/globals.css` — base del documento

Si dudas, mira `Header.astro` o `Hero.astro` y copia el patrón.

---

## La regla corta

Primero tokens semánticos y clases del sistema (`bg-page`, `type-h2`, `btn-primary`).
Después la escala Figma (`p-size-6`, `gap-size-8`).
Tailwind “de manual” (`flex`, `lg:flex-row`, `hidden`) solo para layout.

No metamos hex en el markup. Tampoco `p-4` / `text-gray-500` / `bg-orange-500` si ya hay equivalente nuestro: pisamos la marca y, en el caso de `orange`/`stone`, chocaríamos con la paleta default de Tailwind.

Por eso la paleta cruda vive en `:root` como `--palette-*` y no genera utilities. En componentes usamos nombres con intención: `page`, `brand`, `heading`, `muted`…

`rounded-full` es el pill clásico de Tailwind. El radio enorme de Figma (144px) es `rounded-16`.

---

## Cómo están organizados los tokens

Tres capas, de adentro hacia afuera:

1. **Primitives** (`--palette-orange-300`, etc.) — solo para definir semánticos. No las uses en Astro.
2. **Semánticos** (`--color-page`, `--color-brand`…) — lo normal en clases: `bg-page`, `text-muted`.
3. **Componentes** (`.type-h1`, `.btn-primary`) — cuando font + size + color + estados van juntos.

Los tamaños de tipo están en `--font-size-*` (también en `:root`). Los consume `.type-*`. Así `text-subtitle` es solo el **color**, no un font-size que pise el token.

---

## Colores que vas a tocar

Fondos: `bg-page` (página / chrome), `bg-surface` (paneles), `bg-surface-raised` (un poco más arriba).

Texto:

- `text-heading` — títulos, iconos de nav
- `text-subtitle` / `text-body` — copy secundaria y párrafos
- `text-muted` — footnotes, meta
- `text-link` (+ hover) — enlaces y nav activo
- `text-highlighted` — el naranja de énfasis en frases
- `text-on-brand` — texto encima de naranja de marca

Marca y bordes: `bg-brand` / `text-brand`, `border-stroke`, `border-stroke-strong`, `border-stroke-brand`.

Para la agenda hay un set aparte (`text-agenda-time`, `bg-agenda-highlight-bg`, …). No hace falta memorizarlos hasta que toques esa sección.

Ejemplo típico:

```html
<section class="bg-page">
  <h2 class="type-h2">Ponentes</h2>
  <p class="type-paragraph-m text-muted">Próximamente</p>
  <a href="/entradas" class="btn-primary">Entradas</a>
</section>
```

---

## Tipografía

Bricolage Grotesque en títulos (`.type-h*`). Plus Jakarta Sans en el resto.

En vez de inventar `text-5xl font-bold`, usa el rol:

| Clase                                    | Para                |
| ---------------------------------------- | ------------------- |
| `.type-h1` … `.type-h5`                  | headings            |
| `.type-highlight`                        | cifras grandes      |
| `.type-subtitle`                         | lead bajo el título |
| `.type-eyebrow` / `.type-eyebrow-medium` | kickers             |
| `.type-paragraph-l` / `-m` / `-s`        | párrafos            |
| `.type-caption` / `.type-label`          | meta chica          |
| `.link`                                  | link con underline  |

Ya incluyen color y el salto mobile → desktop en `lg`. Si hace falta un override puntual: `type-h2 text-highlighted`.

El countdown del hero es caso aparte: `.countdown-num`, `.countdown-label`, `.countdown-sep`.

---

## Botones

Capa de componentes + clases CSS. Prefiere el componente; las clases son la implementación.

### Componentes

| Componente           | Figma                         | Uso                               |
| -------------------- | ----------------------------- | --------------------------------- |
| `ui/Button`          | Buttons (primary / secondary) | CTA genérico (`<a>` o `<button>`) |
| `shared/CtaNote`     | Button CTA + Note             | Primary + footnote debajo         |
| `shared/GhostLink`   | Ghost button                  | Texto + flecha (+ underline)      |
| `shared/BenefitLink` | Button destination            | Pill Brego                        |

```astro
import Button from "@/components/ui/Button.astro"; import CtaNote from
"@/components/shared/CtaNote.astro"; import GhostLink from
"@/components/shared/GhostLink.astro";

<Button href="/entradas">Consigue tu entrada</Button>
<Button href="/entradas" size="small">Entradas</Button>
<Button href="/entradas" block>Consigue tu entrada</Button>
<Button variant="secondary" type="button">Ver más</Button>

<CtaNote
  href="/entradas"
  label="Consigue tu entrada"
  footnote="Aforo limitado"
/>
<GhostLink href="/ediciones" label="VER EDICIÓN" />
```

Props de `Button`: `variant` (`primary` \| `secondary`), `size` (`default` \| `small`), `block`, `href` (si hay → link), `disabled`, `external`.

### Clases (por si hace falta markup suelto)

| Clase                                  | Para                                            |
| -------------------------------------- | ----------------------------------------------- |
| `.btn-primary`                         | CTA grande (L, default)                         |
| `.btn-primary--small`                  | CTA compacto (nav, 40px)                        |
| `.btn-primary--block`                  | full width en mobile; en desktop se encoge solo |
| `.btn-secondary`                       | texto sin fondo                                 |
| `.btn-ghost` / `.btn-ghost--underline` | ghost (vía `GhostLink`)                         |
| `.btn-destination`                     | pill Brego (vía `BenefitLink`)                  |
| `.btn-menu`                            | links del nav                                   |

Hover, active y disabled ya están cableados en CSS.
---

## Espaciado y radios

La escala de Figma (`size-1` …) sale como `p-size-*`, `gap-size-*`, `m-size-*`, etc.

Los que más se usan: `size-4` (8px), `size-6` (16px), `size-7` (24px), `size-8` (32px). A partir de `size-10` suele ser padding de sección gorda.

```html
<div class="flex gap-size-8 px-size-7 py-size-6">…</div>
```

Radios habituales: `rounded-sm` (2), `rounded-md` (4), `rounded-lg` (8), `rounded-xl`. Pill: `rounded-full`.

---

## Qué sí se hace con Tailwind “normal”

Layout y responsive sin drama: `flex`, `grid`, `items-center`, `w-full`, `min-w-0`, `lg:flex-row`, `hidden lg:block`.

El breakpoint de layout del proyecto es **`lg` (1024px)**. El footer puede seguir usando `md` para su grid; el resto del site, mejor `lg`.

Lo que no queremos en el diff: `bg-[#0d0c0a]`, `text-white`, `text-gray-*`, `bg-orange-500`, o `text-sm` donde debería ir un `.type-caption`.

---

## Si estás montando un componente nuevo

Pregúntate en este orden: fondo → tipo (`.type-*`) → CTA → spacing `size-*` → borde `stroke`. Si solo estás colocando cajas, Tailwind libre. Si aparece un hex, cámbialo por token antes de mergear.

¿Hay que añadir un color o un rol tipográfico? Edita `variables.css` / `typography.css` y, si puedes, deja un uso real en un componente para que no quede huérfano.
