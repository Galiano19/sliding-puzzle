import Board from "@/lib/components/scopes/board/Board";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-4 md:px-16  sm:items-start">
        <div className="flex items-center justify-center w-full">
          <Board size={4} />
        </div>
      </main>
    </div>
  );
}
