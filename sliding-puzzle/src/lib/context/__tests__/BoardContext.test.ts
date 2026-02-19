import { reducer } from "../BoardContext";
import { firstInit } from "../../utils/game/init";

describe("Board reducer", () => {
  it("should initialize board with INIT", () => {
    const initial = firstInit(3);

    const next = reducer(initial, { type: "INIT", size: 4 });

    expect(next.size).toBe(4);
    expect(next.tiles.length).toBe(16);
  });

  it("should update image flag only when size stays same", () => {
    const initial = firstInit(3);

    const next = reducer(initial, {
      type: "SET_OPTIONS",
      size: 3,
      isImage: true,
    });

    expect(next.isImage).toBe(true);
    expect(next.size).toBe(3);
  });

  it("should reinitialize when size changes in SET_OPTIONS", () => {
    const initial = firstInit(3);

    const next = reducer(initial, {
      type: "SET_OPTIONS",
      size: 4,
      isImage: true,
    });

    expect(next.size).toBe(4);
    expect(next.isImage).toBe(true);
    expect(next.tiles.length).toBe(16);
  });
});
