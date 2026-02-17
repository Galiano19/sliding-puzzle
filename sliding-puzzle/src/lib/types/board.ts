export type Tile = number | null;

export interface Board {
  size: number;
  tiles: Tile[];
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
