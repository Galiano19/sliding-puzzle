import AppLayout from "@/lib/components/layout/AppLayout";
import Board from "@/lib/components/scopes/board/Board";
import Controls from "@/lib/components/scopes/controls/Controls";
import ScoreBoard from "@/lib/components/scopes/score/ScoreBoard";
import { BoardProvider } from "@/lib/context/BoardContext";

export default function Home() {
  return (
    <AppLayout pageTitle="Sliding Puzzle">
      <BoardProvider size={3}>
        <ScoreBoard />
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <Board />
        </div>
        <Controls />
      </BoardProvider>
    </AppLayout>
  );
}
