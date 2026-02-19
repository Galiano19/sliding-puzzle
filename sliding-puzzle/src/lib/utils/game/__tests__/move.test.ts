import { getMovableIndexes, moveTile } from "../move";
import { Board } from "@/lib/types/board";

describe("moveTile", () => {
  const board: Board = {
    size: 3,
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, null],
    status: "playing",
    moves: 0,
    movableIndexes: [5, 7],
    isImage: false,
  };

  describe("move strategy", () => {
    it("increases the move counter by one after moving", () => {
      const result = moveTile(board, 5);
      expect(result.moves).toEqual(board.moves + 1);
    });
    it("returns the same state if tile to move is not adjecent to an empty space", () => {
      const result = moveTile(board, 0);
      expect(result.tiles).toEqual([1, 2, 3, 4, 5, 6, 7, 8, null]);
      //also checking moves counter does not increase
      expect(result.moves).toEqual(board.moves);
    });

    it("moves tile adjacent to empty space", () => {
      const result = moveTile(board, 5);
      expect(result.tiles).toEqual([1, 2, 3, 4, 5, null, 7, 8, 6]);
    });
  });

  describe("getMovableIndexes", () => {
    it("returns an array with available moves", () => {
      const result = getMovableIndexes(board.tiles.indexOf(null), board.size);
      expect(result).toEqual([5, 7]);
    });
  });
});
