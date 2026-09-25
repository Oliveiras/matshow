import { useState } from "react";
import { modulesForYear } from "./years/catalog";
import { AppShell } from "./components/layout/AppShell";
import { HomePage } from "./features/home/HomePage";
import { NumbersArea } from "./years/5/numbers/NumbersArea";
import { AlgebraArea } from "./years/5/algebra/AlgebraArea";
import { GeometryArea } from "./years/5/geometry/GeometryArea";
import { MeasuresArea } from "./years/5/measures/MeasuresArea";
import { StatisticsArea } from "./years/5/statistics/StatisticsArea";
import { ComingSoon } from "./components/ui/ComingSoon";
import type { ModuleId, SchoolYear } from "./types/content";

export function App() {
  const [year, setYear] = useState<SchoolYear>(5);
  const [activeId, setActiveId] = useState<ModuleId>("inicio");
  const modules = modulesForYear(year);
  const activeModule =
    modules.find((module) => module.id === activeId) ?? modules[0];

  function changeYear(nextYear: SchoolYear) {
    setYear(nextYear);
    setActiveId("inicio");
  }

  return (
    <AppShell
      year={year}
      modules={modules}
      active={activeModule}
      onChangeYear={changeYear}
      onNavigate={setActiveId}
    >
      {activeId === "inicio" && (
        <HomePage year={year} modules={modules} onNavigate={setActiveId} />
      )}
      {year === 5 && activeId === "numeros" && <NumbersArea />}
      {year === 5 && activeId === "algebra" && <AlgebraArea />}
      {year === 5 && activeId === "geometria" && <GeometryArea />}
      {year === 5 && activeId === "medidas" && <MeasuresArea />}
      {year === 5 && activeId === "estatistica" && <StatisticsArea />}
      {year !== 5 && activeId !== "inicio" && (
        <ComingSoon module={activeModule} />
      )}
    </AppShell>
  );
}
