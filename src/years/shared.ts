import type { LearningModule, SchoolYear } from "../types/content";
export const colors = ["#d97706", "#059669", "#7c3aed", "#0284c7", "#e11d48"];
export const home = (year: SchoolYear): LearningModule => ({
  id: "inicio",
  title: `Laboratório de Matemática · ${year}º ano`,
  shortTitle: "Início",
  icon: "⌂",
  description: "Escolha uma atividade para explorar com a turma.",
  color: "#4f46e5",
  status: "available",
});
export function plannedModules(
  items: Array<[string, string, string, string]>,
): LearningModule[] {
  return items.map(([id, title, icon, description], index) => ({
    id,
    title,
    shortTitle: title,
    icon,
    description,
    color: colors[index],
    status: "planned",
  }));
}
