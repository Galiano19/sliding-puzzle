"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Tile from "./Tile";

export default function Board() {
  const { state } = useBoard();

  return (
    <div
      className="grid gap-1 bg-background10  w-full aspect-square p-3 rounded-2xl shadow-2xl border border-border"
      style={{
        gridTemplateColumns: `repeat(${state.size}, minmax(0, 1fr))`,

        width: "fit-content",
      }}
    >
      {state.tiles.map((tile, index) => (
        <Tile key={index} value={tile} index={index} />
      ))}
    </div>
  );
}
