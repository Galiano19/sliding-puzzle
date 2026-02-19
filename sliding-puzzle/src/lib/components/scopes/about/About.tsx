import { InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";

export default function About() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <InfoIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sliding Puzzle</DialogTitle>
          <DialogDescription>
            <div className="space-y-4 text-left">
              Developed by{" "}
              <a
                href="https://iwillplaceheregithub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Carlos Galiano
              </a>
              <br />
              <br />
              <span className="font-semibold mb-2">What is it?</span>
              <br />
              <span>
                A classic sliding puzzle game where you arrange numbered tiles
                in order by sliding them into the empty space.
              </span>
              <br />
              <br />
              <span className="font-semibold mb-2">How to play</span>
              <br />
              <span>
                Click on any tile adjacent to the empty space to slide it.
                Continue sliding tiles until all numbers are in order from 1 to
                the last number, with the empty space at the bottom right.
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
