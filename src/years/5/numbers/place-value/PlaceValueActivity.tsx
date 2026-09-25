import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const questions: ChallengeQuestion[] = [
  {
    question: "Em 483.716, quanto vale o algarismo 8?",
    options: ["8", "80", "8.000", "80.000"],
    answer: 3,
    explanation: "O 8 ocupa a dezena de milhar: 8 × 10.000 = 80.000.",
  },
  {
    question: "Qual número corresponde a 300.000 + 20.000 + 500 + 9?",
    options: ["320.509", "302.509", "320.059", "325.009"],
    answer: 0,
    explanation: "Somando cada ordem, obtemos 320.509.",
  },
  {
    question: "Qual é o maior número?",
    options: ["98.765", "102.300", "99.999", "100.230"],
    answer: 1,
    explanation: "102.300 tem 1 centena de milhar e supera os demais.",
  },
  {
    question: "Qual algarismo está na unidade de milhar em 657.241?",
    options: ["6", "5", "7", "2"],
    answer: 2,
    explanation: "No grupo 657 mil, o 7 representa 7.000.",
  },
  {
    question: "Como se decompõe 405.020?",
    options: [
      "400.000 + 5.000 + 20",
      "40.000 + 5.000 + 20",
      "400.000 + 500 + 20",
      "405.000 + 200",
    ],
    answer: 0,
    explanation: "Os zeros indicam ordens sem valor: 400.000 + 5.000 + 20.",
  },
];
const format = new Intl.NumberFormat("pt-BR");
export function PlaceValueActivity() {
  const [value, setValue] = useState(345672);
  const digits = String(Math.min(999999, Math.max(0, value)))
    .padStart(6, "0")
    .split("");
  const places = [
    "Centena de milhar",
    "Dezena de milhar",
    "Unidade de milhar",
    "Centena",
    "Dezena",
    "Unidade",
  ];
  const update = (raw: string) =>
    setValue(Math.min(999999, Number(raw.replace(/\D/g, "")) || 0));
  return (
    <ActivityWithChallenge questions={questions}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Sistema de numeração decimal</p>
          <h2>Casa dos números</h2>
          <p>Troque o número e observe o valor de cada algarismo.</p>
        </header>
        <label className="big-input">
          Número até 999.999{" "}
          <input
            inputMode="numeric"
            value={format.format(value)}
            onChange={(e) => update(e.target.value)}
          />
        </label>
        <div className="place-grid">
          {digits.map((digit, index) => (
            <div className={index < 3 ? "thousands" : ""} key={places[index]}>
              <small>{places[index]}</small>
              <strong>{digit}</strong>
              <span>{format.format(Number(digit) * 10 ** (5 - index))}</span>
            </div>
          ))}
        </div>
        <p className="math-sentence">
          {digits
            .map((digit, index) => Number(digit) * 10 ** (5 - index))
            .filter(Boolean)
            .map(format.format)
            .join(" + ") || "0"}
        </p>
      </article>
    </ActivityWithChallenge>
  );
}
