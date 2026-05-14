interface KeymapLayer {
  color: string;
  sources: Record<string, string>;
}

const KEYMAP_LAYERS: KeymapLayer[] = [
  {
    color: "#1d4ed8",
    sources: {
      鼎: "d",
      廾: "n",
      男: "n",
      弓: "g",
      鼓: "g",
      "衣": "y",
      音: "y",
      革: "g",
      戈: "g",
      耳: "r",
      阝: "r",
      页: "y",
      文: "w",
      可: "k",
      韦: "w",
      非: "f",
      歹: "d",
      鸟: "n",
      言: "y",
      "羊": "y",
      "大": "d",
      刀: "d",
      瓦: "w",
      甘: "g",
      "": "y",
      心: "x",
      行: "x",
      "丆": "x",
      "辛": "x",
      香: "x",
      女: "n",
      "雨": "y",
      羽: "y",
      穴: "x",
      "血": "x",
      龠: "y",
      "禾": "h",
      黑: "h",
      子: "z",
      止: "z",
      豸: "z",
      至: "z",
      黹: "z",
      田: "t",
      门: "m",
      毛: "m",
      皿: "m",
      马: "m",
      麦: "m",
      面: "m",
      黾: "m",
      矛: "m",
      虫䖵: "c",
      "车龺": "c",
      厂: "c",
      齿: "c",
      赤: "c",
      示礻: "s",
      石: "d",
      矢: "s",
      舌: "s",
      食: "s",
      山: "s",
      巳: "s",
      豕乑: "s",
      镸: "s",
      身: "s",
      死: "s",
      色: "s",
      气: "q",
      犬: "q",
      龶: "q",
      "匚": "q",
      青: "q",
      巾: "j",
      见: "j",
      角: "j",
      糸纟: "j",
      勹: "j",
      斤: "j",
      尸: "p",
      片爿: "p",
      皮: "p",
      疒: "b",
      贝: "b",
      髟: "b",
      匕: "b",
      鼻: "b",
      釆: "b",
      目: "m",
      手龵: "s",
      "土士": "t",
      鬼: "g",
      骨: "g",
      火: "h",
      户: "h",
      虍: "h",
      走: "z",
      "足": "z",
      隹: "z",
      舟: "z",
      彳: "s",
      酉: "y",
      广: "g",
      不: "b",
      卜: "b",
      缶: "f",
      爪: "z",
      入: "r",
      父: "f",
      豆: "d",
      斗: "d",
      瓜: "g",
      光: "g",
      谷: "g",
      黄: "h",
      壴: "z",
      鼠: "s",
      首: "s",
      黍: "s",
      肉: "r",
      尢: "y",
      冫: "l",
      力: "l",
      "": "l",
      罒: "l",
      耒: "l",
      "鹿": "l",
      卤: "l",
      鬲: "l",
      风: "f",
      "": "y",
      "卩": "d",
      夂: "d",
      攵攴: "f",
      "刂": "l",
      "癶": "d",
      "忄": "x",
      "": "f",
      饣: "s",
      犭: "f",
      "": "c",
      殳: "s",
      "": "f",
      灬: "d",
      爫: "z",
      㔾: "c",
    },
  },
  {
    color: "#1d4ed8",
    sources: {
      "冂": "o",
      "厶龴": "i",
      工: "o",
      "人": "e",
      宀冖: "i",
      覀: "a",
      乂: "i",
      "": "i",
      夕: "i",
      鱼: "v",
      月: "e",
      亠: "v",
      "": "v",
      米: "i",
      欠: "i",
      几: "i",
      白: "i",
      "牛牜": "u",
      寸: "u",
      "": "u",
      又: "o",
      辶廴: "u",
      "川": "a",
      "立": "i",
      老耂: "a",
      凵: "a",
      讠: "a",
      "": "v",
      "扌": "o",
    },
  },
  {
    color: "#0891b2",
    sources: {
      "儿": "v",
      "八丷": "v",
      亼亽: "a",
    },
  },
  {
    color: "#7c3aed",
    sources: {
      "": ";",
      "": "o",
      "十": ";",
      "": ";",
      "囗": "/",
      "二巜": "/",
      业: "u",
      "王玉": ";",
      "三彡巛": "/",
      "小": "e",
      "彐彑": "/",
      艹: "p",
      "日": "v",
      金钅: "k",
      口: "/",
      "木朩": ",",
      "水氵氺": "w",
      "竹": "q",
      衤: "r",
      亻: ".",
    },
  },
];

const ROWS = [
  ["a", "o", "e", "i", "u", "v", ";", "/"],
  ["b", "p", "m", "f", "d", "t", "n", "l"],
  ["g", "k", "h", "w", "j", "q", "x", "y"],
  ["z", "c", "s", "r", ",", "."],
];

