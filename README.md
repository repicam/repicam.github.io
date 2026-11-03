# repicam.github.io

Web personal (CV) en https://repicam.github.io. Astro genera HTML estático a partir de `src/data/cv.json`.

- **Los datos** no se editan aquí: los publica CompoundDays (Trabajo → CV → Publicar) con un commit de
  `src/data/cv.json`. Cada push a `master` compila y publica la web (`.github/workflows/deploy.yml`).
- **La foto** es `public/photo.jpg`.
- **En local**: `npm install`, `npm run dev` (o `npm run build` y `npm run preview`).
- **Pages**: Settings → Pages → Source: *GitHub Actions*.
