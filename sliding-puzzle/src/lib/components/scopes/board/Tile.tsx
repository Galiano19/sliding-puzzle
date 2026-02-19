"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import { Tile as TileType } from "@/lib/types/board";

export default function Tile({
  value,
  index,
}: {
  value: TileType;
  index: number;
}) {
  const { dispatch } = useBoard();

  const handleClick = (index: number) => {
    dispatch({ type: "MOVE", index: index });
  };

  const baseStyles =
    "aspect-square border-t border-border rounded-lg shadow-md";

  if (value === null) {
    return (
      <div
        className={`bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,var(--color-background20)_4px,var(--color-background20)_8px)] ${baseStyles}`}
      ></div>
    );
  }
  return (
    <button
      className={`bg-background20  flex items-center justify-center text-2xl font-bold p-2 md:p-4 ${baseStyles}`}
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
}
