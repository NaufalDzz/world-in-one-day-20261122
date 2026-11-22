// Original high-contrast editorial SVG illustrations & light-toned vector world locator map
// for Sunday 22 November 2026 — designed to stay sharp and unmistakable even at 300px width.

export function renderHeroArt(key) {
  switch (key) {
    case 'cop31':
      return `<svg viewBox="0 0 320 104" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="copSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#CBE0EE"/>
            <stop offset="68%" stop-color="#EBF2F6"/>
            <stop offset="100%" stop-color="#F7D8B5"/>
          </linearGradient>
          <linearGradient id="copSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#28587B"/>
            <stop offset="100%" stop-color="#173852"/>
          </linearGradient>
        </defs>
        <rect width="320" height="104" fill="url(#copSky)"/>
        <!-- Taurus Mountains silhouette & Mediterranean coastline -->
        <path d="M0 78 L36 58 L72 68 L114 52 L156 66 L204 54 L252 66 L296 56 L320 64 L320 82 L0 82 Z" fill="#89A8BF" opacity="0.65"/>
        <rect x="0" y="79" width="320" height="25" fill="url(#copSea)"/>
        <line x1="0" y1="79" x2="320" y2="79" stroke="#FFF4E0" stroke-width="1" opacity="0.7"/>
        <!-- Antalya summit plenary hall -->
        <g transform="translate(20,30)">
          <rect x="6" y="25" width="90" height="24" fill="#F6EFE2" stroke="#1E354D" stroke-width="1.4"/>
          <path d="M14 25 Q51 -2 88 25 Z" fill="#DDD2BE" stroke="#1E354D" stroke-width="1.4"/>
          <g fill="#2B4866">
            <rect x="14" y="30" width="7" height="19"/><rect x="27" y="30" width="7" height="19"/>
            <rect x="40" y="30" width="7" height="19"/><rect x="53" y="30" width="9" height="19"/>
            <rect x="68" y="30" width="7" height="19"/><rect x="81" y="30" width="7" height="19"/>
          </g>
        </g>
        <!-- Torn "Antalya Pact" draft split in two by bold crimson fracture -->
        <g transform="translate(130,13)">
          <rect x="0" y="0" width="62" height="68" rx="2" fill="#FFFFFF" stroke="#152438" stroke-width="1.6"/>
          <rect x="8" y="9" width="34" height="4.5" fill="#152438"/>
          <rect x="8" y="18" width="46" height="2.6" fill="#7D8C9E"/>
          <rect x="8" y="25" width="42" height="2.6" fill="#7D8C9E"/>
          <rect x="8" y="32" width="46" height="2.6" fill="#7D8C9E"/>
          <rect x="8" y="39" width="38" height="2.6" fill="#7D8C9E"/>
          <rect x="8" y="46" width="44" height="2.6" fill="#7D8C9E"/>
          <rect x="8" y="54" width="32" height="2.6" fill="#7D8C9E"/>
          <path d="M36 0 L26 20 L39 34 L24 50 L34 68" fill="none" stroke="#B81D24" stroke-width="3.6" stroke-linejoin="round"/>
          <path d="M36 0 L26 20 L39 34 L24 50 L34 68" fill="none" stroke="#FFF7E0" stroke-width="1"/>
        </g>
        <!-- Broken wooden gavel & impact sparks -->
        <g transform="translate(204,44)">
          <rect x="4" y="27" width="42" height="8" rx="1.5" fill="#633519" stroke="#221006" stroke-width="1.1"/>
          <g transform="rotate(-24 25 14)">
            <rect x="11" y="5" width="28" height="13" rx="2" fill="#8C4B24" stroke="#221006" stroke-width="1.2"/>
            <rect x="22" y="18" width="6" height="26" rx="1.5" fill="#633519" stroke="#221006" stroke-width="0.9"/>
          </g>
          <path d="M9 11 L2 4 M15 4 L13 -4 M41 7 L48 0" stroke="#B81D24" stroke-width="2.1" stroke-linecap="round"/>
        </g>
        <!-- Overtime clock + red thermometer (clear of top-right NO DEAL · 49H badge) -->
        <g transform="translate(256,42)">
          <circle cx="0" cy="0" r="12.5" fill="#FFFFFF" stroke="#152438" stroke-width="2"/>
          <line x1="0" y1="0" x2="0" y2="-7.5" stroke="#152438" stroke-width="2" stroke-linecap="round"/>
          <line x1="0" y1="0" x2="6.5" y2="3.5" stroke="#B81D24" stroke-width="2" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="2" fill="#B81D24"/>
        </g>
        <g transform="translate(289,26)">
          <rect x="0" y="0" width="11.5" height="50" rx="5.7" fill="#FFFFFF" stroke="#152438" stroke-width="1.6"/>
          <rect x="3" y="9" width="5.5" height="41" rx="2.7" fill="#C92229"/>
          <circle cx="5.7" cy="52" r="8.8" fill="#C92229" stroke="#152438" stroke-width="1.6"/>
          <line x1="-5" y1="19" x2="-1" y2="19" stroke="#152438" stroke-width="1.5"/>
          <line x1="-5" y1="31" x2="-1" y2="31" stroke="#152438" stroke-width="1.5"/>
        </g>
      </svg>`;

    case 'ukraine':
      return `<svg viewBox="0 0 320 104" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="uaSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0B1528"/>
            <stop offset="68%" stop-color="#1A2E4F"/>
            <stop offset="100%" stop-color="#2D4160"/>
          </linearGradient>
          <linearGradient id="uaBeam" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#FFE680" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#FFE680" stop-opacity="0"/>
          </linearGradient>
          <radialGradient id="uaBlast" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFF5BA"/>
            <stop offset="48%" stop-color="#F28C28" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="#A81E24" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="320" height="104" fill="url(#uaSky)"/>
        <polygon points="22,104 82,6 118,6 42,104" fill="url(#uaBeam)"/>
        <polygon points="116,104 42,8 70,8 130,104" fill="url(#uaBeam)" opacity="0.5"/>
        <path d="M28 96 Q84 44 142 30" fill="none" stroke="#7AEBEB" stroke-width="1.5" stroke-dasharray="3.5 3"/>
        <path d="M88 98 Q128 54 170 28" fill="none" stroke="#7AEBEB" stroke-width="1.5" stroke-dasharray="3.5 3" opacity="0.8"/>
        <circle cx="98" cy="34" r="5.5" fill="#FDE047"/>
        <circle cx="98" cy="34" r="12" fill="#FDE047" opacity="0.25"/>
        <circle cx="146" cy="24" r="4.5" fill="#FDE047"/>
        <!-- Crisp delta-wing drones -->
        <g fill="#F1F5F9" stroke="#081120" stroke-width="0.7">
          <polygon points="48,27 66,21 60,29 66,35"/>
          <polygon points="116,46 134,40 128,48 134,54"/>
          <polygon points="154,37 172,31 166,39 172,45"/>
          <polygon points="74,56 89,51 84,57 89,62"/>
        </g>
        <rect x="0" y="90" width="320" height="14" fill="#0B1320"/>
        <!-- Five-storey Dymer residential block with dramatic collapse -->
        <g transform="translate(182,22)">
          <rect x="0" y="6" width="84" height="64" fill="#324157" stroke="#0E1726" stroke-width="1.3"/>
          <rect x="-2" y="3" width="88" height="4.5" fill="#475A75"/>
          <g>
            <rect x="7" y="13" width="10" height="7" fill="#F6C85F"/><rect x="22" y="13" width="10" height="7" fill="#182231"/><rect x="37" y="13" width="10" height="7" fill="#F6C85F"/><rect x="52" y="13" width="10" height="7" fill="#182231"/>
            <rect x="7" y="24" width="10" height="7" fill="#182231"/><rect x="22" y="24" width="10" height="7" fill="#F6C85F"/><rect x="37" y="24" width="10" height="7" fill="#182231"/><rect x="52" y="24" width="10" height="7" fill="#EA9B42"/>
            <rect x="7" y="35" width="10" height="7" fill="#F6C85F"/><rect x="22" y="35" width="10" height="7" fill="#182231"/><rect x="37" y="35" width="10" height="7" fill="#F6C85F"/><rect x="52" y="35" width="10" height="7" fill="#182231"/>
            <rect x="7" y="46" width="10" height="7" fill="#182231"/><rect x="22" y="46" width="10" height="7" fill="#F6C85F"/><rect x="37" y="46" width="10" height="7" fill="#182231"/><rect x="52" y="46" width="10" height="7" fill="#182231"/>
            <rect x="7" y="57" width="10" height="7" fill="#182231"/><rect x="22" y="57" width="10" height="7" fill="#182231"/><rect x="37" y="57" width="10" height="7" fill="#F6C85F"/>
          </g>
          <path d="M68 6 L98 6 L93 18 L81 27 L99 40 L87 52 L112 70 L68 70 Z" fill="#182230"/>
          <circle cx="90" cy="40" r="26" fill="url(#uaBlast)"/>
          <polygon points="68,70 85,54 100,58 118,70" fill="#525D6E"/>
        </g>
        <path d="M268 48 Q262 28 280 14 Q298 2 320 8 L320 36 Q298 36 286 50 Z" fill="#445063" opacity="0.72"/>
      </svg>`;

    case 'bahrain':
      return `<svg viewBox="0 0 320 104" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bhSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E2B45"/>
            <stop offset="56%" stop-color="#6A4554"/>
            <stop offset="100%" stop-color="#E08B52"/>
          </linearGradient>
          <linearGradient id="bhSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1F3B57"/>
            <stop offset="100%" stop-color="#0E1D2E"/>
          </linearGradient>
          <linearGradient id="bhFlame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#FFF2A8"/>
            <stop offset="48%" stop-color="#F48C06"/>
            <stop offset="100%" stop-color="#C1121F"/>
          </linearGradient>
        </defs>
        <rect width="320" height="104" fill="url(#bhSky)"/>
        <rect x="0" y="79" width="320" height="25" fill="url(#bhSea)"/>
        <rect x="0" y="73" width="320" height="7" fill="#3F3435"/>
        <path d="M168 57 Q182 28 216 17 Q254 5 298 14 L304 34 Q260 27 228 40 Q202 50 184 61 Z" fill="#2A2630" opacity="0.78"/>
        <!-- Sitra storage tanks & blaze -->
        <g transform="translate(114,38)">
          <rect x="0" y="15" width="34" height="21" rx="2" fill="#E9E3D6" stroke="#242938" stroke-width="1.2"/>
          <rect x="42" y="10" width="44" height="26" rx="2" fill="#DDD6C7" stroke="#242938" stroke-width="1.2"/>
          <rect x="94" y="17" width="32" height="19" rx="2" fill="#E9E3D6" stroke="#242938" stroke-width="1.2"/>
          <rect x="134" y="2" width="6" height="34" fill="#4E5869"/>
          <rect x="146" y="8" width="5" height="28" fill="#4E5869"/>
          <path d="M51 10 Q58 -12 67 2 Q74 -16 80 6 Q84 -2 84 10 Z" fill="url(#bhFlame)"/>
          <path d="M9 15 Q15 1 21 8 Q25 -1 28 15 Z" fill="url(#bhFlame)" opacity="0.9"/>
        </g>
        <ellipse cx="180" cy="89" rx="40" ry="6" fill="#F48C06" opacity="0.4"/>
        <!-- Radar battery silhouette & contested waves -->
        <g transform="translate(28,42)">
          <rect x="8" y="19" width="30" height="13" rx="1.5" fill="#4C5A6B" stroke="#182230" stroke-width="1.1"/>
          <circle cx="15" cy="33" r="4.2" fill="#182230"/><circle cx="32" cy="33" r="4.2" fill="#182230"/>
          <g transform="rotate(-28 26 14)">
            <rect x="15" y="6" width="24" height="11" rx="2" fill="#8999AB" stroke="#182230" stroke-width="1.1"/>
          </g>
          <path d="M40 5 A15 15 0 0 1 48 19" fill="none" stroke="#9CEAEF" stroke-width="1.6"/>
          <path d="M45 0 A23 23 0 0 1 57 19" fill="none" stroke="#9CEAEF" stroke-width="1.3" opacity="0.68"/>
        </g>
        <path d="M310 15 Q218 4 156 32" fill="none" stroke="#FFD166" stroke-width="1.6" stroke-dasharray="4 3"/>
        <path d="M68 44 Q134 18 202 18" fill="none" stroke="#85EFEF" stroke-width="1.4" stroke-dasharray="3.5 3"/>
        <circle cx="202" cy="18" r="4.2" fill="#FFF3B0"/>
      </svg>`;

    default:
      return '';
  }
}

