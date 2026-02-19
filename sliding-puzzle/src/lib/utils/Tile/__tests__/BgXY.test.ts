import { BgXY } from "../BgXY";

describe("BgXY", () => {
  describe("edge cases", () => {
    it("2x2 board", () => {
      expect(BgXY(1, 2)).toEqual({ X: 0, Y: 0 });
      expect(BgXY(2, 2)).toEqual({ X: 100, Y: 0 });
      expect(BgXY(3, 2)).toEqual({ X: 0, Y: 100 });
      expect(BgXY(4, 2)).toEqual({ X: 100, Y: 100 });
    });
  });

  describe("3x3 board", () => {
    const size = 3;

    it("should return {0,0} for value 1 (top-left)", () => {
      expect(BgXY(1, size)).toEqual({ X: 0, Y: 0 });
    });

    it("should return correct position for top-right (value 3)", () => {
      expect(BgXY(3, size)).toEqual({ X: 100, Y: 0 });
    });

    it("should return correct position for bottom-right (value 9)", () => {
      expect(BgXY(9, size)).toEqual({ X: 100, Y: 100 });
    });
  });

  describe("4x4 board", () => {
    const size = 4;

    it("should calculate correctly for value 1", () => {
      expect(BgXY(1, size)).toEqual({ X: 0, Y: 0 });
    });

    it("should calculate correctly for value 6", () => {
      const result = BgXY(6, size);
      expect(result?.X).toBeCloseTo(33.3333);
      expect(result?.Y).toBeCloseTo(33.3333);
    });
  });
});
