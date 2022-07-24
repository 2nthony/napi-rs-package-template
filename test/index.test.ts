import { test, expect } from "vitest";

import { plus100 } from "../index";

test("sync function from native code", () => {
  const fixture = 42;
  expect(plus100(fixture)).toBe(fixture + 100);
});
