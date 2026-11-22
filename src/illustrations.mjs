// Original SVG editorial illustrations & vector world locator map for Sunday 22 November 2026.

export function renderHeroArt(key) {
  switch (key) {
    case 'cop31':
      return `<svg viewBox="0 0 320 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="copSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#192F4D"/>
            <stop offset="56%" stop-color="#436788"/>
            <stop offset="100%" stop-color="#DF9E58"/>
          </linearGradient>
          <linearGradient id="copSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#183854"/>
            <stop offset="100%" stop-color="#0D1E30"/>
          </linearGradient>
          <linearGradient id="thermFill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#D97724"/>
            <stop offset="100%" stop-color="#C81E2B"/>
          </linearGradient>
        </defs>
        <rect width="320" height="100" fill="url(#copSky)"/>
        <!-- Taurus Mountains & Mediterranean Sea -->
        <path d="M0 72 L34 55 L68 65 L112 49 L154 63 L202 52 L250 64 L294 54 L320 63 L320 76 L0 76 Z" fill="#27435F" opacity="0.74"/>
        <rect x="0" y="74" width="320" height="26" fill="url(#copSea)"/>
        <line x1="0" y1="74" x2="320" y2="74" stroke="#F4CD8F" stroke-width="0.9" opacity="0.55"/>
        <!-- Summit plenary dome & colonnade (shifted slightly right so badge 1 has clean water corner) -->
        <path d="M30 74 L30 53 L118 53 L118 74 Z" fill="#EFE7D6"/>
        <path d="M38 53 Q74 26 110 53 Z" fill="#D5CBB6" stroke="#182C45" stroke-width="1"/>
        <g fill="#28405A">
          <rect x="37" y="57" width="6" height="17"/><rect x="49" y="57" width="6" height="17"/>
          <rect x="61" y="57" width="6" height="17"/><rect x="73" y="57" width="8" height="17"/>
          <rect x="87" y="57" width="6" height="17"/><rect x="99" y="57" width="6" height="17"/>
        </g>
        <!-- Split draft text document with dramatic red collapse crack -->
        <g transform="translate(134,15)">
          <rect x="0" y="0" width="56" height="65" rx="2" fill="#FBF8F0" stroke="#1A2B40" stroke-width="1.3"/>
          <rect x="7" y="9" width="30" height="3.8" fill="#1A2B40"/>
          <rect x="7" y="17" width="42" height="2.2" fill="#8C99A8"/>
          <rect x="7" y="23" width="38" height="2.2" fill="#8C99A8"/>
          <rect x="7" y="29" width="42" height="2.2" fill="#8C99A8"/>
          <rect x="7" y="36" width="34" height="2.2" fill="#8C99A8"/>
          <rect x="7" y="42" width="40" height="2.2" fill="#8C99A8"/>
          <rect x="7" y="49" width="28" height="2.2" fill="#8C99A8"/>
          <!-- Jagged collapse fissure -->
          <path d="M33 0 L25 18 L36 31 L23 47 L31 65" fill="none" stroke="#B31B24" stroke-width="2.8"/>
          <path d="M33 0 L25 18 L36 31 L23 47 L31 65" fill="none" stroke="#FFF4D6" stroke-width="0.8" opacity="0.8"/>
        </g>
        <!-- Cracked gavel & block -->
        <g transform="translate(202,46)">
          <rect x="6" y="24" width="38" height="7.5" rx="1.5" fill="#5A331C" stroke="#241208" stroke-width="0.9"/>
          <g transform="rotate(-24 26 14)">
            <rect x="14" y="6" width="25" height="11.5" rx="2" fill="#834824" stroke="#2B1508" stroke-width="1"/>
            <rect x="23" y="17.5" width="5.5" height="25" rx="1.5" fill="#633519"/>
          </g>
          <path d="M12 10 L4 4 M16 4 L14 -3 M39 6 L45 0" stroke="#F4D35E" stroke-width="1.8" stroke-linecap="round"/>
        </g>
        <!-- Overtime clock (44h+) & rising thermometer -->
        <g transform="translate(262,24)">
          <circle cx="0" cy="0" r="12.5" fill="#FBF8F0" stroke="#182C45" stroke-width="1.8"/>
          <line x1="0" y1="0" x2="0" y2="-7.5" stroke="#182C45" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="0" y1="0" x2="6.5" y2="3.5" stroke="#B31B24" stroke-width="1.7" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="1.7" fill="#B31B24"/>
        </g>
        <g transform="translate(290,15)">
          <rect x="0" y="0" width="11.5" height="56" rx="5.7" fill="#FBF8F0" stroke="#182C45" stroke-width="1.4"/>
          <rect x="3" y="10" width="5.5" height="46" rx="2.7" fill="url(#thermFill)"/>
          <circle cx="5.7" cy="58" r="8.8" fill="#C81E2B" stroke="#182C45" stroke-width="1.4"/>
          <line x1="-5" y1="24" x2="-1" y2="24" stroke="#FBF8F0" stroke-width="1.3"/>
          <line x1="-5" y1="36" x2="-1" y2="36" stroke="#FBF8F0" stroke-width="1.3"/>
        </g>
        <!-- Delegates walking out right -->
        <g fill="#0B1624">
          <circle cx="248" cy="80" r="2.8"/><path d="M244 100 L246 84 L250 84 L252 100 Z"/>
          <circle cx="261" cy="79" r="2.8"/><path d="M257 100 L259 83 L263 83 L265 100 Z"/>
          <circle cx="274" cy="81" r="2.6"/><path d="M270 100 L272 85 L276 85 L278 100 Z"/>
        </g>
      </svg>`;

    case 'ukraine':
      return `<svg viewBox="0 0 320 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="uaSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#081120"/>
            <stop offset="65%" stop-color="#142540"/>
            <stop offset="100%" stop-color="#28354D"/>
          </linearGradient>
          <linearGradient id="beam" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#F6E58D" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#F6E58D" stop-opacity="0"/>
          </linearGradient>
          <radialGradient id="blast" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFF2B2"/>
            <stop offset="45%" stop-color="#F28C28" stop-opacity="0.92"/>
            <stop offset="100%" stop-color="#A81E24" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="320" height="100" fill="url(#uaSky)"/>
        <!-- Air defence searchlight beams -->
        <polygon points="24,100 80,8 112,8 40,100" fill="url(#beam)"/>
        <polygon points="112,100 44,10 68,10 124,100" fill="url(#beam)" opacity="0.52"/>
        <!-- Radar intercept arcs & bursts -->
        <path d="M30 94 Q82 44 138 30" fill="none" stroke="#64DFDF" stroke-width="1.3" stroke-dasharray="3 3" opacity="0.85"/>
        <path d="M88 96 Q126 54 168 28" fill="none" stroke="#64DFDF" stroke-width="1.3" stroke-dasharray="3 3" opacity="0.72"/>
        <circle cx="98" cy="34" r="5.2" fill="#FDE047" opacity="0.92"/>
        <circle cx="98" cy="34" r="11" fill="#FDE047" opacity="0.22"/>
        <circle cx="144" cy="24" r="4.2" fill="#FDE047" opacity="0.88"/>
        <!-- Delta-wing drone silhouettes -->
        <g fill="#E2ECF7" stroke="#081120" stroke-width="0.6">
          <polygon points="50,26 65,21 60,28 65,33"/>
          <polygon points="118,45 133,40 128,47 133,52"/>
          <polygon points="154,37 169,32 164,39 169,44"/>
          <polygon points="74,54 87,50 83,55 87,59" opacity="0.82"/>
        </g>
        <!-- Ground -->
        <rect x="0" y="87" width="320" height="13" fill="#0A111D"/>
        <!-- Five-storey Dymer apartment block with collapsed section -->
        <g transform="translate(184,23)">
          <rect x="0" y="6" width="84" height="62" fill="#2A3649" stroke="#101824" stroke-width="1.2"/>
          <rect x="-2" y="4" width="88" height="4" fill="#3B495E"/>
          <g>
            <rect x="7" y="13" width="10" height="7" fill="#F3C669"/><rect x="22" y="13" width="10" height="7" fill="#182231"/><rect x="37" y="13" width="10" height="7" fill="#F3C669"/><rect x="52" y="13" width="10" height="7" fill="#182231"/>
            <rect x="7" y="24" width="10" height="7" fill="#182231"/><rect x="22" y="24" width="10" height="7" fill="#F3C669"/><rect x="37" y="24" width="10" height="7" fill="#182231"/><rect x="52" y="24" width="10" height="7" fill="#E89A46"/>
            <rect x="7" y="35" width="10" height="7" fill="#F3C669"/><rect x="22" y="35" width="10" height="7" fill="#182231"/><rect x="37" y="35" width="10" height="7" fill="#F3C669"/><rect x="52" y="35" width="10" height="7" fill="#182231"/>
            <rect x="7" y="46" width="10" height="7" fill="#182231"/><rect x="22" y="46" width="10" height="7" fill="#F3C669"/><rect x="37" y="46" width="10" height="7" fill="#182231"/><rect x="52" y="46" width="10" height="7" fill="#182231"/>
            <rect x="7" y="57" width="10" height="7" fill="#182231"/><rect x="22" y="57" width="10" height="7" fill="#182231"/><rect x="37" y="57" width="10" height="7" fill="#F3C669"/>
          </g>
          <path d="M68 6 L96 6 L92 18 L80 26 L98 38 L86 50 L108 68 L68 68 Z" fill="#1B2433"/>
          <path d="M68 6 L75 18 L66 32 L78 46 L72 68 L112 68 L102 52 L92 56 L84 40 L90 28 L79 14 Z" fill="#0F1722"/>
          <circle cx="88" cy="40" r="25" fill="url(#blast)"/>
          <polygon points="68,68 84,53 98,57 116,68" fill="#4B5563"/>
          <polygon points="74,68 88,58 104,68" fill="#374151"/>
        </g>
        <path d="M268 48 Q260 28 278 14 Q296 2 318 8 L318 36 Q298 36 286 50 Z" fill="#3B4554" opacity="0.65"/>
      </svg>`;

    case 'bahrain':
      return `<svg viewBox="0 0 320 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bhSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#192136"/>
            <stop offset="56%" stop-color="#4C374A"/>
            <stop offset="100%" stop-color="#CC6E44"/>
          </linearGradient>
          <linearGradient id="bhWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E354E"/>
            <stop offset="100%" stop-color="#0D1A29"/>
          </linearGradient>
          <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#FFF0A5"/>
            <stop offset="45%" stop-color="#F48C06"/>
            <stop offset="100%" stop-color="#B31B24"/>
          </linearGradient>
        </defs>
        <rect width="320" height="100" fill="url(#bhSky)"/>
        <rect x="0" y="76" width="320" height="24" fill="url(#bhWater)"/>
        <rect x="0" y="71" width="320" height="6" fill="#3A3132"/>
        <!-- Smoke plumes -->
        <path d="M170 55 Q182 28 214 18 Q250 6 294 14 L300 32 Q258 26 228 38 Q202 48 186 59 Z" fill="#2A2730" opacity="0.74"/>
        <path d="M134 59 Q146 37 170 31 Q190 27 212 35 L206 47 Q180 45 154 61 Z" fill="#3C3540" opacity="0.56"/>
        <!-- Sitra industrial storage tanks & fire -->
        <g transform="translate(110,37)">
          <rect x="0" y="14" width="34" height="21" rx="2" fill="#DDD7CB" stroke="#2B2D42" stroke-width="1"/>
          <rect x="42" y="10" width="42" height="25" rx="2" fill="#D0C9BD" stroke="#2B2D42" stroke-width="1"/>
          <rect x="92" y="16" width="32" height="19" rx="2" fill="#DDD7CB" stroke="#2B2D42" stroke-width="1"/>
          <rect x="132" y="2" width="6" height="33" fill="#525B6B"/>
          <rect x="144" y="8" width="5" height="27" fill="#525B6B"/>
          <path d="M52 10 Q58 -11 66 2 Q72 -15 78 6 Q82 -2 82 10 Z" fill="url(#flame)"/>
          <path d="M10 14 Q15 2 20 8 Q24 0 27 14 Z" fill="url(#flame)" opacity="0.86"/>
        </g>
        <ellipse cx="174" cy="86" rx="36" ry="5.5" fill="#F48C06" opacity="0.36"/>
        <!-- Air defence radar dish silhouette -->
        <g transform="translate(32,41)">
          <rect x="10" y="18" width="28" height="12" rx="1.5" fill="#465261" stroke="#182230" stroke-width="1"/>
          <circle cx="16" cy="31" r="4" fill="#182230"/><circle cx="32" cy="31" r="4" fill="#182230"/>
          <g transform="rotate(-30 26 14)">
            <rect x="16" y="6" width="22" height="10" rx="2" fill="#758494" stroke="#182230" stroke-width="1"/>
          </g>
          <path d="M38 6 A14 14 0 0 1 46 18" fill="none" stroke="#9CE0E0" stroke-width="1.3" opacity="0.85"/>
          <path d="M42 1 A22 22 0 0 1 54 18" fill="none" stroke="#9CE0E0" stroke-width="1.1" opacity="0.55"/>
        </g>
        <path d="M308 16 Q216 4 156 32" fill="none" stroke="#FFD166" stroke-width="1.3" stroke-dasharray="4 3"/>
        <path d="M68 43 Q132 18 198 18" fill="none" stroke="#7CE8E8" stroke-width="1.2" stroke-dasharray="3 3"/>
        <circle cx="198" cy="18" r="3.8" fill="#FFF3B0"/>
      </svg>`;

    default:
      return '';
  }
}

