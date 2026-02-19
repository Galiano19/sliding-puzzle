"use client";

import { Grid } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Box from "../../ui/box";
import { useState } from "react";
import { useBoard } from "@/lib/hooks/useBoard";
import { Button } from "../../ui/button";

export default function GridSelector() {
  const { state, dispatch } = useBoard();
  const [open, setOpen] = useState(false);

  const handleSetSize = (size: number) => {
    dispatch({ type: "INIT", size });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-1/2 h-full">
          <Box className="h-full active:scale-95 hover:cursor-pointer hover:scale-105 transition-all ">
            <div className="text-xs uppercase tracking-widest text-text10 font-bold mb-1">
              <Grid />
            </div>
            <div className="text-xs font-bold">
              {state.size} x {state.size}
            </div>
          </Box>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Grid Selection</DialogTitle>
          <DialogContent>
            <div className="flex flex-col flex-wrap gap-4 mt-4">
              {[2, 3, 4, 5].map((size) => (
                <Button
                  key={size}
                  onClick={
                    state.size !== size ? () => handleSetSize(size) : undefined
                  }
                  disabled={state.size === size}
                >
                  {size} x {size}
                </Button>
              ))}
            </div>
          </DialogContent>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
