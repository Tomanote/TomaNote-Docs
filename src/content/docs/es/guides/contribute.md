---
title: Contribuir
description: Cómo contribuir a TomaNote y a esta documentación.
---

TomaNote es un proyecto de código abierto y cualquier ayuda es bienvenida: reportes de errores, propuestas de funcionalidades, traducciones o mejoras de código.

Hay dos repositorios a los que puedes contribuir:

- **TomaNote** (la app) — [github.com/Tomanote/TomaNote](https://github.com/Tomanote/TomaNote)
- **TomaNote-Docs** (este sitio) — [github.com/Tomanote/TomaNote-Docs](https://github.com/Tomanote/TomaNote-Docs)

Ambos siguen las mismas convenciones: rama default `master`, rama de integración `dev`, commits en inglés.

## Contribuir a la app

### Stack técnico

- **Astro** (SSG) + **Tailwind CSS** + **SCSS**.
- Módulos JavaScript en tiempo de ejecución, verificados con TypeScript.
- Se requiere **Node.js >= 22.12.0**.

### Configuración

```bash
git clone https://github.com/Tomanote/TomaNote.git
cd TomaNote
git remote add upstream https://github.com/Tomanote/TomaNote.git
git checkout -b feature/nombre-de-tu-feature   # o fix/nombre-de-tu-fix
npm ci
```

### Comandos útiles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Iniciar el servidor de desarrollo (sincroniza el roadmap antes) |
| `npm run test:run` | Ejecutar todos los tests unitarios una vez |
| `npm run build` | Build de producción (sincroniza roadmap + changelog) |
| `npx astro check` | Type-check del proyecto Astro |
| `npm run changelog` | Regenerar CHANGELOG.md desde el roadmap |
| `npm run sync:roadmap` | Sincronizar las traducciones del roadmap |
| `npm run security:check` | Auditar dependencias |

### Flujo de trabajo con git

1. **Nunca hagas push directo a `master`.** Las ramas feature se integran primero en `dev` mediante un pull request; `dev` → `master` lo mergea manualmente la mantenedora.
2. `master` está protegida: se requiere un PR y el status check **`build-and-test`** debe pasar.
3. Mantén los commits **autocontenidos y revertibles de forma independiente**: un cambio lógico por commit, cada uno deja el proyecto en un estado funcional.

### Convenciones de commits

Usa [Conventional Commits](https://www.conventionalcommits.org/) en inglés:

```text
feat(scope): add ...
fix(scope): correct ...
refactor(scope): restructure ...
docs(scope): update ...
test(scope): cover ...
chore(scope): ...
```

Ejemplo: `fix(editor): apply saved font-size to new tabs`.

### Convenciones de código

- **Estructura basada en features**: los componentes viven en `src/features/[name]/` (componente Astro, estilos SCSS, lógica JS, tests).
- **Módulos JS basados en clases** con un patrón `init()`.
- **i18n**: nunca escribas textos de interfaz directamente — usa los archivos de locale `src/locales/en.json` y `es.json`; ambos deben mantenerse sincronizados.
- **Roadmap**: `src/features/roadmap/roadmap-data.json` es la fuente de verdad única; no edites las claves de locale generadas ni `CHANGELOG.md` a mano.
- **Logging**: usa la utilidad `devLogger` en lugar de `console.*` directamente.

### Puertas de calidad (obligatorias antes de un PR)

- `npm run test:run`
- `npm run build`
- `npx astro check`

### CI / CD

- **`build-and-test`** — ejecuta `astro check`, los tests unitarios y el build en cada PR y en los pushes a `master`. Bloquea el merge.
- **Auditoría de seguridad** — `npm audit` más un informe de dependencias desactualizadas; solo informativo.
- **Deploy** — publica en GitHub Pages en cada push a `master`. El sitio se sirve desde la rama `gh-pages` y requiere un archivo `.nojekyll` en `dist/`.

### Reportar issues

- ¿Encontraste un bug? Abre un **issue** con la plantilla `Bug Report`.
- ¿Propones un cambio grande? Abre primero un issue o una discusión.
- Consulta también [SECURITY.md](https://github.com/Tomanote/TomaNote/blob/master/SECURITY.md) para reportar problemas de seguridad.

## Contribuir a esta documentación

La documentación sigue el mismo flujo de trabajo que la app. Algunas particularidades:

- Cada página debe existir en **inglés** (`src/content/docs/`) **y en español** (`src/content/docs/es/`) con el mismo slug — un test de paridad lo verifica.
- La barra lateral vive en `astro.config.mjs` (etiquetas + traducciones).
- Las capturas pendientes se marcan con una caja discontinua de marcador; las capturas van en `public/screenshots/`.
- Antes de pushear: `npm run test:run`, `npm run build` y `npx astro check` deben pasar.
