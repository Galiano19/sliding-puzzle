"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Tile from "./Tile";
import Status from "./Status";
import { Loader2 } from "lucide-react";

export default function Board() {
  const { state } = useBoard();

  if (state.status === "initiating")
    return <Loader2 className="w-10 h-10 animate-spin" />;

  return (
    <>
      <div
        className={`grid bg-background10  w-full aspect-square p-3 rounded-2xl shadow-2xl border border-border ${!state.isImage && "gap-1"}`}
        style={{
          gridTemplateColumns: `repeat(${state.size}, minmax(0, 1fr))`,

          width: "fit-content",
        }}
      >
        {state.tiles.map((tile, index) => (
          <Tile key={index} value={tile} index={index} />
        ))}
      </div>
      <Status />
    </>
  );
}
