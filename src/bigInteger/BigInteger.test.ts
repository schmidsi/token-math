import BigInteger from "./BigInteger";

test("Happy path", () => {
  const fromNumber = new BigInteger(1234);
  expect(fromNumber.toString()).toBe("1234");

  const fromString = new BigInteger("1234");
  expect(fromString.toString()).toBe("1234");

  const fromBigInteger = new BigInteger(fromString);
  expect(fromBigInteger.toString()).toBe("1234");

  const fromHex = new BigInteger("0xa");
  expect(fromHex.toString()).toBe("10");

  expect(() => new BigInteger("0.1")).toThrow();
  expect(() => new BigInteger("0.5")).toThrow();
  expect(() => new BigInteger(0.5)).toThrow();
  expect(() => new BigInteger("1.7234")).toThrow();
  expect(() => new BigInteger("0x123.123")).toThrow();

  // Works but
  // expect(() => new BigInteger(10 ** 100)).not.toThrow();
  // expect(`${new BigInteger(10 ** 100)}`).toEqual(
  //   "10000000000000002101697803323328251387822715387464188032188166609887360023982790799717755191065313280"
  // );
});