export function renderCardArt(key) {
  switch (key) {
    case 'hongkong':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#DCE8F2"/>
        <g fill="#7A94B0">
          <rect x="6" y="22" width="11" height="32"/><rect x="19" y="14" width="13" height="40"/>
          <rect x="34" y="28" width="9" height="26"/><rect x="116" y="19" width="11" height="35"/>
          <rect x="130" y="11" width="15" height="43"/><polygon points="130,11 137.5,2 145,11"/>
        </g>
        <rect x="52" y="27" width="54" height="27" rx="2" fill="#1C375A" stroke="#0E1E36" stroke-width="1.2"/>
        <rect x="62" y="30" width="34" height="4" rx="1" fill="#0A1424"/>
        <g transform="rotate(-9 79 18)">
          <rect x="65" y="5" width="28" height="25" rx="1.2" fill="#FFFFFF" stroke="#1C375A" stroke-width="1.2"/>
          <path d="M71 17 L77 23 L88 10" fill="none" stroke="#B81D24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>`;

    case 'cricket':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#2D864B"/>
        <rect x="0" y="0" width="156" height="13" fill="#236F3D"/>
        <polygon points="46,54 63,15 97,15 114,54" fill="#E3CE9E"/>
        <line x1="59" y1="25" x2="101" y2="25" stroke="#FFFFFF" stroke-width="1.4"/>
        <line x1="51" y1="45" x2="109" y2="45" stroke="#FFFFFF" stroke-width="1.4"/>
        <g stroke="#FFF1CE" stroke-width="2.4">
          <line x1="74" y1="25" x2="74" y2="6"/><line x1="80" y1="25" x2="80" y2="6"/><line x1="86" y1="25" x2="86" y2="6"/>
        </g>
        <line x1="72.5" y1="6" x2="87.5" y2="6" stroke="#B57B38" stroke-width="2.2"/>
        <g transform="rotate(26 42 35)">
          <rect x="38" y="16" width="7" height="24" rx="1.2" fill="#EED5A4" stroke="#755124" stroke-width="1"/>
          <rect x="40" y="5" width="3" height="11" fill="#1E2F42"/>
        </g>
        <circle cx="124" cy="27" r="9.5" fill="#B31B24" stroke="#5E0E13" stroke-width="1.2"/>
        <path d="M117 23 Q124 27 131 31" fill="none" stroke="#FFF1CE" stroke-width="1.2" stroke-dasharray="1.8 1.2"/>
      </svg>`;

    case 'f1':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#131B2E"/>
        <rect x="10" y="8" width="14" height="26" fill="#24314D"/><rect x="12" y="13" width="10" height="2.4" fill="#EF4444"/>
        <rect x="30" y="4" width="17" height="30" fill="#2C3A5C"/><rect x="33" y="10" width="11" height="2.4" fill="#FACC15"/>
        <rect x="92" y="8" width="19" height="26" fill="#24314D"/><rect x="95" y="14" width="13" height="2.4" fill="#38BDF8"/>
        <g transform="translate(122,4)">
          <rect x="0" y="0" width="28" height="20" fill="#FFF"/>
          <rect x="0" y="0" width="7" height="6.7" fill="#111"/><rect x="14" y="0" width="7" height="6.7" fill="#111"/>
          <rect x="7" y="6.7" width="7" height="6.7" fill="#111"/><rect x="21" y="6.7" width="7" height="6.7" fill="#111"/>
          <rect x="0" y="13.3" width="7" height="6.7" fill="#111"/><rect x="14" y="13.3" width="7" height="6.7" fill="#111"/>
        </g>
        <rect x="0" y="34" width="156" height="20" fill="#323844"/>
        <line x1="0" y1="35" x2="156" y2="35" stroke="#EF4444" stroke-width="1.6" stroke-dasharray="10 6"/>
        <path d="M18 41 L35 30 L72 30 L94 35 L112 38 L112 43 L18 43 Z" fill="#1D4382"/>
        <path d="M52 30 L70 30 L81 35 L50 35 Z" fill="#E63946"/>
        <rect x="14" y="28" width="11" height="4.5" fill="#FACC15"/>
        <circle cx="35" cy="43" r="5.6" fill="#0B0D12" stroke="#B0BBC9" stroke-width="1.6"/>
        <circle cx="94" cy="43" r="5.6" fill="#0B0D12" stroke="#B0BBC9" stroke-width="1.6"/>
      </svg>`;

    case 'anfield':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#1B2E48"/>
        <path d="M6 17 L150 17 L142 29 L14 29 Z" fill="#B31B24"/>
        <rect x="0" y="29" width="156" height="25" fill="#2E8548"/>
        <line x1="78" y1="29" x2="78" y2="54" stroke="#FFFFFF" stroke-width="1.1" opacity="0.75"/>
        <circle cx="78" cy="41.5" r="8" fill="none" stroke="#FFFFFF" stroke-width="1.1" opacity="0.75"/>
        <circle cx="20" cy="8" r="3.5" fill="#FEF08A"/><circle cx="136" cy="8" r="3.5" fill="#FEF08A"/>
        <rect x="42" y="18" width="60" height="22" rx="2.5" fill="#0E1726" stroke="#F8FAFC" stroke-width="1.3"/>
        <text x="72" y="33.5" text-anchor="middle" font-family="Noto Sans, Nimbus Sans, sans-serif" font-weight="800" font-size="13.5" fill="#FFFFFF">4 – 0</text>
        <rect x="114" y="18" width="13" height="19" rx="1.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.3"/>
      </svg>`;

    case 'atp':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#1E4E8C"/>
        <!-- Turin indoor hard court perspective lines -->
        <polygon points="8,54 32,20 124,20 148,54" fill="#2B6CB0" stroke="#FFFFFF" stroke-width="1.3"/>
        <line x1="20" y1="36" x2="136" y2="36" stroke="#FFFFFF" stroke-width="1.1" opacity="0.9"/>
        <line x1="78" y1="20" x2="78" y2="54" stroke="#FFFFFF" stroke-width="1" opacity="0.8"/>
        <!-- Gleaming gold ATP Finals cup -->
        <g transform="translate(65,7)">
          <path d="M5 4 L21 4 L19 17 Q13 24 7 17 Z" fill="#F4C430" stroke="#6E4E05" stroke-width="1.1"/>
          <path d="M5 7 Q0 7 0 12 Q0 16 6 16 M21 7 Q26 7 26 12 Q26 16 20 16" fill="none" stroke="#F4C430" stroke-width="1.7"/>
          <rect x="11" y="21" width="4" height="7" fill="#D9A31E"/>
          <rect x="6" y="28" width="14" height="4" rx="1" fill="#6E4E05"/>
        </g>
        <!-- Crisp tennis ball -->
        <circle cx="124" cy="27" r="9.5" fill="#D4E157" stroke="#365314" stroke-width="1.2"/>
        <path d="M118 20 Q124 27 118 34 M130 20 Q124 27 130 34" fill="none" stroke="#FFFFFF" stroke-width="1.2"/>
      </svg>`;

    case 'iranpower':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="78" height="54" fill="#314968"/>
        <rect x="78" y="0" width="78" height="54" fill="#131E30"/>
        <rect x="10" y="25" width="18" height="29" fill="#20324A"/>
        <rect x="13" y="30" width="4.5" height="4.5" fill="#FDE047"/><rect x="20" y="37" width="4.5" height="4.5" fill="#FDE047"/>
        <rect x="33" y="19" width="22" height="35" fill="#1B2A40"/>
        <rect x="37" y="24" width="4.5" height="4.5" fill="#FDE047"/><rect x="45" y="31" width="4.5" height="4.5" fill="#FDE047"/>
        <rect x="102" y="21" width="20" height="33" fill="#0B111C"/>
        <rect x="126" y="27" width="22" height="27" fill="#090E18"/>
        <g stroke="#9EB2C9" stroke-width="1.6" fill="none">
          <path d="M68 54 L78 10 L88 54 M61 20 L95 20 M64 32 L92 32 M69 32 L87 20 M87 32 L69 20"/>
          <path d="M0 18 Q36 27 61 20 M95 20 Q125 28 156 19" stroke-width="1" opacity="0.75"/>
        </g>
        <polygon points="122,9 114,22 121,22 116,33 130,18 123,18" fill="#FACC15"/>
      </svg>`;

    case 'khartoum':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sdSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6B7C91"/><stop offset="100%" stop-color="#E2B483"/>
          </linearGradient>
        </defs>
        <rect width="156" height="54" fill="url(#sdSky)"/>
        <rect x="0" y="42" width="156" height="12" fill="#785A3F"/>
        <rect x="52" y="18" width="52" height="24" fill="#F4F8FB" stroke="#23374D" stroke-width="1.2"/>
        <rect x="52" y="18" width="52" height="7" fill="#2B7AC9"/>
        <text x="72" y="24" text-anchor="middle" font-family="Noto Sans, sans-serif" font-weight="800" font-size="6.2" fill="#FFFFFF">UN</text>
        <rect x="58" y="29" width="7" height="7" fill="#2B3E52"/><rect x="69" y="29" width="7" height="7" fill="#2B3E52"/><rect x="80" y="29" width="7" height="7" fill="#2B3E52"/>
        <path d="M92 18 L104 18 L104 33 L90 26 Z" fill="#272B33"/>
        <path d="M96 20 Q112 4 134 6 Q148 9 154 19 L138 26 Q118 18 104 28 Z" fill="#323740" opacity="0.78"/>
        <rect x="14" y="30" width="28" height="12" fill="#9A7857"/>
        <polygon points="118,12 130,8 125,14 130,18" fill="#18202C"/>
      </svg>`;

    case 'cikande':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ckSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4A414A"/><stop offset="100%" stop-color="#8A6454"/>
          </linearGradient>
        </defs>
        <rect width="156" height="54" fill="url(#ckSky)"/>
        <path d="M32 26 Q54 4 94 8 Q128 4 148 22 L138 35 Q98 26 40 37 Z" fill="#3D3640" opacity="0.88"/>
        <path d="M20 54 L20 27 L41 20 L41 27 L62 20 L62 27 L83 20 L83 27 L100 32 L110 54 Z" fill="#38343D" stroke="#19161D" stroke-width="1.1"/>
        <path d="M46 54 Q52 25 61 37 Q69 19 78 37 Q84 27 88 54 Z" fill="#F05E07"/>
        <path d="M55 54 Q61 35 69 41 Q76 31 80 54 Z" fill="#FDE047"/>
        <path d="M126 32 Q106 16 78 33" fill="none" stroke="#90E0EF" stroke-width="2.2" stroke-dasharray="4 2"/>
        <rect x="116" y="28" width="30" height="12" rx="1.8" fill="#D61F26" stroke="#FFFFFF" stroke-width="0.9"/>
        <circle cx="123" cy="41" r="3.2" fill="#111"/><circle cx="139" cy="41" r="3.2" fill="#111"/>
      </svg>`;

    case 'fukushima':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#6F89A5"/>
        <path d="M0 37 Q42 29 82 37 Q122 44 156 33 L156 54 L0 54 Z" fill="#F7FBFF"/>
        <g fill="#264057">
          <polygon points="22,42 33,13 44,42"/><polygon points="48,43 57,20 66,43"/>
          <polygon points="116,41 129,11 142,41"/>
        </g>
        <g fill="#FFFFFF" opacity="0.95">
          <polygon points="27.5,27 33,13 38.5,27"/><polygon points="122.5,25 129,11 135.5,25"/>
        </g>
        <g transform="translate(80,18)">
          <rect x="7" y="15" width="2.8" height="18" fill="#334155"/>
          <polygon points="8.4,0 19,15 -2,15" fill="#1A4F8B" stroke="#FFFFFF" stroke-width="1.3"/>
          <text x="8.4" y="12.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-weight="800" font-size="6.4" fill="#FFFFFF">459</text>
        </g>
        <g fill="#FFFFFF">
          <circle cx="15" cy="12" r="1.6"/><circle cx="46" cy="9" r="1.4"/><circle cx="72" cy="12" r="1.7"/>
          <circle cx="104" cy="9" r="1.5"/><circle cx="145" cy="16" r="1.6"/><circle cx="64" cy="27" r="1.4"/>
        </g>
      </svg>`;

    case 'gaza':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#919CA6"/>
        <path d="M0 41 L0 20 L18 20 L23 27 L38 18 L48 29 L70 21 L76 31 L110 19 L118 27 L140 16 L156 24 L156 41 Z" fill="#5D6770"/>
        <rect x="0" y="41" width="156" height="13" fill="#40474F"/>
        <g transform="translate(42,23)">
          <rect x="0" y="4" width="56" height="16" rx="2" fill="#FFFFFF" stroke="#1F252E" stroke-width="1.2"/>
          <path d="M56 8 L69 8 L73 15 L73 20 L56 20 Z" fill="#EBEBE6" stroke="#1F252E" stroke-width="1.2"/>
          <rect x="24" y="7" width="3.5" height="10" fill="#B81D24"/><rect x="20.5" y="10.5" width="10.5" height="3.5" fill="#B81D24"/>
          <circle cx="15" cy="21" r="4.2" fill="#1B2026"/><circle cx="60" cy="21" r="4.2" fill="#1B2026"/>
        </g>
        <path d="M106 23 Q115 8 132 8 Q143 8 148 16 L136 24 Z" fill="#32383F" opacity="0.65"/>
      </svg>`;

    case 'bolsonaro':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#EAF4F2"/>
        <g stroke="#CBE0DC" stroke-width="0.8">
          <line x1="0" y1="14" x2="156" y2="14"/><line x1="0" y1="28" x2="156" y2="28"/><line x1="0" y1="42" x2="156" y2="42"/>
          <line x1="30" y1="0" x2="30" y2="54"/><line x1="60" y1="0" x2="60" y2="54"/><line x1="90" y1="0" x2="90" y2="54"/><line x1="120" y1="0" x2="120" y2="54"/>
        </g>
        <path d="M6 31 L28 31 L35 24 L41 38 L49 12 L56 41 L63 31 L88 31 L95 24 L101 37 L108 14 L115 40 L122 31 L150 31" fill="none" stroke="#15803D" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="125" y="6" width="22" height="22" rx="3" fill="#B81D24"/>
        <rect x="134" y="10" width="4" height="14" fill="#FFFFFF"/><rect x="129" y="15" width="14" height="4" fill="#FFFFFF"/>
      </svg>`;

    case 'seoul':
      return `<svg viewBox="0 0 156 54" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="54" fill="#D9E4EF"/>
        <rect x="20" y="10" width="40" height="36" rx="1.5" fill="#FFFFFF" stroke="#1B2D45" stroke-width="1.3"/>
        <rect x="26" y="16" width="24" height="3" fill="#334155"/>
        <rect x="26" y="23" width="28" height="2.2" fill="#94A3B8"/>
        <rect x="26" y="29" width="22" height="2.2" fill="#94A3B8"/>
        <circle cx="48" cy="34" r="7" fill="#B81D24"/>
        <text x="48" y="37" text-anchor="middle" font-family="Noto Sans, sans-serif" font-weight="800" font-size="7.5" fill="#FFFFFF">AI</text>
        <polygon points="88,54 94,25 128,25 134,54" fill="#1E3552" stroke="#0F1D30" stroke-width="1"/>
        <rect x="90" y="21" width="42" height="5" fill="#476282"/>
        <path d="M105 21 Q105 11 114 11" fill="none" stroke="#1E3552" stroke-width="1.8"/>
        <circle cx="115" cy="11" r="2.6" fill="#1E3552"/>
      </svg>`;

    default:
      return '';
  }
}

