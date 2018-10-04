import toBigInt from "./toBigInt";
import getGreatestCommonDivisor from "./getGreatestCommonDivisor";

test("getGreatestCommonDivisor", () => {
  expect(getGreatestCommonDivisor(toBigInt(6), toBigInt(3))).toBe(toBigInt(3));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(1))).toBe(toBigInt(1));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(0))).toBe(toBigInt(5));
  expect(getGreatestCommonDivisor(toBigInt(25), toBigInt(5))).toBe(toBigInt(5));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(25))).toBe(toBigInt(5));
});
