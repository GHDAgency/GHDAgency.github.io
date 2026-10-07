// "Who we work with" emblems: brushed-silver 3D art with a cyan rim light, supplied by the owner.
// Each is a transparent WebP (public/media/industries) that includes its floating glow underneath.
const files = ['auto', 'optometry', 'aesthetics', 'trades'];
const alts = ['Auto dealerships', 'Optometry and vision care', 'Elective aesthetics', 'Trades and home services'];

export function industryIcon(i: number) {
  const n = i % files.length;
  return `<img class="ind" src="/media/industries/${files[n]}.webp" width="480" height="480" alt="${alts[n]}" loading="lazy" decoding="async" />`;
}

/** Kept for the page template; the emblems no longer need shared SVG gradients. */
export const industryDefs = '';
