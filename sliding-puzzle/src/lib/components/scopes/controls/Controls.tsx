"use client";

import { useBoard } from "@/lib/hooks/useBoard";
import Button from "../../ui/button";
import { RotateCcw } from "lucide-react";

export default function Controls() {
  const { state, dispatch } = useBoard();

  const handleReset = () => dispatch({ type: "INIT", size: state.size });
  return (
    <div className="p-6 pb-12 flex gap-4">
      <Button onClick={handleReset}>
        <RotateCcw />
        Reset
      </Button>
    </div>
  );
}
