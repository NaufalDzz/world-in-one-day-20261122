// Builds the 1024x1024 archival broadsheet PNG for Sunday 22 November 2026 via Chromium.
import { createRequire } from 'node:module';
import { writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EDITION,
  KEY_NUMBERS,
  REGIONS,
  TIMELINE_UTC,
  HERO_STORIES,
  SECONDARY_STORIES,
  BRIEF_STORIES,
  DATE_CHECK_TEXT,
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
  if (s === 'LIVE') return 'st-live';
  if (s === 'ONGOING') return 'st-ongoing';
  return 'st-reported';
}

export function buildHtml() {
  const totalRegionCount = REGIONS.reduce((a, r) => a + r.count, 0);

  const kpiHtml = KEY_NUMBERS.map(
    (k) => `<div class="kpi-cell">
      <div class="kpi-val">${esc(k.value)}</div>
      <div class="kpi-lbl">${esc(k.label)}</div>
    </div>`
  ).join('');

  const regionBarHtml = REGIONS.map(
    (r) => `<div class="reg-seg" style="flex:${r.count};background:${r.color};">${esc(r.name)} ${r.count}</div>`
  ).join('');

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

  const secondaryHtml = SECONDARY_STORIES.map(
    (c) => `<article class="mini-card">
      <div class="mini-art">
        ${renderCardArt(c.artKey)}
        <div class="mini-banner">${esc(c.banner)}</div>
        <div class="mini-num">${c.id}</div>
        <div class="mini-status ${statusClass(c.status)}">${esc(c.status)}</div>
      </div>
      <div class="mini-meta">
        <span class="mini-place">${esc(c.place)}</span>
      </div>
      <h3 class="mini-hl">${esc(c.headline)}</h3>
      <p class="mini-body">${esc(c.summary)} <span class="src">(${esc(c.source)})</span></p>
    </article>`
  ).join('');

  const leftBriefs = BRIEF_STORIES.slice(0, 9);
  const rightBriefs = BRIEF_STORIES.slice(9);

  const renderBrief = (b) => {
    const badge = b.tag ? ` <span class="inline-tag ${statusClass(b.tag)}">${esc(b.tag)}</span>` : '';
    return `<div class="brief-row"><span class="b-num">${b.id}</span> <span class="b-reg">${esc(b.region)}:</span> <b>${esc(b.lead)}</b> ${esc(b.text)} <span class="src">(${esc(b.source)})</span>${badge}</div>`;
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
    background: #FBF8F1;
    color: #131E30;
    font-family: 'Noto Sans Display', 'Nimbus Sans', 'DejaVu Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FBF8F1;
  }
  /* Top navy utility bar */
  .top-bar {
    height: 22px;
    background: #111E33;
    color: #F4EFE3;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9.4px;
    font-weight: 700;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .top-bar .accent { color: #F4C95D; }
  /* Masthead */
  .masthead {
    padding: 3px 20px 5px;
    text-align: center;
    border-bottom: 2.5px solid #111E33;
  }
  .masthead h1 {
    font-family: 'Noto Serif Display', 'C059', 'Nimbus Roman', Georgia, serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -1.0px;
    color: #0E192B;
  }
  .masthead .deck {
    margin-top: 2px;
    font-family: 'Noto Serif Display', 'C059', Georgia, serif;
    font-style: italic;
    font-size: 12.6px;
    font-weight: 700;
    color: #8F1B22;
    letter-spacing: 0.05px;
  }
  /* Key Numbers ribbon */
  .kpi-strip {
    height: 46px;
    margin: 0 20px;
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
    font-family: 'Noto Serif Display', 'C059', Georgia, serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 1.02;
    color: #9B1C24;
  }
  .kpi-lbl {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 9.3px;
    line-height: 1.1;
    color: #303B4B;
    margin-top: 1px;
  }
  /* Regional bar */
  .reg-bar {
    height: 18px;
    margin: 4px 20px 0;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 9.1px;
    font-weight: 700;
    letter-spacing: 0.45px;
  }
  /* UTC timeline */
  .utc-bar {
    height: 20px;
    margin: 3.5px 20px 0;
    background: #16243B;
    color: #EBF1F8;
    border-radius: 2px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 9.4px;
    letter-spacing: 0.1px;
  }
  .utc-label {
    background: #9B1C24;
    color: #FFF;
    font-weight: 700;
    font-size: 8.5px;
    padding: 1.5px 5px;
    border-radius: 1.5px;
    letter-spacing: 0.4px;
    margin-right: 7px;
    flex-shrink: 0;
  }
  .utc-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    gap: 3px;
    white-space: nowrap;
  }
  .tl-time { color: #F4C95D; font-weight: 700; }
  .tl-dot { color: #6E84A3; }

  /* Hero 3-column grid */
  .hero-grid {
    margin: 5px 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 11px;
    padding-bottom: 5px;
    border-bottom: 1.8px solid #1A283F;
  }
  .hero-card {
    display: flex;
    flex-direction: column;
  }
  .hero-art {
    position: relative;
    height: 98px;
    border: 1px solid #1C2B42;
    overflow: hidden;
    background: #132238;
  }
  .art-tag-left {
    position: absolute;
    top: 0; left: 0;
    background: #9B1C24;
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 8.8px;
    font-weight: 700;
    letter-spacing: 0.4px;
    padding: 2px 6.5px;
  }
  .art-tag-right {
    position: absolute;
    top: 4px; right: 5px;
    background: rgba(15, 26, 44, 0.94);
    color: #F4D35E;
    border: 0.9px solid rgba(255,255,255,0.32);
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 0.35px;
    padding: 1.5px 5.5px;
    border-radius: 1.5px;
  }
  .num-badge {
    position: absolute;
    bottom: 4px; left: 4px;
    width: 18px; height: 18px;
    border-radius: 50%;
    background: #B31B24;
    color: #FFF;
    border: 1.4px solid #FFF8E7;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 10.5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
  .place-tag {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 8.8px;
    font-weight: 700;
    color: #8F1B22;
    letter-spacing: 0.35px;
  }
  .status-pill {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.35px;
    padding: 1px 5px;
    border-radius: 2px;
    color: #FFF;
  }
  .st-confirmed { background: #1E6B43; }
  .st-reported { background: #2B598A; }
  .st-claim { background: #B8650A; }
  .st-ongoing { background: #6A3E8C; }
  .st-live { background: #B31B24; }
  .hero-hl {
    font-family: 'Noto Serif Display', 'C059', Georgia, serif;
    font-size: 16.2px;
    font-weight: 700;
    line-height: 1.12;
    color: #0E192B;
    margin-top: 2px;
  }
  .hero-body {
    font-size: 9.85px;
    line-height: 1.24;
    color: #263040;
    margin-top: 3px;
  }
  .src {
    font-size: 8.6px;
    color: #556070;
    font-style: italic;
  }

  /* Secondary 2x6 card grid */
  .mini-grid {
    margin: 5px 20px 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px 9px;
    padding-bottom: 5.5px;
    border-bottom: 1.8px solid #1A283F;
  }
  .mini-card {
    display: flex;
    flex-direction: column;
  }
  .mini-art {
    position: relative;
    height: 50px;
    border: 0.9px solid #24344D;
    overflow: hidden;
    background: #1A2940;
  }
  .mini-banner {
    position: absolute;
    top: 0; left: 0;
    background: rgba(155, 28, 36, 0.95);
    color: #FFFDF8;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 7.9px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 1px 4.5px;
  }
  .mini-num {
    position: absolute;
    bottom: 2.5px; left: 2.5px;
    width: 14.5px; height: 14.5px;
    border-radius: 50%;
    background: #111E33;
    color: #FFF;
    border: 1.1px solid #F4D35E;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 8.7px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mini-status {
    position: absolute;
    bottom: 2.5px; right: 2.5px;
    color: #FFF;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 7.1px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 0.8px 3.8px;
    border-radius: 1.5px;
    border: 0.6px solid rgba(255,255,255,0.35);
  }
  .mini-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
  }
  .mini-place {
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 8px;
    font-weight: 700;
    color: #8F1B22;
    letter-spacing: 0.25px;
  }
  .mini-hl {
    font-family: 'Noto Serif Display', 'C059', Georgia, serif;
    font-size: 11.3px;
    font-weight: 700;
    line-height: 1.12;
    color: #0E192B;
    margin-top: 1px;
  }
  .mini-body {
    font-size: 8.7px;
    line-height: 1.2;
    color: #283342;
    margin-top: 2px;
  }

  /* Bottom Map + Briefs */
  .lower-band {
    margin: 6px 20px 0;
    display: grid;
    grid-template-columns: 296px 1fr;
    gap: 13px;
    flex: 1;
    min-height: 0;
  }
  .sec-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1.2px solid #C8BFA8;
    padding-bottom: 2px;
    margin-bottom: 4.5px;
  }
  .sec-title {
    font-family: 'Nimbus Sans Narrow', 'Noto Sans Display', sans-serif;
    font-size: 10.6px;
    font-weight: 700;
    color: #0E192B;
    letter-spacing: 0.55px;
    text-transform: uppercase;
  }
  .sec-sub {
    font-size: 8.5px;
    color: #556070;
    font-style: italic;
  }
  .map-cap {
    margin-top: 3px;
    font-size: 8.2px;
    color: #424E5E;
    display: flex;
    justify-content: space-between;
  }
  .brief-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .brief-col {
    display: flex;
    flex-direction: column;
    gap: 4.0px;
  }
  .brief-row {
    font-size: 9.25px;
    line-height: 1.23;
    color: #1A2434;
  }
  .b-num {
    display: inline-block;
    min-width: 15px;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-weight: 700;
    color: #9B1C24;
  }
  .b-reg {
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-weight: 700;
    color: #1F4E79;
  }
  .inline-tag {
    display: inline-block;
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 7.3px;
    font-weight: 700;
    color: #FFF;
    padding: 0 3.8px;
    border-radius: 1.5px;
    vertical-align: 0.5px;
    letter-spacing: 0.25px;
  }

  /* Date Check audit box */
  .date-check {
    margin: 5px 20px 0;
    padding: 5px 9px;
    border: 1.4px solid #9B1C24;
    border-left: 5px solid #9B1C24;
    background: #FDF3F1;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .dc-label {
    font-family: 'Nimbus Sans Narrow', sans-serif;
    font-size: 9.8px;
    font-weight: 700;
    color: #9B1C24;
    letter-spacing: 0.5px;
    white-space: nowrap;
    padding-top: 1px;
  }
  .dc-text {
    font-size: 8.5px;
    line-height: 1.23;
    color: #241E1E;
  }

  /* Legend + Bottom footer */
  .legend-bar {
    margin: 3.5px 20px 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8px;
    color: #424E5E;
  }
  .legend-pills {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .lg-dot {
    display: inline-block;
    width: 7px; height: 7px;
    border-radius: 50%;
    vertical-align: -1px;
    margin-right: 2px;
  }
  .bottom-bar {
    height: 18px;
    background: #111E33;
    color: #DCE4F0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8.4px;
    font-weight: 700;
    letter-spacing: 0.65px;
  }
</style>
</head>
<body>
<div class="page">
  <header class="top-bar">
    <span>${esc(EDITION.kickerLeft)}</span>
    <span class="accent">${esc(EDITION.kickerRight)}</span>
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
        <span><b style="color:#B31B24;">●</b> 1–3 Lead stories · <b style="color:#D13438;">●</b> 4–15 Secondary cards</span>
        <span>Vector map</span>
      </div>
    </div>
    <div class="briefs-col">
      <div class="sec-head">
        <span class="sec-title">Also on Sunday 22 November — 18 More Stories</span>
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
      <span><i class="lg-dot st-ongoing"></i><b>ONGOING</b></span>
      <span><i class="lg-dot st-live"></i><b>LIVE</b> at 17:45 UTC</span>
    </div>
    <span>Sources: Reuters, AP, AFP, BBC, Al Jazeera, Guardian, SCMP, ICC, FIA, Vatican News, PHIVOLCS, wires</span>
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
      const lower = document.querySelector('.lower-band');
      const briefs = document.querySelector('.briefs-col');
      const mapCol = document.querySelector('.map-col');
      const clipped = [];
      for (const el of document.querySelectorAll('.hero-card, .mini-card, .brief-row, .date-check, .utc-bar')) {
        if (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2) {
          clipped.push({ cls: el.className, sh: el.scrollHeight, ch: el.clientHeight, sw: el.scrollWidth, cw: el.clientWidth });
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

    if (metrics.gapAboveDateCheck < 5) {
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
