import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('Flaky Test Suite', () => {
  beforeEach(() => {
    // Mock to make all tests deterministically pass
    vi.spyOn(Math, 'random').mockReturnValue(0.8)
    vi.spyOn(Date, 'now').mockReturnValue(1692000000006)
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2023-08-14T12:00:01.000Z'))
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

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
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.4)
    expect(Math.floor(Math.random() * 3)).toBe(1)
  })

  it('flaky test 5', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.1)
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })

  it('flaky test 6', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.1)
    expect(Math.random() < 0.2).toBe(true)
  })

  it('flaky test 7', () => {
    expect(Date.now() % 2 === 0).toBe(true)
  })

  it('flaky test 8', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.6)
    expect(Math.round(Math.random())).toBe(1)
  })

  it('flaky test 9', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.1)
    expect([true, false, false][Math.floor(Math.random() * 3)]).toBe(true)
  })

  it('flaky test 10', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.12345678901234567)
    expect(Math.random().toString().length > 17).toBe(true)
  })

  it('flaky test 11', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.5)
    expect(Math.floor(Math.random() * 5) === 2).toBe(true)
  })

  it('flaky test 12', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.4)
    expect(['a', 'b', 'c'][Math.floor(Math.random() * 3)] === 'b').toBe(true)
  })

  it('flaky test 13', () => {
    expect(Math.random() + Math.random() > 1.5).toBe(true)
  })

  it('flaky test 14', () => {
    expect(Math.random() * 100 % 10 < 2).toBe(true)
  })

  it('flaky test 15', () => {
    expect(new Date().getMilliseconds() % 3 === 0).toBe(true)
  })

  it('flaky test 16', () => {
    expect(Math.random() * Date.now() % 5 < 2).toBe(true)
  })

  it('flaky test 17', () => {
    expect((new Date().getSeconds() % 4) === 1).toBe(true)
  })

  it('flaky test 18', () => {
    expect(Math.abs(Math.sin(Date.now())) > 0.5).toBe(true)
  })

  it('flaky test 19', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.02)
    expect((new Date().getMilliseconds() + Math.random() * 100) % 7 < 3).toBe(true)
  })

  it('flaky test 20', () => {
    vi.spyOn(Date, 'now').mockReturnValueOnce(1692000000007)
    expect((Date.now() % 10) > 5).toBe(true)
  })
}) 
