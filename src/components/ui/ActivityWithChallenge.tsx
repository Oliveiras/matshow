import { useState, type ReactNode } from "react";

export interface ChallengeQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export function ActivityWithChallenge({
  children,
  questions,
}: {
  children: ReactNode;
  questions: ChallengeQuestion[];
}) {
  const [mode, setMode] = useState<"explore" | "challenge">("explore");
  return (
    <>
      <div className="subtab-list">
        <button
          className={mode === "explore" ? "active" : ""}
          onClick={() => setMode("explore")}
        >
          Explorar
        </button>
        <button
          className={mode === "challenge" ? "active" : ""}
          onClick={() => setMode("challenge")}
        >
          Desafio
        </button>
      </div>
      {mode === "explore" ? children : <ChallengePanel questions={questions} />}
    </>
  );
}

export function ChallengePanel({
  questions,
}: {
  questions: ChallengeQuestion[];
}) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const current = questions[index];
  const correct = choice === current.answer;
  function next() {
    setIndex((value) => (value + 1) % questions.length);
    setChoice(null);
  }
  return (
    <article className="panel challenge">
      <p className="eyebrow">
        Desafio {index + 1} de {questions.length}
      </p>
      <h2>{current.question}</h2>
      <div className="answer-grid">
        {current.options.map((option, optionIndex) => (
          <button
            key={option}
            disabled={choice !== null}
            className={
              choice === null
                ? ""
                : optionIndex === current.answer
                  ? "correct"
                  : choice === optionIndex
                    ? "wrong"
                    : ""
            }
            onClick={() => setChoice(optionIndex)}
          >
            {option}
          </button>
        ))}
      </div>
      {choice !== null && (
        <div className={correct ? "feedback correct" : "feedback"}>
          <strong>{correct ? "Muito bem!" : "Vamos rever."}</strong>{" "}
          {current.explanation}
        </div>
      )}
      {choice !== null && (
        <button
          className="primary-button"
          onClick={correct ? next : () => setChoice(null)}
        >
          {correct ? "Próximo desafio →" : "Tentar novamente"}
        </button>
      )}
    </article>
  );
}
