import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const questions: ChallengeQuestion[] = [
  {
    question: "Com 4 camisetas e 3 bermudas, quantos conjuntos existem?",
    options: ["7", "12", "16", "24"],
    answer: 1,
    explanation: "4 × 3 = 12 combinações.",
  },
  {
    question: "Há 2 sucos e 5 sanduíches. Quantos lanches diferentes?",
    options: ["7", "10", "12", "25"],
    answer: 1,
    explanation: "Cada suco combina com 5 sanduíches: 2 × 5 = 10.",
  },
  {
    question:
      "Uma árvore tem 3 ramos iniciais e 2 finais em cada um. Quantas folhas?",
    options: ["5", "6", "8", "9"],
    answer: 1,
    explanation: "São 3 grupos de 2: 3 × 2 = 6.",
  },
  {
    question: "12 combinações usam 3 camisetas. Quantas bermudas?",
    options: ["3", "4", "6", "9"],
    answer: 1,
    explanation: "12 ÷ 3 = 4 bermudas.",
  },
  {
    question: "Qual tabela representa 2 × 3 combinações?",
    options: [
      "2 linhas e 3 colunas",
      "2 linhas e 2 colunas",
      "3 células",
      "5 células",
    ],
    answer: 0,
    explanation:
      "Duas opções de um tipo cruzadas com três do outro formam uma tabela 2 por 3.",
  },
];
const shirtColors = ["#ef4444", "#3b82f6", "#22c55e", "#a855f7", "#f59e0b"];
const shortsColors = ["#1e293b", "#0ea5e9", "#ec4899", "#84cc16", "#f97316"];
function Shirt({ color }: { color: string }) {
  return (
    <svg className="clothing-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path
        fill={color}
        d="M20 8 8 15 3 29l11 5 5-9v31h26V25l5 9 11-5-5-14-12-7c-3 5-21 5-24 0Z"
      />
      <path
        fill="#fff"
        opacity=".3"
        d="M25 9c2 5 12 5 14 0l5 3c-5 8-19 8-24 0Z"
      />
    </svg>
  );
}
function Shorts({ color }: { color: string }) {
  return (
    <svg className="clothing-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path fill={color} d="M12 8h40l-2 22 8 24H37l-5-17-5 17H6l8-24Z" />
      <path
        stroke="#fff"
        strokeWidth="3"
        opacity=".35"
        d="M14 18h36M32 18v19"
      />
    </svg>
  );
}
function Pair({ shirt, shorts }: { shirt: number; shorts: number }) {
  return (
    <span className="clothes">
      <Shirt color={shirtColors[shirt]} />
      <b>+</b>
      <Shorts color={shortsColors[shorts]} />
    </span>
  );
}
export function CombinationFactoryActivity() {
  const [shirts, setShirts] = useState(3);
  const [shorts, setShorts] = useState(2);
  const [view, setView] = useState<"tree" | "table">("tree");
  const [root, setRoot] = useState<"shirts" | "shorts">("shirts");
  return (
    <ActivityWithChallenge questions={questions}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Princípio multiplicativo</p>
          <h2>Fábrica de combinações</h2>
        </header>
        <div className="combo-controls">
          <label>
            Camisetas{" "}
            <input
              type="range"
              min="1"
              max="5"
              value={shirts}
              onChange={(e) => setShirts(Number(e.target.value))}
            />
            <strong>{shirts}</strong>
          </label>
          <label>
            Bermudas{" "}
            <input
              type="range"
              min="1"
              max="5"
              value={shorts}
              onChange={(e) => setShorts(Number(e.target.value))}
            />
            <strong>{shorts}</strong>
          </label>
        </div>
        <div className="method-tabs">
          <button
            className={view === "tree" ? "active" : ""}
            onClick={() => setView("tree")}
          >
            Árvore
          </button>
          <button
            className={view === "table" ? "active" : ""}
            onClick={() => setView("table")}
          >
            Tabela
          </button>
        </div>
        {view === "tree" && (
          <>
            <div className="tree-direction">
              <span>Começar pelas</span>
              <button
                className={root === "shirts" ? "active" : ""}
                onClick={() => setRoot("shirts")}
              >
                camisetas
              </button>
              <button
                className={root === "shorts" ? "active" : ""}
                onClick={() => setRoot("shorts")}
              >
                bermudas
              </button>
            </div>
            <div className="combination-tree">
              {Array.from(
                { length: root === "shirts" ? shirts : shorts },
                (_, first) => (
                  <div key={first}>
                    {root === "shirts" ? (
                      <Shirt color={shirtColors[first]} />
                    ) : (
                      <Shorts color={shortsColors[first]} />
                    )}
                    <span>→</span>
                    <div>
                      {Array.from(
                        { length: root === "shirts" ? shorts : shirts },
                        (_, second) => (
                          <Pair
                            key={second}
                            shirt={root === "shirts" ? first : second}
                            shorts={root === "shirts" ? second : first}
                          />
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </>
        )}
        {view === "table" && (
          <div className="combination-table">
            <table>
              <thead>
                <tr>
                  <th>👕 / 🩳</th>
                  {Array.from({ length: shorts }, (_, b) => (
                    <th key={b}>
                      <Shorts color={shortsColors[b]} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: shirts }, (_, s) => (
                  <tr key={s}>
                    <th>
                      <Shirt color={shirtColors[s]} />
                    </th>
                    {Array.from({ length: shorts }, (_, b) => (
                      <td key={b}>
                        <Pair shirt={s} shorts={b} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="math-sentence">
          {shirts} × {shorts} = {shirts * shorts} combinações
        </p>
      </article>
    </ActivityWithChallenge>
  );
}
