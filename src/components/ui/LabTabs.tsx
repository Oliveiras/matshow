export interface LabTab<T extends string> { id: T; label: string; skills: string }

export function LabTabs<T extends string>({ tabs, active, onChange }: { tabs: LabTab<T>[]; active: T; onChange: (id: T) => void }) {
  return <div className="lab-tabs-wrap"><div className="tab-list" role="tablist">{tabs.map((tab) => <button key={tab.id} className={active === tab.id ? 'active' : ''} onClick={() => onChange(tab.id)}>{tab.label}</button>)}</div><span className="skill-badge">BNCC {tabs.find((tab) => tab.id === active)?.skills}</span></div>
}
