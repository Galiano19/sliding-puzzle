import { useReducer } from "react";
import { Action, Board, Tile } from "../types/board";
import { moveTile } from "../utils/game/move";

function createInitialBoard(size: number): Tile[] {
  const tiles = Array.from({ length: size * size }, (_, i) =>
    i === size * size - 1 ? null : i + 1,
  );
  return tiles;
}

function reducer(state: Board, action: Action): Board {
  switch (action.type) {
    case "INIT":
      return {
        size: action.size,
        tiles: createInitialBoard(action.size),
      };
    case "MOVE":
      return {
        ...state,
        tiles: moveTile(state, action.index),
      };

    default:
      return state;
  }
}

export function useBoard(size: number = 2) {
  const [state, dispatch] = useReducer(reducer, {
    size,
    tiles: createInitialBoard(size),
  });

  return {
    state,
    dispatch,
  };
}
