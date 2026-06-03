import { useState } from "react";
import { useRef } from "react";

interface EnterProps {
    onSetSlots: (index1: number, name1: string, index2: number, name2: string) => void;
    round: number;
    setRound: (round: number) => void;
    name1: string;
    name2: string;
    setName1: (name1: string) => void;
    setName2: (name2: string) => void;
    phase: "bracket" | "round";
    setPhase: (phase: "bracket" | "round") => void;
    winners: string[];
    roundThreeIndex: number;
    winnerIndex: number;
    setWinnerIndex: (winnerIndex: number) => void;
    round3: string[];
    lastRound: string[];
    setChampion: (champion: string) => void;
    setLastRound: (lastRound: string[]) => void;
    setRound3: (round3: string[]) => void;
}

export default function Enter({ onSetSlots, round, setRound, name1, name2, setName1, setName2, phase, setPhase, winners, roundThreeIndex, winnerIndex, setWinnerIndex, round3, lastRound, setChampion, setLastRound, setRound3 }: EnterProps) {
    const ref = useRef<HTMLDialogElement>(null);
    const ref2 = useRef<HTMLDialogElement>(null);
    const ref3 = useRef<HTMLDialogElement>(null);
    const index1 = round * 2;
    const index2 = index1 + 1;
    const roundThreeIndex1 = (round - 8);
    const roundThreeIndex2 = roundThreeIndex1 + 4;
    const lastRoundIndex1 = (round - 12);
    const lastRoundIndex2 = lastRoundIndex1 + 2;
    const [skip, setSkip] = useState(false);
    return (
        <div>
        <div>
        <div className="pb-4">
          <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 " + (round > 7 ? "hidden" : "")}
          disabled={round >= 8}
          onClick={() => ref.current?.showModal()}>Start</button>  
          <dialog ref={ref} className="inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 backdrop:bg-black/50">
            <p>Player 1:</p>
            <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
            <p>Player 2:</p>
            <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} />
            <br></br>
            <button onClick={() => {onSetSlots(index1, name1, index2, name2)
                console.log(name1, name2);
                setName1(name1);
                setName2(name2);
                ref.current?.close();
            }}>Enter names</button>
          </dialog>
          <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 " + (round <= 7 || round > 8 ? "hidden" : "")}
          onClick={() => {ref2.current?.showModal()
                setWinnerIndex(0);
                console.log(name1, name2);
                console.log(roundThreeIndex1);
                console.log(roundThreeIndex2);
                if (round3[roundThreeIndex1] != "Semifinals") {
                    setName1(round3[roundThreeIndex1]);
                }
                else {
                    setName1(winners[(round-8)]);}
                if (round3[roundThreeIndex2] != "Semifinals") {
                    setName2(round3[roundThreeIndex2]);
                }
                else {
                    setName2(winners[(round-8)+1]);
                }
                setPhase("round");}}
            >Start Round 2</button>
          <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 " + (round <= 8 || round > 11 ? "hidden" : "")}
          onClick={() => {
          setName1(winners[roundThreeIndex1])
          setName2(winners[roundThreeIndex2])
          console.log(roundThreeIndex1);
            console.log(roundThreeIndex2);
            console.log(winnerIndex);
          setPhase("round")}}>Continue</button>
          <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 " + (round <= 11 || round > 13 ? "hidden" : "")}
          onClick={() => {
            if (round === 12) {
                setWinnerIndex(0);
                if (lastRound[1] != "Finals") {
                    setRound(13);
                }
            }
            setName1(round3[lastRoundIndex1])
            setName2(round3[lastRoundIndex2])
            setPhase("round")}}>Round 3!</button>
        <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 " + (round <= 13 || round >= 15 ? " hidden" : "")}
        onClick={() => {
            setName1(lastRound[0]);
            setName2(lastRound[1]);
            setPhase("round");
            console.log(round);
        }}>Last Round!</button>
        </div>
        <button className={"bg-[rgb(247,9,14)] shadow-[3px_3px_3px_rgba(29,71,82,1)] p-2 rounded-md text-[rgb(255,173,78)] hover:bg-[rgb(255,255,255)] p-4 pl-8 pr-8 "+ (round < 1 || skip || round >= 15 ? " hidden " : "")}
          onClick={() => {
            setSkip(true);
            if (round === 1) {
                setChampion(winners[0]);
                setRound(15);
          }
            if (round ===2) {
                setLastRound(winners)
                setRound(14);
            }
            if (round === 3) {
                setRound3((prev) => {
                    const next = [...prev];
                    next[0] = winners[0];
                    next[2] = winners[2];
                    return next;
                })
                setLastRound((prev) => {
                    const next = [...prev];
                    next[1] = winners[1]
                    return next;
                });
                setRound(12);
          }
          if (round === 4) {
            setRound3(winners)
            setRound(12);
          }
          if (round === 5) {
            setRound3((prev) => {
                const next = [...prev];
                next[1] = winners[1];
                next[2] = winners[2];
                next[3] = winners[3];
                return next;
            })
            setRound(8);
        }
        if (round === 6) {
            setRound3((prev) => {
                const next = [...prev];
                next[2] = winners[2];
                next[3] = winners[3];
                return next;
            })
            setRound(8);
        }
        if (round === 7) {
            setRound3((prev) => {
                const next = [...prev];
                next[3] = winners[3];
                return next;
            })
            setRound(8);
        }
        }}>
          Can't Find Any More People?
        </button>
        </div>
        </div>
    )
}
// check how many slots are filled
// insert name1 and name2 into the next two slots
// when it fills the last two slots, disable the button.
// replace it with the next round button. this simply picks the next two names,
//  and starts another round.