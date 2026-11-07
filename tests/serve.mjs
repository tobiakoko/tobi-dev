/*
 * Serves build/client for the Playwright tests the way Vercel does: clean URLs,
 * 404.html with a 404 status, and the security headers from vercel.json, so a
 * Content-Security-Policy problem fails a test instead of production.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve('build/client');
const port = Number(process.env.PORT ?? 4178);

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const headers = Object.fromEntries(
  vercel.headers
    .find((h) => h.source === '/(.*)')
    .headers.map(({ key, value }) => [
      key,
      // Plain http on localhost: upgrading requests would break every asset.
      key === 'Content-Security-Policy'
        ? value.replace(/;\s*upgrade-insecure-requests/, '')
        : value,
    ])
    .filter(([key]) => key !== 'Strict-Transport-Security'),
);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.data': 'text/x-script',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    for (const candidate of [url, path.join(url, 'index.html'), `${url}.html`]) {
      const file = path.join(root, candidate);
      if (file.startsWith(root) && fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, {
          ...headers,
          'content-type': types[path.extname(file)] ?? 'application/octet-stream',
        });
        fs.createReadStream(file).pipe(res);
        return;
      }
    }
    res.writeHead(404, { ...headers, 'content-type': types['.html'] });
    fs.createReadStream(path.join(root, '404.html')).pipe(res);
  })
  .listen(port, () => console.log(`Serving build/client on http://localhost:${port}`));
