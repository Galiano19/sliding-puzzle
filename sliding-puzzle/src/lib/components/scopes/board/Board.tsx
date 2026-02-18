"use client";

import { useBoard } from "@/lib/hooks/useBoard";

export default function Board() {
  const { state, dispatch } = useBoard();

  const handleClick = (index: number) => {
    dispatch({ type: "MOVE", index: index });
  };

  return (
    <div
      className="grid gap-1 bg-background10 p-4 rounded-xl "
      style={{
        gridTemplateColumns: `repeat(${state.size}, minmax(0, 1fr))`,

        width: "fit-content",
      }}
    >
      {state.tiles.map((tile, index) => (
        <button
          key={index}
          className="bg-background20 aspect-square flex items-center justify-center border-t border-border text-2xl font-bold rounded-lg shadow-md p-2 md:p-4"
          onClick={() => handleClick(index)}
        >
          {tile}
        </button>
      ))}
    </div>
  );
}
