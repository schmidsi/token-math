import BigInteger from "./BigInteger";

test("Happy path", () => {
  const fromNumber = new BigInteger(1234);
  expect(fromNumber.value).toBe("1234");

  const fromString = new BigInteger("1234");
  expect(fromString.value).toBe("1234");

  const fromBigInteger = new BigInteger(fromString);
  expect(fromBigInteger.value).toBe("1234");

  const fromHex = new BigInteger("0xa");
  expect(fromHex.value).toBe("10");
});

test("Throws on bad arguments", () => {
  expect(() => new BigInteger(123.5)).toThrow(TypeError);
  expect(() => new BigInteger("123.5")).toThrow(TypeError);
});
