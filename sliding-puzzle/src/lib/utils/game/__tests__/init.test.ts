import { initBoard } from "../init";

describe("initBoard", () => {
  it("initializes at least 2x2 size", () => {
    const result = initBoard(0);
    expect(result).toEqual([1, 2, 3, null]);
  });

  it("initializes based on a provided number", () => {
    const result = initBoard(4);
    expect(result).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      null,
    ]);
  });

  it("initializes a board with enough tiles", () => {
    const numberProvided = 5;

    const result = initBoard(numberProvided);

    expect(result).toHaveLength(numberProvided * numberProvided);
  });
});
