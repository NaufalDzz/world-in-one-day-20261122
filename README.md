# world-in-one-day-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/NaufalDzz/world-in-one-day-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/NaufalDzz/world-in-one-day-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

**Sunday 22 November 2026 — The World in One Day** is a 1024×1024 archival broadsheet front page and world-news atlas summarizing **37 date-verified stories across 7 regions** over the full UTC day up to **22:35 UTC**, featuring high-contrast original SVG editorial illustrations, a continuous-Eurasia light editorial vector locator map, epistemic certainty tags (`CONFIRMED`, `REPORTED`, `CLAIM`, `ONGOING`), and an explicit single-day `DATE CHECK` audit.

## Highlights
- **Full-day UTC coverage (00:00–22:35 UTC):** Captures every resolved Sunday 22 November 2026 outcome — COP31 collapsing after nearly 49 hours of overtime, Russia's 186-drone barrage and the Dymer apartment collapse (five killed; 7-year-old boy rescued alive after 14 hours), Iran's Bahrain radar claim vs Sitra industrial plant fire, Hong Kong's record 98.79% Election Committee turnout, India's record 720/9 Test total in Wellington, Max Verstappen's Las Vegas GP victory, Liverpool's 4–0 rout of 10-man Manchester United, and Carlos Alcaraz winning his maiden ATP Finals title over Alexander Zverev.
- **37 strictly dated stories across 7 regions:** Europe (8), Middle East (7), Asia-Pacific (8), Americas (7), Africa (3), Oceania (2), World (2) — dynamically tallied in code with a zero-overlap vector atlas and explicit exclusions of earlier-day (20–21 Nov) stories.
- **Deterministic offline delivery:** `main.ts` uses only Node 22 built-in modules (`node:fs`, `node:path`), verifies PNG signature/dimensions/IEND trailer and byte caps (`<= 1024×1024`, `<= 1 MiB`), and writes `/output/entry.png` byte-identically on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To rebuild `entry.png` from the HTML/SVG broadsheet source locally:

```sh
node src/render.mjs
```

## License
MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
