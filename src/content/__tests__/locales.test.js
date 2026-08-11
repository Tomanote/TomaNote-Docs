import { describe, it, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const CONTENT_ROOT = join(process.cwd(), 'src/content/docs');
const ES_ROOT = join(CONTENT_ROOT, 'es');

const listFiles = (dir) => {
	const out = [];
	const walk = (current) => {
		for (const entry of readdirSync(current, { withFileTypes: true })) {
			const full = join(current, entry.name);
			if (entry.isDirectory()) walk(full);
			else if (/\.(md|mdx)$/.test(entry.name)) out.push(relative(CONTENT_ROOT, full).replaceAll('\\', '/'));
		}
	};
	walk(dir);
	return out.sort();
};

describe('Docs parity (EN / ES)', () => {
	const en = listFiles(CONTENT_ROOT).filter((file) => !file.startsWith('es/'));
	const es = listFiles(ES_ROOT).map((file) => file.replace(/^es\//, ''));

	it('should have the same set of content slugs in both languages', () => {
		expect(en).toEqual(es);
	});
});
