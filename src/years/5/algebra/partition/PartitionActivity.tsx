import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "Divida 30 em partes 1:2.",
    options: ["10 e 20", "15 e 15", "5 e 25", "12 e 18"],
    answer: 0,
    explanation: "São 3 partes: 30 ÷ 3 = 10; a maior vale 20.",
  },
  {
    question: "Partes 1:3 somam 40. A menor vale...",
    options: ["5", "10", "20", "30"],
    answer: 1,
    explanation: "40 ÷ 4 partes = 10.",
  },
  {
    question: "Uma parte é o dobro da outra e somam 18.",
    options: ["6 e 12", "8 e 10", "9 e 9", "4 e 14"],
    answer: 0,
    explanation: "6 + 12 = 18 e 12 é o dobro de 6.",
  },
  {
    question: "Na razão 2:3, o todo tem quantas partes?",
    options: ["2", "3", "5", "6"],
    answer: 2,
    explanation: "2 + 3 = 5 partes.",
  },
  {
    question: "45 divididos na razão 1:4 resultam em...",
    options: ["5 e 40", "9 e 36", "15 e 30", "20 e 25"],
    answer: 1,
    explanation: "45 ÷ 5 = 9; 4 × 9 = 36.",
  },
];
export function PartitionActivity() {
  const [total, setTotal] = useState(30);
  const small = total / 3;
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Razão entre partes</p>
          <h2>Partilha desigual</h2>
        </header>
        <label className="big-input">
          Total{" "}
          <input
            type="range"
            min="3"
            max="60"
            step="3"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
          />
          <strong>{total}</strong>
        </label>
        <div className="partition-bar">
          <div style={{ flex: 1 }}>
            1 parte<strong>{small}</strong>
          </div>
          <div style={{ flex: 2 }}>
            2 partes<strong>{small * 2}</strong>
          </div>
        </div>
        <p className="math-sentence">
          {small} + {small * 2} = {total}
        </p>
      </article>
    </ActivityWithChallenge>
  );
}
