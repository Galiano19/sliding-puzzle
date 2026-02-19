"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Box from "../../ui/box";

export default function Score() {
  const { state } = useBoard();

  return (
    <Box className="w-1/2 h-full">
      <div className="text-xs uppercase tracking-widest text-text10 font-bold mb-1">
        MOVES
      </div>
      <div className="text-2xl font-bold">{state.moves}</div>
    </Box>
  );
}