export function renderCardArt(key) {
  switch (key) {
    case 'hongkong':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#DCE5EE"/>
        <g fill="#7C92AB">
          <rect x="6" y="22" width="10" height="28"/><rect x="18" y="14" width="12" height="36"/>
          <rect x="32" y="26" width="9" height="24"/><rect x="116" y="18" width="11" height="32"/>
          <rect x="130" y="11" width="14" height="39"/><polygon points="130,11 137,2 144,11"/>
        </g>
        <rect x="52" y="24" width="52" height="26" rx="2" fill="#1C3557" stroke="#0E1D33" stroke-width="1"/>
        <rect x="62" y="27" width="32" height="3.5" rx="1" fill="#0B1526"/>
        <g transform="rotate(-9 78 17)">
          <rect x="65" y="5" width="26" height="23" rx="1" fill="#FFFDF7" stroke="#1C3557" stroke-width="1"/>
          <path d="M71 16 L76 21 L86 10" fill="none" stroke="#A61C24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>`;

    case 'cricket':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#2A7B45"/>
        <!-- Basin Reserve sunlit oval stripes -->
        <rect x="0" y="0" width="156" height="12" fill="#22683A"/>
        <polygon points="48,50 64,14 96,14 112,50" fill="#DCC695"/>
        <line x1="60" y1="23" x2="100" y2="23" stroke="#FFFDF7" stroke-width="1.3"/>
        <line x1="53" y1="42" x2="107" y2="42" stroke="#FFFDF7" stroke-width="1.3"/>
        <!-- Wooden stumps & bails -->
        <g stroke="#F8E9C5" stroke-width="2.2">
          <line x1="74" y1="23" x2="74" y2="6"/><line x1="80" y1="23" x2="80" y2="6"/><line x1="86" y1="23" x2="86" y2="6"/>
        </g>
        <line x1="73" y1="6" x2="87" y2="6" stroke="#B87D3B" stroke-width="2"/>
        <!-- Cricket bat silhouette + red leather ball -->
        <g transform="rotate(28 42 32)">
          <rect x="38" y="14" width="6.5" height="22" rx="1.2" fill="#E8CFA0" stroke="#7A5628" stroke-width="0.9"/>
          <rect x="40" y="4" width="2.5" height="10" fill="#243447"/>
        </g>
        <circle cx="122" cy="24" r="8" fill="#A61C24" stroke="#5E0E13" stroke-width="1.1"/>
        <path d="M116 21 Q122 24 128 27" fill="none" stroke="#F8E7C9" stroke-width="1.1" stroke-dasharray="1.6 1.2"/>
      </svg>`;

    case 'f1':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#121828"/>
        <rect x="10" y="7" width="14" height="24" fill="#232E47"/><rect x="12" y="11" width="10" height="2" fill="#E63946"/>
        <rect x="30" y="4" width="16" height="27" fill="#2A3654"/><rect x="33" y="9" width="10" height="2" fill="#F4D35E"/>
        <rect x="96" y="8" width="18" height="23" fill="#232E47"/><rect x="99" y="13" width="12" height="2" fill="#4CC9F0"/>
        <g transform="translate(124,4)">
          <rect x="0" y="0" width="26" height="18" fill="#FFF"/>
          <rect x="0" y="0" width="6.5" height="6" fill="#111"/><rect x="13" y="0" width="6.5" height="6" fill="#111"/>
          <rect x="6.5" y="6" width="6.5" height="6" fill="#111"/><rect x="19.5" y="6" width="6.5" height="6" fill="#111"/>
          <rect x="0" y="12" width="6.5" height="6" fill="#111"/><rect x="13" y="12" width="6.5" height="6" fill="#111"/>
        </g>
        <rect x="0" y="31" width="156" height="19" fill="#2B303A"/>
        <line x1="0" y1="32" x2="156" y2="32" stroke="#E63946" stroke-width="1.5" stroke-dasharray="10 6"/>
        <path d="M16 37 L32 28 L66 28 L86 32 L103 35 L103 39 L16 39 Z" fill="#1B3B6F"/>
        <path d="M48 28 L64 28 L74 32 L46 32 Z" fill="#E63946"/>
        <rect x="12" y="26" width="10" height="4" fill="#F4D35E"/>
        <circle cx="32" cy="39" r="5.2" fill="#0B0D12" stroke="#9AA5B4" stroke-width="1.5"/>
        <circle cx="86" cy="39" r="5.2" fill="#0B0D12" stroke="#9AA5B4" stroke-width="1.5"/>
      </svg>`;

    case 'khartoum':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sdSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4A5568"/><stop offset="100%" stop-color="#D4A373"/>
          </linearGradient>
        </defs>
        <rect width="156" height="50" fill="url(#sdSky)"/>
        <rect x="0" y="40" width="156" height="10" fill="#6E5239"/>
        <rect x="58" y="17" width="46" height="23" fill="#E6EEF5" stroke="#2D3E50" stroke-width="1"/>
        <rect x="58" y="17" width="46" height="5.5" fill="#3B82C4"/>
        <rect x="64" y="26" width="6" height="6" fill="#2D3E50"/><rect x="74" y="26" width="6" height="6" fill="#2D3E50"/>
        <rect x="84" y="26" width="6" height="6" fill="#2D3E50"/>
        <path d="M94 17 L104 17 L104 30 L92 24 Z" fill="#262930"/>
        <path d="M98 19 Q112 4 134 6 Q146 8 152 17 L138 24 Q118 17 104 26 Z" fill="#2D3138" opacity="0.72"/>
        <rect x="18" y="28" width="28" height="12" fill="#8C6D4F"/>
        <polygon points="118,12 128,9 124,14 128,17" fill="#1A202C"/>
      </svg>`;

    case 'cikande':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#231F26"/>
        <path d="M36 24 Q56 2 94 6 Q128 2 146 19 L138 32 Q98 24 44 34 Z" fill="#4B444E" opacity="0.86"/>
        <path d="M22 50 L22 26 L42 19 L42 26 L62 19 L62 26 L82 19 L82 26 L98 30 L108 50 Z" fill="#3E3A40" stroke="#18151A" stroke-width="1"/>
        <path d="M46 50 Q52 25 60 36 Q68 21 76 36 Q82 27 86 50 Z" fill="#E85D04"/>
        <path d="M54 50 Q60 34 68 40 Q74 31 78 50 Z" fill="#FAA307"/>
        <path d="M126 30 Q106 16 78 32" fill="none" stroke="#90E0EF" stroke-width="2" stroke-dasharray="4 2"/>
        <rect x="122" y="22" width="24" height="10" rx="1.5" fill="#C1121F"/>
        <circle cx="128" cy="33" r="2.8" fill="#111"/><circle cx="140" cy="33" r="2.8" fill="#111"/>
      </svg>`;

    case 'iranpower':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#121C2E"/>
        <rect x="10" y="24" width="18" height="26" fill="#1E2B42"/>
        <rect x="13" y="28" width="4" height="4" fill="#F4C95D"/><rect x="20" y="34" width="4" height="4" fill="#F4C95D"/>
        <rect x="32" y="18" width="22" height="32" fill="#192438"/>
        <rect x="36" y="22" width="4" height="4" fill="#F4C95D"/><rect x="44" y="28" width="4" height="4" fill="#0B121F"/>
        <rect x="104" y="20" width="20" height="30" fill="#0B111C"/>
        <rect x="128" y="26" width="22" height="24" fill="#090E18"/>
        <g stroke="#7A8CA5" stroke-width="1.4" fill="none">
          <path d="M68 50 L76 9 L84 50 M62 19 L90 19 M65 30 L87 30 M70 30 L82 19 M82 30 L70 19"/>
          <path d="M0 17 Q36 25 62 19 M90 19 Q122 26 156 18" stroke-width="0.9" opacity="0.7"/>
        </g>
        <path d="M138 10 A6 6 0 1 0 144 18 A4.5 4.5 0 1 1 138 10 Z" fill="#F4E3B2"/>
      </svg>`;

    case 'nba':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#C98D4F"/>
        <rect x="0" y="35" width="156" height="15" fill="#B5783A"/>
        <line x1="0" y1="35" x2="156" y2="35" stroke="#FFFDF7" stroke-width="1.2"/>
        <!-- Arena rafters glow -->
        <rect x="0" y="0" width="156" height="12" fill="#1E293B"/>
        <!-- Backboard & rim -->
        <rect x="52" y="5" width="42" height="23" rx="1.5" fill="#F8FAFC" stroke="#1E293B" stroke-width="1.4"/>
        <rect x="64" y="12" width="18" height="11" fill="none" stroke="#C81E2B" stroke-width="1.5"/>
        <line x1="63" y1="23" x2="83" y2="23" stroke="#E85D04" stroke-width="2.5"/>
        <path d="M65 24 L68 36 L78 36 L81 24 M68 24 L75 36 M78 24 L71 36" fill="none" stroke="#FFF" stroke-width="1"/>
        <!-- Arcing basketball swish -->
        <path d="M126 14 Q102 4 76 19" fill="none" stroke="#FDE68A" stroke-width="1.3" stroke-dasharray="3 2.5"/>
        <circle cx="122" cy="19" r="10.5" fill="#D95D24" stroke="#3D1B09" stroke-width="1.2"/>
        <path d="M111.5 19 L132.5 19 M122 8.5 L122 29.5" stroke="#3D1B09" stroke-width="0.9"/>
      </svg>`;

    case 'fukushima':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#5B728B"/>
        <path d="M0 35 Q42 28 82 35 Q120 41 156 31 L156 50 L0 50 Z" fill="#F2F7FB"/>
        <g fill="#2C4257">
          <polygon points="24,39 34,13 44,39"/><polygon points="48,40 56,19 64,40"/>
          <polygon points="116,38 128,11 140,38"/>
        </g>
        <g fill="#FFFFFF" opacity="0.92">
          <polygon points="29,26 34,13 39,26"/><polygon points="122,24 128,11 134,24"/>
        </g>
        <g transform="translate(82,17)">
          <rect x="6" y="14" width="2.5" height="17" fill="#334155"/>
          <polygon points="7,0 16,13 -2,13" fill="#1D4E89" stroke="#FFF" stroke-width="1.2"/>
          <text x="7" y="11" text-anchor="middle" font-family="Nimbus Sans Narrow, sans-serif" font-weight="700" font-size="6.5" fill="#FFF">459</text>
        </g>
        <g fill="#FFFFFF" opacity="0.9">
          <circle cx="14" cy="11" r="1.4"/><circle cx="46" cy="9" r="1.2"/><circle cx="72" cy="12" r="1.5"/>
          <circle cx="102" cy="8" r="1.3"/><circle cx="144" cy="15" r="1.4"/><circle cx="62" cy="26" r="1.2"/>
          <circle cx="106" cy="24" r="1.4"/><circle cx="18" cy="24" r="1.2"/>
        </g>
      </svg>`;

    case 'gaza':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#7D8790"/>
        <path d="M0 39 L0 19 L18 19 L22 26 L36 17 L46 28 L68 21 L74 30 L108 19 L116 26 L138 15 L156 23 L156 39 Z" fill="#525B63"/>
        <rect x="0" y="39" width="156" height="11" fill="#3C4248"/>
        <g transform="translate(46,22)">
          <rect x="0" y="4" width="54" height="15" rx="2" fill="#F5F5F2" stroke="#222831" stroke-width="1"/>
          <path d="M54 8 L66 8 L70 14 L70 19 L54 19 Z" fill="#E6E6E0" stroke="#222831" stroke-width="1"/>
          <rect x="23" y="7" width="3" height="9" fill="#B31B24"/><rect x="20" y="10" width="9" height="3" fill="#B31B24"/>
          <circle cx="14" cy="20" r="4" fill="#1F242B"/><circle cx="58" cy="20" r="4" fill="#1F242B"/>
        </g>
        <path d="M104 22 Q112 9 128 9 Q138 9 144 15 L132 22 Z" fill="#2E3338" opacity="0.6"/>
      </svg>`;

    case 'anfield':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#142338"/>
        <path d="M6 17 L150 17 L142 28 L14 28 Z" fill="#9B1C24"/>
        <rect x="0" y="28" width="156" height="22" fill="#2B7A43"/>
        <line x1="78" y1="28" x2="78" y2="50" stroke="#FFFFFF" stroke-width="1" opacity="0.7"/>
        <circle cx="78" cy="39" r="7.5" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.7"/>
        <circle cx="22" cy="8" r="3" fill="#FEF08A"/><circle cx="134" cy="8" r="3" fill="#FEF08A"/>
        <rect x="44" y="18" width="54" height="19" rx="2" fill="#0F172A" stroke="#E2E8F0" stroke-width="1"/>
        <text x="71" y="31" text-anchor="middle" font-family="Nimbus Sans Narrow, sans-serif" font-weight="700" font-size="11.5" fill="#FFFFFF">LIV 2–0</text>
        <rect x="112" y="17" width="11" height="16" rx="1.5" fill="#DC2626" stroke="#FFF" stroke-width="1"/>
      </svg>`;

    case 'bolsonaro':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#11222C"/>
        <g stroke="#1E3A47" stroke-width="0.6">
          <line x1="0" y1="13" x2="156" y2="13"/><line x1="0" y1="26" x2="156" y2="26"/><line x1="0" y1="39" x2="156" y2="39"/>
          <line x1="30" y1="0" x2="30" y2="50"/><line x1="60" y1="0" x2="60" y2="50"/><line x1="90" y1="0" x2="90" y2="50"/><line x1="120" y1="0" x2="120" y2="50"/>
        </g>
        <path d="M6 29 L30 29 L36 23 L42 35 L49 12 L56 38 L62 29 L88 29 L94 23 L100 34 L106 14 L112 37 L118 29 L150 29" fill="none" stroke="#4ADE80" stroke-width="2.1" stroke-linejoin="round"/>
        <rect x="128" y="6" width="20" height="20" rx="3" fill="#B31B24"/>
        <rect x="136" y="10" width="4" height="12" fill="#FFF"/><rect x="132" y="14" width="12" height="4" fill="#FFF"/>
      </svg>`;

    case 'seoul':
      return `<svg viewBox="0 0 156 50" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="156" height="50" fill="#2A3E59"/>
        <rect x="20" y="9" width="38" height="33" rx="1.5" fill="#FBF8F0" stroke="#152233" stroke-width="1"/>
        <rect x="26" y="15" width="22" height="2.5" fill="#475569"/>
        <rect x="26" y="21" width="26" height="2" fill="#94A3B8"/>
        <rect x="26" y="26" width="20" height="2" fill="#94A3B8"/>
        <circle cx="47" cy="31" r="6" fill="#B31B24"/>
        <text x="47" y="34" text-anchor="middle" font-family="Noto Sans Display, sans-serif" font-weight="700" font-size="7" fill="#FFF">AI</text>
        <polygon points="88,50 94,24 126,24 132,50" fill="#18273B" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="90" y="20" width="40" height="4.5" fill="#CBD5E1"/>
        <path d="M104 20 Q104 11 112 11" fill="none" stroke="#E2E8F0" stroke-width="1.6"/>
        <circle cx="113" cy="11" r="2.2" fill="#E2E8F0"/>
      </svg>`;

    default:
      return '';
  }
}

