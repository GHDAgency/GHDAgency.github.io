import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// Cursor spotlight on cards — cheap, and fine to keep even with reduced motion.
document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// FAQ accordion (works with or without motion).
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
  root.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls')!)!;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      // Close others for a tidy single-open accordion.
      root.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger][aria-expanded="true"]').forEach((other) => {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(other.getAttribute('aria-controls')!)!;
        reduceMotion ? (p.style.height = '0px') : gsap.to(p, { height: 0, duration: 0.45, ease: 'expo.out' });
      });
      btn.setAttribute('aria-expanded', String(!open));
      if (reduceMotion) {
        panel.style.height = open ? '0px' : 'auto';
      } else {
        gsap.to(panel, { height: open ? 0 : 'auto', duration: 0.55, ease: 'expo.out' });
      }
    });
  });
});

if (!reduceMotion) {
  // ---- Smooth scrolling -------------------------------------------------
  const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  (window as any).lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -90 });
    });
  });

  // ---- Split headline words ---------------------------------------------
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const walk = (node: Node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent!.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.append(part);
              return;
            }
            const outer = document.createElement('span');
            outer.className = 'inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]';
            const inner = document.createElement('span');
            inner.className = 'split-word inline-block';
            inner.textContent = part;
            outer.append(inner);
            frag.append(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const elChild = child as HTMLElement;
          // Gradient text must stay on the word span, or background-clip breaks.
          if (elChild.classList.contains('text-gradient')) {
            elChild.classList.remove('text-gradient');
            walk(elChild);
            elChild.querySelectorAll('.split-word').forEach((w) => w.classList.add('text-gradient'));
          } else walk(elChild);
        }
      });
    };
    el.setAttribute('aria-label', el.textContent!.replace(/\s+/g, ' ').trim());
    walk(el);
    el.querySelectorAll('.split-word').forEach((w) => w.setAttribute('aria-hidden', 'true'));
    gsap.set(el, { opacity: 1 });
    const words = el.querySelectorAll('.split-word');
    const inHero = el.closest('[data-hero]');
    gsap.from(words, {
      yPercent: 115,
      rotate: 4,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.045,
      delay: inHero ? 0.15 : 0,
      scrollTrigger: inHero ? undefined : { trigger: el, start: 'top 85%' },
    });
  });

  // ---- Reveal on scroll --------------------------------------------------
  const from = (kind: string | undefined): gsap.TweenVars => {
    switch (kind) {
      case 'left': return { x: -48 };
      case 'right': return { x: 48 };
      case 'scale': return { scale: 0.92 };
      case 'fade': return {};
      default: return { y: 40 };
    }
  };

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const inHero = el.closest('[data-hero]');
    gsap.fromTo(
      el,
      { opacity: 0, ...from(el.dataset.reveal) },
      {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: 1.1,
        ease: 'expo.out',
        delay: Number(el.dataset.delay || 0) + (inHero ? 0.35 : 0),
        scrollTrigger: inHero ? undefined : { trigger: el, start: 'top 88%' },
      },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((el) => {
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: Number(el.dataset.revealStagger) || 0.08,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      },
    );
  });

  // ---- Count-up numbers --------------------------------------------------
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: end,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => (el.textContent = Math.round(obj.v).toLocaleString()),
    });
  });

  // ---- Parallax ----------------------------------------------------------
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax) || 0.15;
    gsap.fromTo(
      el,
      { yPercent: -amount * 100 },
      {
        yPercent: amount * 100,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  // ---- Draw SVG paths as you scroll --------------------------------------
  document.querySelectorAll<SVGPathElement>('[data-draw]').forEach((path) => {
    const len = path.getTotalLength();
    gsap.fromTo(
      path,
      { strokeDasharray: len, strokeDashoffset: len },
      {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: path.closest('section') ?? path, start: 'top 75%', end: 'bottom 60%', scrub: 1 },
      },
    );
  });

  if (finePointer) {
    // ---- Magnetic buttons ------------------------------------------------
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
      });
      el.addEventListener('pointerleave', () => {
        xTo(0);
        yTo(0);
      });
    });

    // ---- 3D tilt cards ---------------------------------------------------
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
      gsap.set(el, { transformPerspective: 1000 });
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
      });
      el.addEventListener('pointerleave', () => {
        rx(0);
        ry(0);
      });
    });

    // ---- Hero glow follows the cursor ------------------------------------
    const glow = document.querySelector<HTMLElement>('[data-cursor-glow]');
    if (glow) {
      const gx = gsap.quickTo(glow, 'x', { duration: 1.2, ease: 'power3.out' });
      const gy = gsap.quickTo(glow, 'y', { duration: 1.2, ease: 'power3.out' });
      window.addEventListener('pointermove', (e) => {
        gx(e.clientX - window.innerWidth / 2);
        gy(e.clientY - window.innerHeight / 3);
      });
    }
  }

  (window as any).__motionReady = true;
  // Images loading late can shift layout; recalc trigger positions once everything is in.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
