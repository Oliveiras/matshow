import { useState } from "react";
import { LabTabs } from "../../../components/ui/LabTabs";
import { EqualityActivity } from "./equality/EqualityActivity";
import { ProportionActivity } from "./proportion/ProportionActivity";
import { PartitionActivity } from "./partition/PartitionActivity";
type Tab = "equality" | "proportion" | "partition";
const tabs = [
  { id: "equality", label: "Balança da igualdade", skills: "EF05MA10–11" },
  { id: "proportion", label: "Receita proporcional", skills: "EF05MA12" },
  { id: "partition", label: "Partilha desigual", skills: "EF05MA13" },
] as const;
export function AlgebraArea() {
  const [tab, setTab] = useState<Tab>("equality");
  return (
    <section className="lab-page">
      <LabTabs tabs={[...tabs]} active={tab} onChange={setTab} />
      {tab === "equality" && <EqualityActivity />}
      {tab === "proportion" && <ProportionActivity />}
      {tab === "partition" && <PartitionActivity />}
    </section>
  );
}
