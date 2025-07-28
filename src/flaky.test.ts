import { describe, it, expect, vi } from 'vitest'

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    expect(Math.random() > 0.5).toBe(true)
  })

  it('flaky test 2', () => {
    expect(Math.random() > 0.7).toBe(true)
  })

  it('flaky test 3', () => {
    expect(Math.random() > 0.3).toBe(true)
  })

  it('flaky test 4', () => {
    // Fix: Mock Math.random to return a value that produces 1 when floored
    const mockRandom = vi.fn(() => 0.5) // 0.5 * 3 = 1.5, Math.floor(1.5) = 1
    vi.spyOn(Math, 'random').mockImplementation(mockRandom)
    
    expect(Math.floor(Math.random() * 3)).toBe(1)
    
    // Cleanup
    vi.restoreAllMocks()
  })

  it('flaky test 5', () => {
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })
}) 