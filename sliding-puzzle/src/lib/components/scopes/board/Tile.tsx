"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import { Tile as TileType } from "@/lib/types/board";
import { BgXY } from "@/lib/utils/Tile/BgXY";

export default function Tile({
  value,
  index,
}: {
  value: TileType;
  index: number;
}) {
  const { state, dispatch } = useBoard();
  const isMovable =
    state.movableIndexes?.includes(index) && state.status !== "complete";

  const handleClick = (index: number) => {
    dispatch({ type: "MOVE", index: index });
  };

  const baseStyles =
    "aspect-square border-t border-border rounded-lg shadow-md transition-all duration-200";
  const movableItem =
    "hover:cursor-pointer hover:bg-background10 hover:scale-105 active:scale-95";

  const BackgroundPosition = BgXY(value, state.size);

  if (value === null) {
    return (
      <div
        className={`bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,var(--color-background20)_4px,var(--color-background20)_8px)] ${baseStyles}`}
      ></div>
    );
  }
  return (
    <button
      className={`bg-background20  flex items-center justify-center text-2xl font-bold p-4 md:p-6 lg:p-8 ${baseStyles} ${
        isMovable ? movableItem : ""
      }`}
      onClick={isMovable ? () => handleClick(index) : undefined}
      disabled={!isMovable}
      style={
        state.isImage
          ? {
              backgroundImage: `url(/bgPuzzle.jpg)`,
              backgroundSize: `${state.size * 100}% ${state.size * 100}%`,
              backgroundPosition: `${BackgroundPosition?.X}% ${BackgroundPosition?.Y}%`,
            }
          : undefined
      }
    >
      {state.isImage ? <span className="h-[32px] w-[32px]" /> : value}
    </button>
  );
}
