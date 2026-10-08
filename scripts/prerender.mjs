// Post-build step for GitHub Pages:
//  - 404.html is a copy of the app shell, so client-side routes work when opened directly.
//  - Pages that other services fetch (the privacy policy) are pre-rendered to static HTML,
//    so crawlers see the full text without running JavaScript.
import { copyFileSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const shell = readFileSync('dist/index.html', 'utf8');
copyFileSync('dist/index.html', 'dist/404.html');

const { render, PRIVACY_TITLE, PRIVACY_DESCRIPTION } = await import(
  pathToFileURL(join('dist-ssr', 'entry-server.js')).href
);

const pages = [
  { url: '/blockcade/privacy/', title: PRIVACY_TITLE, description: PRIVACY_DESCRIPTION },
];

for (const { url, title, description } of pages) {
  const html = shell
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  const file = join('dist', url, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}
