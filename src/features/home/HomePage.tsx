import type { LearningModule, ModuleId, SchoolYear } from "../../types/content";

export function HomePage({
  year,
  modules,
  onNavigate,
}: {
  year: SchoolYear;
  modules: LearningModule[];
  onNavigate: (id: ModuleId) => void;
}) {
  return (
    <>
      <section className="hero">
        <div>
          <span className="pill">{year}º ano · professores e alunos</span>
          <h2>Matemática para ver, tocar e descobrir.</h2>
          <p>
            {year === 5
              ? "Explore laboratórios que cobrem as cinco unidades temáticas da BNCC do 5º ano."
              : "Este ano já tem sua própria organização; as atividades interativas serão implementadas depois da pesquisa curricular específica."}
          </p>
        </div>
        <div className="hero-symbol" aria-hidden="true">
          π
        </div>
      </section>
      <section className="module-grid" aria-label="Laboratórios">
        {modules
          .filter((module) => module.id !== "inicio")
          .map((module) => (
            <button
              className="module-card"
              key={module.id}
              onClick={() => onNavigate(module.id)}
              style={{ "--module-color": module.color } as React.CSSProperties}
            >
              <span className="card-icon">{module.icon}</span>
              <span className="card-status">
                {module.status === "available" ? "Disponível" : "Em breve"}
              </span>
              <h3>{module.shortTitle}</h3>
              <p>{module.description}</p>
              <strong>
                {module.status === "available"
                  ? "Explorar agora →"
                  : "Ver planejamento →"}
              </strong>
            </button>
          ))}
      </section>
    </>
  );
}
