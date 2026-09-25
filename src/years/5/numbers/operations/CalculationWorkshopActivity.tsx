import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
type Operation = "Adição" | "Subtração" | "Multiplicação" | "Divisão";
interface Calculation {
  label: string;
  mental: string[];
  paper: string[];
}
const calculations: Record<Operation, Calculation[]> = {
  Adição: [
    {
      label: "198 + 37",
      mental: [
        "Arredonde 198 para 200.",
        "200 + 37 = 237.",
        "Compense: 237 − 2 = 235.",
      ],
      paper: ["  ¹", " 198", "+ 37", "────", " 235"],
    },
    {
      label: "475 + 299",
      mental: ["Troque 299 por 300 − 1.", "475 + 300 = 775.", "775 − 1 = 774."],
      paper: ["  ¹¹", " 475", "+299", "────", " 774"],
    },
    {
      label: "12,5 + 3,75",
      mental: [
        "Some 12,5 + 3 = 15,5.",
        "Depois, 15,5 + 0,75.",
        "Resultado: 16,25.",
      ],
      paper: [" 12,50", "+ 3,75", "──────", " 16,25"],
    },
  ],
  Subtração: [
    {
      label: "502 − 178",
      mental: [
        "Pense em 178 como 180 − 2.",
        "502 − 180 = 322.",
        "322 + 2 = 324.",
      ],
      paper: [" ⁴ ⁹ ¹²", " 502", "−178", "────", " 324"],
    },
    {
      label: "1.000 − 356",
      mental: ["1.000 − 300 = 700.", "700 − 50 = 650.", "650 − 6 = 644."],
      paper: [" ⁹ ⁹ ¹⁰", "1000", "−356", "────", " 644"],
    },
    {
      label: "20 − 7,8",
      mental: [
        "20 − 8 = 12.",
        "Como tiramos 0,2 a mais, devolva 0,2.",
        "Resultado: 12,2.",
      ],
      paper: [" 19 ¹⁰", "20,0", "−7,8", "────", "12,2"],
    },
  ],
  Multiplicação: [
    {
      label: "24 × 15",
      mental: ["24 × 10 = 240.", "24 × 5 = 120.", "240 + 120 = 360."],
      paper: ["  24", "× 15", "────", " 120", "+240", "────", " 360"],
    },
    {
      label: "36 × 25",
      mental: [
        "25 é a quarta parte de 100.",
        "36 × 100 = 3.600.",
        "3.600 ÷ 4 = 900.",
      ],
      paper: ["  36", "× 25", "────", " 180", "+720", "────", " 900"],
    },
    {
      label: "4,5 × 6",
      mental: ["4 × 6 = 24.", "0,5 × 6 = 3.", "24 + 3 = 27."],
      paper: [" 4,5", " × 6", "────", "27,0"],
    },
  ],
  Divisão: [
    {
      label: "156 ÷ 12",
      mental: ["12 × 10 = 120; faltam 36.", "12 × 3 = 36.", "10 + 3 = 13."],
      paper: ["156 │12", "−12 │13", " 36", "−36", "  0"],
    },
    {
      label: "420 ÷ 15",
      mental: ["15 × 20 = 300; faltam 120.", "15 × 8 = 120.", "20 + 8 = 28."],
      paper: ["420 │15", "−30 │28", "120", "−120", "  0"],
    },
    {
      label: "84 ÷ 7",
      mental: ["7 × 10 = 70; faltam 14.", "7 × 2 = 14.", "10 + 2 = 12."],
      paper: ["84 │7", "−7 │12", "14", "−14", " 0"],
    },
  ],
};
const questions: ChallengeQuestion[] = [
  {
    question: "Qual estratégia ajuda em 198 + 37?",
    options: ["200 + 37 − 2", "100 + 30", "198 + 30 − 7", "200 + 30"],
    answer: 0,
    explanation: "Compensar 198 para 200 simplifica a soma.",
  },
  {
    question: "Para 502 − 178, por que fazer 502 − 180 + 2?",
    options: [
      "Porque 180 é menor",
      "Porque subtraímos 2 a mais",
      "Porque soma é igual",
      "Porque muda o resultado",
    ],
    answer: 1,
    explanation:
      "Ao arredondar 178 para 180, retiramos 2 a mais e precisamos devolvê-los.",
  },
  {
    question: "24 × 15 pode ser decomposto como...",
    options: ["24 × 10 + 24 × 5", "24 × 10 + 5", "24 + 10 × 5", "24 × 20 − 15"],
    answer: 0,
    explanation: "A propriedade distributiva separa 15 em 10 + 5.",
  },
  {
    question: "Se 12 × 13 = 156, então 156 ÷ 12 é...",
    options: ["12", "13", "144", "168"],
    answer: 1,
    explanation: "Multiplicação e divisão são operações inversas.",
  },
  {
    question: "Quanto é 12,5 + 3,75?",
    options: ["15,25", "16,25", "16,75", "17,25"],
    answer: 1,
    explanation: "Alinhando as vírgulas: 12,50 + 3,75 = 16,25.",
  },
];
export function CalculationWorkshopActivity() {
  const [operation, setOperation] = useState<Operation>("Adição");
  const [index, setIndex] = useState(0);
  const [method, setMethod] = useState<"mental" | "paper">("mental");
  const item = calculations[operation][index];
  function chooseOperation(next: Operation) {
    setOperation(next);
    setIndex(0);
  }
  return (
    <ActivityWithChallenge questions={questions}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Cálculo mental e algoritmos</p>
          <h2>Oficina de cálculo</h2>
          <p>Compare diferentes caminhos para cada operação.</p>
        </header>
        <div className="operation-kinds">
          {(Object.keys(calculations) as Operation[]).map((op) => (
            <button
              className={operation === op ? "active" : ""}
              key={op}
              onClick={() => chooseOperation(op)}
            >
              {op}
            </button>
          ))}
        </div>
        <div className="quick-values">
          {calculations[operation].map((calc, i) => (
            <button
              className={index === i ? "active" : ""}
              key={calc.label}
              onClick={() => setIndex(i)}
            >
              {calc.label}
            </button>
          ))}
        </div>
        <div className="method-tabs">
          <button
            className={method === "mental" ? "active" : ""}
            onClick={() => setMethod("mental")}
          >
            🧠 Cálculo mental
          </button>
          <button
            className={method === "paper" ? "active" : ""}
            onClick={() => setMethod("paper")}
          >
            ✎ No papel
          </button>
        </div>
        {method === "mental" ? (
          <ol className="calculation-steps">
            {item.mental.map((step, i) => (
              <li key={step}>
                <span>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        ) : (
          <div
            className="paper-calculation"
            aria-label={`Conta armada: ${item.label}`}
          >
            {item.paper.map((line, i) => (
              <code key={i}>{line}</code>
            ))}
          </div>
        )}
      </article>
    </ActivityWithChallenge>
  );
}
