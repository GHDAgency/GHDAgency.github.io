#!/usr/bin/env node
// Generate or edit images with the OpenAI Images API.
//
//   npm run image -- "a glowing cyan AI orb on black" --out public/images/orb.webp
//   npm run image -- "same style, but violet" --ref public/images/feat-voice.webp --out public/images/voice-violet.webp
//   npm run image -- --list-models
//
// Reads OPENAI_API_KEY (and optional OPENAI_IMAGE_MODEL) from the environment or from .env.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, resolve } from 'node:path';
import { parseArgs } from 'node:util';

if (existsSync('.env')) process.loadEnvFile('.env');

const { values: opts, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    prompt: { type: 'string', short: 'p' },
    out: { type: 'string', short: 'o' },
    model: { type: 'string', short: 'm' },
    size: { type: 'string', short: 's', default: '1024x1024' },
    quality: { type: 'string', short: 'q', default: 'max' },
    background: { type: 'string', short: 'b', default: 'auto' },
    n: { type: 'string', default: '1' },
    ref: { type: 'string', short: 'r', multiple: true },
    mask: { type: 'string' },
    'list-models': { type: 'boolean' },
    help: { type: 'boolean', short: 'h' },
  },
});

if (opts.help) {
  console.log(`Usage: npm run image -- "<prompt>" [options]

  -o, --out <path>          Output file (.png, .webp or .jpg). Default: generated/<timestamp>.png
  -s, --size <WxH>          1024x1024 (default), 1536x1024 landscape, 1024x1536 portrait, or custom
  -q, --quality <level>     low | medium | high | xhigh | max (default) | auto
  -b, --background <mode>   auto (default) | transparent | opaque
  -r, --ref <image>         Reference image(s) to edit / match (repeatable) — uses the edits endpoint
      --mask <png>          Optional mask for --ref edits (transparent = area to change)
  -m, --model <name>        Override OPENAI_IMAGE_MODEL (default gpt-image-2.5-sunburst — most precise;
                            gpt-image-2.5-flare is the faster alternative)
      --n <count>           Number of images (default 1)
      --list-models         Show image models available to your API key`);
  process.exit(0);
}

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY is not set. Add it to the .env file in the project root (see .env.example).');
  process.exit(1);
}
const headers = { Authorization: `Bearer ${apiKey}` };

async function fail(res) {
  let msg = `${res.status} ${res.statusText}`;
  try {
    const body = await res.json();
    if (body?.error?.message) msg += ` — ${body.error.message}`;
  } catch {}
  console.error(`OpenAI API error: ${msg}`);
  process.exit(1);
}

if (opts['list-models']) {
  const res = await fetch('https://api.openai.com/v1/models', { headers });
  if (!res.ok) await fail(res);
  const { data } = await res.json();
  const image = data.map((m) => m.id).filter((id) => /image|dall-e/i.test(id)).sort();
  console.log(image.length ? image.join('\n') : 'No image models found for this key.');
  process.exit(0);
}

const prompt = opts.prompt ?? positionals.join(' ').trim();
if (!prompt) {
  console.error('Please provide a prompt. Run with --help for usage.');
  process.exit(1);
}

const model = opts.model || process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2.5-sunburst';
const out = resolve(opts.out || `generated/${new Date().toISOString().replace(/[:.]/g, '-')}.png`);
const ext = extname(out).slice(1).toLowerCase();
const output_format = ext === 'jpg' ? 'jpeg' : ['png', 'webp', 'jpeg'].includes(ext) ? ext : 'png';
const n = Number(opts.n) || 1;

const mime = { png: 'image/png', webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg' };
const fileBlob = (path) =>
  new Blob([readFileSync(path)], { type: mime[extname(path).slice(1).toLowerCase()] || 'application/octet-stream' });

let res;
const started = Date.now();
console.log(`Generating with ${model} (${opts.size}, ${opts.quality})…`);

if (opts.ref?.length) {
  const form = new FormData();
  form.append('model', model);
  form.append('prompt', prompt);
  form.append('size', opts.size);
  form.append('quality', opts.quality);
  form.append('background', opts.background);
  form.append('output_format', output_format);
  form.append('n', String(n));
  for (const ref of opts.ref) form.append('image[]', fileBlob(ref), basename(ref));
  if (opts.mask) form.append('mask', fileBlob(opts.mask), basename(opts.mask));
  res = await fetch('https://api.openai.com/v1/images/edits', { method: 'POST', headers, body: form });
} else {
  res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt, size: opts.size, quality: opts.quality, background: opts.background, output_format, n }),
  });
}

if (!res.ok) await fail(res);
const { data, usage } = await res.json();

mkdirSync(dirname(out), { recursive: true });
data.forEach((img, i) => {
  const path = n > 1 ? out.replace(/(\.\w+)$/, `-${i + 1}$1`) : out;
  writeFileSync(path, Buffer.from(img.b64_json, 'base64'));
  console.log(`Saved ${path}`);
  if (img.revised_prompt) console.log(`  revised prompt: ${img.revised_prompt}`);
});
console.log(`Done in ${((Date.now() - started) / 1000).toFixed(1)}s${usage?.total_tokens ? ` · ${usage.total_tokens} tokens` : ''}`);
