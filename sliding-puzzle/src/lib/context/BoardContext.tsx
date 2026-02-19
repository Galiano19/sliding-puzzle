"use client";

import { createContext, useReducer, ReactNode, useEffect } from "react";
import { Action, Board } from "../types/board";
import { moveTile } from "../utils/game/move";
import { firstInit, init } from "../utils/game/init";

interface BoardContextType {
  state: Board;
  dispatch: React.Dispatch<Action>;
}

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined,
);

export function reducer(state: Board, action: Action): Board {
  switch (action.type) {
    case "INIT":
      return init(action.size);
    case "MOVE":
      const result = moveTile(state, action.index);
      return {
        ...state,
        tiles: result.tiles,
        status: result.status,
        moves: result.moves,
        movableIndexes: result.movableIndexes,
      };
    case "SET_OPTIONS":
      if (state.size !== action.size) {
        return init(action.size, action.isImage);
      }

      return {
        ...state,
        size: action.size,
        isImage: action.isImage,
      };
    case "RESET":
      return init(action.size, action.isImage);
    default:
      return state;
  }
}

export function BoardProvider({
  children,
  size = 2,
}: {
  children: ReactNode;
  size?: number;
}) {
  const [state, dispatch] = useReducer(reducer, size, firstInit);

  useEffect(() => {
    dispatch({
      type: "INIT",
      size: state.size,
    });
  }, [dispatch]);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}
