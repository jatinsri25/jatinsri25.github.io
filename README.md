# Jatin Srivastava

A static portfolio and engineering notebook. Warm paper, Newsreader, IBM Plex Mono, numbered project notes and technical diagrams. No browser JavaScript, framework, remote fonts or runtime dependencies.

## Preview

Use Python 3 and Node.js 18 or later. No dependency installation is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. The theme follows the operating system. The home page also includes a print stylesheet.

## Check and package

```sh
npm run check
npm run build
npm run preview
```

Stop the development server before starting the preview on the same port. The check validates page metadata, local navigation, asset references, old fragment identifiers and preservation of the original external destinations.

## Editing

- `index.html`: introduction, projects, experience, tools and contact.
- `work/*.html`: six standalone project notes.
- `styles.css`: shared styles, responsive layouts, dark mode and print.
- `links.html`: current and earlier profile, resume and project destinations.
- `assets/`: local fonts, font licenses, actual NeuroLabel screenshot and supplied resume PDF.
- `docs/content-notes.md`: content sources and measurement caveats.
- `docs/preserved-links.json`: original navigation destinations, checked by `npm run check`.

Edit the HTML and CSS directly. The build only copies public files to `dist/`. It excludes legacy source, documentation and tooling.

## Hosting

The existing GitHub Pages configuration publishes the root of `main`. The root HTML and `.nojekyll` work with that configuration without a framework build. A feature branch does not change the public Pages deployment.

Vercel uses the explicit `buildCommand`, `outputDirectory` and `framework: null` in `vercel.json`. Standalone case-study paths serve their own HTML; there is no SPA catch-all rewrite.

Canonical URLs currently use https://jatinsri25.github.io. Update the canonical and Open Graph URLs, `robots.txt` and `sitemap.xml` together if a different primary domain is chosen.

Earlier Vercel address: https://portfolio-jatin-srivastavas-projects-4aa3e419.vercel.app

The previous React application remains available in Git history. `legacy_backup/` is the older archived portfolio and is excluded from the packaged build.