// Equirectangular projection helper for 296x232 map viewport (lon -170..180, lat 74..-56)
function proj(lon, lat) {
  const x = ((lon + 170) / 350) * 296;
  const y = ((74 - lat) / 130) * 232;
  return [x, y];
}

// Clean hand-authored minimalist editorial vector continents + collision-free numbered pins (1..15)
export function renderWorldMap(allMappedStories) {
  // Precision collision-free nudges verified mathematically (min pin separation >= 16.5px)
  const NUDGE = {
    1: [-15, -3], // Antalya
    2: [2, -10],  // Kyiv/Dymer
    3: [10, 8],   // Bahrain
    4: [-4, 6],   // Hong Kong
    5: [-4, -3],  // Wellington
    6: [-6, -2],  // Las Vegas
    7: [-3, 12],  // Khartoum
    8: [-2, 4],   // Cikande Indonesia
    9: [16, -7],  // Tehran
    10: [8, 6],   // San Antonio
    11: [11, -3], // Fukushima
    12: [-10, 12],// Gaza
    13: [-7, -4], // Liverpool
    14: [0, 0],   // Brasília
    15: [-3, -9], // Seoul
  };

  const placed = allMappedStories.map((s) => {
    const [bx, by] = proj(s.lon, s.lat);
    const [dx, dy] = NUDGE[s.id] || [0, 0];
    const px = Math.max(9, Math.min(287, bx + dx));
    const py = Math.max(9, Math.min(223, by + dy));
    return { s, bx, by, dx, dy, px, py };
  });

  // Verify zero pin collisions
  for (let i = 0; i < placed.length; i++) {
    for (let j = i + 1; j < placed.length; j++) {
      const a = placed[i];
      const b = placed[j];
      const dist = Math.hypot(a.px - b.px, a.py - b.py);
      const minAllowed = (a.s.id <= 3 ? 7.6 : 6.4) + (b.s.id <= 3 ? 7.6 : 6.4) + 1.8;
      if (dist < minAllowed) {
        throw new Error(`Map pin collision between #${a.s.id} and #${b.s.id}: dist=${dist.toFixed(1)} < ${minAllowed.toFixed(1)}`);
      }
    }
  }

  const pins = placed
    .map(({ s, bx, by, dx, dy, px, py }) => {
      const isHero = s.id <= 3;
      const r = isHero ? 7.6 : 6.4;
      const fill = isHero ? '#B31B24' : '#D13438';
      const stroke = isHero ? '#FFF7E0' : '#FFFFFF';
      const leader =
        Math.hypot(dx, dy) > 7
          ? `<line x1="${bx.toFixed(1)}" y1="${by.toFixed(1)}" x2="${px.toFixed(1)}" y2="${py.toFixed(1)}" stroke="#F4D35E" stroke-width="0.95" opacity="0.88"/>`
          : '';
      return `${leader}<g>
        <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${isHero ? 1.45 : 1.0}"/>
        <text x="${px.toFixed(1)}" y="${(py + 2.8).toFixed(1)}" text-anchor="middle" font-family="Nimbus Sans Narrow, Noto Sans Display, sans-serif" font-weight="700" font-size="${isHero ? 8.6 : 7.8}" fill="#FFFFFF">${s.id}</text>
      </g>`;
    })
    .join('\n');

  return `<svg viewBox="0 0 296 232" width="296" height="232" xmlns="http://www.w3.org/2000/svg" style="display:block;">
    <rect width="296" height="232" rx="2" fill="#13233A"/>
    <g stroke="#223A59" stroke-width="0.55">
      <line x1="0" y1="58" x2="296" y2="58"/><line x1="0" y1="116" x2="296" y2="116"/>
      <line x1="0" y1="174" x2="296" y2="174"/>
      <line x1="74" y1="0" x2="74" y2="232"/><line x1="148" y1="0" x2="148" y2="232"/><line x1="222" y1="0" x2="222" y2="232"/>
    </g>
    <line x1="0" y1="132.1" x2="296" y2="132.1" stroke="#2D4B70" stroke-width="0.7" stroke-dasharray="3 3"/>
    <g fill="#4F6B88" stroke="#1E3552" stroke-width="0.7" stroke-linejoin="round" transform="scale(1, 1.084)">
      <!-- North America -->
      <path d="M12,26 L24,20 L48,18 L76,22 L92,32 L88,44 L100,48 L88,61 L76,74 L68,77 L64,89 L74,97 L72,105 L64,103 L52,91 L42,74 L30,54 L20,42 L10,35 Z"/>
      <!-- Greenland -->
      <path d="M104,8 L126,7 L132,20 L118,32 L106,24 Z"/>
      <!-- South America -->
      <path d="M74,105 L88,107 L104,119 L116,131 L114,146 L104,164 L94,184 L86,202 L78,198 L78,174 L74,151 L68,131 L70,113 Z"/>
      <!-- Europe + Scandinavia + UK -->
      <path d="M135,54 L144,44 L152,32 L162,22 L176,22 L174,37 L166,46 L176,52 L176,61 L162,63 L154,67 L144,63 L136,63 Z"/>
      <path d="M136,44 L142,42 L144,50 L137,51 Z"/>
      <!-- Africa + Madagascar -->
      <path d="M134,70 L156,67 L174,75 L186,97 L190,107 L182,125 L176,146 L166,170 L156,170 L148,149 L144,127 L130,111 L124,95 L128,79 Z"/>
      <path d="M184,146 L188,142 L190,159 L185,161 Z"/>
      <!-- Russia & Asia mainland + India + SE Asia -->
      <path d="M174,22 L212,18 L254,22 L286,28 L280,44 L264,52 L254,65 L246,74 L242,87 L232,99 L226,111 L220,105 L216,95 L206,109 L198,93 L188,91 L178,93 L172,75 L168,65 L176,59 Z"/>
      <!-- Japan -->
      <path d="M258,52 L265,48 L267,59 L259,65 Z"/>
      <!-- Philippines & Indonesia -->
      <path d="M244,95 L250,95 L251,107 L245,107 Z"/>
      <path d="M226,119 L246,121 L256,125 L240,128 L224,125 Z"/>
      <!-- Australia -->
      <path d="M238,146 L256,142 L270,151 L274,170 L262,184 L244,181 L234,168 Z"/>
      <!-- New Zealand -->
      <path d="M286,182 L292,179 L294,192 L286,196 Z"/>
    </g>
    ${pins}
  </svg>`;
}
