import { Board } from "@/lib/types/board";
import { isComplete } from "../engine";

describe("Engine", () => {
  describe("isComplete", () => {
    it("returns false if board does not match with an ordered one", () => {
      const board: Board = {
        size: 3,
        tiles: [8, 2, 7, 4, 5, 6, 3, 1, null],
        status: "playing",
        moves: 0,
        movableIndexes: [5, 7],
        isImage: false,
      };

      const result = isComplete(board.tiles, board.size);

      expect(result).toBeFalsy;
    });

    it("returns true if board match with an ordered one", () => {
      const board: Board = {
        size: 3,
        tiles: [1, 2, 3, 4, 5, 6, 7, 8, null],
        status: "playing",
        moves: 0,
        movableIndexes: [5, 7],
        isImage: false,
      };

      const result = isComplete(board.tiles, board.size);

      expect(result).toBeTruthy;
    });
  });
});
