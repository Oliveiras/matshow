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

const challenges = {
  decimal: { question:'Em 483.716, quanto vale o algarismo 8?', options:['8','80','8.000','80.000'], answer:3, explanation:'O 8 ocupa a dezena de milhar: 8 × 10.000 = 80.000.' },
  fractions: { question:'Qual fração é maior que 1?', options:['2/5','4/4','7/4','1/8'], answer:2, explanation:'7/4 tem numerador maior que o denominador, portanto passa de um inteiro.' },
  operations: { question:'Qual estratégia ajuda a calcular 198 + 37 mentalmente?', options:['200 + 37 − 2','100 + 30','198 + 30 − 7','200 + 30'], answer:0, explanation:'Compensar 198 para 200 facilita: 200 + 37 − 2 = 235.' },
  counting: { question:'Com 4 camisetas e 3 bermudas, quantos conjuntos diferentes existem?', options:['7','12','16','24'], answer:1, explanation:'Cada uma das 4 camisetas combina com 3 bermudas: 4 × 3 = 12.' },
}

export function NumbersLab({ percentageLab }: { percentageLab: ReactNode }) {
  const [tab,setTab] = useState<Tab>('decimal')
  return <section className="lab-page"><LabTabs tabs={[...tabs]} active={tab} onChange={setTab} />
    {tab === 'decimal' && <ExploreChallenge challenge={challenges.decimal}><DecimalHouse /></ExploreChallenge>}
    {tab === 'fractions' && <ExploreChallenge challenge={challenges.fractions}><FractionLine /></ExploreChallenge>}
    {tab === 'operations' && <ExploreChallenge challenge={challenges.operations}><OperationWorkshop /></ExploreChallenge>}
    {tab === 'counting' && <CombinationFactory />}
    {tab === 'percentage' && percentageLab}
  </section>
}

interface ChallengeData { question:string; options:string[]; answer:number; explanation:string }
function ExploreChallenge({ children, challenge }: { children:ReactNode; challenge:ChallengeData }) {
  const [mode,setMode]=useState<'explore'|'challenge'>('explore')
  return <><div className="subtab-list"><button className={mode==='explore'?'active':''} onClick={()=>setMode('explore')}>Explorar</button><button className={mode==='challenge'?'active':''} onClick={()=>setMode('challenge')}>Desafio</button></div>{mode==='explore'?children:<MiniChallenge data={challenge}/>}</>
}

function MiniChallenge({data}:{data:ChallengeData}){const [choice,setChoice]=useState<number|null>(null);const correct=choice===data.answer;return <article className="panel challenge"><p className="eyebrow">Desafio</p><h2>{data.question}</h2><div className="answer-grid">{data.options.map((option,index)=><button key={option} disabled={choice!==null} className={choice===null?'':index===data.answer?'correct':choice===index?'wrong':''} onClick={()=>setChoice(index)}>{option}</button>)}</div>{choice!==null&&<div className={correct?'feedback correct':'feedback'}><strong>{correct?'Muito bem!':'Vamos rever.'}</strong> {data.explanation}</div>}{choice!==null&&!correct&&<button className="primary-button" onClick={()=>setChoice(null)}>Tentar novamente</button>}</article>}

const numberFormat = new Intl.NumberFormat('pt-BR')
function DecimalHouse() {
  const [value,setValue] = useState(345672)
  const digits = String(Math.min(999999,Math.max(0,value))).padStart(6,'0').split('')
  const places = ['Centena de milhar','Dezena de milhar','Unidade de milhar','Centena','Dezena','Unidade']
  const updateValue=(raw:string)=>setValue(Math.min(999999,Number(raw.replace(/\D/g,''))||0))
  return <article className="panel activity"><header><p className="eyebrow">Sistema de numeração decimal</p><h2>Casa dos números</h2><p>Troque o número e observe o valor de cada algarismo.</p></header><label className="big-input">Número até 999.999 <input inputMode="numeric" value={numberFormat.format(value)} onChange={(e)=>updateValue(e.target.value)}/></label><div className="place-grid">{digits.map((digit,index)=><div className={index<3?'thousands':''} key={places[index]}><small>{places[index]}</small><strong>{digit}</strong><span>{numberFormat.format(Number(digit) * 10 ** (5-index))}</span></div>)}</div><p className="math-sentence">{digits.map((digit,index)=>Number(digit)*10**(5-index)).filter(Boolean).map(number=>numberFormat.format(number)).join(' + ') || '0'}</p></article>
}

function FractionLine() {
  const [numerator,setNumerator]=useState(3); const [denominator,setDenominator]=useState(4)
  const value=numerator/denominator
  return <article className="panel activity"><header><p className="eyebrow">Frações, decimais e ordem</p><h2>Reta das frações</h2></header><div className="fraction-controls"><label>Numerador <input type="range" min="0" max="12" value={numerator} onChange={(e)=>setNumerator(Number(e.target.value))}/><strong>{numerator}</strong></label><label>Denominador <input type="range" min="1" max="10" value={denominator} onChange={(e)=>setDenominator(Number(e.target.value))}/><strong>{denominator}</strong></label></div><div className="number-line"><div className="line-track"/><div className="line-marker" style={{left:`${Math.min(100,value/2*100)}%`}}>{numerator}/{denominator}</div>{[0,.5,1,1.5,2].map(n=><span key={n} style={{left:`${n/2*100}%`}}>{String(n).replace('.',',')}</span>)}</div><div className="equation-card"><strong>{numerator}/{denominator}</strong><span>=</span><strong>{value.toFixed(2).replace('.',',')}</strong><span>({value>1?'maior que 1':value===1?'igual a 1':'menor que 1'})</span></div></article>
}

