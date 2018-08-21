import { add, toBigInt, BigInt } from "./";

test("toBigInt", () => {
  expect(toBigInt(10)).toBe(BigInt(10));
  expect(toBigInt("10")).toBe(BigInt("10"));
  expect(toBigInt("109234859234590872039845709823475098723489057")).not.toBe(
    BigInt(10)
  );
  expect(toBigInt("0x123")).toBe(BigInt(291));
});

test("default", () => {
  expect(add(1, 2)).toEqual(3);
});
