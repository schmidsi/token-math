import BigInteger from "./BigInteger";
import getGreatestCommonDivisor from "./getGreatestCommonDivisor";

test("getGreatestCommonDivisor", () => {
  expect(
    getGreatestCommonDivisor(new BigInteger(6), new BigInteger(3)).toString()
  ).toBe("3");
  expect(
    getGreatestCommonDivisor(new BigInteger(5), new BigInteger(1)).toString()
  ).toBe("1");
  expect(
    getGreatestCommonDivisor(new BigInteger(5), new BigInteger(0)).toString()
  ).toBe("5");
  expect(
    getGreatestCommonDivisor(new BigInteger(25), new BigInteger(5)).toString()
  ).toBe("5");
  expect(
    getGreatestCommonDivisor(new BigInteger(5), new BigInteger(25)).toString()
  ).toBe("5");
});
