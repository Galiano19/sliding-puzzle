export type Tile = number | null;

export interface Board {
  size: number;
  tiles: Tile[];
  status: "initiating" | "playing" | "complete";
  moves: number;
  movableIndexes: number[];
  isImage: boolean;
}

export type Action =
  | {
      type: "INIT";
      size: number;
    }
  | {
      type: "MOVE";
      index: number;
    }
  | {
      type: "SET_OPTIONS";
      isImage: boolean;
      size: number;
    };
