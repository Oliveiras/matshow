import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const questions: ChallengeQuestion[] = [
  {
    question: "Qual fração é maior que 1?",
    options: ["2/5", "4/4", "7/4", "1/8"],
    answer: 2,
    explanation: "7/4 tem numerador maior que o denominador.",
  },
  {
    question: "Qual fração equivale a 1/2?",
    options: ["2/3", "2/4", "3/4", "4/6"],
    answer: 1,
    explanation: "Multiplicar numerador e denominador por 2 produz 2/4.",
  },
  {
    question: "Qual decimal representa 3/4?",
    options: ["0,25", "0,34", "0,50", "0,75"],
    answer: 3,
    explanation: "3 ÷ 4 = 0,75.",
  },
  {
    question: "Qual número fica mais à direita na reta?",
    options: ["0,4", "1/2", "0,75", "2/3"],
    answer: 2,
    explanation: "0,75 é maior que 0,4; 0,5; e aproximadamente 0,67.",
  },
  {
    question: "5/5 é...",
    options: ["menor que 1", "igual a 1", "maior que 1", "igual a 0,5"],
    answer: 1,
    explanation: "Cinco partes de um total de cinco formam um inteiro.",
  },
];
export function FractionLineActivity() {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);
  const value = numerator / denominator;
  return (
    <ActivityWithChallenge questions={questions}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Frações, decimais e ordem</p>
          <h2>Reta das frações</h2>
        </header>
        <div className="fraction-controls">
          <label>
            Numerador{" "}
            <input
              type="range"
              min="0"
              max="12"
              value={numerator}
              onChange={(e) => setNumerator(Number(e.target.value))}
            />
            <strong>{numerator}</strong>
          </label>
          <label>
            Denominador{" "}
            <input
              type="range"
              min="1"
              max="10"
              value={denominator}
              onChange={(e) => setDenominator(Number(e.target.value))}
            />
            <strong>{denominator}</strong>
          </label>
        </div>
        <div className="number-line">
          <div className="line-track" />
          <div
            className="line-marker"
            style={{ left: `${Math.min(100, (value / 2) * 100)}%` }}
          >
            {numerator}/{denominator}
          </div>
          {[0, 0.5, 1, 1.5, 2].map((n) => (
            <span key={n} style={{ left: `${(n / 2) * 100}%` }}>
              {String(n).replace(".", ",")}
            </span>
          ))}
        </div>
        <div className="equation-card">
          <strong>
            {numerator}/{denominator}
          </strong>
          <span>=</span>
          <strong>{value.toFixed(2).replace(".", ",")}</strong>
          <span>
            (
            {value > 1
              ? "maior que 1"
              : value === 1
                ? "igual a 1"
                : "menor que 1"}
            )
          </span>
        </div>
      </article>
    </ActivityWithChallenge>
  );
}
