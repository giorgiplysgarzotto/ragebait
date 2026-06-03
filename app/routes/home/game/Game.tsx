import Bracket from "./bracket-ui";
import { useState } from "react";
import Round from "./round-ui";

const empty_slots = Array(16).fill("Name");
const empty_winners = Array(8).fill("Quarterfinals");
const empty_round3 = Array(4).fill("Semifinals");
const empty_lastRound = Array(2).fill("Finals");

export default function Game() {
  const [slots, setSlots] = useState(empty_slots);
  const [winners, setWinners] = useState(empty_winners);
  const [round3, setRound3] = useState(empty_round3);
  const [lastRound, setLastRound] = useState(empty_lastRound);
  const [winner, setWinner] = useState("Winner");
  const [phase, setPhase] = useState<"bracket" | "round">("bracket");
  const [round, setRound] = useState(0);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [winnerIndex, setWinnerIndex] = useState(0);
  const roundThreeIndex = round - 8;
  const [champion, setChampion] = useState("Champion");
  return (
    <div className="h-full w-full min-h-[80vh] bg-[url('/carly.jpg')] bg-cover bg-center pt-4 pb-4">
    {phase === "bracket" ? (
    <Bracket
      slots={slots}
      setSlots={setSlots}
      winners={winners}
      setWinners={setWinners}
      onSetWinners={(winnerIndex, winner) => {
        setWinners((prev) => {
          const next = [...prev];
          next[winnerIndex] = winner;
          return next;
        });
      }}
      round3={round3}
      winner={winner}
      onStartRound={() => setPhase("round")}
      round={round}
      setRound={setRound}
      name1={name1}
      name2={name2}
      setName1={setName1}
      setName2={setName2}
      phase={phase}
      setPhase={setPhase}
      roundThreeIndex={roundThreeIndex}
      setRound3={setRound3}
    winnerIndex={winnerIndex}
    setWinnerIndex={setWinnerIndex}
    lastRound={lastRound}
    setLastRound={setLastRound}
    champion={champion}
    setChampion={setChampion}
    onSetLastRound={(winnerIndex, winner) => {
      setLastRound((prev) => {
        const next = [...prev];
        next[winnerIndex] = winner;
        return next;
      });
    }}
    />
  ) : (
    <Round 
    setWinners={setWinners}
    name1={name1}
    name2={name2}
    round={round}
    setRound={setRound}
    onBack={() => setPhase("bracket")}
    winnerIndex={winnerIndex}
    setWinnerIndex={setWinnerIndex}
    round={round}
    lastRound={lastRound}
    setLastRound={setLastRound}
    champion={champion}
    setChampion={setChampion}
    round3={round3}
    onSetLastRound={(winnerIndex, winner) => {
      setLastRound((prev) => {
        const next = [...prev];
        next[winnerIndex] = winner;
        return next;
      });
    }}
    onSetRound3={(winnerIndex, winner) => {
      setRound3((prev) => {
        const next = [...prev];
        next[winnerIndex] = winner;
        return next;
      });
    }}
    onSetWinners={(winnerIndex, winner) => {
      setWinners((prev) => {
        const next = [...prev];
        next[winnerIndex] = winner;
        return next;
      });
    }}/>
  )}
  </div>
  );
}
