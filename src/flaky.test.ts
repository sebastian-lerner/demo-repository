import { describe, it, expect, vi } from 'vitest'

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    expect(Math.random() > 0.5).toBe(true)
  })

  it('flaky test 2', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.8)
    expect(Math.random() > 0.7).toBe(true)
    spy.mockRestore()
  })

  it('flaky test 3', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    expect(Math.random() > 0.3).toBe(true)
    vi.restoreAllMocks()
  })

  it('flaky test 4', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    expect(Math.floor(Math.random() * 3)).toBe(1)
    vi.restoreAllMocks()
  })

  it('flaky test 5', () => {
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })
}) 
