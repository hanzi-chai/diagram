# diagram

自动生成中文输入法字根图（A4 横向，SVG/PDF）。

## 依赖

- [Bun](https://bun.sh/)（JavaScript 运行时）
- [Inkscape](https://inkscape.org/)（SVG 转 PDF）

## 快速开始

```sh
bun install
```

生成 SVG：

```sh
bun run build:svg   # 输出 diagram.svg
```

生成 PDF：

```sh
bun run build:pdf   # 输出 diagram.pdf（需先生成 SVG）
```

一键生成 SVG 和 PDF：

```sh
bun run build
```

## 数据格式

字根数据以 `KEYMAP_LAYERS` 的形式硬编码在 [src/feihua.tsx](src/feihua.tsx) 中。每个图层包含一种颜色和一个字根映射表：

```ts
{
  color: "#1d4ed8",
  sources: {
    "口": "/",   // 字根 → 键位
    "亻": ".",
  },
}
```

- `sources` 的键为字根字符串（可含多个字符，首字符为主字根，其余为副字根）
- `sources` 的值为单个键位字母（即该字根所在的键）
- 图层颜色区分字根类型：蓝色为音托字根，青色为形托字根，紫色为特殊字根

**添加字体：** 将字体文件（`.ttf`、`.otf`、`.woff`、`.woff2`）放入 `fonts/` 目录，构建时会自动通过 `@font-face` 嵌入。

## 输出

| 文件 | 说明 |
|------|------|
| `diagram.svg` | 矢量图，A4 横向（297mm × 210mm） |
| `diagram.pdf` | 可直接打印的 PDF，A4 横向 |
