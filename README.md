# world-in-one-day-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/NaufalDzz/world-in-one-day-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/NaufalDzz/world-in-one-day-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

**Sunday 22 November 2026 — The World in One Day** is a 1024×1024 archival broadsheet front page and world-news atlas summarizing 33 date-verified stories across 7 regions up to 17:45 UTC, with original SVG editorial illustrations, a vector world locator map, epistemic certainty tags (`CONFIRMED`, `REPORTED`, `CLAIM`, `ONGOING`, `LIVE`), and an explicit single-day `DATE CHECK` audit.

## Highlights
- **Full-day UTC coverage (00:00–17:45 UTC):** Captures the afternoon collapse of COP31 in Antalya, final official 98.79% turnout in Hong Kong's Election Committee vote, Russia's 186-drone barrage and the Dymer collapse, Iran's Bahrain radar claim vs Sitra industrial fire denial, India's record 720/9 Test innings in Wellington, Verstappen's Las Vegas GP victory, Wembanyama's 50-point game, and live Anfield coverage.
- **33 stories across 7 regions:** Europe (7), Middle East (7), Asia-Pacific (8), Americas (4), Africa (3), Oceania (2), World (2).
- **Deterministic offline delivery:** `main.ts` uses only Node 22 built-in modules (`node:fs`, `node:path`), verifies PNG integrity and byte/dimension caps (`<= 1024×1024`, `<= 1 MiB`), and writes `/output/entry.png` byte-identically on every run.

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
