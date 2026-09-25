import { useState, type ReactNode } from 'react'
import { LabTabs } from '../../components/ui/LabTabs'

type Tab = 'decimal' | 'fractions' | 'operations' | 'counting' | 'percentage'
const tabs = [
  { id:'decimal', label:'Casa dos números', skills:'EF05MA01–02' },
  { id:'fractions', label:'Reta das frações', skills:'EF05MA03–05' },
  { id:'operations', label:'Oficina de cálculo', skills:'EF05MA07–08' },
  { id:'counting', label:'Fábrica de combinações', skills:'EF05MA09' },
  { id:'percentage', label:'Porcentagens', skills:'EF05MA06' },
] as const

export function NumbersLab({ percentageLab }: { percentageLab: ReactNode }) {
  const [tab,setTab] = useState<Tab>('decimal')
  return <section className="lab-page"><LabTabs tabs={[...tabs]} active={tab} onChange={setTab} />{tab === 'decimal' && <DecimalHouse />}{tab === 'fractions' && <FractionLine />}{tab === 'operations' && <OperationWorkshop />}{tab === 'counting' && <CombinationFactory />}{tab === 'percentage' && percentageLab}</section>
}

function DecimalHouse() {
  const [value,setValue] = useState(345672)
  const digits = String(Math.min(999999,Math.max(0,value))).padStart(6,'0').split('')
  const places = ['Centena de milhar','Dezena de milhar','Unidade de milhar','Centena','Dezena','Unidade']
  return <article className="panel activity"><header><p className="eyebrow">Sistema de numeração decimal</p><h2>Casa dos números</h2><p>Troque o número e observe o valor de cada algarismo.</p></header><label className="big-input">Número até 999.999 <input type="number" min="0" max="999999" value={value} onChange={(e)=>setValue(Number(e.target.value))}/></label><div className="place-grid">{digits.map((digit,index)=><div key={places[index]}><small>{places[index]}</small><strong>{digit}</strong><span>{Number(digit) * 10 ** (5-index)}</span></div>)}</div><p className="math-sentence">{digits.map((digit,index)=>Number(digit)*10**(5-index)).filter(Boolean).join(' + ') || '0'}</p></article>
}

function FractionLine() {
  const [numerator,setNumerator]=useState(3); const [denominator,setDenominator]=useState(4)
  const value=numerator/denominator
  return <article className="panel activity"><header><p className="eyebrow">Frações, decimais e ordem</p><h2>Reta das frações</h2></header><div className="fraction-controls"><label>Numerador <input type="range" min="0" max="12" value={numerator} onChange={(e)=>setNumerator(Number(e.target.value))}/><strong>{numerator}</strong></label><label>Denominador <input type="range" min="1" max="10" value={denominator} onChange={(e)=>setDenominator(Number(e.target.value))}/><strong>{denominator}</strong></label></div><div className="number-line"><div className="line-track"/><div className="line-marker" style={{left:`${Math.min(100,value/2*100)}%`}}>{numerator}/{denominator}</div>{[0,.5,1,1.5,2].map(n=><span key={n} style={{left:`${n/2*100}%`}}>{String(n).replace('.',',')}</span>)}</div><div className="equation-card"><strong>{numerator}/{denominator}</strong><span>=</span><strong>{value.toFixed(2).replace('.',',')}</strong><span>{value>1?'maior que 1':value===1?'igual a 1':'menor que 1'}</span></div></article>
}

function OperationWorkshop(){const [a,setA]=useState(12.5);const [b,setB]=useState(4);const [op,setOp]=useState('+');const result=op==='+'?a+b:op==='-'?a-b:op==='×'?a*b:a/b;return <article className="panel activity"><header><p className="eyebrow">Cálculo, estimativa e algoritmos</p><h2>Oficina de cálculo</h2></header><div className="operation-builder"><input aria-label="Primeiro número" type="number" step="0.1" value={a} onChange={e=>setA(Number(e.target.value))}/><select value={op} onChange={e=>setOp(e.target.value)}><option>+</option><option>-</option><option>×</option><option>÷</option></select><input aria-label="Segundo número" type="number" step="0.1" value={b} onChange={e=>setB(Number(e.target.value))}/><span>=</span><strong>{Number.isFinite(result)?result.toLocaleString('pt-BR',{maximumFractionDigits:2}):'—'}</strong></div><p className="teacher-tip">Antes de revelar o resultado, peça uma estimativa e compare as estratégias da turma.</p></article>}

function CombinationFactory(){const [shirts,setShirts]=useState(3);const [shorts,setShorts]=useState(2);return <article className="panel activity"><header><p className="eyebrow">Princípio multiplicativo</p><h2>Fábrica de combinações</h2></header><div className="combo-controls"><label>Camisetas <input type="range" min="1" max="5" value={shirts} onChange={e=>setShirts(Number(e.target.value))}/><strong>{shirts}</strong></label><label>Bermudas <input type="range" min="1" max="5" value={shorts} onChange={e=>setShorts(Number(e.target.value))}/><strong>{shorts}</strong></label></div><div className="combination-grid">{Array.from({length:shirts},(_,s)=>Array.from({length:shorts},(_,b)=><span key={`${s}-${b}`}>👕{s+1} + 🩳{b+1}</span>))}</div><p className="math-sentence">{shirts} × {shorts} = {shirts*shorts} combinações</p></article>}
