---
title: Contributing
description: How to contribute to TomaNote and to this documentation.
---

TomaNote is an open source project and any help is welcome: bug reports, feature proposals, translations, or code improvements.

There are two repositories you can contribute to:

- **TomaNote** (the app) — [github.com/Tomanote/TomaNote](https://github.com/Tomanote/TomaNote)
- **TomaNote-Docs** (this site) — [github.com/Tomanote/TomaNote-Docs](https://github.com/Tomanote/TomaNote-Docs)

Both follow the same conventions: default branch `master`, integration branch `dev`, commits in English.

## Contributing to the app

### Tech stack

- **Astro** (SSG) + **Tailwind CSS** + **SCSS**.
- JavaScript runtime modules, TypeScript-checked.
- **Node.js >= 22.12.0** required.

### Setup

```bash
git clone https://github.com/Tomanote/TomaNote.git
cd TomaNote
git remote add upstream https://github.com/Tomanote/TomaNote.git
git checkout -b feature/your-feature-name   # or fix/your-bugfix-name
npm ci
```

### Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (syncs roadmap first) |
| `npm run test:run` | Run all unit tests once |
| `npm run build` | Production build (syncs roadmap + changelog) |
| `npx astro check` | Type-check the Astro project |
| `npm run changelog` | Regenerate CHANGELOG.md from the roadmap |
| `npm run sync:roadmap` | Sync roadmap translations |
| `npm run security:check` | Audit dependencies |

### Git workflow

1. **Never push directly to `master`.** Feature branches are merged into `dev` first via a pull request; `dev` → `master` is merged manually by the maintainer.
2. `master` is protected: a PR is required and the **`build-and-test`** status check must pass.
3. Keep commits **self-contained and independently revertable**: one logical change per commit, each leaving the project in a working state.

### Commit conventions

Use [Conventional Commits](https://www.conventionalcommits.org/) in English:

```text
feat(scope): add ...
fix(scope): correct ...
refactor(scope): restructure ...
docs(scope): update ...
test(scope): cover ...
chore(scope): ...
```

Example: `fix(editor): apply saved font-size to new tabs`.

### Code conventions

- **Feature-based structure**: components live in `src/features/[name]/` (Astro component, SCSS styles, JS logic, tests).
- **Class-based JS modules** with an `init()` pattern.
- **i18n**: never hardcode user-facing strings — use the locale files `src/locales/en.json` and `es.json`; both must stay in sync.
- **Roadmap**: `src/features/roadmap/roadmap-data.json` is the single source of truth; don't edit generated locale keys or `CHANGELOG.md` by hand.
- **Logging**: use the `devLogger` utility instead of raw `console.*`.

### Quality gates (required before a PR)

- `npm run test:run`
- `npm run build`
- `npx astro check`

### CI / CD

- **`build-and-test`** — runs `astro check`, unit tests and the build on every PR and on pushes to `master`. Blocks the merge.
- **Security audit** — `npm audit` plus an outdated-dependency report; informational only.
- **Deploy** — publishes to GitHub Pages on every push to `master`. The site is served from the `gh-pages` branch and requires a `.nojekyll` file in `dist/`.

### Reporting issues

- Found a bug? Open an **issue** with the `Bug Report` template.
- Proposing a large change? Open an issue or a discussion first.
- See also [SECURITY.md](https://github.com/Tomanote/TomaNote/blob/master/SECURITY.md) for security reporting.

## Contributing to this documentation

The docs follow the same workflow as the app. Some specifics:

- Every page must exist in **English** (`src/content/docs/`) **and** Spanish (`src/content/docs/es/`) with the same slug — a parity test enforces this.
- The sidebar lives in `astro.config.mjs` (labels + translations).
- Pending screenshots are marked with a dashed placeholder box; screenshots go in `public/screenshots/`.
- Before pushing: `npm run test:run`, `npm run build` and `npx astro check` must pass.