// Equirectangular projection for 296x238 map viewport (lon -168..182, lat 74..-56)
function proj(lon, lat) {
  const x = ((lon + 168) / 350) * 296;
  const y = ((74 - lat) / 130) * 238;
  return [x, y];
}

// Crisp Economist-style light editorial vector atlas with continuous Eurasia and zero-overlap pins (1..15)
export function renderWorldMap(allMappedStories) {
  const NUDGE = {
    1: [-9, -1],   // Antalya
    2: [3, -12],   // Kyiv/Dymer
    3: [12, 8],    // Bahrain
    4: [-5, 6],    // Hong Kong
    5: [-4, -3],   // Wellington
    6: [-3, -2],   // Las Vegas
    7: [-12, -8],  // Liverpool
    8: [-10, 6],   // Turin
    9: [17, -7],   // Tehran
    10: [-2, 12],  // Khartoum
    11: [-2, 4],   // Cikande Indonesia
    12: [11, -3],  // Fukushima
    13: [-6, 13],  // Gaza
    14: [0, 0],    // Brasília
    15: [-3, -10], // Seoul
  };

  const placed = allMappedStories.map((s) => {
    const [bx, by] = proj(s.lon, s.lat);
    const [dx, dy] = NUDGE[s.id] || [0, 0];
    const px = Math.max(9, Math.min(287, bx + dx));
    const py = Math.max(9, Math.min(229, by + dy));
    return { s, bx, by, dx, dy, px, py };
  });

  // Strict mathematical zero-collision guard across all 15 pins
  for (let i = 0; i < placed.length; i++) {
    for (let j = i + 1; j < placed.length; j++) {
      const a = placed[i];
      const b = placed[j];
      const dist = Math.hypot(a.px - b.px, a.py - b.py);
      const minAllowed = (a.s.id <= 3 ? 7.6 : 6.4) + (b.s.id <= 3 ? 7.6 : 6.4) + 1.5;
      if (dist < minAllowed) {
        throw new Error(`Map pin collision between #${a.s.id} and #${b.s.id}: dist=${dist.toFixed(1)} < ${minAllowed.toFixed(1)}`);
      }
    }
  }

  const pins = placed
    .map(({ s, bx, by, dx, dy, px, py }) => {
      const isHero = s.id <= 3;
      const r = isHero ? 7.6 : 6.4;
      const fill = isHero ? '#9B1C24' : '#C92A30';
      const stroke = isHero ? '#FFF8E7' : '#FFFFFF';
      const leader =
        Math.hypot(dx, dy) > 7
          ? `<line x1="${bx.toFixed(1)}" y1="${by.toFixed(1)}" x2="${px.toFixed(1)}" y2="${py.toFixed(1)}" stroke="#6E2428" stroke-width="0.95" opacity="0.85"/><circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="1.6" fill="#6E2428"/>`
          : '';
      return `${leader}<g>
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${isHero ? 1.5 : 1.0}"/>
        <text x="${px.toFixed(1)}" y="${(py + 2.8).toFixed(1)}" text-anchor="middle" font-family="Noto Sans, Nimbus Sans, sans-serif" font-weight="700" font-size="${isHero ? 8.4 : 7.5}" fill="#FFFFFF">${s.id}</text>
      </g>`;
    })
    .join('\n');

  const poly = (pts) =>
    'M' +
    pts
      .map(([lon, lat]) => {
        const [x, y] = proj(lon, lat);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' L') +
    ' Z';

  const continents = [
    // North America + Central America
    [[-166,65],[-155,71],[-135,70],[-115,69],[-95,68],[-82,63],[-78,53],[-64,58],[-55,51],[-64,44],[-70,41],[-76,35],[-81,25],[-83,30],[-90,29],[-97,26],[-96,19],[-88,21],[-84,10],[-78,8],[-83,9],[-92,15],[-105,20],[-112,28],[-117,32],[-124,42],[-126,50],[-137,59],[-152,60],[-162,56]],
    // Greenland
    [[-46,60],[-34,68],[-20,73],[-38,74],[-58,72],[-54,64]],
    // Caribbean
    [[-84,22],[-75,20],[-77,22],[-83,23]],
    // South America
    [[-78,9],[-72,12],[-61,10],[-50,1],[-35,-6],[-38,-15],[-42,-23],[-52,-33],[-63,-41],[-68,-54],[-74,-52],[-73,-40],[-71,-30],[-71,-18],[-81,-5],[-79,2]],
    // UK & Ireland
    [[-6,50],[-2,51],[1,53],[-3,58],[-6,57],[-5,53]],
    // Continuous Eurasia (Iberia -> Western/Northern Europe -> Russia/Siberia -> East/South Asia -> Arabia -> Anatolia -> Balkans -> Italy)
    [[-9,37],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[10,57],[5,60],[12,66],[22,70],[32,69],[42,67],[60,69],[85,73],[115,73],[145,71],[172,66],[164,58],[156,51],[141,53],[136,44],[130,38],[129,35],[126,38],[122,40],[119,35],[122,30],[115,22],[108,16],[109,11],[104,10],[102,13],[100,6],[103,2],[100,14],[96,17],[92,21],[87,22],[80,14],[77,8],[73,19],[68,24],[61,25],[56,27],[51,26],[59,22],[52,16],[44,13],[39,22],[35,31],[36,37],[27,37],[27,41],[23,37],[20,40],[16,42],[13,45],[16,40],[14,38],[9,44],[4,43],[-1,38],[-5,36]],
    // Africa
    [[-17,15],[-12,28],[-5,36],[10,37],[12,33],[25,32],[33,31],[37,22],[43,12],[51,12],[49,5],[41,-2],[40,-15],[35,-25],[28,-33],[18,-34],[14,-22],[12,-6],[9,4],[2,6],[-8,5],[-15,11]],
    // Madagascar
    [[44,-25],[49,-13],[50,-16],[47,-25]],
    // Sri Lanka
    [[80,9],[82,7],[80,6]],
    // Japan
    [[130,31],[136,34],[141,38],[144,44],[140,42],[136,37],[131,34]],
    // Taiwan
    [[120.2,22],[121.8,25],[121.4,22]],
    // Philippines
    [[120,18],[123,14],[126,8],[122,7],[121,13]],
    // Sumatra + Java
    [[96,5],[105,-5],[114,-8],[114,-7],[105,-6],[95,3]],
    // Borneo + Sulawesi
    [[109,1],[117,6],[118,0],[115,-3],[110,-2]],
    // New Guinea
    [[132,-2],[141,-3],[150,-10],[146,-9],[136,-5]],
    // Australia
    [[114,-22],[122,-17],[130,-12],[136,-12],[142,-11],[146,-19],[153,-28],[150,-37],[141,-38],[135,-34],[125,-33],[115,-34],[113,-26]],
    // Tasmania
    [[145,-41],[148,-42],[146,-43]],
    // New Zealand (North & South Islands)
    [[173,-35],[178,-38],[175,-41],[173,-39]],
    [[173,-41],[171,-44],[167,-46],[169,-43]],
  ];

  // Subtle inland seas (Black Sea & Caspian Sea) for genuine cartographic crispness
  const inlandSeas = [
    [[28,42],[33,46],[41,44],[41,41],[35,42]],
    [[47,46],[53,46],[54,37],[49,38]],
  ];

  const landSvg = continents.map((ring) => `<path d="${poly(ring)}"/>`).join('');
  const seaSvg = inlandSeas.map((ring) => `<path d="${poly(ring)}"/>`).join('');

  const eqY = proj(0, 0)[1].toFixed(1);
  const gridY = [60, 30, 0, -30].map((lat) => proj(0, lat)[1].toFixed(1));
  const gridX = [-120, -60, 0, 60, 120].map((lon) => proj(lon, 0)[0].toFixed(1));

  return `<svg viewBox="0 0 296 238" width="296" height="238" xmlns="http://www.w3.org/2000/svg" style="display:block;border:1px solid #C6BCA6;border-radius:2px;">
    <rect width="296" height="238" fill="#E3EEF3"/>
    <g stroke="#CBDCE3" stroke-width="0.6">
      ${gridY.map((y) => `<line x1="0" y1="${y}" x2="296" y2="${y}"/>`).join('')}
      ${gridX.map((x) => `<line x1="${x}" y1="0" x2="${x}" y2="238"/>`).join('')}
    </g>
    <line x1="0" y1="${eqY}" x2="296" y2="${eqY}" stroke="#B3CBD6" stroke-width="0.75" stroke-dasharray="3 3"/>
    <g fill="#D5CBB7" stroke="#9A8E78" stroke-width="0.65" stroke-linejoin="round">
      ${landSvg}
    </g>
    <g fill="#E3EEF3" stroke="#9A8E78" stroke-width="0.45">
      ${seaSvg}
    </g>
    ${pins}
  </svg>`;
}
