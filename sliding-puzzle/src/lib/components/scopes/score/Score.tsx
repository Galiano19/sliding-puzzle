"use client";

import { useBoard } from "@/lib/hooks/useBoard";

export default function ScoreBoard() {
  const { state, dispatch } = useBoard();

  const handleClickRestart = () => {
    dispatch({ type: "INIT", size: state.size });
  };

  return (
    <div className="flex gap-2 flex-col bg-background10 p-4 rounded-xl w-full">
      <div className="flex gap-2">
        <div className="flex flex-col gap 2 p-2">
          <div className="pb-1 ">Moves</div>
          <div className="">{state.moves}</div>
        </div>
        <div className="bg-background20 p-2 rounded-xl">
          <button onClick={handleClickRestart}>Restart</button>
        </div>
      </div>
      {state.status === "complete" && (
        <div className="bg-background20 p-2 rounded-xl">Puzzle completed!</div>
      )}
    </div>
  );
}
