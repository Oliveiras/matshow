import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "2 m correspondem a...",
    options: ["20 cm", "200 cm", "2.000 cm", "0,2 cm"],
    answer: 1,
    explanation: "1 m = 100 cm.",
  },
  {
    question: "3 kg equivalem a...",
    options: ["30 g", "300 g", "3.000 g", "30.000 g"],
    answer: 2,
    explanation: "1 kg = 1.000 g.",
  },
  {
    question: "1,5 L correspondem a...",
    options: ["15 mL", "150 mL", "1.500 mL", "15.000 mL"],
    answer: 2,
    explanation: "1 L = 1.000 mL.",
  },
  {
    question: "2 horas têm...",
    options: ["60 min", "90 min", "120 min", "200 min"],
    answer: 2,
    explanation: "2 × 60 = 120.",
  },
  {
    question: "250 cm equivalem a...",
    options: ["0,25 m", "2,5 m", "25 m", "250 m"],
    answer: 1,
    explanation: "250 ÷ 100 = 2,5 m.",
  },
];
const conversions = {
  comprimento: { from: "m", to: "cm", factor: 100 },
  massa: { from: "kg", to: "g", factor: 1000 },
  capacidade: { from: "L", to: "mL", factor: 1000 },
  tempo: { from: "h", to: "min", factor: 60 },
};
export function ConversionActivity() {
  const [kind, setKind] = useState<keyof typeof conversions>("comprimento");
  const [value, setValue] = useState(2.5);
  const unit = conversions[kind];
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Transformações entre unidades</p>
          <h2>Estação de medidas</h2>
        </header>
        <div className="quick-values">
          {Object.keys(conversions).map((item) => (
            <button
              key={item}
              className={kind === item ? "active" : ""}
              onClick={() => setKind(item as keyof typeof conversions)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="converter">
          <label>
            Valor em {unit.from}
            <input
              type="number"
              step="0.1"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </label>
          <span>× {unit.factor}</span>
          <strong>
            {(value * unit.factor).toLocaleString("pt-BR")} {unit.to}
          </strong>
        </div>
      </article>
    </ActivityWithChallenge>
  );
}
