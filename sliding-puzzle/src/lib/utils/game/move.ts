import { Board } from "@/lib/types/board";

export function moveTile(data: Board, index: number) {
  const emptyIndex = data.tiles.indexOf(null);

  const newTiles = [...data.tiles];

  newTiles[emptyIndex] = data.tiles[index];
  newTiles[index] = null;

  return newTiles;
}
