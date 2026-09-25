import type { LearningModule } from "../../types/content";

export function ComingSoon({ module }: { module: LearningModule }) {
  return (
    <section className="empty-state">
      <span className="empty-icon" style={{ color: module.color }}>
        {module.icon}
      </span>
      <p className="eyebrow">Em planejamento</p>
      <h2>{module.shortTitle}</h2>
      <p>{module.description}</p>
      <p className="muted">
        O conteúdo será implementado depois da pesquisa curricular e da
        aprovação de sua especificação.
      </p>
    </section>
  );
}