const FIRST_ROW = new Set(ROWS[0]);
const PUNCT_KEYS = new Set([",", "."]);

function keyColors(key: string): { bg?: string; label?: string } {
  if (FIRST_ROW.has(key)) return { bg: "#f9e7fe", label: "#750e92" };
  if (PUNCT_KEYS.has(key)) return {};
  return { bg: "#eff6ff", label: "#1e3a8a" };
}
const CELL_WIDTH = 120;
const CELL_HEIGHT = 120;
const CELL_PADDING = 8;
const GAP_X = 8;
const GAP_Y = 8;
const MARGIN_X = 24;
const MARGIN_Y = 24;
const INFO_HEIGHT = 44;
const FONT_FAMILY = '"Noto Sans CJK SC", "Noto Serif SC Chai", sans-serif';
const CHAR_SIZE = 14;
const ENTRY_HEIGHT = 24;
const LABEL_Y = 24;
const INITIAL_Y = LABEL_Y + 8;

interface CharEntry {
  ch: string;
  secondary: boolean;
}

interface KeyCellProps {
  keyLetter: string;
  x: number;
  y: number;
  layers?: { chars: CharEntry[]; color: string }[];
  bgColor?: string;
  labelColor?: string;
}

export function KeyCell({
  keyLetter,
  x,
  y,
  layers = [],
  bgColor,
  labelColor,
}: KeyCellProps) {
  const charsPerRow = Math.max(
    1,
    Math.floor((CELL_WIDTH - 2 * CELL_PADDING) / CHAR_SIZE),
  );

  const mapper: Record<string, string> = {
    a: "乙",
    o: "丶",
    e: "一",
    i: "丨",
    u: "丿",
    b: "b",
    p: "p",
    m: "m",
    f: "f",
    d: "d",
    t: "t",
    n: "n",
    l: "l",
    g: "g",
    k: "k",
    h: "h",
    w: "w",
    j: "j",
    q: "q",
    x: "x",
    y: "y",
    z: "z zh",
    c: "c ch",
    s: "s sh",
    r: "r ∅",
  };

  const elements: React.ReactNode[] = [];
  let currentY = INITIAL_Y;

  for (let li = 0; li < layers.length; li++) {
    const { chars, color } = layers[li];
    if (!chars.length) continue;
    const numRows = Math.ceil(chars.length / charsPerRow);
    for (let i = 0; i < chars.length; i++) {
      const { ch, secondary } = chars[i];
      const fontSize = secondary ? CHAR_SIZE * 0.8 : CHAR_SIZE;
      elements.push(
        <text
          key={`${li}-${i}`}
          x={x + CELL_PADDING + (i % charsPerRow) * CHAR_SIZE}
          y={
            y +
            currentY +
            Math.floor(i / charsPerRow) * ENTRY_HEIGHT +
            ENTRY_HEIGHT * 0.75
          }
          fontSize={fontSize}
          fill={color}
        >
          {ch}
        </text>,
      );
    }
    currentY += numRows * ENTRY_HEIGHT;
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
        rx={4}
        fill={bgColor ?? "#f9f9f9"}
        stroke="#c8c8c8"
        strokeWidth={0.8}
      />
      <text
        x={x + CELL_PADDING}
        y={y + LABEL_Y}
        className="key-label"
        fill={labelColor ?? "#222"}
      >
        {keyLetter.toUpperCase()}
      </text>
      {mapper[keyLetter] && (
        <text
          x={x + CELL_WIDTH - CELL_PADDING}
          y={y + LABEL_Y}
          className="key-sub-label"
          fill={labelColor ?? "#222"}
          textAnchor="end"
        >
          {mapper[keyLetter]}
        </text>
      )}
      {elements}
    </g>
  );
}

// Build per-key char lists grouped by layer
const charsByKey = new Map<string, { chars: CharEntry[]; color: string }[]>();
for (const layer of KEYMAP_LAYERS) {
  const layerMap = new Map<string, CharEntry[]>();
  for (const [chars, key] of Object.entries(layer.sources)) {
    const k = String(key)[0].toLowerCase();
    if (!layerMap.has(k)) layerMap.set(k, []);
    const chs = [...chars].filter((ch) => ch.trim());
    for (let i = 0; i < chs.length; i++) {
      layerMap.get(k)?.push({ ch: chs[i], secondary: i > 0 });
    }
  }
  for (const [k, chars] of layerMap) {
    if (!charsByKey.has(k)) charsByKey.set(k, []);
    charsByKey.get(k)?.push({ chars, color: layer.color });
  }
}

