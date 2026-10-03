// Tiny scroll engine shared by the /v1 to /v5 directions. No animation library: one passive scroll
// listener, one rAF per frame, and CSS variables that each direction styles its own way.
//
// <html> gets class "m" (motion) or "rm" (reduced motion) from an inline script in the layout.
// With "rm", nothing is pinned or scrubbed: elements with .fade simply fade in.

export const motion = () => document.documentElement.classList.contains('m');
export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const ease = (t: number) => 1 - Math.pow(1 - t, 3);

const subs: Array<() => void> = [];
let queued = false;
const flush = () => {
  queued = false;
  for (const fn of subs) fn();
};
const request = () => {
  if (!queued) {
    queued = true;
    requestAnimationFrame(flush);
  }
};

/** Run fn on every scroll/resize frame (and once now). */
export function onFrame(fn: () => void) {
  if (!subs.length) {
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
  }
  subs.push(fn);
  fn();
}

/** 0 when a tall section's top reaches the viewport top, 1 when its bottom reaches the viewport bottom. */
export function pinProgress(el: Element) {
  const r = el.getBoundingClientRect();
  const travel = r.height - innerHeight;
  return travel > 0 ? clamp(-r.top / travel) : r.top < 0 ? 1 : 0;
}

/** 0 when el's top is at `start` (fraction of viewport height), 1 when it reaches `end`. */
export function viewProgress(el: Element, start = 0.9, end = 0.45) {
  const r = el.getBoundingClientRect();
  return clamp((innerHeight * start - r.top) / (innerHeight * (start - end)));
}

const last = new WeakMap<HTMLElement, number>();
function setP(el: HTMLElement, v: number) {
  const q = Math.round(v * 1000) / 1000;
  if (last.get(el) !== q) {
    last.set(el, q);
    el.style.setProperty('--p', String(q));
  }
}

/** Resolve a run of words by progress t (0..1), word by word with a soft leading edge. */
export function paintWords(words: HTMLElement[], t: number, soft = 1.6) {
  const head = t * (words.length + soft);
  words.forEach((w, i) => setP(w, clamp((head - i) / soft)));
}

/**
 * The problem-section timeline. Every line gets an equal share of the scroll, its words resolve in
 * the first 70% of that share, and the final `hold` fraction of the section keeps the last line
 * on screen for a beat. Returns per-line progress so each direction can move lines its own way.
 */
export function problemTimeline(section: HTMLElement, lineSel = '[data-line]', hold = 0.18, paint = true) {
  const lines = Array.from(section.querySelectorAll<HTMLElement>(lineSel));
  const words = lines.map((l) => Array.from(l.querySelectorAll<HTMLElement>('.w')));
  const n = lines.length;
  return (p: number) => {
    const t = clamp(p / (1 - hold));
    const lp = lines.map((_, i) => clamp((t * n - i) / 0.7));
    // Pass paint = false when a page animates the words itself (time-based) instead of scrubbing them.
    if (paint) lp.forEach((v, i) => paintWords(words[i], v));
    // Continuous position along the sequence, e.g. 3.4 = line 4 of 11, 40% resolved.
    const pos = clamp(t * n, 0, n);
    return { lines, lp, pos, t, p };
  };
}

/** Scrub a block's words as it crosses the viewport (used for the Section 4 closing lines). */
export function scrubOnView(el: HTMLElement, start = 0.92, end = 0.5) {
  const words = Array.from(el.querySelectorAll<HTMLElement>('.w'));
  onFrame(() => paintWords(words, viewProgress(el, start, end)));
}

/** Add .in to .fade elements once they enter the viewport. */
export function fades(sel = '.fade') {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll(sel).forEach((el) => io.observe(el));
}

/** Count [data-count] numbers up from zero once, when their band enters the viewport. */
export function countUp(band: Element, duration = 1500, onStart?: () => void) {
  const nums = Array.from(band.querySelectorAll<HTMLElement>('[data-count]'));
  if (!motion()) return;
  const render = (el: HTMLElement, v: number) =>
    (el.textContent = (el.dataset.prefix || '') + Math.round(v).toLocaleString('en-US'));
  nums.forEach((el) => render(el, 0));
  const io = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      onStart?.();
      const t0 = performance.now();
      const step = (now: number) => {
        const k = ease(clamp((now - t0) / duration));
        nums.forEach((el) => render(el, Number(el.dataset.count) * k));
        if (k < 1) requestAnimationFrame(step);
        else band.classList.add('counted');
      };
      requestAnimationFrame(step);
    },
    { threshold: 0.35 },
  );
  io.observe(band);
}
