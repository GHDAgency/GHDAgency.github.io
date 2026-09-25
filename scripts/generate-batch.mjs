#!/usr/bin/env node
// Generates every image in scripts/images.manifest.mjs (4 at a time), then converts each
// to an optimized .webp at its target width. Raw generations are kept in generated/raw/.
//
//   node scripts/generate-batch.mjs              only images whose output file is missing
//   node scripts/generate-batch.mjs --force      regenerate everything
//   node scripts/generate-batch.mjs <id> [<id>]  regenerate specific images

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import sharp from 'sharp';
import { images } from './images.manifest.mjs';

const args = process.argv.slice(2);
const force = args.includes('--force');
const ids = args.filter((a) => !a.startsWith('--'));

const queue = images.filter((img) => (ids.length ? ids.includes(img.id) : force || !existsSync(img.out)));
if (!queue.length) {
  console.log('Nothing to generate (all outputs exist). Use --force or pass ids.');
  process.exit(0);
}
console.log(`Generating ${queue.length} image(s)…`);

const run = (img) =>
  new Promise((resolvePromise) => {
    const raw = `generated/raw/${img.id}.png`;
    const cliArgs = ['scripts/generate-image.mjs', img.prompt, '--out', raw, '--size', img.size];
    if (img.background) cliArgs.push('--background', img.background);
    if (img.quality) cliArgs.push('--quality', img.quality);
    const child = spawn(process.execPath, cliArgs, { stdio: ['ignore', 'pipe', 'pipe'] });
    let log = '';
    child.stdout.on('data', (d) => (log += d));
    child.stderr.on('data', (d) => (log += d));
    child.on('close', async (code) => {
      if (code !== 0) {
        console.error(`✗ ${img.id}\n${log.trim()}`);
        return resolvePromise(false);
      }
      mkdirSync(dirname(img.out), { recursive: true });
      await sharp(raw).resize({ width: img.width, withoutEnlargement: true }).webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(img.out);
      console.log(`✓ ${img.id} → ${img.out}`);
      resolvePromise(true);
    });
  });

const CONCURRENCY = 4;
let ok = 0;
const pending = [...queue];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (pending.length) if (await run(pending.shift())) ok++;
  }),
);
console.log(`\n${ok}/${queue.length} succeeded.`);
process.exit(ok === queue.length ? 0 : 1);
