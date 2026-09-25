import { useState } from "react";
import { LabTabs } from "../../../components/ui/LabTabs";
import { CoordinatesActivity } from "./coordinates/CoordinatesActivity";
import { SolidsActivity } from "./solids/SolidsActivity";
import { PolygonsActivity } from "./polygons/PolygonsActivity";
import { ScaleActivity } from "./scale/ScaleActivity";
type Tab = "coordinates" | "solids" | "polygons" | "scale";
const tabs = [
  { id: "coordinates", label: "Mapa cartesiano", skills: "EF05MA14–15" },
  { id: "solids", label: "Sólidos e planificações", skills: "EF05MA16" },
  { id: "polygons", label: "Detetive de polígonos", skills: "EF05MA17" },
  { id: "scale", label: "Ampliar e reduzir", skills: "EF05MA18" },
] as const;
export function GeometryArea() {
  const [tab, setTab] = useState<Tab>("coordinates");
  return (
    <section className="lab-page">
      <LabTabs tabs={[...tabs]} active={tab} onChange={setTab} />
      {tab === "coordinates" && <CoordinatesActivity />}
      {tab === "solids" && <SolidsActivity />}
      {tab === "polygons" && <PolygonsActivity />}
      {tab === "scale" && <ScaleActivity />}
    </section>
  );
}
