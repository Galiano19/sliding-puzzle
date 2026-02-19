import { Board, Tile } from "@/lib/types/board";
import { generateTiles } from "./init";

export function isComplete(tiles: Tile[], size: number) {
  const orderedTiles = generateTiles(size);

  return JSON.stringify(tiles) === JSON.stringify(orderedTiles);
}

export function updateStatus(board: Board) {
  if (isComplete(board.tiles, board.size)) {
    board.status = "complete";
  }
}
