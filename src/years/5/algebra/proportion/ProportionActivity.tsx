import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "Uma receita para 4 usa 2 xícaras. Para 8, quantas?",
    options: ["2", "3", "4", "8"],
    answer: 2,
    explanation: "Dobrar porções dobra ingredientes.",
  },
  {
    question: "3 cadernos custam R$ 15. Um custa...",
    options: ["R$ 3", "R$ 5", "R$ 12", "R$ 45"],
    answer: 1,
    explanation: "15 ÷ 3 = 5.",
  },
  {
    question: "2 kg custam R$ 12. Quanto custam 5 kg?",
    options: ["R$ 24", "R$ 30", "R$ 36", "R$ 60"],
    answer: 1,
    explanation: "Cada kg custa 6; 5 × 6 = 30.",
  },
  {
    question: "Ao triplicar uma receita, 4 ovos viram...",
    options: ["7", "8", "12", "16"],
    answer: 2,
    explanation: "4 × 3 = 12.",
  },
  {
    question: "Escala 1:100: 3 cm representam...",
    options: ["30 cm", "100 cm", "300 cm", "3.000 cm"],
    answer: 2,
    explanation: "3 × 100 = 300 cm.",
  },
];
export function ProportionActivity() {
  const [people, setPeople] = useState(4);
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Proporcionalidade direta</p>
          <h2>Receita proporcional</h2>
        </header>
        <label className="big-input">
          Porções{" "}
          <input
            type="range"
            min="1"
            max="12"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
          <strong>{people}</strong>
        </label>
        <div className="recipe-grid">
          <span>
            🥛
            <strong>
              {((2 * people) / 4).toLocaleString("pt-BR")} xícaras
            </strong>
          </span>
          <span>
            🌾
            <strong>
              {((3 * people) / 4).toLocaleString("pt-BR")} xícaras
            </strong>
          </span>
          <span>
            🥚<strong>{((4 * people) / 4).toLocaleString("pt-BR")}</strong>
          </span>
        </div>
        <p className="math-sentence">
          Fator: {people} ÷ 4 = {(people / 4).toLocaleString("pt-BR")}
        </p>
      </article>
    </ActivityWithChallenge>
  );
}
