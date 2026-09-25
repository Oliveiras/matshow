import{useState}from'react';import{LabTabs}from'../../../components/ui/LabTabs';import{ChanceActivity}from'./chance/ChanceActivity';import{SurveyActivity}from'./survey/SurveyActivity'
type Tab='chance'|'survey';const tabs=[{id:'chance',label:'Laboratório do acaso',skills:'EF05MA22–23'},{id:'survey',label:'Pesquisa e gráficos',skills:'EF05MA24–25'}]as const
export function StatisticsArea(){const[tab,setTab]=useState<Tab>('chance');return <section className="lab-page"><LabTabs tabs={[...tabs]} active={tab} onChange={setTab}/>{tab==='chance'?<ChanceActivity/>:<SurveyActivity/>}</section>}
