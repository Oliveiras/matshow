import type{SchoolYear}from'../types/content';import{year1Modules}from'./1/menu';import{year2Modules}from'./2/menu';import{year3Modules}from'./3/menu';import{year4Modules}from'./4/menu';import{year5Modules}from'./5/menu'
const catalog={1:year1Modules,2:year2Modules,3:year3Modules,4:year4Modules,5:year5Modules};export const modulesForYear=(year:SchoolYear)=>catalog[year]
