"use client";

import { useBoard } from "@/lib/hooks/useBoard";

export default function ScoreBoard() {
  const { state } = useBoard();
  console.log(state.status);
  return (
    <div className="flex gap-2 flex-col bg-background10 p-4 rounded-xl w-full">
      <div className="flex gap-2">
        <div className="bg-background20 p-2 rounded-xl">Moves</div>
        <div className="bg-background20 p-2 rounded-xl">Restart</div>
      </div>
      {state.status === "complete" && (
        <div className="bg-background20 p-2 rounded-xl">Puzzle completed!</div>
      )}
    </div>
  );
}
