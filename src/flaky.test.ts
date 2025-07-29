import { describe, it, expect } from "vitest";

describe("Flaky Test Suite", () => {
  it("flaky test 1", () => {
    expect(Math.random() > 0.5).toBe(true);
  });

  it("flaky test 2", () => {
    expect(Math.random() > 0.7).toBe(true);
  });

  it("flaky test 3", () => {
    expect(Math.random() > 0.3).toBe(true);
  });

  it("flaky test 4", () => {
    expect(Math.floor(Math.random() * 3)).toBe(1);
  });

  it("flaky test 5", () => {
    expect([true, false][0]).toBe(true);
  });
});
