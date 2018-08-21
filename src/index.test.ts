import { add, toBigInt } from "./";

test("toBigInt", () => {
  expect(toBigInt(10)).toBe(toBigInt(10));
  expect(toBigInt("10")).toBe(toBigInt("10"));
  expect(toBigInt("109234859234590872039845709823475098723489057")).not.toBe(
    toBigInt(10)
  );
  expect(toBigInt("0x123")).toBe(toBigInt(291));
});

test("default", () => {
  expect(add(1, 2)).toEqual(3);
});
