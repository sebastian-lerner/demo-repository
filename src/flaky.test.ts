import { describe, it, expect } from 'vitest'

describe('Flaky Test Suite', () => {
  it('flaky test 8', () => {
    // This test randomly fails about 50% of the time to simulate flaky behavior
    const shouldPass = Math.random() > 0.5
    expect(shouldPass).toBe(true)
  })
})