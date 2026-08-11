# Contributing to TomaNote Docs

Thanks for taking the time to contribute! This is the official documentation for TomaNote — bug reports, content fixes, or new guides are all welcome.

Please follow the guidelines below to keep the project organized and running smoothly.

---

## Project overview

- **Language / framework**: Astro (SSG) + Starlight.
- **Runtime**: Node.js >= 22.12.0.
- **Branches**: `master` is the default branch; `dev` is the integration branch. Never work directly on either of them.
- **i18n**: English (default, served at the root) and Spanish (served under `/es/`). Every page must exist in both languages with the same slug.

---

## Getting started

1. **Fork** the repository.
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/Tomanote/TomaNote-Docs.git
   cd TomaNote-Docs
   ```

3. Add the original repository as an upstream remote (to stay in sync):

   ```bash
   git remote add upstream https://github.com/Tomanote/TomaNote-Docs.git
   ```

4. **Create a branch** for your work. Use a descriptive name with the matching prefix:

   ```bash
   git checkout -b feature/your-feature-name
   git checkout -b fix/your-bugfix-name
   git checkout -b docs/your-content-change
   ```

5. **Install dependencies** with the exact lockfile versions:

   ```bash
   npm ci
   ```

---

## Development scripts

| Command            | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `npm run dev`      | Starts the Astro/Starlight dev server                    |
| `npm run test:run` | Runs all unit tests once (run this before pushing)       |
| `npm run build`    | Production build                                         |
| `npm run check`    | Type-checks the Astro project (`astro check`)            |

---

## Git workflow (strict)

1. **Never push directly to `master`.** All contributions must go through a **Pull Request**.
2. Feature branches are merged into **`dev`** first via PR. The owner reviews and merges `dev` → `master` manually.
3. `master` has branch protection: a PR is required and the `build-and-test` status check must pass before merging.
4. **Keep commits self-contained and independently revertable.** Each commit must be **revertible in isolation** without affecting other features integrated in the same branch/milestone. Each commit is one logical change that leaves the project in a working state. Do not mix changes from different features in a single commit; if a change depends on an earlier one, it must degrade gracefully (fallback) and not break anything when reverted.

### Conventional commits

Use [Conventional Commits](https://www.conventionalcommits.org/) — `type(scope): description` in English:

- `feat(scope): add ...`
- `fix(scope): correct ...`
- `refactor(scope): restructure ...`
- `docs(scope): update ...`
- `style(scope): ...`
- `test(scope): cover ...`
- `chore(scope): ...`

### i18n (required)

Every new page must be created **twice**: in English at `src/content/docs/` and in Spanish at `src/content/docs/es/`, using the same file name/slug. The parity test `src/content/__tests__/locales.test.js` fails if the two language trees drift apart.

### Code quality (required before opening a PR)

All of the following must pass locally:

- `npm run test:run` — the full test suite (EN/ES parity).
- `npm run build` — the production build must assemble correctly.
- `npm run check` — no TypeScript errors.

If any of these fail, fix them before opening the PR.

---

## CI / CD

GitHub Actions runs several automated checks:

- **`build-and-test`** (`.github/workflows/ci.yml`): runs `astro check`, the unit tests, and the production build on every PR to `master`/`dev` and on pushes to `master`. **This check blocks the merge** if it fails.
- **Deploy** (`.github/workflows/deploy.yml`): builds and publishes to GitHub Pages on every push to `master`.

**Deploy note**: the site is served from the `gh-pages` branch via GitHub Pages under `docs.tomanote.app`. A `.nojekyll` file must always be present in `dist/` — without it, Jekyll ignores the `_astro/` folder and the site renders blank. The workflow also writes `docs.tomanote.app` into `dist/CNAME`.

---

## Reporting issues / proposing changes

- Found a bug in the docs site? Open an **Issue** using the `Bug Report` template.
- Want to propose a large change before coding it? Open an **Issue** or start a discussion first.
- When opening a PR, fill out the PR template so reviewers understand your change.

---

Thanks again for helping make TomaNote better! 🚀
