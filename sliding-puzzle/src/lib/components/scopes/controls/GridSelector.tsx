"use client";

import { Grid } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Box from "../../ui/box";
import { useEffect, useState } from "react";
import { useBoard } from "@/lib/hooks/useBoard";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";

export default function GridSelector() {
  const { state, dispatch } = useBoard();
  const [open, setOpen] = useState(false);
  const [useImage, setUseImage] = useState<boolean>(state.isImage);
  const [selectedSize, setSelectedSize] = useState(state.size);

  useEffect(() => {
    if (!open) return;

    setUseImage(state.isImage);
    setSelectedSize(state.size);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "SET_OPTIONS",
      size: selectedSize,
      isImage: useImage,
    });

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
          <DialogDescription>Form to select Grid options</DialogDescription>
          <DialogContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-wrap gap-4 mt-8"
            >
              {[2, 3, 4, 5].map((size) => (
                <Button
                  key={size}
                  type="button"
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size} x {size}
                </Button>
              ))}
              <div className="flex gap-2 items-center">
                <Checkbox
                  id="setImage"
                  onClick={() => setUseImage(!useImage)}
                  checked={useImage}
                />
                <label htmlFor="setImage">
                  {" "}
                  Use an image instead (it is a Highland Cattle, really cute!)
                </label>
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="submit">Apply</Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
