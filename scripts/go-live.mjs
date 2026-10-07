// Cutover in two steps.
//   node scripts/go-live.mjs            Step 1: the new site becomes the site at the root of this repo's address
//                                       (ghdagency.github.io). Indexing stays OFF and no custom domain is set.
//   node scripts/go-live.mjs --domain   Step 2 (DNS day): sets the custom domain ghdagency.ai and turns indexing ON.
//   Add --dry to either to list what would change without changing anything.
// After a step: npm run build, node scripts/audit-links.mjs /, commit, push to main.
import fs from 'node:fs';
import path from 'node:path';

const dry = process.argv.includes('--dry');
const act = (msg, fn) => { console.log((dry ? '[dry] ' : '') + msg); if (!dry) fn(); };
const pages = 'src/pages';
const rm = (p) => fs.rmSync(p, { recursive: true, force: true });
const domainStep = process.argv.includes('--domain');
const moved = !fs.existsSync(`${pages}/v4.astro`);

if (!moved && !domainStep) {
// 1. Remove the old site's pages and every design-review page.
const old = ['index', 'about-us', 'contact-us', 'our-solutions', 'pricing', 'privacy-policy', 'terms-and-conditions', 'cookie-policy', 'directions', 'v1', 'v2', 'v3', 'v4-engine', 'v4-line', 'v4-noise', 'v4-plates', 'v4-rise', 'v5', 'w1', 'w2', 'w3', 'w4', 'w5'];
for (const n of old) act(`delete ${pages}/${n}.astro`, () => rm(`${pages}/${n}.astro`));

// 2. Promote /v4 to the root.
act('move v4.astro -> index.astro', () => fs.renameSync(`${pages}/v4.astro`, `${pages}/index.astro`));
for (const f of fs.readdirSync(`${pages}/v4`)) act(`move v4/${f} -> ${f}`, () => fs.renameSync(`${pages}/v4/${f}`, `${pages}/${f}`));
act('remove empty v4/ folder', () => rm(`${pages}/v4`));

// 3. Fix every /v4/ link and the relative imports that moved up one folder.
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
for (const f of walk('src').filter((f) => /\.(astro|ts)$/.test(f))) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  s = s.replaceAll('/v4/', '/');
  if (path.dirname(f) === pages) s = s.replaceAll("'../../directions/", "'../directions/").replaceAll("'../../legal/", "'../legal/");
  if (s !== before) act(`rewrite ${f}`, () => fs.writeFileSync(f, s));
}

// 4. Old URLs keep working (also protects any links and rankings the old site had).
act('astro.config.mjs: redirects and sitemap filter', () => {
  let c = fs.readFileSync('astro.config.mjs', 'utf8');
  c = c.replace(/sitemap\(\{[^\n]*\}\),/, 'sitemap({ filter: (page) => !/\\/confirm\\/?$/.test(page) }),');
  c = c.replace(/redirects: \{[\s\S]*?\n  \},/, `redirects: {
    '/home': '/',
    '/about-us': '/about/',
    '/our-solutions': '/solutions/',
    '/pricing': '/services/',
    '/contact-us': '/apply/',
  },`);
  fs.writeFileSync('astro.config.mjs', c);
});
}

// 5. Domain and indexing: only on DNS day, with --domain.
if (domainStep) {
  act('public/CNAME = ghdagency.ai', () => fs.writeFileSync('public/CNAME', 'ghdagency.ai\n'));
  act('workflow: indexable build, no preview origin', () => {
    let w = fs.readFileSync('.github/workflows/deploy.yml', 'utf8');
    w = w.replace(/\s*# Remove once ghdagency\.ai points at this site\.\n\s*PUBLIC_DEPLOY_ORIGIN: [^\n]*/, "\n          PUBLIC_INDEXABLE: 'true'");
    fs.writeFileSync('.github/workflows/deploy.yml', w);
  });
}
console.log(dry ? '\nDry run only. Nothing changed.' : '\nDone. Now: npm run build && node scripts/audit-links.mjs /');
