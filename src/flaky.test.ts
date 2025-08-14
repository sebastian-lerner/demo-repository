import { describe, it, expect, vi } from "vitest";

describe("Flaky Test Suite", () => {
  it("flaky test 1", () => {
    expect(Math.random() > 0.5).toBe(true);
  });

  it("flaky test 2", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.8);
    expect(Math.random() > 0.7).toBe(true);
    vi.restoreAllMocks();
  });

  it("flaky test 3", () => {
    expect(Math.random() > 0.3).toBe(true);
  });

  it("flaky test 4", () => {
    expect(Math.floor(Math.random() * 3)).toBe(1);
  });

  it("flaky test 5", () => {
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true);
  });

  it("flaky test 6", () => {
    expect(Math.random() < 0.2).toBe(true);
  });

  it("flaky test 7", () => {
    expect(Date.now() % 2 === 0).toBe(true);
  });

  it("flaky test 8", () => {
    expect(Math.round(Math.random())).toBe(1);
  });

  it("flaky test 9", () => {
    expect([true, false, false][Math.floor(Math.random() * 3)]).toBe(true);
  });

  it("flaky test 10", () => {
    expect(Math.random().toString().length > 17).toBe(true);
  });

  it("flaky test 11", () => {
    expect(Math.floor(Math.random() * 5) === 2).toBe(true);
  });

  it("flaky test 12", () => {
    expect(["a", "b", "c"][Math.floor(Math.random() * 3)] === "b").toBe(true);
  });

  it("flaky test 13", () => {
    expect(Math.random() + Math.random() > 1.5).toBe(true);
  });

  it("flaky test 14", () => {
    expect((Math.random() * 100) % 10 < 2).toBe(true);
  });

  it("flaky test 15", () => {
    expect(new Date().getMilliseconds() % 3 === 0).toBe(true);
  });
});
