import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "? + 3 = 8. Quanto vale ??",
    options: ["3", "5", "8", "11"],
    answer: 1,
    explanation: "5 + 3 = 8.",
  },
  {
    question: "12 = ? + 7",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "12 − 7 = 5.",
  },
  {
    question: "Se 4 + 6 = 10, somar 2 aos dois lados resulta em...",
    options: ["6 = 12", "12 = 12", "10 = 14", "8 = 10"],
    answer: 1,
    explanation: "4 + 6 + 2 = 10 + 2.",
  },
  {
    question: "3 × ? = 21",
    options: ["6", "7", "8", "9"],
    answer: 1,
    explanation: "21 ÷ 3 = 7.",
  },
  {
    question: "Qual operação preserva uma igualdade?",
    options: [
      "Somar 4 só à esquerda",
      "Dividir ambos os lados por 2",
      "Multiplicar só a direita",
      "Trocar um número",
    ],
    answer: 1,
    explanation: "A mesma operação nos dois membros mantém a igualdade.",
  },
];
export function EqualityActivity() {
  const [x, setX] = useState(5);
  const [change, setChange] = useState(0);
  const left = x + 3 + change,
    right = 8 + change;
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Equivalência</p>
          <h2>Balança da igualdade</h2>
        </header>
        <div className={`balance ${left === right ? "level" : ""}`}>
          <div>
            <span className="mystery">?</span>
            <span>+ 3</span>
            <strong>{left}</strong>
          </div>
          <div className="balance-arm">⚖</div>
          <div>
            <span>8</span>
            <span>
              {change >= 0 ? "+" : ""}
              {change}
            </span>
            <strong>{right}</strong>
          </div>
        </div>
        <label className="big-input">
          Valor da caixa{" "}
          <input
            type="range"
            min="0"
            max="10"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
          />
          <strong>{x}</strong>
        </label>
        <div className="quick-values">
          <button onClick={() => setChange((v) => v + 1)}>
            +1 nos dois lados
          </button>
          <button onClick={() => setChange((v) => v - 1)}>
            −1 nos dois lados
          </button>
          <button onClick={() => setChange(0)}>Reiniciar</button>
        </div>
      </article>
    </ActivityWithChallenge>
  );
}
