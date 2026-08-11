# TomaNote Docs — Agent Instructions

Documentación oficial de TomaNote. Sitio Astro + Starlight, dos idiomas (EN raíz / ES en `/es/`), temas light y dark espejando los tokens del app.

## Rama principal
- La rama default es `master`, no `main`

## Branch flow (convención estricta)
- Cualquier rama feature (distinta de `dev` o `master`) se mergea SIEMPRE a `dev` primero mediante PR
- El **agente crea SIEMPRE el PR de `dev` → `master`**; **solo un desarrollador humano puede aprobarlo y mergearlo desde la interfaz de GitHub** — el agente nunca mergea directo a `master` ni se auto-aprueba el PR
- `master` tiene branch protection: requiere PR aprobado por el usuario y el status check `build-and-test` (`.github/workflows/ci.yml`)
- Excepción: solo `dev` y `master` pueden recibir merges directos

## Commit conventions
- Conventional commits en inglés: `feat(scope): ...`, `fix(scope): ...`, `docs(scope): ...`, `refactor(scope): ...`, `test(scope): ...`, `style(scope): ...`, `chore(scope): ...`
- **Regla de autocontención**: cada commit debe poder **revertirse en aislamiento** sin afectar otras features integradas en la misma rama/milestone. Cada commit es un cambio lógico único que deja el proyecto en estado funcional. No se permite mezclar cambios de distintas features en un mismo commit; si un cambio depende de otro anterior, debe degradar con elegancia (fallback) y no romper nada al revertirse.
- **i18n**: toda página nueva debe crearse en inglés (raíz de `src/content/docs/`) Y en español (`src/content/docs/es/`) con el mismo slug — el test de paridad `src/content/__tests__/locales.test.js` falla si no están sincronizadas
- Antes de pushear: `npm run test:run`, `npm run build` y `npx astro check` deben pasar
- Nunca commitear `.astro/` ni `dist/` (ambos en `.gitignore`)
- Convenciones de contribución completas en `CONTRIBUTING.md`

## Desarrollo (Starlight)
- Para iniciar el servidor de desarrollo, usar background mode:

  ```
  astro dev --background
  ```

- Gestionar el servidor en background con `astro dev stop`, `astro dev status` y `astro dev logs`
- La rama default del contenido es la raíz de `src/content/docs/` (inglés); el español vive en `src/content/docs/es/`

## Deploy a producción
- El sitio se sirve desde la rama `gh-pages` via GitHub Pages con dominio `docs.tomanote.app`
- **Requisito crítico**: Siempre debe incluirse un archivo `.nojekyll` vacío en `dist/` antes del deploy. Astro genera JS en `_astro/` y Jekyll (GitHub Pages) ignora carpetas que empiezan con `_`. Sin `.nojekyll` el sitio se ve en blanco.
- El CNAME debe contener `docs.tomanote.app` (el workflow de deploy lo escribe en `dist/` automáticamente)
- Node.js >= 22.12.0 requerido (Astro 6+)
- El deploy automático via GitHub Actions escucha pushes a `master` y despliega a `gh-pages`

## Release flow
1. Feature branch → PR a `dev` (merge automático o aprobado por el agente)
2. El usuario crea PR de `dev` → `master` y lo revisa manualmente
3. Una vez mergeado a `master`, crear tag semver (`vX.Y.Z`)
4. Crear GitHub Release con notas
5. GitHub Actions deploya automáticamente

## Comandos útiles
- `npm run dev` — servidor de desarrollo (usa `astro dev --background`)
- `npm run build` — build de producción
- `npm run test:run` — ejecutar tests (paridad EN/ES)
- `npm run check` / `npx astro check` — type-check del proyecto Astro
