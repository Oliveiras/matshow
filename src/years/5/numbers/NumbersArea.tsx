import { useState } from 'react'
import { LabTabs } from '../../../components/ui/LabTabs'
import { PlaceValueActivity } from './place-value/PlaceValueActivity'
import { FractionLineActivity } from './fractions/FractionLineActivity'
import { CalculationWorkshopActivity } from './operations/CalculationWorkshopActivity'
import { CombinationFactoryActivity } from './combinations/CombinationFactoryActivity'
import { PercentageActivity } from './percentage/PercentageActivity'

type Tab = 'decimal' | 'fractions' | 'operations' | 'combinations' | 'percentage'
const tabs = [{id:'decimal',label:'Casa dos números',skills:'EF05MA01–02'},{id:'fractions',label:'Reta das frações',skills:'EF05MA03–05'},{id:'operations',label:'Oficina de cálculo',skills:'EF05MA07–08'},{id:'combinations',label:'Fábrica de combinações',skills:'EF05MA09'},{id:'percentage',label:'Porcentagens',skills:'EF05MA06'}] as const
export function NumbersArea(){const [tab,setTab]=useState<Tab>('decimal');return <section className="lab-page"><LabTabs tabs={[...tabs]} active={tab} onChange={setTab}/>{tab==='decimal'&&<PlaceValueActivity/>}{tab==='fractions'&&<FractionLineActivity/>}{tab==='operations'&&<CalculationWorkshopActivity/>}{tab==='combinations'&&<CombinationFactoryActivity/>}{tab==='percentage'&&<PercentageActivity/>}</section>}
