import { useBoard } from "@/lib/hooks/useBoard";

export default function Status() {
  const { state } = useBoard();

  if (state.status === "complete")
    return (
      <div className="text-sm text-text10 font-bold h-2 pt-2 animate-[fadeInDown_0.5s_ease-out]">
        Game Complete!
      </div>
    );

  return <div className="h-2" />;
}
