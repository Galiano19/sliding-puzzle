import { getMovableIndexes, moveTile } from "../move";
import { Board } from "@/lib/types/board";

describe("moveTile", () => {
  const board: Board = {
    size: 3,
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, null],
  };

  describe("move strategy", () => {
    it("returns the same state if tile to move is not adjecent to an empty space", () => {
      const result = moveTile(board, 0);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, null]);
    });

    it("moves tile adjacent to empty space", () => {
      const result = moveTile(board, 5);
      expect(result).toEqual([1, 2, 3, 4, 5, null, 7, 8, 6]);
    });
  });

  describe("getMovableIndexes", () => {
    it("returns an array with available moves", () => {
      const result = getMovableIndexes(board.tiles.indexOf(null), board.size);
      expect(result).toEqual([5, 7]);
    });
  });
});
