import GridSelector from "../controls/GridSelector";
import Score from "./Score";

export default function ScoreBoard() {
  return (
    <div className="flex px-6 gap-4 mb-8 w-full">
      <Score />
      <GridSelector />
    </div>
  );
}
