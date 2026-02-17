import { renderHook, act } from "@testing-library/react";
import { useBoard } from "../useBoard";

describe("useBoard", () => {
  it("initializes at least 2x2 size", () => {
    const { result } = renderHook(() => useBoard());

    expect(result.current.state.size).toBe(2);
    expect(result.current.state.tiles).toEqual([1, 2, 3, null]);
  });

  it("initializes with correct size and tiles", () => {
    const { result } = renderHook(() => useBoard(3));

    expect(result.current.state.size).toBe(3);
    expect(result.current.state.tiles).toEqual([1, 2, 3, 4, 5, 6, 7, 8, null]);
  });

  it("handles INIT action", () => {
    const { result } = renderHook(() => useBoard());

    act(() => {
      result.current.dispatch({ type: "INIT", size: 4 });
    });

    expect(result.current.state.size).toBe(4);
    expect(result.current.state.tiles).toEqual([
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
});
