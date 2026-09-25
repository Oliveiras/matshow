export type SchoolYear = 1 | 2 | 3 | 4 | 5
export type ModuleId = string

export interface LearningModule {
  id: ModuleId
  title: string
  shortTitle: string
  icon: string
  description: string
  color: string
  status: 'available' | 'planned'
}

export interface YearContent {
  year: SchoolYear
  modules: LearningModule[]
}
