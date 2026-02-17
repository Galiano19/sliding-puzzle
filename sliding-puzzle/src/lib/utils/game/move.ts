import { Board } from "@/lib/types/board";

/**
 * Checks if a tile can be moved
 * I first get the "coordinates" of the empty tile
 * then I get the "coordinates" of index (tile clicked)
 * to know if it is adjecent, distance of the row and column has to be 1
 * @param data Board
 * @param index Index of the tile to move
 * @returns boolean
 */
function canMove(data: Board, index: number) {
  const emptyTile = data.tiles.indexOf(null);
  const emptyRowOfTile = Math.floor(emptyTile / data.size);
  const emptyColOfTile = emptyTile % data.size;
  const row = Math.floor(index / data.size);
  const col = index % data.size;

  return (
    (row === emptyRowOfTile && Math.abs(col - emptyColOfTile) === 1) ||
    (col === emptyColOfTile && Math.abs(row - emptyRowOfTile) === 1)
  );
}

export function moveTile(data: Board, index: number) {
  const emptyIndex = data.tiles.indexOf(null);

  if (!canMove(data, index)) {
    return data.tiles;
  }

  const newTiles = [...data.tiles];

  newTiles[emptyIndex] = data.tiles[index];
  newTiles[index] = null;

  return newTiles;
}
