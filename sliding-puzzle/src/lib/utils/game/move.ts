import { Board } from "@/lib/types/board";

/**
 * Gets the indexes of the tiles that can be moved
 * based on the index of the empty tile
 * @param emptyIndex Index of the empty tile
 * @param size Size of the board
 * @returns Array of indexes that can be moved
 */
export function getMovableIndexes(emptyIndex: number, size: number) {
  const row = Math.floor(emptyIndex / size);
  const col = emptyIndex % size;

  const moves: number[] = [];

  if (row > 0) moves.push(emptyIndex - size);
  if (row < size - 1) moves.push(emptyIndex + size);
  if (col > 0) moves.push(emptyIndex - 1);
  if (col < size - 1) moves.push(emptyIndex + 1);

  return moves;
}

export function moveTile(data: Board, index: number) {
  const emptyIndex = data.tiles.indexOf(null);

  if (!getMovableIndexes(emptyIndex, data.size).includes(index))
    return data.tiles;

  const newTiles = [...data.tiles];

  newTiles[emptyIndex] = data.tiles[index];
  newTiles[index] = null;

  return newTiles;
}
