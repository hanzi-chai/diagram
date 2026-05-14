# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 常用命令

```sh
bun install          # 安装依赖
bun run build:svg    # 生成 diagram.svg
bun run build:pdf    # 将 diagram.svg 转为 diagram.pdf（需要 Inkscape）
bun run build        # 同时生成 SVG 和 PDF
```

本项目未配置测试或代码检查工具。

## 架构

本项目将"冰雪飞花"输入法的字根图生成为 A4 横向的 SVG/PDF。所有键位数据直接硬编码在组件中，不依赖外部数据文件。

**数据流：** `feihua.tsx`（硬编码的 `KEYMAP_LAYERS`）→ `render.ts` → React SSR → `diagram.svg` → Inkscape → `diagram.pdf`

- [src/feihua.tsx](src/feihua.tsx) — 同时包含键位数据和全部渲染逻辑。`KEYMAP_LAYERS` 是 `{ color, sources: Record<字根, 键位> }` 对象的数组，`KeyCell` 组件也内联定义于此。键位布局采用 4 行自定义排列（非标准 QWERTY）：韵母/标点行 + 三行声母键。
- [src/render.ts](src/render.ts) — 入口文件；扫描 `fonts/` 目录，为找到的字体文件（`.ttf`、`.otf`、`.woff`、`.woff2`）注入 `@font-face` CSS，然后用 `react-dom/server` 的 `renderToStaticMarkup` 将 SVG 输出到 stdout。

**键位布局**（`feihua.tsx` 中的 `ROWS`）：共 4 行 30 键，含 `,`、`.`、`;`、`/` 四个标点键。

**图层颜色：**
- 蓝色（`#1d4ed8`）— 音托字根，共两个图层
- 青色（`#0891b2`）— 形托字根
- 紫色（`#7c3aed`）— 特殊字根

输出 SVG 尺寸为 `297mm × 210mm`（A4 横向），内部 viewBox 由布局常量计算得出。
