import { Board } from "@/lib/types/board";
import { generateTiles, initBoard, shuffle } from "../init";

describe("initBoard", () => {
  describe("base structure", () => {
    it("initializes at least 2x2 size", () => {
      const result = initBoard(0);
      expect(result).toHaveLength(4);
    });

    it("initializes a board with enough tiles based on a provided number", () => {
      const numberProvided = 5;

      const result = initBoard(numberProvided);

      expect(result).toHaveLength(numberProvided * numberProvided);
    });
  });

  describe("generateTiles", () => {
    it("generates tiles based on a provided number", () => {
      const numberProvided = 5;

      const result = generateTiles(numberProvided);

      expect(result).toHaveLength(numberProvided * numberProvided);
    });
  });

  describe("shuffle", () => {
    const board: Board = {
      size: 3,
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, null],
      status: "playing",
      moves: 0,
    };

    it("makes sures that after shuffling, there is only 1 empty tile", () => {
      const result = shuffle(board.tiles, board.size);

      expect(result.filter((tile) => tile === null).length).toBe(1);
    });
  });
});
