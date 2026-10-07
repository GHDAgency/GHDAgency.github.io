// Link audit for the built Liquid Metal site. Run after `npm run build`:  node scripts/audit-links.mjs [root]
// root defaults to /v4 (the preview). After go-live, run it with "/" .
import fs from 'node:fs';
import path from 'node:path';
const root = process.argv[2] || '/v4';
const dist = 'dist';
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const start = path.join(dist, root === '/' ? '' : root);
const pages = walk(start).filter((f) => f.endsWith('index.html') && (root !== '/' || !/dist\/(v\d|w\d|v4|directions)/.test(f)));
const exists = (u) => {
  const clean = u.split('#')[0].split('?')[0];
  const p = path.join(dist, clean);
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
};
let bad = 0;
const ext = new Map();
for (const f of pages) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
    const href = m[1];
    if (/^(mailto:|tel:|#)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) { (ext.get(href) || ext.set(href, new Set()).get(href)).add(f.replace('dist', '')); continue; }
    if (!exists(href)) { bad++; console.log('BROKEN', f.replace('dist', ''), '->', href); }
  }
}
console.log(`\n${pages.length} pages checked, ${bad} broken internal links.\nExternal links to verify by hand:`);
for (const [h, p] of ext) console.log(' ', h, `(${p.size} pages)`);
