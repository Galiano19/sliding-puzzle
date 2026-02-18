import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export function useBoard() {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error(
      "cannot use useBoard if component is not within BoardProvider",
    );
  }
  return context;
}
