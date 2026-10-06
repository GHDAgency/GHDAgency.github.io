// "Who we work with" emblems: brushed-silver 3D forms lit from above with a thin cyan rim light.
// viewBox 0 0 120 120. Gradients and the brushed-metal filter live in industryDefs (render once per page).
const body = 'fill="url(#ind-silver)" filter="url(#ind-brush)"';
const dark = 'fill="url(#ind-shade)" filter="url(#ind-brush)"';
const rim = 'fill="none" stroke="#00e5e8" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"';
const spec = 'fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.75"';

// Auto Dealerships: a coupe in profile, glass cut dark, hubs lit.
function car() {
  const shell = 'M8 80C8 72 14 70 22 68L38 55C44 50 52 48 62 48H76C84 48 90 53 96 61L106 65C113 67 114 73 114 80V86H8Z';
  return `<ellipse cx="61" cy="100" rx="46" ry="5" fill="#00e5e8" opacity="0.13"/>
<path d="${shell}" ${body}/>
<path d="M40 58L47 53C51 51 56 50 62 50H75C80 50 84 53 88 59H40Z" fill="#0b1013" opacity="0.92"/>
<path d="M62 50V59" stroke="#58626a" stroke-width="1.6"/>
<path d="M8 80H114" stroke="#3b444a" stroke-width="1.2"/>
<path d="${shell}" ${rim}/>
<path d="M22 68L38 55C44 50 52 48 62 48H76" ${spec}/>
<g><circle cx="33" cy="86" r="12.5" fill="#0b1013"/><circle cx="33" cy="86" r="9.5" ${body}/><circle cx="33" cy="86" r="4" fill="#0b1013"/><circle cx="33" cy="86" r="2" fill="#00ffff"/></g>
<g><circle cx="90" cy="86" r="12.5" fill="#0b1013"/><circle cx="90" cy="86" r="9.5" ${body}/><circle cx="90" cy="86" r="4" fill="#0b1013"/><circle cx="90" cy="86" r="2" fill="#00ffff"/></g>`;
}

// Optometry & Vision Care: a sculpted eye; the iris is a lit cyan lens.
function eye() {
  const lid = 'M6 62C26 32 94 32 114 62C94 92 26 92 6 62Z';
  return `<ellipse cx="60" cy="102" rx="40" ry="4.5" fill="#00e5e8" opacity="0.12"/>
<path d="${lid}" ${body}/>
<path d="M17 62C34 42 86 42 103 62C86 82 34 82 17 62Z" fill="#0b1013"/>
<circle cx="60" cy="62" r="19" fill="url(#ind-iris)"/>
<circle cx="60" cy="62" r="19" ${rim} stroke-width="1.4"/>
<circle cx="60" cy="62" r="8" fill="#04080a"/>
<ellipse cx="53" cy="55" rx="4.5" ry="3" fill="#fff" opacity="0.85"/>
<path d="${lid}" ${rim}/>
<path d="M14 56C34 36 86 36 106 56" ${spec}/>`;
}

// Elective Aesthetics: a cut gem, facets catching the light.
function gem() {
  return `<ellipse cx="60" cy="104" rx="34" ry="4.5" fill="#00e5e8" opacity="0.12"/>
<path d="M34 28H86L106 54L60 104L14 54Z" ${body}/>
<path d="M14 54H106L60 104Z" ${dark}/>
<path d="M34 28L44 54L60 28L76 54L86 28" fill="#f6fafb" opacity="0.55"/>
<path d="M44 54L60 104L76 54Z" fill="#00ffff" opacity="0.28"/>
<path d="M34 28L44 54L14 54M86 28L76 54L106 54M60 28L44 54L60 104L76 54L60 28M44 54H76" fill="none" stroke="#1a2024" stroke-width="0.9" opacity="0.7"/>
<path d="M34 28H86L106 54L60 104L14 54Z" ${rim}/>
<path d="M36 31H84" ${spec}/>`;
}

// Trades & Home Services: a house at night, one window lit. Someone is about to call.
function house() {
  return `<ellipse cx="60" cy="104" rx="42" ry="4.5" fill="#00e5e8" opacity="0.12"/>
<path d="M22 56H98V100H22Z" ${dark}/>
<path d="M12 58L60 16L108 58Z" ${body}/>
<path d="M60 16L108 58H96L60 26Z" fill="#fff" opacity="0.35"/>
<rect x="64" y="70" width="20" height="30" rx="1.5" fill="#0b1013"/>
<rect x="32" y="68" width="22" height="20" rx="1.5" fill="#bffcff" style="filter:drop-shadow(0 0 6px #00e5e8) drop-shadow(0 0 14px rgb(0 255 255 / .55))"/>
<path d="M43 68V88M32 78H54" stroke="#4b565d" stroke-width="1.3"/>
<path d="M12 58L60 16L108 58" ${rim}/>
<path d="M18 58L60 21" ${spec}/>`;
}

const art = [car, eye, gem, house];

export function industryIcon(i: number) {
  return `<svg class="ind" viewBox="0 0 120 120" aria-hidden="true">${art[i % art.length]()}</svg>`;
}

/** Shared gradients and the brushed-metal grain; render once per page. */
export const industryDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<linearGradient id="ind-silver" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stop-color="#f7fafb"/><stop offset="0.28" stop-color="#b9c2c8"/><stop offset="0.55" stop-color="#6c767d"/><stop offset="0.78" stop-color="#cdd5da"/><stop offset="1" stop-color="#5a646b"/></linearGradient>
<linearGradient id="ind-shade" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#9aa4ab"/><stop offset="0.6" stop-color="#48515a"/><stop offset="1" stop-color="#2b3238"/></linearGradient>
<radialGradient id="ind-iris" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#b8ffff"/><stop offset="0.45" stop-color="#00c8cc"/><stop offset="1" stop-color="#004b4f"/></radialGradient>
<filter id="ind-brush" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.9" numOctaves="2" seed="4" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.05" result="g"/><feComposite in="g" in2="SourceAlpha" operator="in" result="gg"/><feBlend in="SourceGraphic" in2="gg" mode="multiply"/></filter>
</defs></svg>`;
