import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "Um lado de 3 cm ampliado 2× passa a...",
    options: ["1,5 cm", "5 cm", "6 cm", "9 cm"],
    answer: 2,
    explanation: "3 × 2 = 6.",
  },
  {
    question: "Na ampliação, os ângulos...",
    options: ["dobram", "diminuem", "permanecem iguais", "somem"],
    answer: 2,
    explanation: "Figuras semelhantes mantêm ângulos congruentes.",
  },
  {
    question: "Reduzir 8 cm pela metade resulta em...",
    options: ["2 cm", "4 cm", "6 cm", "16 cm"],
    answer: 1,
    explanation: "8 × 0,5 = 4.",
  },
  {
    question: "Uma figura 3× maior tem lados...",
    options: [
      "somados com 3",
      "multiplicados por 3",
      "divididos por 3",
      "iguais",
    ],
    answer: 1,
    explanation: "Todos os lados usam o mesmo fator.",
  },
  {
    question: "Qual fator transforma 10 em 25?",
    options: ["1,5", "2", "2,5", "5"],
    answer: 2,
    explanation: "10 × 2,5 = 25.",
  },
];
export function ScaleActivity() {
  const [factor, setFactor] = useState(2);
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Proporcionalidade na malha</p>
          <h2>Ampliar e reduzir</h2>
        </header>
        <label className="big-input">
          Fator{" "}
          <input
            type="range"
            min="1"
            max="3"
            step="0.5"
            value={factor}
            onChange={(e) => setFactor(Number(e.target.value))}
          />
          <strong>{factor}×</strong>
        </label>
        <div className="scale-stage">
          <div className="grid-paper">
            <span className="scale-rect original">2 × 3</span>
          </div>
          <span>→</span>
          <div className="grid-paper">
            <span
              className="scale-rect"
              style={{ width: `${60 * factor}px`, height: `${40 * factor}px` }}
            >
              {2 * factor} × {3 * factor}
            </span>
          </div>
        </div>
      </article>
    </ActivityWithChallenge>
  );
}
