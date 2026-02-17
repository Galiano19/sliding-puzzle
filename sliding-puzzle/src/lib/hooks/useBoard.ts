import { useReducer } from "react";
import { Action, Board, Tile } from "../types/board";
import { moveTile } from "../utils/game/move";
import { initBoard } from "../utils/game/init";

function reducer(state: Board, action: Action): Board {
  switch (action.type) {
    case "INIT":
      return {
        size: action.size,
        tiles: initBoard(action.size),
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
    tiles: initBoard(size),
  });

  return {
    state,
    dispatch,
  };
}
