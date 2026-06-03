import Card from "~/components/card";
import { useState } from "react";
import { useRef } from "react";

type RoundProps = {
  setWinners: React.Dispatch<React.SetStateAction<string>>;
  name1: string;
  name2: string;
  onBack: () => void;
  onSetWinners: (winnerIndex: number, winner: string) => void;
  winnerIndex: number;
  setWinnerIndex: (winnerIndex: number) => void;
  round: number;
  setRound: (round: number) => void;
  round3: string[];
  onSetRound3: (winnerIndex: number, winner: string) => void;
  onSetLastRound: (winnerIndex: number, winner: string) => void;
  champion: string;
  setChampion: (champion: string) => void;
  roundThreeIndex: number;
};

export default function Round({ setWinners, name1, name2, onBack, onSetWinners, winnerIndex, setWinnerIndex, round, onSetRound3, onSetLastRound, champion, setChampion, setRound, round3, roundThreeIndex}: RoundProps) {
  const [playerOne, setPlayerOne] = useState(false);
  const [playerTwo, setPlayerTwo] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  const ref2 = useRef<HTMLDialogElement>(null);
  const ref3 = useRef<HTMLDialogElement>(null);
  return (
    <div className="relative h-full min-h-[80vh] w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-20 border-[rgb(29,71,82)] p-8 bg-[rgb(255,173,78)] text-3xl flex flex-col items-center justify-center">
      <div className="text-center pb-3"><b>Debate topic:</b></div>
      <br></br>
      <div>
        <Card />
      </div>
      <button
        className={playerOne ? "hidden" : "text-3xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"}
        disabled={playerOne}
        onClick={() => {
          setPlayerOne(true);
          ref.current?.showModal();
          setTimeout(() => {
            ref.current?.close();
          }, 60000);
        }}
      >
        Player One, Debate!!!
      </button>
      <dialog ref={ref} className="inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 backdrop:bg-black/50">
        <p>60 seconds...</p>
      </dialog>
      <button
        className={playerTwo || !playerOne ? "hidden" : "text-3xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"}
        disabled={(!playerOne && !playerTwo) || (playerOne && playerTwo)}
        onClick={() => {
          setPlayerTwo(true);
          ref2.current?.showModal();
          setTimeout(() => {
            ref2.current?.close();
          }, 60000);
        }}
      >
        Player Two, Rebut!!!
      </button>
      <dialog ref={ref2} className="inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 backdrop:bg-black/50">
        <p>60 seconds...</p>
      </dialog>
      <button
        className={!playerTwo ? "hidden" : "text-3xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"}
        disabled={!playerTwo}
        onClick={() => {
          setPlayerOne(false);
          setPlayerTwo(false);
          ref3.current?.showModal();
        }}
      >
        Judge, Decide!
      </button>
      <dialog ref={ref3} className="inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-10 w-1/2 max-w-md backdrop:bg-black/50 items-center justify-center space-x-4 text-center">
        <p className="pb-4">Who do you think won?</p>
        <button className="text-3xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"
          onClick={() => {
            console.log(round);
            console.log(winnerIndex);
            console.log(name1);
            console.log(name2);
            if (round <= 7) {
              onSetWinners(winnerIndex, name1);
              setWinnerIndex(winnerIndex + 1);
              setRound(round + 1);
              onBack();
            }
            if (round > 7 && round <= 11) {
              onSetRound3(winnerIndex, name1)
              setWinnerIndex(winnerIndex + 1);
              setRound(round + 1);
              if (round3[round-7] != "Semifinals") {
                setRound(12);
              }
              onBack();
            }
            if (round > 11 && round <= 13) {
              onSetLastRound(winnerIndex, name1)
              setWinnerIndex(winnerIndex + 1);
              setRound(round + 1);
              onBack();
            }
            if (round === 14) {
              setChampion(name1);
              setRound(round + 1);
              onBack();
            }
          }}
        >
          Player One
        </button>
        <button 
          className="text-3xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"
          onClick={() => {
            console.log(round);
            console.log(winnerIndex);
            console.log(name1);
            console.log(name2);
            if (round <= 7) {
            onSetWinners(winnerIndex, name2);
            setWinnerIndex(winnerIndex + 1);
            setRound(round + 1);
            onBack();
            }
            if (round > 7 && round <= 11) {
              onSetRound3(winnerIndex, name2)
              setWinnerIndex(winnerIndex + 1);
              setRound(round + 1);
              if (round3[round-7] != "Semifinals") {
                setRound(12);
              }
              onBack();
            }
            if (round > 11 && round <= 13) {
              onSetLastRound(winnerIndex, name2)
              setWinnerIndex(winnerIndex + 1);
              setRound(round + 1);
              onBack();
            }
            if (round === 14) {
              setChampion(name2);
              setRound(round + 1);
              onBack();
            }
          }}
        >
          Player Two
        </button>
      </dialog>
    </div>
    </div>
  );
}
