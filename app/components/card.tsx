import Cardpatterns, { generateQuestion } from "../cardpatterns";
import { useState } from "react";

export default function Card() {
  const [question, setQuestion] = useState(() => generateQuestion());
  return (
    <div className="flex flex-col items-center justify-center text-center pb-4">
    <div className="card pb-4">
      <Cardpatterns content={question} />
    </div>
    <button className="text-xl font-bold border-2 border-[rgb(29,71,82)] p-2 rounded-md hover:bg-[rgb(255,0,0)]"
    onClick={() => {
      setQuestion(generateQuestion());
      console.log(question);
    }}>
     I Can't Handle This Question
    </button>
    </div>
  );
}
