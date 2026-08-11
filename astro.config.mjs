// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.tomanote.app",
  integrations: [
    starlight({
      title: "TomaNote Docs",
      description:
        "Official documentation for TomaNote — guides, shortcuts, backup workflows and contribution manual.",
      favicon: "/favicon.ico",
      logo: {
        dark: "./src/assets/logo-for-dark-theme.png",
        light: "./src/assets/logo-for-light-theme.png",
        alt: "TomaNote",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Tomanote/TomaNote",
        },
      ],
      customCss: ["./src/styles/tomanote.css"],
      head: [
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
            rel: "stylesheet",
          },
        },
      ],
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        es: { label: "Español" },
      },
      sidebar: [
        {
          label: "Guides",
          translations: { es: "Guías" },
          items: [
            {
              label: "Getting started",
              slug: "guides/getting-started",
              translations: { es: "Primeros pasos" },
            },
            {
              label: "Interface overview",
              slug: "guides/interface",
              translations: { es: "Vista general de la interfaz" },
            },
            {
              label: "Privacy & data",
              slug: "guides/privacy",
              translations: { es: "Privacidad y datos" },
            },
          ],
        },
        {
          label: "Features",
          translations: { es: "Funcionalidades" },
          items: [
            {
              label: "Notes & tabs",
              slug: "guides/notes-tabs",
              translations: { es: "Notas y pestañas" },
            },
            {
              label: "Editor & formatting",
              slug: "guides/editor",
              translations: { es: "Editor y formato" },
            },
            {
              label: "Command palette",
              slug: "guides/command-palette",
              translations: { es: "Paleta de comandos" },
            },
            {
              label: "Tools & right sidebar",
              slug: "guides/tools",
              translations: { es: "Herramientas y barra lateral derecha" },
            },
            {
              label: "Settings",
              slug: "guides/settings",
              translations: { es: "Ajustes" },
            },
            {
              label: "Keyboard shortcuts",
              slug: "guides/shortcuts",
              translations: { es: "Atajos de teclado" },
            },
          ],
        },
        {
          label: "Contributing",
          translations: { es: "Contribuir" },
          items: [
            {
              label: "Contributing",
              slug: "guides/contribute",
              translations: { es: "Contribuir" },
            },
          ],
        },
      ],
    }),
  ],
});
