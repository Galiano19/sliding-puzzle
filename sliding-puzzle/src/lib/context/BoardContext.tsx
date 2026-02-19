"use client";

import {
  createContext,
  useReducer,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Action, Board } from "../types/board";
import { moveTile, getMovableIndexes } from "../utils/game/move";
import { initBoard } from "../utils/game/init";

interface BoardContextType {
  state: Board;
  dispatch: React.Dispatch<Action>;
}

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined,
);

function init(size: number): Board {
  const tiles = initBoard(size);
  const emptyIndex = tiles.indexOf(null);
  return {
    size,
    tiles,
    status: "playing",
    moves: 0,
    movableIndexes: getMovableIndexes(emptyIndex, size),
  };
}

function reducer(state: Board, action: Action): Board {
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
  const [state, dispatch] = useReducer(reducer, size, init);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, [size]);

  if (!hydrated) return null;

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}
