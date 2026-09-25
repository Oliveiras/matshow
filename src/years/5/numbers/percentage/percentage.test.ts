import{describe,expect,it}from'vitest';import{money,representations}from'./percentage'
describe('representations',()=>{it('simplifica frações',()=>expect(representations(25)).toEqual({fraction:'1/4',decimal:'0,25'}));it('representa o inteiro',()=>expect(representations(100).fraction).toBe('1'))});describe('money',()=>{it('formata reais',()=>expect(money(12.5)).toContain('12,50'))})