const calculations=[
  {label:'198 + 37',mental:['Arredonde 198 para 200.','Calcule 200 + 37 = 237.','Compense os 2 acrescentados: 237 − 2 = 235.'],paper:['Alinhe unidades, dezenas e centenas.','Unidades: 8 + 7 = 15; escreva 5 e reserve 1.','Dezenas: 9 + 3 + 1 = 13; escreva 3 e reserve 1.','Centenas: 1 + 1 = 2.'],result:'235'},
  {label:'502 − 178',mental:['Separe 178 em 180 − 2.','Calcule 502 − 180 = 322.','Devolva 2: 322 + 2 = 324.'],paper:['Alinhe as ordens.','Reagrupe 502 como 4 centenas, 9 dezenas e 12 unidades.','Unidades: 12 − 8 = 4.','Dezenas: 9 − 7 = 2; centenas: 4 − 1 = 3.'],result:'324'},
  {label:'24 × 15',mental:['Decomponha 15 em 10 + 5.','24 × 10 = 240.','24 × 5 = metade de 24 × 10 = 120.','Some 240 + 120.'],paper:['Multiplique 24 por 5: 120.','Multiplique 24 por 10: 240.','Some os produtos parciais: 120 + 240.'],result:'360'},
  {label:'156 ÷ 12',mental:['Procure múltiplos de 12.','12 × 10 = 120; faltam 36.','12 × 3 = 36; então 10 + 3 = 13.'],paper:['Separe 156 em 120 + 36.','Divida cada parcela por 12: 10 + 3.','Some os quocientes parciais.'],result:'13'},
]
function OperationWorkshop(){const [index,setIndex]=useState(0);const [method,setMethod]=useState<'mental'|'paper'>('mental');const [revealed,setRevealed]=useState(false);const calculation=calculations[index];function select(i:number){setIndex(i);setRevealed(false)}return <article className="panel activity"><header><p className="eyebrow">Cálculo mental e algoritmos</p><h2>Oficina de cálculo</h2><p>Compare caminhos para resolver — o resultado só aparece depois da estratégia.</p></header><div className="quick-values">{calculations.map((item,i)=><button key={item.label} className={index===i?'active':''} onClick={()=>select(i)}>{item.label}</button>)}</div><div className="method-tabs"><button className={method==='mental'?'active':''} onClick={()=>setMethod('mental')}>🧠 Cálculo mental</button><button className={method==='paper'?'active':''} onClick={()=>setMethod('paper')}>✎ No papel</button></div><ol className="calculation-steps">{calculation[method].map((step,i)=><li key={step}><span>{i+1}</span>{step}</li>)}</ol><button className="reveal-button" onClick={()=>setRevealed(value=>!value)}>{revealed?`Resultado: ${calculation.result}`:'Revelar resultado'}</button></article>}

const shirtColors=['#ef4444','#3b82f6','#22c55e','#a855f7','#f59e0b']; const shortsColors=['#0f172a','#0ea5e9','#ec4899','#84cc16','#f97316']
function Clothes({shirt,shorts}:{shirt:number;shorts:number}){return <span className="clothes"><i style={{background:shirtColors[shirt]}}>👕</i><b>+</b><i style={{background:shortsColors[shorts]}}>🩳</i></span>}
function CombinationFactory(){const [shirts,setShirts]=useState(3);const [shorts,setShorts]=useState(2);const [view,setView]=useState<'pairs'|'tree'|'table'|'challenge'>('pairs');return <><div className="subtab-list"><button className={view==='pairs'?'active':''} onClick={()=>setView('pairs')}>Combinações</button><button className={view==='tree'?'active':''} onClick={()=>setView('tree')}>Árvore</button><button className={view==='table'?'active':''} onClick={()=>setView('table')}>Tabela</button><button className={view==='challenge'?'active':''} onClick={()=>setView('challenge')}>Desafio</button></div>{view==='challenge'?<MiniChallenge data={challenges.counting}/>:<article className="panel activity"><header><p className="eyebrow">Princípio multiplicativo</p><h2>Fábrica de combinações</h2></header><div className="combo-controls"><label>Camisetas <input type="range" min="1" max="5" value={shirts} onChange={e=>setShirts(Number(e.target.value))}/><strong>{shirts}</strong></label><label>Bermudas <input type="range" min="1" max="5" value={shorts} onChange={e=>setShorts(Number(e.target.value))}/><strong>{shorts}</strong></label></div>{view==='pairs'&&<div className="combination-grid">{Array.from({length:shirts},(_,s)=>Array.from({length:shorts},(_,b)=><Clothes key={`${s}-${b}`} shirt={s} shorts={b}/>))}</div>}{view==='tree'&&<div className="combination-tree">{Array.from({length:shirts},(_,s)=><div key={s}><i style={{background:shirtColors[s]}}>👕</i><span>→</span><div>{Array.from({length:shorts},(_,b)=><Clothes key={b} shirt={s} shorts={b}/>)}</div></div>)}</div>}{view==='table'&&<div className="combination-table"><table><thead><tr><th>👕 / 🩳</th>{Array.from({length:shorts},(_,b)=><th key={b}><i style={{background:shortsColors[b]}}>🩳</i></th>)}</tr></thead><tbody>{Array.from({length:shirts},(_,s)=><tr key={s}><th><i style={{background:shirtColors[s]}}>👕</i></th>{Array.from({length:shorts},(_,b)=><td key={b}><Clothes shirt={s} shorts={b}/></td>)}</tr>)}</tbody></table></div>}<p className="math-sentence">{shirts} × {shorts} = {shirts*shorts} combinações</p></article>}</>}
