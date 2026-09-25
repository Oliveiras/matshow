import { useState, type ReactNode } from "react";
import type { LearningModule, ModuleId, SchoolYear } from "../../types/content";
import { DrawingBoard } from "../tools/DrawingBoard";

interface Props {
  modules: LearningModule[];
  year: SchoolYear;
  active: LearningModule;
  onNavigate: (id: ModuleId) => void;
  onChangeYear: (year: SchoolYear) => void;
  children: ReactNode;
}

export function AppShell({
  year,
  modules,
  active,
  onNavigate,
  onChangeYear,
  children,
}: Props) {
  const [drawing, setDrawing] = useState(false);

  async function toggleFullscreen() {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  }

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Temas de Matemática">
        <button
          className="brand"
          onClick={() => onNavigate("inicio")}
          aria-label="Ir para o início"
        >
          <span className="brand-mark">M</span>
          <span className="brand-text">
            MatShow<small>Laboratório Matemático</small>
          </span>
        </button>
        <div className="year-picker" aria-label="Selecionar ano escolar">
          {[1, 2, 3, 4, 5].map((item) => (
            <button
              key={item}
              className={year === item ? "active" : ""}
              onClick={() => onChangeYear(item as SchoolYear)}
              aria-label={`${item}º ano`}
            >
              {item}º
            </button>
          ))}
        </div>
        <nav className="nav-list">
          {modules.map((module) => (
            <button
              key={module.id}
              className={`nav-item ${active.id === module.id ? "active" : ""}`}
              style={{ "--module-color": module.color } as React.CSSProperties}
              onClick={() => onNavigate(module.id)}
              aria-current={active.id === module.id ? "page" : undefined}
            >
              <span className="nav-icon">{module.icon}</span>
              <span>{module.shortTitle}</span>
            </button>
          ))}
        </nav>
        <p className="classroom-status">
          <span /> Pronto para a sala
        </p>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">{year}º ano · Ensino Fundamental</p>
            <h1>{active.title}</h1>
          </div>
          <div className="toolbar">
            <button
              className={drawing ? "tool-button selected" : "tool-button"}
              onClick={() => setDrawing((value) => !value)}
            >
              ✎ <span>Caneta</span>
            </button>
            <button className="tool-button" onClick={toggleFullscreen}>
              ⛶ <span>Tela cheia</span>
            </button>
          </div>
        </header>
        <div className="content">{children}</div>
      </main>
      {drawing && <DrawingBoard onClose={() => setDrawing(false)} />}
    </div>
  );
}
