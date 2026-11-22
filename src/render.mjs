// Builds the 1024x1024 archival broadsheet PNG for Sunday 22 November 2026 via headless Chromium.
// Uses C059 (Century Schoolbook) + Noto Sans so strokes, slashes, hyphens and headlines stay razor-sharp at 300px.
import { createRequire } from 'node:module';
import { writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EDITION,
  KEY_NUMBERS,
  TIMELINE_UTC,
  HERO_STORIES,
  SECONDARY_STORIES,
  BRIEF_STORIES,
  DATE_CHECK_TEXT,
  computeRegions,
} from './stories.mjs';
import { renderHeroArt, renderCardArt, renderWorldMap } from './illustrations.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(__dirname, '..');

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function statusClass(status) {
  const s = (status || '').toUpperCase();
  if (s === 'CONFIRMED') return 'st-confirmed';
  if (s === 'CLAIM') return 'st-claim';
  if (s === 'ONGOING') return 'st-ongoing';
  return 'st-reported';
}

export function buildHtml() {
  const regions = computeRegions();
  const totalRegionCount = regions.reduce((a, r) => a + r.count, 0);

  const kpiHtml = KEY_NUMBERS.map(
    (k) => `<div class="kpi-cell">
      <div class="kpi-val">${esc(k.value)}</div>
      <div class="kpi-lbl">${esc(k.label)}</div>
    </div>`
  ).join('');

  const regionBarHtml = regions
    .map(
      (r) => `<div class="reg-seg" style="flex:${r.count};background:${r.color};">${esc(r.name)} ${r.count}</div>`
    )
    .join('');

  const timelineHtml = TIMELINE_UTC.map(
    (t) => `<span class="tl-item"><b class="tl-time">${esc(t.time)}</b> ${esc(t.text)}</span>`
  ).join('<span class="tl-dot">·</span>');

  const heroHtml = HERO_STORIES.map(
    (h) => `<article class="hero-card">
      <div class="hero-art">
        ${renderHeroArt(h.artKey)}
        <div class="art-tag-left">${esc(h.bannerLeft)}</div>
        <div class="art-tag-right">${esc(h.bannerRight)}</div>
        <div class="num-badge">${h.id}</div>
      </div>
      <div class="hero-meta">
        <span class="place-tag">${h.id} · ${esc(h.place)}</span>
        <span class="status-pill ${statusClass(h.status)}">${esc(h.statusLabel || h.status)}</span>
      </div>
      <h2 class="hero-hl">${esc(h.headline)}</h2>
      <p class="hero-body">${esc(h.summary)} <span class="src">(${esc(h.source)})</span></p>
    </article>`
  ).join('');

  // Unobstructed mini-card art: only a compact top-left tag and crisp tiny bottom-left square index.
  // Status label sits cleanly in the metadata row below the picture (zero overlap with artwork).
  const secondaryHtml = SECONDARY_STORIES.map(
    (c) => `<article class="mini-card">
      <div class="mini-art">
        ${renderCardArt(c.artKey)}
        <div class="mini-banner">${esc(c.banner)}</div>
        <div class="mini-num">${c.id}</div>
      </div>
      <div class="mini-meta">
        <span class="mini-place">${esc(c.place)}</span>
        <span class="mini-st ${statusClass(c.status)}">${esc(c.status)}</span>
      </div>
      <h3 class="mini-hl">${esc(c.headline)}</h3>
      <p class="mini-body">${esc(c.summary)} <span class="src">(${esc(c.source)})</span></p>
    </article>`
  ).join('');

  const leftBriefs = BRIEF_STORIES.slice(0, 11);
  const rightBriefs = BRIEF_STORIES.slice(11);

  const renderBrief = (b) => {
    const badge = b.tag ? ` <span class="inline-tag ${statusClass(b.tag)}">${esc(b.tag)}</span>` : '';
    return `<div class="brief-row"><span class="b-num">${b.id}</span> <span class="b-reg">${esc(b.regionLabel)}:</span> <b>${esc(b.lead)}</b> ${esc(b.text)} <span class="src">(${esc(b.source)})</span>${badge}</div>`;
  };

  const mapSvg = renderWorldMap([...HERO_STORIES, ...SECONDARY_STORIES]);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF6EC;
    color: #121B2B;
    font-family: 'Noto Sans', 'Nimbus Sans', 'DejaVu Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FAF6EC;
  }
  /* Crisp broadsheet utility strip */
  .top-bar {
    height: 21px;
    background: #132238;
    color: #F5F0E4;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9.2px;
    font-weight: 700;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
  .top-bar .accent { color: #F7CE65; }

  /* Authoritative Century Schoolbook serif masthead */
  .masthead {
    padding: 3px 18px 5px;
    text-align: center;
    border-bottom: 2.5px solid #132238;
  }
  .masthead h1 {
    font-family: 'C059', 'DejaVu Serif', 'Nimbus Roman', Georgia, serif;
    font-size: 54px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.7px;
    color: #0E1726;
  }
  .masthead .deck {
    margin-top: 3px;
    font-family: 'C059', 'DejaVu Serif', Georgia, serif;
    font-style: italic;
    font-size: 12.4px;
    font-weight: 700;
    color: #931B22;
  }

  /* Key Numbers ribbon */
  .kpi-strip {
    height: 46px;
    margin: 0 18px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-bottom: 1px solid #C8BFA8;
    align-items: center;
  }
  .kpi-cell {
    text-align: center;
    padding: 2px 4px;
    border-right: 1px solid #D8D0BE;
  }
  .kpi-cell:last-child { border-right: none; }
  .kpi-val {
    font-family: 'C059', 'DejaVu Serif', Georgia, serif;
    font-size: 22.5px;
    font-weight: 700;
    line-height: 1.02;
    color: #9B1C24;
  }
  .kpi-lbl {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 9.4px;
    font-weight: 600;
    line-height: 1.1;
    color: #2B3646;
    margin-top: 1px;
  }

  /* Regional proportional bar */
  .reg-bar {
    height: 17px;
    margin: 3.5px 18px 0;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 8.9px;
    font-weight: 700;
    letter-spacing: 0.4px;
  }

  /* Full-day UTC timeline */
  .utc-bar {
    height: 19px;
    margin: 3px 18px 0;
    background: #17273F;
    color: #EDF2F9;
    border-radius: 2px;
    padding: 0 7px;
    display: flex;
    align-items: center;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 9.2px;
  }
  .utc-label {
    background: #A31D24;
    color: #FFF;
    font-weight: 700;
    font-size: 8.2px;
    padding: 1px 5px;
    border-radius: 1.5px;
    letter-spacing: 0.35px;
    margin-right: 6px;
    flex-shrink: 0;
  }
  .utc-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    gap: 2px;
    white-space: nowrap;
  }
  .tl-time { color: #F7CE65; font-weight: 700; }
  .tl-dot { color: #6B82A1; }

  /* Hero 3-column grid */
  .hero-grid {
    margin: 5px 18px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 11px;
    padding-bottom: 5px;
    border-bottom: 1.8px solid #18263C;
  }
  .hero-card {
    display: flex;
    flex-direction: column;
  }
  .hero-art {
    position: relative;
    height: 108px;
    border: 1px solid #1C2B42;
    overflow: hidden;
    background: #132238;
  }
  .art-tag-left {
    position: absolute;
    top: 0; left: 0;
    background: #9B1C24;
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 8.6px;
    font-weight: 700;
    letter-spacing: 0.4px;
    padding: 1.8px 6px;
  }
  .art-tag-right {
    position: absolute;
    top: 4px; right: 4px;
    background: rgba(15, 26, 44, 0.92);
    color: #F7D362;
    border: 0.9px solid rgba(255,255,255,0.34);
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 8.2px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 1.2px 5px;
    border-radius: 1.5px;
  }
  .num-badge {
    position: absolute;
    bottom: 0; left: 0;
    width: 17px; height: 17px;
    background: #132238;
    color: #FFF;
    font-family: 'Noto Sans', sans-serif;
    font-size: 10px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.5px;
  }
  .place-tag {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 8.7px;
    font-weight: 700;
    color: #931B22;
    letter-spacing: 0.3px;
  }
  .status-pill {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 7.8px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 0.8px 5px;
    border-radius: 2px;
    color: #FFF;
  }
  .st-confirmed { background: #1E6B43; }
  .st-reported { background: #295687; }
  .st-claim { background: #B86109; }
  .st-ongoing { background: #673C8A; }

  .hero-hl {
    font-family: 'C059', 'DejaVu Serif', Georgia, serif;
    font-size: 15.6px;
    font-weight: 700;
    line-height: 1.12;
    color: #0E1726;
    margin-top: 2px;
  }
  .hero-body {
    font-size: 9.45px;
    line-height: 1.24;
    color: #242E3D;
    margin-top: 2.5px;
  }
  .src {
    font-size: 8.2px;
    color: #545F6E;
    font-style: italic;
  }

  /* Secondary 2x6 card grid — clean, unobstructed art, refined light-tint epistemic labels */
  .mini-grid {
    margin: 5px 18px 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5.5px 9px;
    padding-bottom: 5.5px;
    border-bottom: 1.8px solid #18263C;
  }
  .mini-card {
    display: flex;
    flex-direction: column;
  }
  .mini-art {
    position: relative;
    height: 54px;
    border: 0.9px solid #2B3B52;
    overflow: hidden;
    background: #DCE5EE;
  }
  .mini-banner {
    position: absolute;
    top: 0; left: 0;
    background: rgba(155, 28, 36, 0.96);
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 7.7px;
    font-weight: 700;
    letter-spacing: 0.25px;
    padding: 0.8px 4px;
  }
  .mini-num {
    position: absolute;
    bottom: 0; left: 0;
    min-width: 14px; height: 14px;
    padding: 0 2px;
    background: #132238;
    color: #FFF;
    font-family: 'Noto Sans', sans-serif;
    font-size: 8.2px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mini-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    margin-top: 3.5px;
  }
  .mini-place {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 7.8px;
    font-weight: 700;
    color: #8E1B22;
    letter-spacing: 0.2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mini-st {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 6.5px;
    font-weight: 700;
    padding: 0.3px 3px;
    border-radius: 1.5px;
    flex-shrink: 0;
    letter-spacing: 0.2px;
    border: 0.7px solid transparent;
  }
  .mini-st.st-confirmed { background: #E9F5EE; color: #195E39; border-color: #B4DBC4; }
  .mini-st.st-reported { background: #EBF2FA; color: #204B78; border-color: #B6CEE8; }
  .mini-st.st-claim { background: #FEF2E4; color: #9C4F06; border-color: #ECC596; }
  .mini-st.st-ongoing { background: #F3ECFA; color: #5D3380; border-color: #D2BAE8; }
  .mini-hl {
    font-family: 'C059', 'DejaVu Serif', Georgia, serif;
    font-size: 10.6px;
    font-weight: 700;
    line-height: 1.13;
    color: #0E1726;
    margin-top: 1.5px;
  }
  .mini-body {
    font-size: 8.35px;
    line-height: 1.2;
    color: #253040;
    margin-top: 1.5px;
  }

  /* Bottom Atlas Map + 21-Story Briefs */
  .lower-band {
    margin: 5.5px 18px 0;
    display: grid;
    grid-template-columns: 296px 1fr;
    gap: 12px;
    flex: 1;
    min-height: 0;
  }
  .sec-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1.2px solid #C6BCA6;
    padding-bottom: 1.5px;
    margin-bottom: 4px;
  }
  .sec-title {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 10.6px;
    font-weight: 700;
    color: #0E1726;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .sec-sub {
    font-size: 8.3px;
    color: #545F6E;
    font-style: italic;
  }
  .map-cap {
    margin-top: 3px;
    font-size: 8.2px;
    color: #3E4A5B;
    display: flex;
    justify-content: space-between;
  }
  .brief-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 11px;
  }
  .brief-col {
    display: flex;
    flex-direction: column;
    gap: 2.35px;
  }
  .brief-row {
    font-size: 8.42px;
    line-height: 1.185;
    color: #182231;
  }
  .b-num {
    display: inline-block;
    min-width: 14px;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-weight: 700;
    color: #9B1C24;
  }
  .b-reg {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-weight: 700;
    color: #1E4E79;
  }
  .inline-tag {
    display: inline-block;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 6.8px;
    font-weight: 700;
    color: #FFF;
    padding: 0 3.2px;
    border-radius: 1.5px;
    vertical-align: 0.4px;
    letter-spacing: 0.2px;
  }

  /* Prominent DATE CHECK audit box */
  .date-check {
    margin: 4px 18px 0;
    padding: 4.5px 8px;
    border: 1.4px solid #9B1C24;
    border-left: 5px solid #9B1C24;
    background: #FDF2F0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .dc-label {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans', sans-serif;
    font-size: 9.6px;
    font-weight: 700;
    color: #9B1C24;
    letter-spacing: 0.45px;
    white-space: nowrap;
    padding-top: 1px;
  }
  .dc-text {
    font-size: 8.3px;
    line-height: 1.21;
    color: #211B1B;
  }

  /* Legend + Footer */
  .legend-bar {
    margin: 3px 18px 2.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.7px;
    color: #3E4A5B;
  }
  .legend-pills {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .lg-dot {
    display: inline-block;
    width: 6.5px; height: 6.5px;
    border-radius: 50%;
    vertical-align: -1px;
    margin-right: 2px;
  }
  .bottom-bar {
    height: 18px;
    background: #132238;
    color: #DDE5F0;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8.2px;
    font-weight: 700;
    letter-spacing: 0.6px;
  }
</style>
</head>
<body>
<div class="page">
  <header class="top-bar">
    <span>${esc(EDITION.kickerLeft)}</span>
    <span class="accent">${totalRegionCount} DATED STORIES · 7 REGIONS · FULL DAY TO ${esc(EDITION.pressTimeUtc)}</span>
    <span>SUNDAY 22 NOVEMBER 2026</span>
  </header>

  <section class="masthead">
    <h1>${esc(EDITION.dateTitle)}</h1>
    <div class="deck">${esc(EDITION.deck)}</div>
  </section>

  <section class="kpi-strip">${kpiHtml}</section>
  <section class="reg-bar" aria-label="${totalRegionCount} stories across 7 regions">${regionBarHtml}</section>

  <section class="utc-bar">
    <span class="utc-label">THE DAY IN UTC</span>
    <div class="utc-items">${timelineHtml}</div>
  </section>

  <section class="hero-grid">${heroHtml}</section>
  <section class="mini-grid">${secondaryHtml}</section>

  <section class="lower-band">
    <div class="map-col">
      <div class="sec-head">
        <span class="sec-title">Where It Happened</span>
        <span class="sec-sub">pins match stories 1–15</span>
      </div>
      ${mapSvg}
      <div class="map-cap">
        <span><b style="color:#9B1C24;">●</b> 1–3 Lead stories · <b style="color:#C92A30;">●</b> 4–15 Cards</span>
        <span>Vector atlas</span>
      </div>
    </div>
    <div class="briefs-col">
      <div class="sec-head">
        <span class="sec-title">Also on Sunday 22 November — ${BRIEF_STORIES.length} More Stories</span>
        <span class="sec-sub">all dated 22 Nov 2026 · 7 regions</span>
      </div>
      <div class="brief-cols">
        <div class="brief-col">${leftBriefs.map(renderBrief).join('')}</div>
        <div class="brief-col">${rightBriefs.map(renderBrief).join('')}</div>
      </div>
    </div>
  </section>

  <section class="date-check">
    <div class="dc-label">DATE CHECK</div>
    <div class="dc-text">${esc(DATE_CHECK_TEXT)}</div>
  </section>

  <div class="legend-bar">
    <div class="legend-pills">
      <span><i class="lg-dot st-confirmed"></i><b>CONFIRMED</b> official / 2+ wires</span>
      <span><i class="lg-dot st-reported"></i><b>REPORTED</b> single wire / local</span>
      <span><i class="lg-dot st-claim"></i><b>CLAIM</b> contested account</span>
      <span><i class="lg-dot st-ongoing"></i><b>ONGOING</b> developing search</span>
    </div>
    <span>Sources: Reuters, AP, AFP, BBC, Al Jazeera, Guardian, SCMP, The Hindu, ICC, FIA, ATP, Vatican News</span>
  </div>

  <footer class="bottom-bar">
    <span>THE WORLD IN ONE DAY</span>
    <span>ORIGINAL VECTOR ILLUSTRATIONS · GENERATED IN CODE</span>
    <span>SUNDAY 22 NOVEMBER 2026 · ONE PAGE</span>
  </footer>
</div>
</body>
</html>`;
}

async function main() {
  const html = buildHtml();
  const outHtml = resolve(repoDir, 'src/page.html');
  const outPng = resolve(repoDir, 'entry.png');
  writeFileSync(outHtml, html, 'utf8');

  const req = createRequire(
    '/var/lib/openbot/OpenBot/Agents/agent-3425d58e-7006-4d39-813e-3003de7d3d17/gta6-01/tools/package.json'
  );
  const { chromium } = req('playwright-core');

  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({
      viewport: { width: 1024, height: 1024 },
      deviceScaleFactor: 1,
    });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });

    await page.setContent(html, { waitUntil: 'load' });
    const metrics = await page.evaluate(() => {
      const pageEl = document.querySelector('.page');
      const footerEl = document.querySelector('.bottom-bar');
      const dateCheck = document.querySelector('.date-check');
      const clipped = [];
      for (const el of document.querySelectorAll('.hero-card, .mini-card, .mini-place, .brief-row, .date-check, .utc-bar')) {
        if (el.scrollHeight > el.clientHeight + 1.5 || el.scrollWidth > el.clientWidth + 1.5) {
          clipped.push({ cls: el.className, text: (el.textContent || '').slice(0, 32), sh: el.scrollHeight, ch: el.clientHeight, sw: el.scrollWidth, cw: el.clientWidth });
        }
      }
      const lastBrief = Array.from(document.querySelectorAll('.brief-row')).reduce(
        (max, el) => Math.max(max, el.getBoundingClientRect().bottom),
        0
      );
      const mapCapBottom = document.querySelector('.map-cap').getBoundingClientRect().bottom;
      return {
        scrollH: document.documentElement.scrollHeight,
        scrollW: document.documentElement.scrollWidth,
        pageBottom: pageEl.getBoundingClientRect().bottom,
        footerBottom: footerEl.getBoundingClientRect().bottom,
        dateCheckTop: dateCheck.getBoundingClientRect().top,
        lastBriefBottom: lastBrief,
        mapCapBottom,
        gapAboveDateCheck: Math.min(dateCheck.getBoundingClientRect().top - lastBrief, dateCheck.getBoundingClientRect().top - mapCapBottom),
        clipped,
      };
    });

    if (metrics.gapAboveDateCheck < 3) {
      throw new Error(`Layout overlap/squeeze above DATE CHECK: gap=${metrics.gapAboveDateCheck.toFixed(1)}px`);
    }

    await page.screenshot({ path: outPng, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });
    const sz = statSync(outPng).size;
    console.log(JSON.stringify({ ok: errors.length === 0, errors, size_bytes: sz, metrics }, null, 2));
    if (errors.length > 0) process.exit(1);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
