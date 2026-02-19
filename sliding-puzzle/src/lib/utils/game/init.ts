import { Tile } from "@/lib/types/board";
import { getMovableIndexes } from "./move";

/**
 * Shuffles the board by making more than 200 moves
 * It gets the index of the empty tile
 * Then gets the indexes of the tiles that can be moved
 * Then picks one of those indexes randomly
 * Then swaps the empty tile with the randomly picked tile
 * in this way we get a solvable board
 * @param tiles Tiles
 * @param size Size
 * @returns Tiles
 */
export function shuffle(tiles: Tile[], size: number) {
  const shuffleTiles = [...tiles];
  for (let index = 0; index < size * size * 200; index++) {
    const emptyIndex = shuffleTiles.indexOf(null);
    const movableItems = getMovableIndexes(emptyIndex, size);
    const randomIndex =
      movableItems[Math.floor(Math.random() * movableItems.length)];

    shuffleTiles[emptyIndex] = shuffleTiles[randomIndex];
    shuffleTiles[randomIndex] = null;
  }

  return shuffleTiles;
}

export function generateTiles(size: number) {
  return Array.from({ length: size * size }, (_, i) =>
    i === size * size - 1 ? null : i + 1,
  );
}

export function initBoard(size: number = 2): Tile[] {
  if (size < 2) size = 2;

  const tiles = generateTiles(size);
  return shuffle(tiles, size);
}
