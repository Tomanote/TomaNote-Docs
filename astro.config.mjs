// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.tomanote.app',
	integrations: [
		starlight({
			title: 'TomaNote Docs',
			description:
				'Official documentation for TomaNote — guides, shortcuts, backup workflows and contribution manual.',
			favicon: '/favicon.svg',
			logo: {
				dark: './src/assets/logo-for-dark-theme.png',
				light: './src/assets/logo-for-light-theme.png',
				alt: 'TomaNote',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tomanote/TomaNote' },
			],
			customCss: ['./src/styles/tomanote.css'],
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				},
				{
					tag: 'link',
					attrs: {
						href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
						rel: 'stylesheet',
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español' },
			},
			sidebar: [
				{
					label: 'Guides',
					translations: { es: 'Guías' },
					items: [
						{
							label: 'Getting started',
							slug: 'guides/getting-started',
							translations: { es: 'Primeros pasos' },
						},
						{
							label: 'Keyboard shortcuts',
							slug: 'guides/shortcuts',
							translations: { es: 'Atajos de teclado' },
						},
						{
							label: 'Contributing',
							slug: 'guides/contribute',
							translations: { es: 'Contribuir' },
						},
					],
				},
			],
		}),
	],
});
