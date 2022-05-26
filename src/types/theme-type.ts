type ColorKeysWithPalette =
  | "gray"
  | "primary"
  | "accent"
  | "danger"
  | "warning"
  | "info"
  | "success";

type ColorKeysWithoutPalette = "transparent" | "current" | "black" | "white";

type PaletteKeys = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type Intents =
  | "primary"
  | "secondary"
  | "accent"
  | "danger"
  | "warning"
  | "info"
  | "success";
type FontWeights =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type Theme = {
  color: `${ColorKeysWithPalette}-${PaletteKeys}` | ColorKeysWithoutPalette;
  size: Sizes;
  intent: Intents;
  fontWeight: FontWeights;
};
