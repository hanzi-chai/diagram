import { readdirSync, existsSync } from 'fs';
import { resolve, extname, basename } from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Diagram } from './feihua.js';

const FONT_FORMATS: Record<string, string> = {
  '.woff': 'woff',
  '.woff2': 'woff2',
  '.ttf': 'truetype',
  '.otf': 'opentype',
};

let fontFaceCSS = '';
const fontsDir = resolve('fonts');
if (existsSync(fontsDir)) {
  for (const file of readdirSync(fontsDir)) {
    const ext = extname(file).toLowerCase();
    const format = FONT_FORMATS[ext];
    if (format) fontFaceCSS += `@font-face { font-family: "${basename(file, ext)}"; src: url(fonts/${file}) format('${format}'); }\n`;
  }
}

const svg = renderToStaticMarkup(React.createElement(Diagram, { fontFaceCSS }));
process.stdout.write('<?xml version="1.0" encoding="UTF-8"?>\n');
process.stdout.write(svg);
process.stdout.write('\n');
