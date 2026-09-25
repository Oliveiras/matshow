import { describe, expect, it } from 'vitest'
import { modulesForYear } from './modules'

describe('modulesForYear', () => {
  it('mantém cinco unidades disponíveis no 5º ano', () => {
    const activities = modulesForYear(5).filter((module) => module.id !== 'inicio')
    expect(activities).toHaveLength(5)
    expect(activities.every((module) => module.status === 'available')).toBe(true)
  })

  it('oferece menu próprio, mas planejado, para os demais anos', () => {
    const first = modulesForYear(1)
    const fourth = modulesForYear(4)
    expect(first.map((module) => module.id)).not.toEqual(fourth.map((module) => module.id))
    expect(first.filter((module) => module.id !== 'inicio').every((module) => module.status === 'planned')).toBe(true)
  })
})
