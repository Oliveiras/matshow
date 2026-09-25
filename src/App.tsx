import { useState } from 'react'
import { modulesForYear } from './content/modules'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './features/home/HomePage'
import { PercentageLab } from './features/percentage/PercentageLab'
import { NumbersLab } from './features/numbers/NumbersLab'
import { AlgebraLab } from './features/algebra/AlgebraLab'
import { GeometryLab } from './features/geometry/GeometryLab'
import { MeasuresLab } from './features/measures/MeasuresLab'
import { StatisticsLab } from './features/statistics/StatisticsLab'
import { ComingSoon } from './components/ui/ComingSoon'
import type { ModuleId, SchoolYear } from './types/content'

export function App() {
  const [year, setYear] = useState<SchoolYear>(5)
  const [activeId, setActiveId] = useState<ModuleId>('inicio')
  const modules = modulesForYear(year)
  const activeModule = modules.find((module) => module.id === activeId) ?? modules[0]

  function changeYear(nextYear: SchoolYear) { setYear(nextYear); setActiveId('inicio') }

  return (
    <AppShell year={year} modules={modules} active={activeModule} onChangeYear={changeYear} onNavigate={setActiveId}>
      {activeId === 'inicio' && <HomePage year={year} modules={modules} onNavigate={setActiveId} />}
      {year === 5 && activeId === 'numeros' && <NumbersLab percentageLab={<PercentageLab />} />}
      {year === 5 && activeId === 'algebra' && <AlgebraLab />}
      {year === 5 && activeId === 'geometria' && <GeometryLab />}
      {year === 5 && activeId === 'medidas' && <MeasuresLab />}
      {year === 5 && activeId === 'estatistica' && <StatisticsLab />}
      {year !== 5 && activeId !== 'inicio' && <ComingSoon module={activeModule} />}
    </AppShell>
  )
}
