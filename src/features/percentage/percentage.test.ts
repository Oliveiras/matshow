import { describe, expect, it } from 'vitest'
import { money, percentageRepresentations } from './percentage'

describe('percentageRepresentations', () => {
  it('simplifica frações e usa vírgula decimal', () => expect(percentageRepresentations(25)).toEqual({ fraction: '1/4', decimal: '0,25' }))
  it('representa o inteiro', () => expect(percentageRepresentations(100).fraction).toBe('1'))
})

describe('money', () => { it('formata reais', () => expect(money(12.5)).toContain('12,50')) })
