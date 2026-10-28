// Post-build step for GitHub Pages:
//  - 404.html is a copy of the app shell, so client-side routes work when opened directly.
//  - Every page is pre-rendered to static HTML, so crawlers see the full text without running
//    JavaScript. The stores need this: App Store Connect's support URL and the privacy policy
//    must answer 200 with content, and a route served from 404.html answers 404 even though a
//    browser shows the page.
import { copyFileSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { PAGE_METADATA } from '../src/pageMetadata.js';

const shell = readFileSync('dist/index.html', 'utf8');
copyFileSync('dist/index.html', 'dist/404.html');

const { render } = await import(pathToFileURL(join('dist-ssr', 'entry-server.js')).href);

// "/" goes last: it overwrites dist/index.html, which every other page was built from.
for (const { url, title, description } of PAGE_METADATA) {
  const html = shell
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  const file = join('dist', url, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}
