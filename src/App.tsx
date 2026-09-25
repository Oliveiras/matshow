import { useState } from 'react'
import { modules } from './content/modules'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './features/home/HomePage'
import { PercentageLab } from './features/percentage/PercentageLab'
import { ComingSoon } from './components/ui/ComingSoon'
import type { ModuleId } from './types/content'

export function App() {
  const [activeId, setActiveId] = useState<ModuleId>('inicio')
  const activeModule = modules.find((module) => module.id === activeId) ?? modules[0]

  return (
    <AppShell modules={modules} active={activeModule} onNavigate={setActiveId}>
      {activeId === 'inicio' && <HomePage modules={modules} onNavigate={setActiveId} />}
      {activeId === 'numeros' && <PercentageLab />}
      {!['inicio', 'numeros'].includes(activeId) && <ComingSoon module={activeModule} />}
    </AppShell>
  )
}
