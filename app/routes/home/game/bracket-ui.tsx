import Name from "~/components/name";
import Enter from "../enter";
import { useNavigate } from "react-router";

type BracketProps = {
  slots: string[];
  setSlots: React.Dispatch<React.SetStateAction<string[]>>;
  winners: string[];
  setWinners: React.Dispatch<React.SetStateAction<string[]>>;
  onSetWinners: (index: number, winner: string) => void;
  round3: string[];
  winner: string;
  onStartRound: () => void;
  round: number;
  setRound: (round: number) => void;
  name1: string;
  name2: string;
  setName1: (name1: string) => void;
  setName2: (name2: string) => void;
  phase: "bracket" | "round";
  roundThreeIndex: number
  winnerIndex: number;
  setWinnerIndex: (winnerIndex: number) => void;
  setPhase: (phase: "bracket" | "round") => void;
  lastRound: string[];
  setLastRound: (lastRound: string[]) => void;
  onSetLastRound: (index: number, lastRound: string) => void;
  champion: string;
  setChampion: (champion: string) => void;
  setRound3: (round3: string[]) => void;
};

export default function Bracket({
  slots,
  setSlots,
  winners,
  setWinners,
  onSetWinners,
  round3,
  winner,
  onStartRound,
  round,
  setRound,
  name1,
  name2,
  setName1,
  setName2,
  phase,
  setPhase,
  roundThreeIndex,
  winnerIndex,
  lastRound,
  setWinnerIndex,
  setLastRound,
  onSetLastRound,
  champion,
  setChampion,
  setRound3,
}: BracketProps) {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center">
      
      </div>
      <div className="grid grid-cols-9 gap-4 bracket-wrapper w-full h-full items-center text-center pt-4 pb-4 space-x-8 pl-8">
        <div className="column grid grid-rows-8 h-full space-y-2">
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[0]} />
          </div>
          <div className="rectangle pt-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[1]} />
          </div>
          <br></br>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[8]} />
          </div>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)]    pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[9]} />
          </div>
          <br></br>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[4]} />
          </div>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[5]} />
          </div>
          <br></br>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[12]} />
          </div>
          <div className="rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pr-4 pb-4 pl-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[13]} />
          </div>
        </div>
        <div className="column grid grid-rows-8 h-full flex flex-col space-y-2">
          <br></br>
          <div className="square bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pt-4 pl-4 pr-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[0]} />
          </div>
          <div className="square pt-4 pl-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] pr-4 rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[4]} />
          </div>
          <div><br></br></div>
          <div><br></br></div>
          <div className="square pt-4 pl-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[2]} />
          </div>
          <div className="square pt-4 pl-4 pr-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[6]} />
          </div>
          <div><br></br></div>
        </div>
        <div className="column grid grid-rows-8 h-full space-y-2">
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
          <div className="big-rectangle bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={round3[0]} />
          </div>
          <div className="big-rectangle pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 items-center justify-center shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={round3[2]} />
          </div>
        </div>

        <div className="column grid grid-rows-9 h-full flex flex-col rounded-md space-y-2">
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
          <div className="lastRound pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 items-center justify-center pl-4 pr-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={lastRound[0]} />
          </div>
        </div>
        <div className="column flex flex-col text-center rounded-md">
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
          <div className="winner rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] items-center justify-center p-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={champion} />
          </div>
          <br></br>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <Enter
        onSetSlots={(index1, name1, index2, name2) => {
          setSlots((prev) => {
            const next = [...prev];
            next[index1] = name1;
            next[index2] = name2;
            return next;
          });
          setTimeout(() => {
            onStartRound();
          }, 2000);
        }}
        round={round}
        setRound={setRound}
        name1={name1}
        name2={name2}
        setName1={setName1}
        setName2={setName2}
        phase={phase}
        setPhase={setPhase}
        roundThreeIndex={roundThreeIndex}
        round3={round3}
        lastRound={lastRound}
        setRound3={setRound3}
        setLastRound={setLastRound}
        setChampion={setChampion}
    winners={winners}
    winnerIndex={winnerIndex}
    setWinnerIndex={setWinnerIndex}
    champion={champion}
    setChampion={setChampion}
      />
        </div>
        <div className="column grid grid-rows-9 h-full flex flex-col pr-4 rounded-md space-y-2">
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
          <div className="lastRound pt-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] p-4 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={lastRound[1]} />
          </div>
        </div>
        <div className="column grid grid-rows-8 h-full rounded-md space-y-2 ">
        <div><br></br></div>
        <div><br></br></div>
        <div><br></br></div>
          <div className="big-rectangle rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={round3[1]} />
          </div>
          <div className="big-rectangle pt-4 bg-[rgb(29,71,82)] text-[rgb(255,173,78)] rounded-md p-2 shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={round3[3]} />
          </div>
        </div>
        <div className="column grid grid-rows-8 h-full rounded-md space-y-2">
        <div><br></br></div>
          <div className="square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[1]} />
          </div>
          <div className="square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[5]} />
          </div>
          <div><br></br></div>
          <div><br></br></div>
          <div className="square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[3]} />
          </div>
          <div className="square pt-4 pl-4 pr-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={winners[7]} />
          </div>
        </div>
        <div className="column grid grid-rows-8 h-full rounded-md space-y-2">
          <div className="rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[2]} />
          </div>
          <div className="rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[3]} />
          </div>
          <br></br>
          <div className="rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[10]} />
          </div>
          <div className="rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[11]} />
          </div>
          <br></br>
          <div className="rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[6]} />
          </div>
          <div className="rectangle pt-4 pr-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[7]} />
          </div>
          <br></br>
          <div className="rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[14]} />
          </div>
          <div className="rectangle pt-4 pr-4 pb-4 pl-4 rounded-md bg-[rgb(29,71,82)] text-[rgb(255,173,78)] shadow-[2px_2px_2px_rgba(255,0,0,1)]">
            <Name content={slots[15]} />
          </div>
        </div>
        <div className="column grid grid-rows-8 h-full space-y-2"></div>
      </div>
    </div>
  );
}
