"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Box from "../../ui/box";

export default function ScoreBoard() {
  const { state } = useBoard();

  return (
    <div className="flex px-6 gap-4 mb-8">
      <Box className="flex-1">
        <div className="text-xs uppercase tracking-widest text-text10 font-bold mb-1">
          MOVES
        </div>
        <div className="text-2xl font-bold">{state.moves}</div>
      </Box>
    </div>
  );
}
