"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Tile from "./Tile";
import Status from "./Status";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Board() {
  const { state } = useBoard();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <>
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
      <Status />
    </>
  );
}
