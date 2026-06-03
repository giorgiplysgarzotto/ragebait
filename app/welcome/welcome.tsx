import type { ReactNode } from "react";
import Game from "~/routes/home/game/Game";

export function Welcome({ children }: { children?: ReactNode }) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 h-full w-full">
        <div className="w-ful h-1000px">{children ?? <Game />}</div>
    </main>
  );
}
