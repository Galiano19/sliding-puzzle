import { Board } from "@/lib/types/board";
import { generateTiles } from "./init";

export function isComplete(board: Board) {
  const orderedTiles = generateTiles(board.size);

  return JSON.stringify(board.tiles) === JSON.stringify(orderedTiles);
}

export function updateStatus(board: Board) {
  if (isComplete(board)) {
    board.status = "complete";
  }
}
