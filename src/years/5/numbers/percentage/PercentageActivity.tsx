import { useState } from "react";
import {
  ChallengePanel,
  type ChallengeQuestion,
} from "../../../../components/ui/ActivityWithChallenge";
import { money, representations } from "./percentage";
type Tab = "explore" | "shop" | "challenge";
const questions: ChallengeQuestion[] = [
  {
    question: "Qual é 25% de 40?",
    options: ["5", "10", "15", "20"],
    answer: 1,
    explanation: "25% é a quarta parte: 40 ÷ 4 = 10.",
  },
  {
    question: "Uma bateria em 50% está com que parte da carga?",
    options: ["1/4", "1/2", "3/4", "1/10"],
    answer: 1,
    explanation: "50 de 100 simplifica para 1/2.",
  },
  {
    question: "Quanto se economiza com 10% de desconto em R$ 20?",
    options: ["R$ 1", "R$ 2", "R$ 5", "R$ 10"],
    answer: 1,
    explanation: "10% é a décima parte: 20 ÷ 10 = 2.",
  },
  {
    question: "75% corresponde a...",
    options: ["1/4", "1/2", "3/4", "1 inteiro"],
    answer: 2,
    explanation: "75/100 simplifica para 3/4.",
  },
  {
    question: "Um produto de R$ 80 com 50% de desconto custa...",
    options: ["R$ 20", "R$ 30", "R$ 40", "R$ 60"],
    answer: 2,
    explanation: "50% é a metade; a metade de 80 é 40.",
  },
];
const products = [
  { name: "Lanche", icon: "🥪", price: 12 },
  { name: "Estojo", icon: "✏️", price: 24 },
  { name: "Livro", icon: "📘", price: 40 },
  { name: "Mochila", icon: "🎒", price: 80 },
];
export function PercentageActivity() {
  const [tab, setTab] = useState<Tab>("explore");
  return (
    <section className="lab-page">
      <div className="subtab-list">
        <button
          className={tab === "explore" ? "active" : ""}
          onClick={() => setTab("explore")}
        >
          Grade e equivalências
        </button>
        <button
          className={tab === "shop" ? "active" : ""}
          onClick={() => setTab("shop")}
        >
          Cantina e descontos
        </button>
        <button
          className={tab === "challenge" ? "active" : ""}
          onClick={() => setTab("challenge")}
        >
          Desafio
        </button>
      </div>
      {tab === "explore" && <Explorer />}
      {tab === "shop" && <Shop />}
      {tab === "challenge" && <ChallengePanel questions={questions} />}
    </section>
  );
}
function Explorer() {
  const [value, setValue] = useState(25);
  const representation = representations(value);
  return (
    <div className="explorer-grid compact-percentage">
      <article className="panel control-panel">
        <p className="eyebrow">Controle a quantidade</p>
        <div className="percentage-display">
          {value}
          <small>%</small>
        </div>
        <input
          aria-label="Porcentagem"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="quick-values">
          {[0, 10, 25, 50, 75, 100].map((item) => (
            <button
              className={value === item ? "active" : ""}
              key={item}
              onClick={() => setValue(item)}
            >
              {item}%
            </button>
          ))}
        </div>
        <p className="teacher-tip">
          💡 Se cada quadradinho vale 1%, quantos precisamos pintar?
        </p>
      </article>
      <article className="panel hundred-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">100 partes iguais</p>
            <h2>Grade de centésimos</h2>
          </div>
          <strong>
            {value} pintados · {100 - value} livres
          </strong>
        </div>
        <div
          className="hundred-grid"
          aria-label={`${value} de 100 quadrados pintados`}
        >
          {Array.from({ length: 100 }, (_, index) => (
            <button
              aria-label={`Quadrado ${index + 1}`}
              className={index < value ? "filled" : ""}
              key={index}
              onClick={() => setValue(index + 1)}
            />
          ))}
        </div>
      </article>
      <div className="percentage-side">
        <article className="panel equivalents">
          <p className="eyebrow">Três representações</p>
          <div>
            <span>
              <small>Porcentagem</small>
              <strong>{value}%</strong>
            </span>
            <span>
              <small>Fração</small>
              <strong>{representation.fraction}</strong>
            </span>
            <span>
              <small>Decimal</small>
              <strong>{representation.decimal}</strong>
            </span>
          </div>
        </article>
        <article className="panel visuals">
          <div className="battery">
            <div
              style={{
                width: `${value}%`,
                background:
                  value <= 20 ? "#ef4444" : value <= 50 ? "#f59e0b" : "#10b981",
              }}
            />
          </div>
          <strong>Bateria: {value}%</strong>
          <div
            className="pie"
            style={{
              background: `conic-gradient(#f59e0b ${value}%,#e2e8f0 0)`,
            }}
          >
            <span>{value}%</span>
          </div>
        </article>
      </div>
    </div>
  );
}
function Shop() {
  const [product, setProduct] = useState(products[0]);
  const [discount, setDiscount] = useState(25);
  const saving = (product.price * discount) / 100;
  return (
    <div className="shop-layout">
      <article className="panel">
        <p className="eyebrow">1 · Escolha um produto</p>
        <div className="product-grid">
          {products.map((item) => (
            <button
              key={item.name}
              className={item.name === product.name ? "active" : ""}
              onClick={() => setProduct(item)}
            >
              <span>{item.icon}</span>
              <strong>{item.name}</strong>
              <small>{money(item.price)}</small>
            </button>
          ))}
        </div>
      </article>
      <article className="panel">
        <p className="eyebrow">2 · Aplique o desconto</p>
        <div className="discount-buttons">
          {[10, 25, 50, 75].map((item) => (
            <button
              className={discount === item ? "active" : ""}
              key={item}
              onClick={() => setDiscount(item)}
            >
              {item}%
            </button>
          ))}
        </div>
        <div className="receipt">
          <p>
            {product.icon} {product.name}
          </p>
          <span>
            Preço <strong>{money(product.price)}</strong>
          </span>
          <span>
            Desconto ({discount}%) <strong>- {money(saving)}</strong>
          </span>
          <hr />
          <span className="total">
            A pagar <strong>{money(product.price - saving)}</strong>
          </span>
        </div>
      </article>
      <article className="panel reasoning">
        <p className="eyebrow">Estratégia</p>
        <ol>
          <li>
            Escreva {discount}% como {discount}/100.
          </li>
          <li>
            Calcule {money(product.price)} × {discount} ÷ 100.
          </li>
          <li>Subtraia {money(saving)} do preço.</li>
        </ol>
      </article>
    </div>
  );
}
