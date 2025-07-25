import { describe, it, expect, vi } from 'vitest'

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    expect(Math.random() > 0.5).toBe(true)
  })

  it('flaky test 2', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.8)
    expect(Math.random() > 0.7).toBe(true)
    randomSpy.mockRestore()
  })

  it('flaky test 3', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.4)
    expect(Math.random() > 0.3).toBe(true)
    randomSpy.mockRestore()
  })

  it('flaky test 4', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.5)
    expect(Math.floor(Math.random() * 3)).toBe(1)
    randomSpy.mockRestore()
  })

  it('flaky test 5', () => {
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })
}) 
