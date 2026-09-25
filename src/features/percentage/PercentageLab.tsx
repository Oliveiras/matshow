import { useMemo, useState } from 'react'
import { money, percentageRepresentations } from './percentage'

type Tab = 'explorar' | 'cantina' | 'desafio'
const products = [{ name: 'Lanche', icon: '🥪', price: 12 }, { name: 'Estojo', icon: '✏️', price: 24 }, { name: 'Livro', icon: '📘', price: 40 }, { name: 'Mochila', icon: '🎒', price: 80 }]
const challenges = [
  { question: 'Qual é 25% de 40?', options: ['5', '10', '15', '20'], answer: 1, explanation: '25% é a quarta parte: 40 ÷ 4 = 10.' },
  { question: 'Uma bateria em 50% está com que parte da carga?', options: ['1/4', '1/2', '3/4', '1/10'], answer: 1, explanation: '50 de 100 simplifica para 1/2.' },
  { question: 'Um produto de R$ 20 tem 10% de desconto. Quanto se economiza?', options: ['R$ 1', 'R$ 2', 'R$ 5', 'R$ 10'], answer: 1, explanation: '10% é a décima parte: 20 ÷ 10 = 2.' },
]

export function PercentageLab() {
  const [tab, setTab] = useState<Tab>('explorar')
  return <section className="lab-page">
    <div className="tab-list" role="tablist" aria-label="Atividades de porcentagem">
      <button className={tab === 'explorar' ? 'active' : ''} onClick={() => setTab('explorar')}>Grade e equivalências</button>
      <button className={tab === 'cantina' ? 'active' : ''} onClick={() => setTab('cantina')}>Cantina e descontos</button>
      <button className={tab === 'desafio' ? 'active' : ''} onClick={() => setTab('desafio')}>Desafio da TV</button>
    </div>
    {tab === 'explorar' && <PercentageExplorer />}
    {tab === 'cantina' && <DiscountShop />}
    {tab === 'desafio' && <Challenge />}
  </section>
}

function PercentageExplorer() {
  const [value, setValue] = useState(25)
  const representation = percentageRepresentations(value)
  return <div className="explorer-grid">
    <article className="panel control-panel">
      <p className="eyebrow">Controle a quantidade</p><div className="percentage-display">{value}<small>%</small></div>
      <input aria-label="Porcentagem" type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <div className="quick-values">{[0, 10, 25, 50, 75, 100].map((item) => <button className={value === item ? 'active' : ''} key={item} onClick={() => setValue(item)}>{item}%</button>)}</div>
      <p className="teacher-tip">💡 Pergunte: “Se cada quadradinho vale 1%, quantos precisamos pintar?”</p>
    </article>
    <article className="panel hundred-panel"><div className="panel-heading"><div><p className="eyebrow">100 partes iguais</p><h2>Grade de centésimos</h2></div><strong>{value} pintados · {100 - value} livres</strong></div>
      <div className="hundred-grid" aria-label={`${value} de 100 quadrados pintados`}>{Array.from({ length: 100 }, (_, index) => <button aria-label={`Quadrado ${index + 1}`} className={index < value ? 'filled' : ''} key={index} onClick={() => setValue(index + 1)} />)}</div>
    </article>
    <article className="panel equivalents"><p className="eyebrow">Três jeitos de dizer a mesma coisa</p><div><span><small>Porcentagem</small><strong>{value}%</strong></span><span><small>Fração</small><strong>{representation.fraction}</strong></span><span><small>Decimal</small><strong>{representation.decimal}</strong></span></div></article>
    <article className="panel visuals"><div className="battery"><div style={{ width: `${value}%` }} /></div><strong>Bateria: {value}%</strong><div className="pie" style={{ background: `conic-gradient(#f59e0b ${value}%, #e2e8f0 0)` }}><span>{value}%</span></div></article>
  </div>
}

function DiscountShop() {
  const [product, setProduct] = useState(products[0])
  const [discount, setDiscount] = useState(25)
  const saving = product.price * discount / 100
  return <div className="shop-layout">
    <article className="panel"><p className="eyebrow">1 · Escolha um produto</p><div className="product-grid">{products.map((item) => <button key={item.name} className={item.name === product.name ? 'active' : ''} onClick={() => setProduct(item)}><span>{item.icon}</span><strong>{item.name}</strong><small>{money(item.price)}</small></button>)}</div></article>
    <article className="panel"><p className="eyebrow">2 · Aplique o desconto</p><div className="discount-buttons">{[10, 25, 50, 75].map((item) => <button className={discount === item ? 'active' : ''} key={item} onClick={() => setDiscount(item)}>{item}%</button>)}</div>
      <div className="receipt"><p>{product.icon} {product.name}</p><span>Preço <strong>{money(product.price)}</strong></span><span>Desconto ({discount}%) <strong>- {money(saving)}</strong></span><hr /><span className="total">A pagar <strong>{money(product.price - saving)}</strong></span></div>
    </article>
    <article className="panel reasoning"><p className="eyebrow">Estratégia de cálculo</p><h2>{discount}% de {money(product.price)}</h2><ol><li>Transforme {discount}% em {discount} partes de 100.</li><li>Calcule: {money(product.price)} × {discount} ÷ 100.</li><li>O desconto é <strong>{money(saving)}</strong>; subtraia do preço.</li></ol></article>
  </div>
}

function Challenge() {
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const challenge = useMemo(() => challenges[index], [index])
  function next() { setIndex((value) => (value + 1) % challenges.length); setChoice(null) }
  return <article className="panel challenge"><p className="eyebrow">Quem sabe responde?</p><h2>{challenge.question}</h2><div className="answer-grid">{challenge.options.map((option, optionIndex) => <button key={option} disabled={choice !== null} className={choice === null ? '' : optionIndex === challenge.answer ? 'correct' : choice === optionIndex ? 'wrong' : ''} onClick={() => setChoice(optionIndex)}>{option}</button>)}</div>
    {choice !== null && <div className={choice === challenge.answer ? 'feedback correct' : 'feedback'}><strong>{choice === challenge.answer ? 'Muito bem!' : 'Vamos observar de novo.'}</strong> {challenge.explanation}</div>}
    <button className="primary-button" onClick={next}>Próximo desafio →</button>
  </article>
}
