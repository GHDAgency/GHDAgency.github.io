// Fine-line industry icons for "Who we work with". Each draws in one line, then ends in the GHD swoop.
// viewBox 0 0 120 120. Lines use currentColor; the swoop is filled with the champagne gradient #ind-acc.
const f = (n: number) => +n.toFixed(2);
const pt = (cx: number, cy: number, r: number, deg: number) => [
  f(cx + r * Math.cos((deg * Math.PI) / 180)),
  f(cy - r * Math.sin((deg * Math.PI) / 180)),
];
const line = (d: string, cls = '') => `<path pathLength="1" class="ln ${cls}" d="${d}"/>`;

// Tapered swoop: a crescent built from two curves that share both ends.
function swoop(x0: number, y0: number, x1: number, y1: number, bend: number, w: number) {
  const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
  const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
  const nx = -dy / len, ny = dx / len;
  const c1 = `${f(mx + nx * bend)} ${f(my + ny * bend)}`;
  const c2 = `${f(mx + nx * (bend + w))} ${f(my + ny * (bend + w))}`;
  return `<path class="sw" style="transform-origin:${x0}px ${y0}px" d="M${x0} ${y0}Q${c1} ${x1} ${y1}Q${c2} ${x0} ${y0}Z"/>`;
}

// Auto Dealerships: the needle sweeps toward the red line.
function gauge() {
  const cx = 60, cy = 68, r = 38;
  const [sx, sy] = pt(cx, cy, r, 215), [ex, ey] = pt(cx, cy, r, -35);
  let ticks = '';
  for (let a = 215; a >= -35; a -= 25) {
    const red = a <= 15;
    const [x0, y0] = pt(cx, cy, red ? 30 : 32, a), [x1, y1] = pt(cx, cy, 35, a);
    ticks += line(`M${x0} ${y0}L${x1} ${y1}`, red ? 'acl' : '');
  }
  const [rx0, ry0] = pt(cx, cy, 27, 15), [rx1, ry1] = pt(cx, cy, 27, -35);
  const [tx, ty] = pt(cx, cy, 31, 22);
  return `${line(`M${sx} ${sy}A${r} ${r} 0 1 1 ${ex} ${ey}`)}${ticks}
${line(`M${rx0} ${ry0}A27 27 0 0 1 ${rx1} ${ry1}`, 'acl')}
<circle pathLength="1" class="ln" cx="${cx}" cy="${cy}" r="3.2"/>
<path class="needle" style="transform-origin:${cx}px ${cy}px" d="M${cx} ${cy}L${tx} ${ty}"/>
${swoop(tx, ty, 112, 14, -10, 5)}`;
}

// Optometry & Vision Care: iris rings slide into focus; the outer corner lifts like a liner wing.
function eye() {
  const cx = 54, cy = 66;
  return `${line('M12 66Q54 26 96 62Q54 104 12 66Z')}
<circle class="ghost g1" cx="${cx - 5}" cy="${cy + 2}" r="17"/>
<circle class="ghost g2" cx="${cx + 4}" cy="${cy - 3}" r="17"/>
<circle pathLength="1" class="ln" cx="${cx}" cy="${cy}" r="17"/>
<circle pathLength="1" class="ln" cx="${cx}" cy="${cy}" r="6.5"/>
${line(`M${cx - 10} ${cy - 7}A12 12 0 0 1 ${cx - 3} ${cy - 11.5}`)}
${swoop(96, 62, 114, 30, -6, 4.5)}`;
}

// Elective Aesthetics: the golden-ratio spiral, with its squares as faint guides.
function golden() {
  const dirs = ['right', 'up', 'left', 'down'];
  const sizes = [1, 1, 2, 3, 5, 8, 13];
  let [x0, y0, x1, y1] = [0, 0, 1, 1];
  const squares: [number, number, number][] = [[0, 0, 1]];
  for (let i = 1; i < sizes.length; i++) {
    const d = dirs[(i - 1) % 4], s = sizes[i];
    if (d === 'right') { squares.push([x1, y0, s]); x1 += s; }
    if (d === 'up') { squares.push([x0, y0 - s, s]); y0 -= s; }
    if (d === 'left') { squares.push([x0 - s, y0, s]); x0 -= s; }
    if (d === 'down') { squares.push([x0, y1, s]); y1 += s; }
  }
  const W = x1 - x0, H = y1 - y0, k = 84 / Math.max(W, H);
  const ox = 60 - (W * k) / 2, oy = 62 - (H * k) / 2;
  const X = (x: number) => f(ox + (x - x0) * k), Y = (y: number) => f(oy + (y - y0) * k);
  const K = 0.5523; // cubic approximation of a quarter circle
  const pat = ['down', ...sizes.slice(1).map((_, i) => dirs[i % 4])];
  let d = '', guides = '', end = [0, 0];
  squares.forEach(([x, y, s], i) => {
    guides += `<rect class="ghost" x="${X(x)}" y="${Y(y)}" width="${f(s * k)}" height="${f(s * k)}"/>`;
    let A = [0, 0], B = [0, 0], C = [0, 0];
    if (pat[i] === 'right') { A = [x, y + s]; B = [x + s, y]; C = [x, y]; }
    if (pat[i] === 'up') { A = [x + s, y + s]; B = [x, y]; C = [x, y + s]; }
    if (pat[i] === 'left') { A = [x + s, y]; B = [x, y + s]; C = [x + s, y + s]; }
    if (pat[i] === 'down') { A = [x, y]; B = [x + s, y + s]; C = [x + s, y]; }
    const c1 = [A[0] + K * (B[0] - C[0]), A[1] + K * (B[1] - C[1])];
    const c2 = [B[0] + K * (A[0] - C[0]), B[1] + K * (A[1] - C[1])];
    if (!d) d = `M${X(A[0])} ${Y(A[1])}`;
    d += `C${X(c1[0])} ${Y(c1[1])} ${X(c2[0])} ${Y(c2[1])} ${X(B[0])} ${Y(B[1])}`;
    end = [X(B[0]), Y(B[1])];
  });
  // Turned landscape; the outer end then sits upper right, where the swoop takes over.
  const ex = f(60 - (end[1] - 62)), ey = f(62 + (end[0] - 60));
  return `<g transform="rotate(90 60 62)">${guides}${line(d)}</g>
${swoop(ex, ey, 114, 16, -6, 4.5)}`;
}

// Trades & Home Services: a house at night, one window lit. Someone is about to call.
function house() {
  return `${line('M14 98H106')}
${line('M26 98V58L60 30L94 58V98')}
${line('M50 98V74H70V98')}
<rect class="lit" x="34" y="62" width="11" height="11" rx="1"/>
${line('M75 62h11v11h-11z')}
${swoop(60, 30, 112, 12, -8, 5)}`;
}

const art = [gauge, eye, golden, house];

export function industryIcon(i: number) {
  return `<svg class="ind" viewBox="0 0 120 120" aria-hidden="true">${art[i % art.length]()}</svg>`;
}

/** Shared gradient for every swoop; render once per page. */
export const industryDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="ind-acc" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#b59a63"/><stop offset="1" stop-color="#e6d3a3"/></linearGradient></defs></svg>`;
