export type Tile = number | null;

export interface Board {
  size: number;
  tiles: Tile[];
  status: "playing" | "complete";
  moves: number;
  movableIndexes: number[];
}

export type Action =
  | {
      type: "INIT";
      size: number;
    }
  | {
      type: "MOVE";
      index: number;
    };
