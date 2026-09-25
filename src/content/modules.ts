import type { LearningModule } from '../types/content'

export const modules: LearningModule[] = [
  { id: 'inicio', title: 'Laboratório de Matemática', shortTitle: 'Início', icon: '⌂', description: 'Escolha um tema para explorar com a turma.', color: '#4f46e5', status: 'available' },
  { id: 'numeros', title: 'Números, Frações e Decimais', shortTitle: 'Números', icon: '%', description: 'Porcentagens, equivalências e educação financeira.', color: '#d97706', status: 'available' },
  { id: 'algebra', title: 'Álgebra e Padrões', shortTitle: 'Álgebra', icon: '=', description: 'Balança de igualdade e sequências.', color: '#059669', status: 'planned' },
  { id: 'geometria', title: 'Geometria', shortTitle: 'Geometria', icon: '◇', description: 'Sólidos, planificações e simetria.', color: '#7c3aed', status: 'planned' },
  { id: 'medidas', title: 'Grandezas e Medidas', shortTitle: 'Medidas', icon: '⌁', description: 'Área, perímetro, tempo e outras medidas.', color: '#0284c7', status: 'planned' },
  { id: 'estatistica', title: 'Estatística e Probabilidade', shortTitle: 'Estatística', icon: '▥', description: 'Experimentos, tabelas e gráficos.', color: '#e11d48', status: 'planned' },
]
