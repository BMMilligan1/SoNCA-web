/**
 * Generates the social-share image and the Apple touch icon from the vector
 * mark, so both stay in step with the brand without a binary round-trip.
 *
 *   node scripts/generate-images.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const favicon = readFileSync(join(root, 'public/favicon.svg'), 'utf8');

/** The roundel alone, without the rounded-square plate. */
const mark = favicon
  .replace('<rect width="100" height="100" rx="14" fill="#fbf9f5"/>', '')
  .replace(/^<\?xml.*?\?>\s*/, '');

// --- Apple touch icon -------------------------------------------------------
await sharp(Buffer.from(favicon), { density: 600 })
  .resize(180, 180)
  .png()
  .toFile(join(root, 'public/apple-touch-icon.png'));

// --- Open Graph image -------------------------------------------------------
const W = 1200;
const H = 630;

/**
 * Text is drawn as paths so the result does not depend on which fonts the
 * rendering machine happens to have installed.
 */
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#fbf9f5"/>
  <rect width="${W}" height="10" fill="#12314f"/>
  <rect width="380" height="10" fill="#2c6b3f"/>
  <rect x="380" width="120" height="10" fill="#b4652a"/>

  <g transform="translate(96, 150) scale(2.3)">
    ${mark.replace(/<svg[^>]*>/, '').replace('</svg>', '')}
  </g>

  <g transform="translate(400, 176)">
    <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="600" fill="#12314f" letter-spacing="-1.5">Society for</text>
    <text x="0" y="82" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="600" fill="#12314f" letter-spacing="-1.5">Natural Capital</text>
    <text x="0" y="164" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="600" fill="#12314f" letter-spacing="-1.5">Accounting</text>
    <rect x="2" y="206" width="96" height="4" fill="#b4652a"/>
    <text x="0" y="266" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#48565f">A professional home for people who produce,</text>
    <text x="0" y="304" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#48565f">use and improve natural capital accounts.</text>
  </g>

  <rect y="${H - 8}" width="${W}" height="8" fill="#12314f"/>
</svg>`;

writeFileSync(join(root, 'scripts/.og.svg'), og);

await sharp(Buffer.from(og), { density: 144 })
  .resize(W, H)
  .png()
  .toFile(join(root, 'public/og-image.png'));

console.log('Wrote public/apple-touch-icon.png and public/og-image.png');