const MAX_COLS = Math.max(...ROWS.map((r) => r.length));
const SVG_W = MARGIN_X * 2 + MAX_COLS * (CELL_WIDTH + GAP_X) - GAP_X;
const KEYS_TOP = MARGIN_Y + INFO_HEIGHT;

const LEGEND_FONT_SIZE = 11;
const LEGEND_LINE_HEIGHT = 16;
const LEGEND_PADDING = 8;
const LEGEND_BOX_WIDTH = 2 * CELL_WIDTH + GAP_X;
const LEGEND_TEXT_LINES = [
  "部件字：",
  "　　声母 + 前三个小字根",
  "复合体字（余部不能二分）：",
  "　　声母 + 部首 + 余部前两个小字根",
  "复合体字（余部可以二分）：",
  "　　声母 + 部首 + 余部两块各取第一个小字根",
];
const LEGEND_BOX_H = CELL_HEIGHT;
const LEGEND_BOX_Y = KEYS_TOP + (ROWS.length - 1) * (CELL_HEIGHT + GAP_Y);
const LEGEND_BOX_X = SVG_W - MARGIN_X - LEGEND_BOX_WIDTH;

const FOOTER_FONT_SIZE = 13;
const FOOTER_HEIGHT = 28;
const SVG_H = LEGEND_BOX_Y + LEGEND_BOX_H + FOOTER_HEIGHT + MARGIN_Y;
const FOOTER_Y = SVG_H - MARGIN_Y;

interface DiagramProps {
  fontFaceCSS?: string;
}

export function Diagram({ fontFaceCSS }: DiagramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="297mm"
      height="210mm"
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>冰雪飞花键位图</title>
      <style>{`\
${fontFaceCSS ?? ""}\
text { font-family: ${FONT_FAMILY}; }\
.key-label { font-size: 16px; font-weight: bold; }\
.key-sub-label { font-size: 16px; }\
.info-title { font-size: 32px; fill: #222; }\
.info-meta { font-size: 16px; fill: #444; }\
`}</style>
      <rect x={0} y={0} width={SVG_W} height={SVG_H} fill="white" />
      <text
        x={MARGIN_X * 2}
        y={MARGIN_Y + INFO_HEIGHT * 0.4}
        className="info-meta"
      >
        让二码顶再次伟大
      </text>
      <text
        x={SVG_W / 2}
        y={MARGIN_Y + INFO_HEIGHT * 0.4}
        className="info-title"
        textAnchor="middle"
      >
        冰雪飞花
      </text>
      <text
        x={SVG_W - MARGIN_X * 2}
        y={MARGIN_Y + INFO_HEIGHT * 0.4}
        className="info-meta"
        textAnchor="end"
      >
        谭淞宸 · v0.0.1-alpha
      </text>
      {ROWS.map((row, ri) =>
        row.map((key, ci) => {
          const x = MARGIN_X + ci * (CELL_WIDTH + GAP_X);
          const y = KEYS_TOP + ri * (CELL_HEIGHT + GAP_Y);
          const { bg, label } = keyColors(key);
          return (
            <KeyCell
              key={key}
              keyLetter={key}
              x={x}
              y={y}
              layers={charsByKey.get(key)}
              bgColor={bg}
              labelColor={label}
            />
          );
        }),
      )}
      <g>
        <rect
          x={LEGEND_BOX_X}
          y={LEGEND_BOX_Y}
          width={LEGEND_BOX_WIDTH}
          height={LEGEND_BOX_H}
          fill="#f9f9f9"
          stroke="#c8c8c8"
          strokeWidth={0.8}
          rx={4}
        />
        {LEGEND_TEXT_LINES.map((line, i) => (
          <text
            key={line}
            x={LEGEND_BOX_X + LEGEND_PADDING}
            y={
              LEGEND_BOX_Y +
              LEGEND_PADDING +
              LEGEND_LINE_HEIGHT * i +
              LEGEND_LINE_HEIGHT * 0.8
            }
            fontSize={LEGEND_FONT_SIZE}
            fill="#444"
          >
            {line}
          </text>
        ))}
      </g>
      <text
        x={SVG_W / 2}
        y={FOOTER_Y}
        textAnchor="middle"
        fontSize={FOOTER_FONT_SIZE}
        fill="#444"
      >
        {"「"}
        <tspan fill="#1d4ed8">蓝色</tspan>
        {"：音托字根　"}
        <tspan fill="#0891b2">绿色</tspan>
        {"：形托字根　"}
        <tspan fill="#7c3aed">紫色</tspan>
        {"：特殊字根」"}
      </text>
    </svg>
  );
}
