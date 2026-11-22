// Deterministic offline entry for make.fun news-image-20261122 (Node 22 stdlib only).
// Validates the bundled 1024x1024 PNG artwork and writes /output/entry.png byte-identically.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;
const MAX_DIM = 1024;

function assertValidPng(buf: Buffer): { width: number; height: number } {
  if (buf.length === 0 || buf.length > MAX_BYTES) {
    throw new Error(`entry.png size ${buf.length} exceeds limit ${MAX_BYTES}`);
  }
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error('entry.png does not begin with a valid PNG signature');
  }
  const ihdrType = buf.subarray(12, 16).toString('ascii');
  if (ihdrType !== 'IHDR') {
    throw new Error(`expected IHDR chunk first, found ${ihdrType}`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || height < 1 || width > MAX_DIM || height > MAX_DIM) {
    throw new Error(`dimensions ${width}x${height} outside 1..${MAX_DIM}`);
  }
  const iend = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  if (!buf.subarray(buf.length - 12).equals(iend)) {
    throw new Error('entry.png missing valid IEND trailer');
  }
  return { width, height };
}

const sourceUrl = new URL('./entry.png', import.meta.url);
const imageBytes = readFileSync(sourceUrl);
const { width, height } = assertValidPng(imageBytes);

if (process.argv.includes('--verify-only')) {
  console.log(JSON.stringify({ ok: true, width, height, bytes: imageBytes.length }));
} else {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.png'), imageBytes);
}
