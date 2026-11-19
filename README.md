# NextBites

A responsive recipe site built with Next.js and TypeScript. The app includes live search, recipe detail pages, loading and error states, and a static export for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for GitHub Pages

```bash
npm ci
npm run build
```

The static website is written to `out/`. Production builds use the `/5.1-FrontEnd` base path for GitHub Pages. The workflow in `.github/workflows/deploy.yml` publishes `out/` whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

After the workflow completes, the site URL is `https://not-user-mayank.github.io/5.1-FrontEnd/`.

## Deployment verification

- Home page: <https://not-user-mayank.github.io/5.1-FrontEnd/>
- Recipe detail page: <https://not-user-mayank.github.io/5.1-FrontEnd/recipe/margherita-pizza/>
- Build: `npm run build` exports the home page and all eight recipe pages to `out/`.
- Deployment: [GitHub Actions Pages run](https://github.com/not-user-mayank/5.1-FrontEnd/actions/runs/44575312643) completed successfully.
