import type { LearningModule, SchoolYear } from '../types/content'

const home = (year: SchoolYear): LearningModule => ({ id: 'inicio', title: `Laboratório de Matemática · ${year}º ano`, shortTitle: 'Início', icon: '⌂', description: 'Escolha uma atividade para explorar com a turma.', color: '#4f46e5', status: 'available' })

const planned: Record<Exclude<SchoolYear, 5>, Array<[string, string, string, string]>> = {
  1: [['contagem','Contagem','123','Números, contagens e comparação de quantidades.'],['operacoes','Juntar e retirar','+','Situações iniciais de adição e subtração.'],['espaco','Espaço e formas','◇','Localização, figuras e padrões visuais.'],['medidas','Medidas','⌁','Comparações de comprimento, tempo e valores.'],['dados','Dados e acaso','▥','Classificações, registros e eventos cotidianos.']],
  2: [['numeros','Números','123','Leitura, composição e ordenação de números.'],['operacoes','Operações','+','Adição, subtração e ideias multiplicativas.'],['geometria','Geometria','◇','Localização e formas planas e espaciais.'],['medidas','Medidas','⌁','Comprimento, capacidade, massa, tempo e dinheiro.'],['dados','Dados e acaso','▥','Tabelas, gráficos e possibilidades.']],
  3: [['numeros','Números e operações','123','Sistema decimal, cálculo e problemas.'],['algebra','Regularidades','=','Sequências e relações de igualdade.'],['geometria','Geometria','◇','Localização, trajetos e figuras geométricas.'],['medidas','Medidas','⌁','Grandezas e comparação de áreas.'],['dados','Estatística','▥','Leitura de dados e análise de chances.']],
  4: [['numeros','Números e frações','123','Números naturais, racionais e operações.'],['algebra','Álgebra','=','Sequências, relações e propriedades da igualdade.'],['geometria','Geometria','◇','Localização, ângulos, simetria e figuras.'],['medidas','Grandezas e medidas','⌁','Área, tempo, temperatura e sistema monetário.'],['estatistica','Estatística','▥','Probabilidade, tabelas e gráficos.']],
}

const colors = ['#d97706','#059669','#7c3aed','#0284c7','#e11d48']

export const fifthGradeModules: LearningModule[] = [
  home(5),
  { id: 'numeros', title: 'Números e Operações', shortTitle: 'Números', icon: '123', description: 'Sistema decimal, frações, decimais, operações, contagem e porcentagens.', color: colors[0], status: 'available' },
  { id: 'algebra', title: 'Álgebra e Proporcionalidade', shortTitle: 'Álgebra', icon: '=', description: 'Equivalência, incógnitas, proporcionalidade e partilhas.', color: colors[1], status: 'available' },
  { id: 'geometria', title: 'Geometria', shortTitle: 'Geometria', icon: '◇', description: 'Coordenadas, sólidos, polígonos, ampliação e redução.', color: colors[2], status: 'available' },
  { id: 'medidas', title: 'Grandezas e Medidas', shortTitle: 'Medidas', icon: '⌁', description: 'Conversões, área, perímetro e volume.', color: colors[3], status: 'available' },
  { id: 'estatistica', title: 'Probabilidade e Estatística', shortTitle: 'Estatística', icon: '▥', description: 'Espaço amostral, chance, tabelas, pesquisas e gráficos.', color: colors[4], status: 'available' },
]

export function modulesForYear(year: SchoolYear): LearningModule[] {
  if (year === 5) return fifthGradeModules
  return [home(year), ...planned[year].map(([id, title, icon, description], index) => ({ id, title, shortTitle: title, icon, description, color: colors[index], status: 'planned' as const }))]
}
