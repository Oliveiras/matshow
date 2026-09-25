import { useState } from "react";
import {
  ActivityWithChallenge,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
const q: ChallengeQuestion[] = [
  {
    question: "O ponto (3,2) indica...",
    options: [
      "3 à direita e 2 acima",
      "2 à direita e 3 acima",
      "3 acima apenas",
      "2 à esquerda",
    ],
    answer: 0,
    explanation: "A primeira coordenada é horizontal; a segunda, vertical.",
  },
  {
    question: "De (1,1), avance 2 à direita. Onde chega?",
    options: ["(1,3)", "(3,1)", "(2,2)", "(0,1)"],
    answer: 1,
    explanation: "Somamos 2 à coordenada x.",
  },
  {
    question: "Qual ponto está no eixo vertical?",
    options: ["(3,0)", "(0,4)", "(2,2)", "(5,1)"],
    answer: 1,
    explanation: "No eixo vertical, x = 0.",
  },
  {
    question: "De (4,3), desça 2.",
    options: ["(2,3)", "(4,1)", "(6,3)", "(4,5)"],
    answer: 1,
    explanation: "Diminuímos 2 da coordenada y.",
  },
  {
    question: "Um giro de 90° é...",
    options: ["meia volta", "uma volta", "um quarto de volta", "três voltas"],
    answer: 2,
    explanation: "90° corresponde a um quarto de 360°.",
  },
];
export function CoordinatesActivity() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(2);
  return (
    <ActivityWithChallenge questions={q}>
      <article className="panel activity">
        <header>
          <p className="eyebrow">Primeiro quadrante</p>
          <h2>Mapa cartesiano</h2>
        </header>
        <div className="coordinate-layout">
          <div className="coordinate-grid">
            {Array.from({ length: 36 }, (_, i) => {
              const cx = i % 6,
                cy = 5 - Math.floor(i / 6);
              return (
                <button
                  key={i}
                  className={cx === x && cy === y ? "active" : ""}
                  onClick={() => {
                    setX(cx);
                    setY(cy);
                  }}
                >
                  {cx === x && cy === y ? "🤖" : ""}
                </button>
              );
            })}
          </div>
          <div className="coordinate-readout">
            <strong>
              ({x}, {y})
            </strong>
            <p>
              {x} à direita
              <br />
              {y} para cima
            </p>
          </div>
        </div>
      </article>
    </ActivityWithChallenge>
  );
}
