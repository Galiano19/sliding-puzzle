import { Board } from "@/lib/types/board";
import { isComplete } from "./engine";

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

export function moveTile(
  data: Board,
  index: number,
): {
  tiles: Board["tiles"];
  status: Board["status"];
  moves: number;
  movableIndexes: number[];
} {
  if (data.status === "complete")
    return {
      tiles: data.tiles,
      status: data.status,
      moves: data.moves,
      movableIndexes: [],
    };

  const emptyIndex = data.tiles.indexOf(null);
  const currentMovableIndexes = getMovableIndexes(emptyIndex, data.size);

  //I disabled the tile when is not movable, still I use defense coding here
  if (!currentMovableIndexes.includes(index))
    return {
      tiles: data.tiles,
      status: data.status,
      moves: data.moves,
      movableIndexes: [],
    };

  const newTiles = [...data.tiles];

  newTiles[emptyIndex] = data.tiles[index];
  newTiles[index] = null;

  const newBoard = { ...data, tiles: newTiles };
  const status = isComplete(newBoard) ? "complete" : "playing";
  const moves = data.moves + 1;
  const newEmptyIndex = index;
  const movableIndexes = getMovableIndexes(newEmptyIndex, data.size);

  return { tiles: newTiles, status, moves, movableIndexes };
}
