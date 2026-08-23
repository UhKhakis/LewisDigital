// Generates src/widget/constants.ts from the canonical public/widget.js and
// public/widget.css files, so the Worker can serve the widget without any
// static-asset dependency. Run: `npm run sync:widget` (or `node scripts/sync-widget.mjs`).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const js = readFileSync(join(root, 'public/widget.js'), 'utf8');
const css = readFileSync(join(root, 'public/widget.css'), 'utf8');

const out =
  '// GENERATED FILE — do not edit. Regenerate with `npm run sync:widget`.\n' +
  '// Sources: public/widget.js and public/widget.css.\n\n' +
  `export const WIDGET_JS = ${JSON.stringify(js)};\n\n` +
  `export const WIDGET_CSS = ${JSON.stringify(css)};\n`;

mkdirSync(join(root, 'src/widget'), { recursive: true });
writeFileSync(join(root, 'src/widget/constants.ts'), out);
console.log('Wrote src/widget/constants.ts');
