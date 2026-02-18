import Board from "@/lib/components/scopes/board/Board";
import ScoreBoard from "@/lib/components/scopes/score/Score";
import { BoardProvider } from "@/lib/context/BoardContext";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-4 md:px-16  sm:items-start">
        <BoardProvider size={2}>
          <div className="flex flex-col gap-4 items-center justify-center ml-auto mr-auto">
            <Board />
            <ScoreBoard />
          </div>
        </BoardProvider>
      </main>
    </div>
  );
}
