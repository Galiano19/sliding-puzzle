"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import { RotateCcw } from "lucide-react";
import { Button } from "../../ui/button";

export default function Controls() {
  const { state, dispatch } = useBoard();

  const handleReset = () => dispatch({ type: "INIT", size: state.size });
  return (
    <div className="p-6 pb-12 flex gap-4">
      <Button onClick={handleReset}>
        <RotateCcw />
        <span className="uppercase text-md font-bold">Reset</span>
      </Button>
    </div>
  );
}
