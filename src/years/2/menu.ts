import { home, plannedModules } from "../shared";
export const year2Modules = [
  home(2),
  ...plannedModules([
    [
      "numeros",
      "Números",
      "123",
      "Leitura, composição e ordenação de números.",
    ],
    [
      "operacoes",
      "Operações",
      "+",
      "Adição, subtração e ideias multiplicativas.",
    ],
    ["geometria", "Geometria", "◇", "Localização e formas planas e espaciais."],
    [
      "medidas",
      "Medidas",
      "⌁",
      "Comprimento, capacidade, massa, tempo e dinheiro.",
    ],
    ["dados", "Dados e acaso", "▥", "Tabelas, gráficos e possibilidades."],
  ]),
];
