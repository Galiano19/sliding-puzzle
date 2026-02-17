import { Tile } from "@/lib/types/board";

export function initBoard(size: number = 2): Tile[] {
  if (size < 2) size = 2;

  const tiles = Array.from({ length: size * size }, (_, i) =>
    i === size * size - 1 ? null : i + 1,
  );
  return tiles;
}
