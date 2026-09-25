import type { LearningModule, ModuleId } from '../../types/content'

export function HomePage({ modules, onNavigate }: { modules: LearningModule[]; onNavigate: (id: ModuleId) => void }) {
  return <>
    <section className="hero">
      <div><span className="pill">Espaço de professores e alunos</span><h2>Matemática para ver, tocar e descobrir.</h2><p>Abra um laboratório, projete na TV e investigue ideias matemáticas junto com a turma.</p></div>
      <div className="hero-symbol" aria-hidden="true">π</div>
    </section>
    <section className="module-grid" aria-label="Laboratórios">
      {modules.filter((module) => module.id !== 'inicio').map((module) => <button className="module-card" key={module.id} onClick={() => onNavigate(module.id)} style={{ '--module-color': module.color } as React.CSSProperties}>
        <span className="card-icon">{module.icon}</span><span className="card-status">{module.status === 'available' ? 'Disponível' : 'Em breve'}</span>
        <h3>{module.shortTitle}</h3><p>{module.description}</p><strong>{module.status === 'available' ? 'Explorar agora →' : 'Ver planejamento →'}</strong>
      </button>)}
    </section>
  </>
}
