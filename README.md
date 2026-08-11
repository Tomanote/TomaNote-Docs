# TomaNote-Docs

📚 Official documentation for TomaNote — guides, shortcuts, backup workflows, and open-source contribution manuals powered by [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

Site: [docs.tomanote.app](https://docs.tomanote.app) · App repo: [TomaNote](https://github.com/Tomanote/TomaNote)

## Languages

- **English** (default) — served at the root: `/`
- **Español** — served under `/es/`

Every page must exist in both languages with the same slug (see `src/content/__tests__/locales.test.js`).

## Themes

The docs mirror the app's design tokens (`light` and `dark`) from `src/styles/abstracts/Variables.scss` in the TomaNote repo, mapped in `src/styles/tomanote.css`.

## Commands

| Command                   | Action                                    |
| :------------------------ | :---------------------------------------- |
| `npm install`             | Installs dependencies                     |
| `npm run dev`             | Starts local dev server (background mode) |
| `npm run test:run`        | Runs the EN/ES parity test                |
| `npm run build`           | Builds the production site to `./dist/`   |
| `npm run check`           | Type-checks the project (`astro check`)   |
| `npm run preview`         | Previews the production build locally     |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the git workflow, commit conventions, and CI/CD setup.
