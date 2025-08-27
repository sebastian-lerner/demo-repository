import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('Flaky Test Suite', () => {
  let mockRandom: ReturnType<typeof vi.spyOn>
  let mockNow: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Mock Math.random to return predictable values
    mockRandom = vi.spyOn(Math, 'random')
    // Mock Date.now for time-based tests
    mockNow = vi.spyOn(Date, 'now')
  })

  afterEach(() => {
    mockRandom.mockRestore()
    mockNow.mockRestore()
  })

  it('flaky test 1', () => {
    mockRandom.mockReturnValue(0.6) // > 0.5
    expect(Math.random() > 0.5).toBe(true)
  })

  it('flaky test 2', () => {
    mockRandom.mockReturnValue(0.8) // > 0.7
    expect(Math.random() > 0.7).toBe(true)
  })

  it('flaky test 3', () => {
    mockRandom.mockReturnValue(0.4) // > 0.3
    expect(Math.random() > 0.3).toBe(true)
  })

  it('flaky test 4', () => {
    mockRandom.mockReturnValue(0.4) // Math.floor(0.4 * 3) = 1
    expect(Math.floor(Math.random() * 3)).toBe(1)
  })

  it('flaky test 5', () => {
    mockRandom.mockReturnValue(0.1) // Math.floor(0.1 * 2) = 0, [true, false][0] = true
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })

  it('flaky test 6', () => {
    mockRandom.mockReturnValue(0.1) // < 0.2
    expect(Math.random() < 0.2).toBe(true)
  })

  it('flaky test 7', () => {
    mockNow.mockReturnValue(1000) // Even number
    expect(Date.now() % 2 === 0).toBe(true)
  })

  it('flaky test 8', () => {
    mockRandom.mockReturnValue(0.6) // Math.round(0.6) = 1
    expect(Math.round(Math.random())).toBe(1)
  })

  it('flaky test 9', () => {
    mockRandom.mockReturnValue(0.1) // Math.floor(0.1 * 3) = 0, [true, false, false][0] = true
    expect([true, false, false][Math.floor(Math.random() * 3)]).toBe(true)
  })

  it('flaky test 10', () => {
    mockRandom.mockReturnValue(0.12345678901234567890) // This will have length > 17
    expect(Math.random().toString().length > 17).toBe(true)
  })

  it('flaky test 11', () => {
    mockRandom.mockReturnValue(0.5) // Math.floor(0.5 * 5) = 2
    expect(Math.floor(Math.random() * 5) === 2).toBe(true)
  })

  it('flaky test 12', () => {
    mockRandom.mockReturnValue(0.4) // Math.floor(0.4 * 3) = 1, ['a', 'b', 'c'][1] = 'b'
    expect(['a', 'b', 'c'][Math.floor(Math.random() * 3)] === 'b').toBe(true)
  })

  it('flaky test 13', () => {
    mockRandom.mockReturnValueOnce(0.8).mockReturnValueOnce(0.8) // 0.8 + 0.8 = 1.6 > 1.5
    expect(Math.random() + Math.random() > 1.5).toBe(true)
  })

  it('flaky test 14', () => {
    mockRandom.mockReturnValue(0.1) // 0.1 * 100 = 10, 10 % 10 = 0, 0 < 2
    expect(Math.random() * 100 % 10 < 2).toBe(true)
  })

  it('flaky test 15', () => {
    // Mock Date constructor to return predictable milliseconds
    const mockDateConstructor = vi.fn(() => ({
      getMilliseconds: () => 0 // 0 % 3 === 0
    }))
    vi.stubGlobal('Date', mockDateConstructor)
    expect(new Date().getMilliseconds() % 3 === 0).toBe(true)
    vi.unstubAllGlobals()
  })

  it('flaky test 16', () => {
    mockRandom.mockReturnValue(0.1)
    mockNow.mockReturnValue(1000) // 0.1 * 1000 = 100, 100 % 5 = 0, 0 < 2
    expect(Math.random() * Date.now() % 5 < 2).toBe(true)
  })

  it('flaky test 17', () => {
    // Mock Date constructor to return predictable seconds
    const mockDateConstructor = vi.fn(() => ({
      getSeconds: () => 5 // 5 % 4 = 1
    }))
    vi.stubGlobal('Date', mockDateConstructor)
    expect((new Date().getSeconds() % 4) === 1).toBe(true)
    vi.unstubAllGlobals()
  })

  it('flaky test 18', () => {
    mockNow.mockReturnValue(1000) // Math.abs(Math.sin(1000)) ≈ 0.826 > 0.5
    expect(Math.abs(Math.sin(Date.now())) > 0.5).toBe(true)
  })

  it('flaky test 19', () => {
    // Mock Date constructor to return predictable milliseconds
    const mockDateConstructor = vi.fn(() => ({
      getMilliseconds: () => 10
    }))
    vi.stubGlobal('Date', mockDateConstructor)
    mockRandom.mockReturnValue(0.2) // (10 + 0.2 * 100) % 7 = 30 % 7 = 2, 2 < 3
    expect((new Date().getMilliseconds() + Math.random() * 100) % 7 < 3).toBe(true)
    vi.unstubAllGlobals()
  })

  it('flaky test 20', () => {
    mockNow.mockReturnValue(1006) // 1006 % 10 = 6, 6 > 5
    expect((Date.now() % 10) > 5).toBe(true)
  })
}) 
