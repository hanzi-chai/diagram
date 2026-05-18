import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, resolve } from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const schema = process.argv[2];
if (!schema) {
  process.stderr.write("Usage: bun run build <schema>\n");
  process.exit(1);
}

const FONT_FORMATS: Record<string, string> = {
  ".woff": "woff",
  ".woff2": "woff2",
  ".ttf": "truetype",
  ".otf": "opentype",
};

let fontFaceCSS = "";
const fontsDir = resolve("fonts");
if (existsSync(fontsDir)) {
  for (const file of readdirSync(fontsDir)) {
    const ext = extname(file).toLowerCase();
    const format = FONT_FORMATS[ext];
    if (format)
      fontFaceCSS += `@font-face { font-family: "${basename(file, ext)}"; src: url(fonts/${file}) format('${format}'); }\n`;
  }
}

const mod = await import(`./${schema}.js`);
const component = mod.default as
  | ((props: { fontFaceCSS: string }) => React.ReactElement)
  | undefined;

if (!component) {
  process.stderr.write(`No default export found in ${schema}.tsx\n`);
  process.exit(1);
}

const svg = renderToStaticMarkup(
  React.createElement(component, { fontFaceCSS }),
);
const svgFile = `${schema}.svg`;
writeFileSync(svgFile, `<?xml version="1.0" encoding="UTF-8"?>\n${svg}\n`);
process.stdout.write(`Written ${svgFile}\n`);

execFileSync(
  "inkscape",
  [
    svgFile,
    `--export-filename=${schema}.pdf`,
    "--export-area-page",
    "--export-text-to-path",
  ],
  { stdio: "inherit" },
);
process.stdout.write(`Written ${schema}.pdf\n`);
