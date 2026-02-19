import { Tile } from "@/lib/types/board";

export const BgXY = (value: Tile, size: number) => {
  if (value === null) return;

  const valueIndex = value - 1;
  const row = Math.floor(valueIndex / size);
  const col = valueIndex % size;

  const percent = 100 / (size - 1);
  const X = col * percent;
  const Y = row * percent;

  return { X, Y };
};
