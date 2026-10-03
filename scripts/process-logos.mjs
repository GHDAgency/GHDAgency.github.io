// Turns every client logo in public/logos into one monochrome tone for the design-direction
// marquees (/v1 to /v5). Runs automatically before `npm run dev` and `npm run build`, so dropping a
// new file into public/logos is all it takes to add it to the row.
//
// Logos arrive in every shape: transparent PNGs, AVIFs, JPGs on a white box, dark app tiles.
// For each one we work out what counts as "ink" (by alpha, or by distance from the background
// colour sampled at the corners), paint that ink pure white, trim the empty space and save a WebP.
// The page then sets opacity, so every logo reads as the same soft white.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'public/logos';
const OUT = 'public/logos-mono';
const OUT_HEIGHT = 120; // px; displayed at 28-60px, so this stays sharp on 2x screens
const EXT = /\.(png|jpe?g|webp|avif|gif|svg|tiff?)$/i;

fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.rmSync(path.join(OUT, f));

const files = fs.existsSync(SRC) ? fs.readdirSync(SRC).filter((f) => EXT.test(f)).sort() : [];
const manifest = [];

for (const file of files) {
  const { data, info } = await sharp(path.join(SRC, file))
    .resize({ height: OUT_HEIGHT * 3, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => (y * w + x) * 4;

  // Sample a small patch in each corner to decide what the background is.
  const samples = [];
  for (const [cx, cy] of [[0, 0], [w - 3, 0], [0, h - 3], [w - 3, h - 3]]) {
    for (let dy = 0; dy < 3; dy++) for (let dx = 0; dx < 3; dx++) samples.push(px(cx + dx, cy + dy));
  }
  const avg = (c) => samples.reduce((s, i) => s + data[i + c], 0) / samples.length;
  const transparentBg = avg(3) < 128;
  const bg = [avg(0), avg(1), avg(2)];

  const out = Buffer.alloc(w * h * 4);
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = px(x, y);
      let a;
      if (transparentBg) {
        // Remap so faint drop-shadows and glows drop out while solid ink stays solid.
        a = Math.min(255, Math.max(0, ((data[i + 3] - 50) / 150) * 255));
      } else {
        const d = Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]) / 441.7;
        a = Math.min(1, d * 2.6) * data[i + 3];
      }
      out[i] = out[i + 1] = out[i + 2] = 255;
      out[i + 3] = a;
      if (a > 24) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) continue; // nothing visible

  const name = file.replace(EXT, '');
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const outFile = `${slug}.webp`;
  const buf = await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
    .resize({ height: OUT_HEIGHT, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100 })
    .toBuffer({ resolveWithObject: true });
  fs.writeFileSync(path.join(OUT, outFile), buf.data);

  const aspect = buf.info.width / buf.info.height;
  manifest.push({
    src: `/logos-mono/${outFile}`,
    width: buf.info.width,
    height: buf.info.height,
    // Wide wordmarks look bigger than compact marks at the same height; scale for equal visual weight.
    scale: +Math.min(1.35, Math.max(0.7, Math.sqrt(3 / aspect))).toFixed(3),
    // Readable alt text from the file name ("James-Hodge-Hyundai-logo" -> "James Hodge Hyundai").
    alt: name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[_-]+/g, ' ')
      .replace(/\b(logo|icon|scaled|copy|color|new|\d+)\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim(),
  });
}

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`process-logos: ${manifest.length} logo(s) -> ${OUT}`);
