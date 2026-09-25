export type ModuleId = 'inicio' | 'numeros' | 'algebra' | 'geometria' | 'medidas' | 'estatistica'

export interface LearningModule {
  id: ModuleId
  title: string
  shortTitle: string
  icon: string
  description: string
  color: string
  status: 'available' | 'planned'
}
